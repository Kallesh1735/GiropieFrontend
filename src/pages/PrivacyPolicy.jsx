import React from 'react';
import { Link } from 'react-router-dom';
import styles from './LegalPage.module.css';
import logo from '../assets/giropie-logo.png';
import { FaShieldHalved, FaHouse } from 'react-icons/fa6';

const PrivacyPolicy = () => {
    return (
        <div className={styles.legalPage}>
            {/* Ambient Background Glows */}
            <div className={styles.bgGlow1}></div>
            <div className={styles.bgGlow2}></div>

            <div className={styles.container}>
                {/* Top Header Row with Centered GIROPie Logo & Home Button matching design */}
                <div className={styles.topHeaderBar}>
                    <div className={styles.logoWrapper}>
                        <Link to="/">
                            <img src={logo} alt="GIROPie Logo" className={styles.topLogo} />
                        </Link>
                    </div>
                    <Link to="/" className={styles.homeBtn} title="Back to Home" aria-label="Back to Home">
                        <FaHouse />
                    </Link>
                </div>

                <h1 className={styles.title}>PEPPERTREE.AI PVT. LTD. – PRIVACY POLICY</h1>
                <p className={styles.subtitle}>
                    Last Updated: 19 May 2026
                </p>

                {/* 1. Introduction */}
                <div className={styles.contentSection}>
                    <h2 className={styles.sectionHeading}>
                        <span className={styles.headingNumber}>1.</span> Introduction
                    </h2>
                    <p className={styles.paragraph}>
                        This Privacy Policy (“Policy”) describes how Peppertree.AI Pvt. Ltd. (“Peppertree.AI”, “GIROPie”, “Company”, “we”, “our”, or “us”) collects, processes, stores, uses, shares, secures, and protects information when you access or use the GIROPie platform (“Platform” or “Services”).
                    </p>
                    <p className={styles.paragraph}>
                        This Policy applies to all GIROPie offerings including websites, applications, APIs, dashboards, integrations, workflows, reconciliation systems, financing enablement modules, payment orchestration systems, and related services.
                    </p>
                    <p className={styles.paragraph}>
                        This Policy shall be read together with:
                    </p>
                    <ul className={styles.list}>
                        <li className={styles.listItem}>Terms &amp; Conditions</li>
                        <li className={styles.listItem}>Service Agreements</li>
                        <li className={styles.listItem}>Partner terms and policies, where applicable</li>
                    </ul>
                    <p className={styles.paragraph}>
                        In case of inconsistency, this Policy shall govern data-processing practices.
                    </p>
                    <p className={styles.paragraph}>
                        By accessing or using the Platform, you acknowledge and consent to the practices described herein in accordance with:
                    </p>
                    <ul className={styles.list}>
                        <li className={styles.listItem}>Information Technology Act, 2000</li>
                        <li className={styles.listItem}>Digital Personal Data Protection Act, 2023 (“DPDP Act”)</li>
                        <li className={styles.listItem}>RBI guidelines and applicable financial-sector regulations</li>
                        <li className={styles.listItem}>Applicable data protection and cybersecurity laws</li>
                    </ul>
                </div>

                {/* 2. Nature of GIROPie Services */}
                <div className={styles.contentSection}>
                    <h2 className={styles.sectionHeading}>
                        <span className={styles.headingNumber}>2.</span> Nature of GIROPie Services
                    </h2>
                    <p className={styles.paragraph}>
                        GIROPie operates as a technology-driven invoice-to-cash orchestration platform facilitating:
                    </p>
                    <ul className={styles.list}>
                        <li className={styles.listItem}>Accounts receivable and payable workflows</li>
                        <li className={styles.listItem}>Invoice lifecycle management</li>
                        <li className={styles.listItem}>Payment enablement and reconciliation</li>
                        <li className={styles.listItem}>Mandate-based payment workflows</li>
                        <li className={styles.listItem}>Financing and credit enablement through regulated partners</li>
                        <li className={styles.listItem}>Data exchange between businesses and financial institutions</li>
                    </ul>
                    <div className={styles.calloutBox}>
                        <p className={styles.calloutText}>
                            <strong>GIROPie:</strong><br />
                            &bull; Does not operate as a bank, NBFC, or payment system operator<br />
                            &bull; Does not independently underwrite financial products<br />
                            &bull; Does not custody or own customer funds<br />
                            &bull; Does not directly settle payments
                        </p>
                    </div>
                    <p className={styles.paragraph}>
                        Payment processing and regulated financial services are provided through regulated partners including banks, payment aggregators, TSP/ASP providers, NBFCs, and financial institutions. GIROPie acts solely as a technology orchestration and workflow platform.
                    </p>
                </div>

                {/* 3. Definitions */}
                <div className={styles.contentSection}>
                    <h2 className={styles.sectionHeading}>
                        <span className={styles.headingNumber}>3.</span> Definitions
                    </h2>
                    <ul className={styles.list}>
                        <li className={styles.listItem}>
                            <strong>Platform:</strong> Means GIROPie websites, applications, APIs, dashboards, workflows, integrations, and related systems.
                        </li>
                        <li className={styles.listItem}>
                            <strong>User / You:</strong> Means any individual or entity using the Platform.
                        </li>
                        <li className={styles.listItem}>
                            <strong>Personal Data:</strong> Means information relating to an identifiable individual.
                        </li>
                        <li className={styles.listItem}>
                            <strong>Business Data:</strong> Means invoice, transaction, reconciliation, operational, financial, and counterparty data processed through the Platform.
                        </li>
                        <li className={styles.listItem}>
                            <strong>Transaction Data:</strong> Means payment, mandate, settlement, reconciliation, and transaction-related information processed through the Platform.
                        </li>
                        <li className={styles.listItem}>
                            <strong>Partners:</strong> Means banks, payment aggregators, sponsor banks, acquiring banks, TSP/ASP providers, NBFCs, KYC verification providers, fraud-monitoring systems, and regulated financial entities integrated with GIROPie.
                        </li>
                        <li className={styles.listItem}>
                            <strong>Applicable Laws:</strong> Means all applicable laws, regulations, RBI directions, NPCI guidelines, and regulatory requirements in force from time to time.
                        </li>
                    </ul>
                </div>

                {/* 4. Principles of Data Processing */}
                <div className={styles.contentSection}>
                    <h2 className={styles.sectionHeading}>
                        <span className={styles.headingNumber}>4.</span> Principles of Data Processing
                    </h2>
                    <p className={styles.paragraph}>
                        GIROPie follows a regulated fintech orchestration data-governance approach based on:
                    </p>
                    <ul className={styles.list}>
                        <li className={styles.listItem}>Data minimization</li>
                        <li className={styles.listItem}>Purpose limitation</li>
                        <li className={styles.listItem}>Security-by-design</li>
                        <li className={styles.listItem}>Need-to-know access</li>
                        <li className={styles.listItem}>Lawful processing</li>
                        <li className={styles.listItem}>Auditability and traceability</li>
                        <li className={styles.listItem}>Regulatory compliance</li>
                    </ul>
                    <div className={styles.calloutBox}>
                        <p className={styles.calloutText}>
                            <strong>GIROPie does not sell personal or business data.</strong> Data is processed strictly for service delivery, regulatory compliance, fraud prevention, payment enablement, risk management, and operational security.
                        </p>
                    </div>
                </div>

                {/* 5. Information We Collect */}
                <div className={styles.contentSection}>
                    <h2 className={styles.sectionHeading}>
                        <span className={styles.headingNumber}>5.</span> Information We Collect
                    </h2>

                    <p className={styles.paragraph}><strong>User &amp; Business Information:</strong></p>
                    <ul className={styles.list}>
                        <li className={styles.listItem}>Name, designation, and contact details</li>
                        <li className={styles.listItem}>Business registration details</li>
                        <li className={styles.listItem}>GST information</li>
                        <li className={styles.listItem}>Authorized signatory information</li>
                        <li className={styles.listItem}>Vendor, buyer, and counterparty details</li>
                    </ul>

                    <p className={styles.paragraph}><strong>KYC &amp; Compliance Information:</strong></p>
                    <ul className={styles.list}>
                        <li className={styles.listItem}>PAN, Aadhaar, or equivalent identifiers (where applicable and consented)</li>
                        <li className={styles.listItem}>Business KYC documents</li>
                        <li className={styles.listItem}>Board Resolution</li>
                        <li className={styles.listItem}>CKYC/CKYCR related verification data</li>
                        <li className={styles.listItem}>Bank account information</li>
                        <li className={styles.listItem}>Compliance declarations and onboarding information</li>
                    </ul>

                    <p className={styles.paragraph}><strong>Invoice &amp; Transaction Data:</strong></p>
                    <ul className={styles.list}>
                        <li className={styles.listItem}>Invoices created, uploaded, or processed</li>
                        <li className={styles.listItem}>Payment instructions and mandate information</li>
                        <li className={styles.listItem}>Settlement and reconciliation details</li>
                        <li className={styles.listItem}>Collection workflows and transaction logs</li>
                        <li className={styles.listItem}>Buyer-seller interaction records</li>
                    </ul>

                    <p className={styles.paragraph}><strong>Technical &amp; Usage Information:</strong></p>
                    <ul className={styles.list}>
                        <li className={styles.listItem}>IP address and device information</li>
                        <li className={styles.listItem}>Browser and operating system information</li>
                        <li className={styles.listItem}>Log files and activity records</li>
                        <li className={styles.listItem}>Cookies and analytics data</li>
                        <li className={styles.listItem}>Session and usage patterns</li>
                    </ul>

                    <p className={styles.paragraph}><strong>Risk, Fraud &amp; Security Data:</strong></p>
                    <ul className={styles.list}>
                        <li className={styles.listItem}>Fraud-monitoring information</li>
                        <li className={styles.listItem}>Transaction risk indicators</li>
                        <li className={styles.listItem}>Authentication logs</li>
                        <li className={styles.listItem}>Security alerts and audit trails</li>
                        <li className={styles.listItem}>Suspicious activity analysis data</li>
                    </ul>
                </div>

                {/* 6. Purpose of Data Processing */}
                <div className={styles.contentSection}>
                    <h2 className={styles.sectionHeading}>
                        <span className={styles.headingNumber}>6.</span> Purpose of Data Processing
                    </h2>
                    <p className={styles.paragraph}>
                        GIROPie processes data for the following lawful purposes:
                    </p>
                    <ul className={styles.list}>
                        <li className={styles.listItem}>Providing invoice-to-cash workflows</li>
                        <li className={styles.listItem}>Enabling payment processing and reconciliation</li>
                        <li className={styles.listItem}>Facilitating collections and mandate workflows</li>
                        <li className={styles.listItem}>KYC, AML, fraud prevention, and compliance checks</li>
                        <li className={styles.listItem}>Financing enablement and credit facilitation through partners</li>
                        <li className={styles.listItem}>Transaction monitoring and risk analysis</li>
                        <li className={styles.listItem}>Cybersecurity monitoring and threat detection</li>
                        <li className={styles.listItem}>Maintaining audit trails and operational logs</li>
                        <li className={styles.listItem}>Regulatory reporting and compliance obligations</li>
                        <li className={styles.listItem}>Platform analytics and service improvements</li>
                        <li className={styles.listItem}>Dispute resolution and legal enforcement</li>
                    </ul>
                    <p className={styles.paragraph}>
                        Certain platform processes may involve automated transaction validation, fraud detection systems, risk scoring mechanisms, reconciliation engines, and compliance screening workflows.
                    </p>
                </div>

                {/* 7. Lawful Basis & Consent */}
                <div className={styles.contentSection}>
                    <h2 className={styles.sectionHeading}>
                        <span className={styles.headingNumber}>7.</span> Lawful Basis &amp; Consent
                    </h2>
                    <p className={styles.paragraph}>
                        GIROPie processes data based on: User consent, legitimate use for service delivery, compliance with legal and regulatory obligations, and fraud prevention and platform security requirements.
                    </p>
                    <p className={styles.paragraph}>
                        By using the Platform, you:
                    </p>
                    <ul className={styles.list}>
                        <li className={styles.listItem}>Consent to data processing necessary for service delivery</li>
                        <li className={styles.listItem}>Authorize GIROPie to share data with regulated partners</li>
                        <li className={styles.listItem}>Acknowledge audit, compliance, and retention obligations</li>
                        <li className={styles.listItem}>Consent to verification and validation processes required under Applicable Laws</li>
                    </ul>
                    <p className={styles.paragraph}>
                        Where required, separate consent may be obtained for financing and credit services, mandate registration, sensitive personal data processing, and third-party integrations.
                    </p>
                </div>

                {/* 8. KYC Verification & Regulatory Validation */}
                <div className={styles.contentSection}>
                    <h2 className={styles.sectionHeading}>
                        <span className={styles.headingNumber}>8.</span> KYC Verification &amp; Regulatory Validation
                    </h2>
                    <p className={styles.paragraph}>
                        Users authorize GIROPie and its regulated partners to verify KYC information, conduct onboarding validation, perform fraud and risk checks, and access authorized KYC repositories including CKYCR systems where legally permitted.
                    </p>
                    <p className={styles.paragraph}>
                        GIROPie may request additional documents or information to comply with RBI guidelines, partner requirements, AML obligations, and fraud prevention standards.
                    </p>
                </div>

                {/* 9. Third-Party Processing & Regulated Partner Ecosystem */}
                <div className={styles.contentSection}>
                    <h2 className={styles.sectionHeading}>
                        <span className={styles.headingNumber}>9.</span> Third-Party Processing &amp; Regulated Partner Ecosystem
                    </h2>
                    <p className={styles.paragraph}>
                        GIROPie operates within a regulated fintech partner ecosystem. Data may be processed, shared, validated, or accessed on a need-to-know basis with:
                    </p>
                    <ul className={styles.list}>
                        <li className={styles.listItem}>Payment Aggregators</li>
                        <li className={styles.listItem}>Sponsor Banks &amp; Acquiring Banks</li>
                        <li className={styles.listItem}>NPCI-connected systems</li>
                        <li className={styles.listItem}>Card networks and payment networks</li>
                        <li className={styles.listItem}>TSP/ASP providers</li>
                        <li className={styles.listItem}>NBFCs and financing institutions</li>
                        <li className={styles.listItem}>KYC/AML verification providers</li>
                        <li className={styles.listItem}>Fraud-monitoring and cybersecurity systems</li>
                        <li className={styles.listItem}>Regulatory authorities and auditors</li>
                    </ul>
                    <p className={styles.paragraph}>
                        Such sharing shall occur strictly for lawful business purposes, transaction processing, compliance obligations, fraud prevention and security, and settlement and reconciliation workflows. All partners are expected to maintain confidentiality, security, and regulatory compliance standards.
                    </p>
                </div>

                {/* 10. Transaction Monitoring & Fraud Prevention */}
                <div className={styles.contentSection}>
                    <h2 className={styles.sectionHeading}>
                        <span className={styles.headingNumber}>10.</span> Transaction Monitoring &amp; Fraud Prevention
                    </h2>
                    <p className={styles.paragraph}>
                        GIROPie and its partners may monitor transactions, analyze payment behavior, detect suspicious activity, conduct fraud screening and risk assessment, and temporarily restrict or review transactions where necessary. This may include automated or manual review mechanisms.
                    </p>
                    <p className={styles.paragraph}>
                        GIROPie reserves the right to cooperate with banks, payment partners, regulatory authorities, and law-enforcement agencies for fraud investigation, cybersecurity incidents, or regulatory compliance.
                    </p>
                </div>

                {/* 11. Data Storage & Localization */}
                <div className={styles.contentSection}>
                    <h2 className={styles.sectionHeading}>
                        <span className={styles.headingNumber}>11.</span> Data Storage &amp; Localization
                    </h2>
                    <p className={styles.paragraph}>
                        GIROPie endeavors to ensure that regulated financial and payment-related data processed through the Platform is stored and processed within infrastructure located in India, in accordance with applicable laws, RBI requirements, and partner obligations. Cross-border processing, where required for lawful service delivery, shall be subject to applicable safeguards and legal requirements.
                    </p>
                </div>

                {/* 12. Data Retention */}
                <div className={styles.contentSection}>
                    <h2 className={styles.sectionHeading}>
                        <span className={styles.headingNumber}>12.</span> Data Retention
                    </h2>
                    <p className={styles.paragraph}>
                        Data is retained only for service delivery, legal and regulatory compliance, audit and reconciliation requirements, fraud prevention and dispute resolution, and partner and banking obligations. Certain transaction, audit, security, and compliance records may be retained for extended durations as required under RBI guidelines, AML obligations, financial regulations, contractual partner requirements, and applicable laws. Even after account closure, certain records may continue to be retained where legally required.
                    </p>
                </div>

                {/* 13. User Responsibilities */}
                <div className={styles.contentSection}>
                    <h2 className={styles.sectionHeading}>
                        <span className={styles.headingNumber}>13.</span> User Responsibilities
                    </h2>
                    <p className={styles.paragraph}>
                        Users are responsible for:
                    </p>
                    <ul className={styles.list}>
                        <li className={styles.listItem}>Providing accurate information</li>
                        <li className={styles.listItem}>Obtaining necessary consents from customers, employees, vendors, or counterparties before sharing data through the Platform</li>
                        <li className={styles.listItem}>Maintaining confidentiality of login credentials</li>
                        <li className={styles.listItem}>Promptly reporting unauthorized access or suspicious activity</li>
                    </ul>
                    <p className={styles.paragraph}>
                        Users agree to cooperate with GIROPie, banks, payment partners, regulators, and law-enforcement authorities in relation to fraud investigations, chargebacks and disputes, security incidents, and compliance reviews.
                    </p>
                </div>

                {/* 14. Data Security */}
                <div className={styles.contentSection}>
                    <h2 className={styles.sectionHeading}>
                        <span className={styles.headingNumber}>14.</span> Data Security
                    </h2>
                    <p className={styles.paragraph}>
                        GIROPie implements industry-standard security measures, including:
                    </p>
                    <ul className={styles.list}>
                        <li className={styles.listItem}>Encryption in transit and at rest</li>
                        <li className={styles.listItem}>Role-based access controls</li>
                        <li className={styles.listItem}>Authentication and authorization controls</li>
                        <li className={styles.listItem}>Monitoring and audit mechanisms</li>
                        <li className={styles.listItem}>Security logging and risk detection systems</li>
                        <li className={styles.listItem}>Incident response procedures</li>
                    </ul>
                    <p className={styles.paragraph}>
                        GIROPie regularly reviews and updates security controls in accordance with applicable standards and operational requirements.
                    </p>
                </div>

                {/* 15. Payment Card & Sensitive Data Handling */}
                <div className={styles.contentSection}>
                    <h2 className={styles.sectionHeading}>
                        <span className={styles.headingNumber}>15.</span> Payment Card &amp; Sensitive Data Handling
                    </h2>
                    <p className={styles.paragraph}>
                        GIROPie does not intentionally store full payment card information unless specifically permitted under applicable law and compliant with applicable security standards. GIROPie expects all integrated users and partners to comply with PCI-DSS requirements, RBI guidelines, and applicable payment-security standards.
                    </p>
                </div>

                {/* 16. Security Incidents & Breach Notification */}
                <div className={styles.contentSection}>
                    <h2 className={styles.sectionHeading}>
                        <span className={styles.headingNumber}>16.</span> Security Incidents &amp; Breach Notification
                    </h2>
                    <p className={styles.paragraph}>
                        In the event of any actual or suspected unauthorized access, cybersecurity incident, data breach, fraudulent activity, or security compromise, GIROPie may investigate and mitigate the incident, notify affected users, inform banks, payment aggregators, regulators, or law-enforcement authorities where required, and temporarily suspend access or processing activities where necessary. Users shall promptly report any suspected security incident involving the Platform.
                    </p>
                </div>

                {/* 17. Audit, Inspection & Regulatory Disclosure */}
                <div className={styles.contentSection}>
                    <h2 className={styles.sectionHeading}>
                        <span className={styles.headingNumber}>17.</span> Audit, Inspection &amp; Regulatory Disclosure
                    </h2>
                    <p className={styles.paragraph}>
                        Certain operational, transactional, reconciliation, and compliance records may be reviewed during audits, inspected by partners or regulators, or disclosed during investigations or compliance reviews. GIROPie may cooperate with regulatory authorities, payment networks, sponsor banks, financial institutions, and cybersecurity auditors where required under Applicable Laws or contractual obligations.
                    </p>
                </div>

                {/* 18. Cookies & Analytics */}
                <div className={styles.contentSection}>
                    <h2 className={styles.sectionHeading}>
                        <span className={styles.headingNumber}>18.</span> Cookies &amp; Analytics
                    </h2>
                    <p className={styles.paragraph}>
                        GIROPie uses cookies and analytics technologies for essential platform functionality, security and authentication, performance monitoring, analytics and usage optimization, and limited personalization. Users may disable cookies through browser settings, although certain functionalities may be affected.
                    </p>
                </div>

                {/* 19. Third-Party Platforms */}
                <div className={styles.contentSection}>
                    <h2 className={styles.sectionHeading}>
                        <span className={styles.headingNumber}>19.</span> Third-Party Platforms
                    </h2>
                    <p className={styles.paragraph}>
                        Interactions with third-party platforms, partner portals, or external integrations are governed by the respective third-party policies and terms. Certain payment or financing services may additionally be governed by the privacy and compliance policies of the respective regulated partner facilitating such services. GIROPie is not responsible for third-party data practices outside its operational control.
                    </p>
                </div>

                {/* 20. Prohibited Activities */}
                <div className={styles.contentSection}>
                    <h2 className={styles.sectionHeading}>
                        <span className={styles.headingNumber}>20.</span> Prohibited Activities
                    </h2>
                    <p className={styles.paragraph}>
                        Users shall not upload unlawful or fraudulent content, misuse payment workflows, attempt unauthorized system access, circumvent security measures, or use the Platform for prohibited activities under Applicable Laws. GIROPie may suspend or restrict access in case of suspected violations.
                    </p>
                </div>

                {/* 21. Limitation of Liability */}
                <div className={styles.contentSection}>
                    <h2 className={styles.sectionHeading}>
                        <span className={styles.headingNumber}>21.</span> Limitation of Liability
                    </h2>
                    <p className={styles.paragraph}>
                        GIROPie acts solely as a technology orchestration platform. GIROPie shall not be liable for actions or omissions of banks or payment partners, financing or credit decisions, delays caused by external financial systems, regulatory actions beyond GIROPie’s control, or indirect or consequential losses. GIROPie does not hold customer funds on its own balance sheet.
                    </p>
                </div>

                {/* 22. Governing Law & Dispute Resolution */}
                <div className={styles.contentSection}>
                    <h2 className={styles.sectionHeading}>
                        <span className={styles.headingNumber}>22.</span> Governing Law &amp; Dispute Resolution
                    </h2>
                    <p className={styles.paragraph}>
                        This Policy is governed by the laws of India. Disputes shall be resolved through arbitration in Bengaluru, Karnataka, under applicable Indian laws.
                    </p>
                </div>

                {/* 23. Grievance Redressal */}
                <div className={styles.contentSection}>
                    <h2 className={styles.sectionHeading}>
                        <span className={styles.headingNumber}>23.</span> Grievance Redressal
                    </h2>
                    <div className={styles.contactBox}>
                        <p><strong>Grievance Officer:</strong> Krishna Kumar B S</p>
                        <p><strong>Peppertree.AI Pvt. Ltd.</strong></p>
                        <p>No. 1139, Maruthi Complex, 3rd Floor,</p>
                        <p>BEML Layout, 3rd Stage, Raja Rajeshwari Nagar,</p>
                        <p>Bengaluru &ndash; 560098, Karnataka, India</p>
                        <p>Email: <a href="mailto:legalquery@peppertree.ai" style={{ color: '#1C4E80', fontWeight: '700' }}>legalquery@peppertree.ai</a></p>
                    </div>
                </div>

                {/* 24. Legal Positioning */}
                <div className={styles.contentSection}>
                    <h2 className={styles.sectionHeading}>
                        <span className={styles.headingNumber}>24.</span> Legal Positioning
                    </h2>
                    <div className={styles.calloutBox}>
                        <p className={styles.calloutText}>
                            GIROPie is a technology platform facilitating invoice, payment, reconciliation, financing enablement, and operational data workflows through regulated partner ecosystems. GIROPie does not independently operate regulated payment systems or custody customer funds.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
