// ============================================================================
// BUILD-TIME STATIC PRE-RENDERER (Tech Fixes #2, #3, #4, #5, #6)
// Runs automatically during `npm run build` right after `vite build` & `vite build --ssr`.
// Generates:
//   - Static HTML with full rendered body text for all 13 public routes
//   - Unique <title> (< 60 chars on subpages) & <meta name="description"> (< 160 chars)
//   - Absolute 1200x630 og:image & twitter:image share tags
//   - Organization JSON-LD on `/` and FAQPage JSON-LD on `/faq`
//   - dist/spa-fallback.html, dist/sitemap.xml, and dist/robots.txt
// ============================================================================

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import {
    PRERENDER_ROUTES,
    getMetaForPath,
    getJsonLdForPath
} from '../src/seo/siteMeta.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');
const ssrDir = path.join(rootDir, 'dist-ssr');

function resolveBuildSiteUrl() {
    const raw =
        process.env.VITE_SITE_URL ||
        (process.env.VERCEL_PROJECT_PRODUCTION_URL
            ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
            : '') ||
        'https://giropie-frontend.vercel.app';
    return String(raw).replace(/\/+$/, '');
}

function escapeAttr(str) {
    return String(str || '')
        .replace(/&/g, '&amp;')
        .replace(/"/g, '&quot;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
}

function escapeHtmlText(str) {
    return String(str || '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
}

function injectHeadMetadata(templateHtml, { title, description, canonicalUrl, ogImageUrl, ogType, jsonLd }) {
    let html = templateHtml;

    html = html.replace(
        /<title>[\s\S]*?<\/title>/i,
        `<title>${escapeHtmlText(title)}</title>`
    );

    html = html.replace(
        /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/i,
        `<meta name="description" content="${escapeAttr(description)}" />`
    );

    html = html.replace(
        /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/i,
        `<link rel="canonical" href="${escapeAttr(canonicalUrl)}" />`
    );

    html = html.replace(
        /<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/i,
        `<meta property="og:title" content="${escapeAttr(title)}" />`
    );
    html = html.replace(
        /<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/i,
        `<meta property="og:description" content="${escapeAttr(description)}" />`
    );
    html = html.replace(
        /<meta\s+property="og:type"\s+content="[^"]*"\s*\/?>/i,
        `<meta property="og:type" content="${escapeAttr(ogType || 'website')}" />`
    );
    html = html.replace(
        /<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/i,
        `<meta property="og:url" content="${escapeAttr(canonicalUrl)}" />`
    );
    html = html.replace(
        /<meta\s+property="og:image"\s+content="[^"]*"\s*\/?>/i,
        `<meta property="og:image" content="${escapeAttr(ogImageUrl)}" />`
    );

    html = html.replace(
        /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/?>/i,
        `<meta name="twitter:title" content="${escapeAttr(title)}" />`
    );
    html = html.replace(
        /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/?>/i,
        `<meta name="twitter:description" content="${escapeAttr(description)}" />`
    );
    html = html.replace(
        /<meta\s+name="twitter:image"\s+content="[^"]*"\s*\/?>/i,
        `<meta name="twitter:image" content="${escapeAttr(ogImageUrl)}" />`
    );

    const jsonLdTag = jsonLd
        ? `<script id="giropie-jsonld" type="application/ld+json">${JSON.stringify(jsonLd)}</script>`
        : '';

    html = html.replace('<!--PRERENDER_JSONLD-->', jsonLdTag);
    return html;
}

