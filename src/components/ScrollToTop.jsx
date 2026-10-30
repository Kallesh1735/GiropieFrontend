import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getMetaForPath, getJsonLdForPath, resolveSiteUrl } from '../seo/siteMeta';
import { trackPageView } from '../utils/analytics';

function upsertMetaTag(attrName, attrValue, content) {
    let el = document.head.querySelector(`meta[${attrName}="${attrValue}"]`);
    if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attrName, attrValue);
        document.head.appendChild(el);
    }
    el.setAttribute('content', content);
}

function upsertCanonicalLink(href) {
    let link = document.head.querySelector('link[rel="canonical"]');
    if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
    }
    link.setAttribute('href', href);
}

function syncJsonLd(jsonLdObj) {
    const existing = document.getElementById('giropie-jsonld');
    if (!jsonLdObj) {
        if (existing) existing.remove();
        return;
    }
    const script = existing || document.createElement('script');
    script.id = 'giropie-jsonld';
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(jsonLdObj);
    if (!existing) {
        document.head.appendChild(script);
    }
}

/**
 * ScrollToTop & Client SEO Synchronizer
 * Resets scroll position on route navigation, syncs unique <title>,
 * <meta name="description">, OpenGraph/Twitter tags, and JSON-LD schema,
 * and records GA4 page_view events.
 */
const ScrollToTop = () => {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }

        const siteUrl = resolveSiteUrl();
        const meta = getMetaForPath(pathname, hash);
        const canonicalUrl = `${siteUrl}${meta.canonicalPath === '/' ? '/' : meta.canonicalPath}`;
        const ogImageUrl = `${siteUrl}/og-share.png`;

        document.title = meta.title;
        upsertMetaTag('name', 'description', meta.description);
        upsertMetaTag('property', 'og:title', meta.title);
        upsertMetaTag('property', 'og:description', meta.description);
        upsertMetaTag('property', 'og:type', meta.ogType || 'website');
        upsertMetaTag('property', 'og:url', canonicalUrl);
        upsertMetaTag('property', 'og:image', ogImageUrl);
        upsertMetaTag('name', 'twitter:card', 'summary_large_image');
        upsertMetaTag('name', 'twitter:title', meta.title);
        upsertMetaTag('name', 'twitter:description', meta.description);
        upsertMetaTag('name', 'twitter:image', ogImageUrl);
        upsertCanonicalLink(canonicalUrl);

        syncJsonLd(getJsonLdForPath(pathname, siteUrl));
        trackPageView(`${pathname}${hash || ''}`, meta.title);

        if (hash) {
            const timer = setTimeout(() => {
                const targetElement = document.querySelector(hash);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
            return () => clearTimeout(timer);
        }

        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'instant'
        });
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
    }, [pathname, hash]);

    return null;
};

export default ScrollToTop;