async function runPrerender() {
    const siteUrl = resolveBuildSiteUrl();
    const ogImageUrl = `${siteUrl}/og-share.png`;
    const templatePath = path.join(distDir, 'index.html');

    if (!fs.existsSync(templatePath)) {
        throw new Error(`Client build index.html not found at ${templatePath}`);
    }

    const templateHtml = fs.readFileSync(templatePath, 'utf-8');

    // Save clean SPA fallback shell (empty #root) for unmatched client-side paths
    const fallbackMeta = getMetaForPath('/');
    const fallbackHtml = injectHeadMetadata(templateHtml, {
        title: fallbackMeta.title,
        description: fallbackMeta.description,
        canonicalUrl: `${siteUrl}/`,
        ogImageUrl,
        ogType: 'website',
        jsonLd: null
    });
    fs.writeFileSync(path.join(distDir, 'spa-fallback.html'), fallbackHtml, 'utf-8');

    // Import compiled SSR entry bundle
    const ssrEntryFile = fs
        .readdirSync(ssrDir)
        .find((f) => f.startsWith('entry-server.') && (f.endsWith('.js') || f.endsWith('.mjs')));

    if (!ssrEntryFile) {
        throw new Error(`Compiled SSR entry bundle not found in ${ssrDir}`);
    }

    const { render } = await import(pathToFileURL(path.join(ssrDir, ssrEntryFile)).href);

    const seenTitles = new Set();
    const seenDescriptions = new Set();

    for (const route of PRERENDER_ROUTES) {
        const meta = getMetaForPath(route);

        // Enforce Technical Fix #3 & #4 constraints at build time
        if (route !== '/' && meta.title.length >= 60) {
            throw new Error(
                `[SEO Check Failed] Title for ${route} is ${meta.title.length} chars (must be < 60): "${meta.title}"`
            );
        }
        if (meta.description.length >= 160) {
            throw new Error(
                `[SEO Check Failed] Description for ${route} is ${meta.description.length} chars (must be < 160): "${meta.description}"`
            );
        }
        if (seenTitles.has(meta.title)) {
            throw new Error(`[SEO Check Failed] Duplicate page title on ${route}: "${meta.title}"`);
        }
        if (seenDescriptions.has(meta.description)) {
            throw new Error(`[SEO Check Failed] Duplicate meta description on ${route}`);
        }
        seenTitles.add(meta.title);
        seenDescriptions.add(meta.description);

        const appHtml = render(route);
        const canonicalUrl = `${siteUrl}${route === '/' ? '/' : route}`;
        const jsonLd = getJsonLdForPath(route, siteUrl);

        let pageHtml = injectHeadMetadata(templateHtml, {
            title: meta.title,
            description: meta.description,
            canonicalUrl,
            ogImageUrl,
            ogType: meta.ogType || 'website',
            jsonLd
        });

        pageHtml = pageHtml.replace(
            '<div id="root"></div>',
            `<div id="root" data-prerendered-route="${escapeAttr(route)}">${appHtml}</div>`
        );

        const outPath =
            route === '/'
                ? path.join(distDir, 'index.html')
                : path.join(distDir, route.replace(/^\/+/, ''), 'index.html');

        fs.mkdirSync(path.dirname(outPath), { recursive: true });
        fs.writeFileSync(outPath, pageHtml, 'utf-8');
        console.log(`✓ Pre-rendered ${route} -> ${path.relative(rootDir, outPath)}`);
    }

    // Generate sitemap.xml & robots.txt
    const todayIso = new Date().toISOString().split('T')[0];
    const sitemapEntries = PRERENDER_ROUTES.map((route) => {
        const loc = `${siteUrl}${route === '/' ? '/' : route}`;
        const priority = route === '/' ? '1.0' : route.startsWith('/blog/') ? '0.7' : '0.8';
        return `  <url>\n    <loc>${escapeHtmlText(loc)}</loc>\n    <lastmod>${todayIso}</lastmod>\n    <priority>${priority}</priority>\n  </url>`;
    }).join('\n');

    const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapEntries}\n</urlset>\n`;
    fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemapXml, 'utf-8');

    const robotsTxt = `User-agent: *\nAllow: /\nSitemap: ${siteUrl}/sitemap.xml\n`;
    fs.writeFileSync(path.join(distDir, 'robots.txt'), robotsTxt, 'utf-8');

    // Clean up temporary SSR build output directory
    fs.rmSync(ssrDir, { recursive: true, force: true });
    console.log(`✓ Generated sitemap.xml & robots.txt for ${siteUrl} and cleaned up dist-ssr`);
}

runPrerender().catch((err) => {
    console.error('Pre-render failed:', err);
    process.exit(1);
});

