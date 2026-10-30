import { useState, useRef } from 'react';
import styles from './Careers.module.css';
import careersBanner from '../assets/careers-banner.jpg';
import {
    FaArrowRight,
    FaBriefcase,
    FaLocationDot,
    FaChevronDown,
    FaChevronUp,
    FaCloudArrowUp,
    FaCheck,
    FaRotate,
    FaRocket
} from 'react-icons/fa6';

// Multi-color star badge icon matching the screenshot
const JobBadge = () => (
    <svg className={styles.jobBadgeIcon} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="15" fill="url(#badgeGrad)" stroke="#e2e8f0" strokeWidth="1" />
        <path
            d="M16 6L18.8 12.8L26 13.5L20.5 18.2L22.2 25.2L16 21.5L9.8 25.2L11.5 18.2L6 13.5L13.2 12.8L16 6Z"
            fill="#ffffff"
            stroke="#3a8dd5"
            strokeWidth="1"
            strokeLinejoin="round"
        />
        <defs>
            <linearGradient id="badgeGrad" x1="2" y1="2" x2="30" y2="30" gradientUnits="userSpaceOnUse">
                <stop stopColor="#60a5fa" />
                <stop offset="0.35" stopColor="#38bdf8" />
                <stop offset="0.7" stopColor="#fbbf24" />
                <stop offset="1" stopColor="#f472b6" />
            </linearGradient>
        </defs>
    </svg>
);

const jobsData = [
    {
        id: 'lead-gen',
        department: 'sales',
        departmentLabel: 'Sales & BD',
        title: 'Lead Generation Specialist',
        positionValue: 'Lead Generation Specialist',
        location: 'Bengaluru ',
        type: 'Full-Time',
        experience: '6–12 Months',
        skills: ['B2B Sales', 'Lead Generation', 'Client Relations', 'Cold Calling', 'FinTech'],
        shortSummary: 'Conduct product demonstrations, establish high-value enterprise relationships, and accelerate our B2B sales pipeline.',
        overview: [
            'We are hiring full-time Sales Representatives based in Bengaluru. The role involves conducting sales visits, demonstrating and presenting products, establishing new business opportunities, and maintaining customer relationships. Some remote work is allowed for flexibility.',
            'The candidate having 6 to 12 months of experience with relevant academic background can apply for the role. Having experience in the FinTech industry is an added advantage.'
        ],
        requirements: [
            'Build and maintain relationships with customers by meeting with them regularly to profile their needs and pitch our solutions',
            'Generate new business by prospecting, qualifying, networking, and cold-calling',
            'Research, track, maintain and update leads across CRM systems',
            'Make outgoing calls to develop new business and set up product demos',
            'Direct email marketing to key enterprise clients and prospects',
            'Participate in the preparation of client presentations and proposals',
            'Develop in-depth knowledge of GIROPie products and trade finance workflows',
            'Bachelor’s degree in Business Administration, Marketing, or related field',
            'Experience with field sales and B2B SaaS/FinTech sales is a plus'
        ]
    },
    {
        id: 'backend-dev',
        department: 'engineering',
        departmentLabel: 'Engineering',
        title: 'Back-end Developers',
        positionValue: 'Back-end Developer',
        location: 'Bengaluru ',
        type: 'Full-Time',
        experience: '2–4 Years',
        skills: ['Java', 'Spring Boot', 'REST APIs', 'Microservices', 'Azure', 'System Design'],
        shortSummary: 'Architect and scale high-throughput RESTful microservices, Azure cloud backends, and robust financial payment rails.',
        overview: [
            'We are hiring Back-end Developers with Bachelor’s degree in computer science, engineering, or a related field. Having at least 2-4 years experience in Java and Springboot and must have working experience with Rest API and Microservices.',
            'Good to have working knowledge in AZURE, serverside programming, Linux or Windows, System Design, Framework development, Fintech domain basics, Payment gateway basics & Agile methods.'
        ],
        requirements: [
            'Analyse data, processes, and codes to troubleshoot problems and identify areas for improvement',
            'Collaborate with frontend developers and product teams to establish cohesive microservices architecture',
            'Develop high-performance modules for financial data reconciliation and payment processing',
            'Maintain top-tier code hygiene, automated testing, and comprehensive API documentation',
            'Participate in continuous learning to stay current on modern cloud patterns and best practices',
            'Take technical lead on individual service deployments as needed'
        ]
    },
    {
        id: 'frontend-dev',
        department: 'engineering',
        departmentLabel: 'Engineering',
        title: 'Front-end Developers',
        positionValue: 'Front-end Developer',
        location: 'Bengaluru ',
        type: 'Full-Time',
        experience: '2–4 Years',
        skills: ['React', 'JavaScript', 'HTML5 / CSS3', 'React Native', 'Adobe XD', 'UI/UX'],
        shortSummary: 'Build fast, responsive, and visually stunning web interfaces that empower finance teams with real-time liquidity clarity.',
        overview: [
            'We are hiring Front-end developers with 2-4 year’s of experience with UI design and development. Worked on multiple product/solution development projects. Proficiency in HTML/CSS, React & React Native, JavaScript.',
            'Working experience in AdobeXD, API integration and knowledge in Fintech Domain, Payment Gateway and Agile methods. Good interpersonal and communication skills with solid key design principles.'
        ],
        requirements: [
            'Work with engineering leads to ensure web applications are responsive, fast, and visually appealing',
            'Translate Figma / Adobe XD prototypes into clean, reusable modular component architecture',
            'Plan layouts optimized across desktop, tablet, and mobile screens',
            'Integrate seamlessly with backend REST APIs and state management layers',
            'Monitor front-end performance, accessibility (a11y), and user interaction analytics'
        ]
    },
    {
        id: 'fullstack-dev',
        department: 'engineering',
        departmentLabel: 'Engineering',
        title: 'Fullstack developer',
        positionValue: 'Fullstack Developer',
        location: 'Bengaluru ',
        type: 'Full-Time',
        experience: '5–8 Years',
        skills: ['Full-stack Java', 'Spring Boot', 'React', 'Azure Cloud', 'Microservices', 'Agile'],
        shortSummary: 'Lead end-to-end full-stack features from database architecture to client-facing dashboards and microservice orchestration.',
        overview: [
            'We would love to hear if you have Bachelor’s degree in computer science, engineering, or a related field with 5-8 years experience in Full-stack Java and Springboot technologies. Any relevant Management certification may also help. Must have experience with Rest API, Microservices and AZURE Cloud services.',
            'Good to have working knowledge in serverside programming, Linux or Windows, System Design, Framework development, Fintech domain basics, Payment gateway basics & Agile. Strong understanding of the web development cycle and programming techniques and tools are needed for this role.',
            'Should have managed and delivered projects with excellent technical, diagnostic, and troubleshooting skills.'
        ],
        requirements: [
            'Drive technical excellence across full-stack architecture, performance, and UX',
            'Determine technical project requirements and schedule sprint milestones',
            'Delegate tasks effectively to junior engineers and maintain high development velocity',
            'Identify technical risks early and formulate proactive contingency plans',
            'Liaise with cross-functional stakeholders, management, and clients to ensure quality standards',
            'Foster a transparent team culture where members can voice concerns and innovate freely'
        ]
    }
];

const Careers = () => {
    const [selectedDepartment, setSelectedDepartment] = useState('all');
    const [expandedJobId, setExpandedJobId] = useState(null);

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        position: '',
        startDate: ''
    });

    const [selectedFile, setSelectedFile] = useState(null);
    const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submittedSuccess, setSubmittedSuccess] = useState(false);

    const formRef = useRef(null);
    const fileInputRef = useRef(null);

    // Filter jobs
    const filteredJobs = jobsData.filter(job => {
        if (selectedDepartment === 'all') return true;
        return job.department === selectedDepartment;
    });

    const toggleExpand = (jobId) => {
        setExpandedJobId(prev => (prev === jobId ? null : jobId));
    };

    const handleApplyClick = (positionVal) => {
        setFormData(prev => ({ ...prev, position: positionVal }));
        if (formRef.current) {
            formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            if (file.size > 15 * 1024 * 1024) {
                alert('File size exceeds 15MB limit. Please upload a smaller file.');
                return;
            }
            setSelectedFile(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.email) {
            alert('Please enter your email address.');
            return;
        }

        if (!formData.startDate) {
            alert('Please select your available start date.');
            return;
        }

        if (!isCaptchaVerified) {
            alert('Please complete the verification check ("I\'m not a robot").');
            return;
        }

        setIsSubmitting(true);

        setTimeout(() => {
            setIsSubmitting(false);
            setSubmittedSuccess(true);
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                position: '',
                startDate: ''
            });
            setSelectedFile(null);
            setIsCaptchaVerified(false);
        }, 900);
    };

    return (
        <div className={styles.careersPage}>
            {/* Ambient Background Lighting */}
            <div className={styles.bgGlow1}></div>
            <div className={styles.bgGlow2}></div>
            <div className={styles.bgGlow3}></div>

            {/* ==============================================================
                1. HERO SECTION & PANORAMIC BANNER
                ============================================================== */}
            <section className={styles.heroSection}>
                <div className={styles.heroBadge}>
                    <FaRocket className={styles.rocketIcon} />
                    <span>We’re Hiring • 4 Open Opportunities in Tech &amp; Growth</span>
                </div>

                <h1 className={styles.heroHeading}>
                    THERE IS ALWAYS ROOM FOR <span className={styles.orangeText}>TALENT!</span>
                </h1>

                <p className={styles.heroSubtitle}>
                    In this competitive world honing your skill continuously and technological progress creates an edge to one’s career. As should never learning stop, so the progress. GIROPie welcomes career aspirants to connect with us and know the organization. Tell us about your aspirations in any of the following streaks &amp; we will speak.
                </p>

                {/* Talent Streak Chips */}
                <div className={styles.talentChipsRow}>
                    <span className={styles.talentChip}>⚡ Lead Generation Specialists</span>
                    <span className={styles.talentChip}>💻 Back-End Developers</span>
                    <span className={styles.talentChip}>🎯 Technical Leads - IT Development</span>
                    <span className={styles.talentChip}>🎨 UI Web Developers</span>
                </div>

                {/* Panoramic Banner ("PASSION LED US HERE") */}
                <div className={styles.bannerWrapper}>
                    <img
                        src={careersBanner}
                        alt="Passion Led Us Here - GIROPie Careers"
                        className={styles.bannerImage}
                    />
                </div>
            </section>



            {/* ==============================================================
                3. OPEN POSITIONS / JOB BOARD SECTION
                ============================================================== */}
            <section className={styles.openRolesSection}>
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionTag}>Open Positions</span>
                    <h2 className={styles.sectionTitle}>Find Your Next Opportunity</h2>
                </div>

                {/* Filter Tabs */}
                <div className={styles.filterBar}>
                    <button
                        type="button"
                        className={`${styles.filterBtn} ${selectedDepartment === 'all' ? styles.filterBtnActive : ''}`}
                        onClick={() => setSelectedDepartment('all')}
                    >
                        All Roles ({jobsData.length})
                    </button>
                    <button
                        type="button"
                        className={`${styles.filterBtn} ${selectedDepartment === 'engineering' ? styles.filterBtnActive : ''}`}
                        onClick={() => setSelectedDepartment('engineering')}
                    >
                        Engineering ({jobsData.filter(j => j.department === 'engineering').length})
                    </button>
                    <button
                        type="button"
                        className={`${styles.filterBtn} ${selectedDepartment === 'sales' ? styles.filterBtnActive : ''}`}
                        onClick={() => setSelectedDepartment('sales')}
                    >
                        Sales &amp; BD ({jobsData.filter(j => j.department === 'sales').length})
                    </button>
                </div>

                {/* Jobs List */}
                <div className={styles.jobsList}>
                    {filteredJobs.map((job) => {
                        const isExpanded = expandedJobId === job.id;

                        return (
                            <article key={job.id} className={styles.jobCard}>
                                {/* Top Bar */}
                                <div className={styles.jobTopBar}>
                                    <div className={styles.jobTitleGroup}>
                                        <JobBadge />
                                        <h3 className={styles.jobHeading}>{job.title}</h3>
                                    </div>

                                    {/* Meta Tags */}
                                    <div className={styles.metaTagsGroup}>
                                        <span className={styles.metaChip}>
                                            <FaLocationDot className={styles.locationIcon} /> {job.location}
                                        </span>
                                        <span className={styles.metaChip}>
                                            Exp: {job.experience}
                                        </span>

                                        <span className={styles.metaChip}>
                                            <FaBriefcase className={styles.briefcaseIcon} /> {job.type}
                                        </span>
                                    </div>
                                </div>

                                {/* Summary */}
                                <p className={styles.jobSummary}>{job.shortSummary}</p>

                                {/* Skill Pills */}
                                <div className={styles.skillPillsRow}>
                                    {job.skills.map((skill, sIdx) => (
                                        <span key={sIdx} className={styles.skillPill}>{skill}</span>
                                    ))}
                                </div>

                                {/* Action Strip */}
                                <div className={styles.cardActionStrip}>
                                    <button
                                        type="button"
                                        className={styles.expandToggleBtn}
                                        onClick={() => toggleExpand(job.id)}
                                        aria-expanded={isExpanded}
                                    >
                                        <span>{isExpanded ? 'Hide Details' : 'View Responsibilities & Requirements'}</span>
                                        {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
                                    </button>

                                    <button
                                        type="button"
                                        className={styles.cardApplyBtn}
                                        onClick={() => handleApplyClick(job.positionValue)}
                                    >
                                        <span>Apply Now</span>
                                        <FaArrowRight className={styles.btnArrowIcon} />
                                    </button>
                                </div>

                                {/* Expanded Requirements & Overview */}
                                {isExpanded && (
                                    <div className={styles.expandedDetails}>
                                        <div className={styles.detailsGrid}>
                                            {/* Role Overview */}
                                            <div>
                                                <h4 className={styles.detailsColTitle}>About the Role</h4>
                                                {job.overview.map((para, pIdx) => (
                                                    <p key={pIdx} className={styles.roleOverviewPara}>
                                                        {para}
                                                    </p>
                                                ))}
                                            </div>

                                            {/* Requirements */}
                                            <div>
                                                <h4 className={styles.detailsColTitle}>Requirements &amp; Responsibilities</h4>
                                                <ul className={styles.detailsList}>
                                                    {job.requirements.map((req, rIdx) => (
                                                        <li key={rIdx} className={styles.detailsItem}>{req}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </article>
                        );
                    })}
                </div>
            </section>

            {/* ==============================================================
                4. RESUME SUBMISSION PORTAL ("Think you have what it takes?")
                ============================================================== */}
            <section ref={formRef} id="apply-portal" className={styles.applicationSection}>
                <div className={styles.portalCard}>
                    <div className={styles.portalHeader}>
                        <h2 className={styles.portalTitle}>Think you have what it takes?</h2>
                        <h3 className={styles.portalSubtitle}>Send us your resume</h3>
                        <p className={styles.portalLead}>
                            Our talent team reviews every submission with care. Tell us about your journey and how you want to make an impact.
                        </p>
                    </div>

                    <form className={styles.portalForm} onSubmit={handleSubmit}>
                        {/* Row 1: Names */}
                        <div className={styles.formRow}>
                            <div className={styles.formGroup}>
                                <label className={styles.formLabel} htmlFor="firstName">First Name</label>
                                <input
                                    id="firstName"
                                    name="firstName"
                                    type="text"
                                    className={styles.formInput}
                                    placeholder="Your first name"
                                    value={formData.firstName}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label className={styles.formLabel} htmlFor="lastName">Last Name</label>
                                <input
                                    id="lastName"
                                    name="lastName"
                                    type="text"
                                    className={styles.formInput}
                                    placeholder="Your last name"
                                    value={formData.lastName}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>

                        {/* Row 2: Contact */}
                        <div className={styles.formRow}>
                            <div className={styles.formGroup}>
                                <label className={styles.formLabel} htmlFor="email">
                                    Email <span className={styles.requiredAsterisk}>*</span>
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    className={styles.formInput}
                                    placeholder="you@example.com"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label className={styles.formLabel} htmlFor="phone">Phone</label>
                                <input
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    className={styles.formInput}
                                    placeholder="+91 98765 43210"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>

                        {/* Row 3: Position, Date, Upload */}
                        <div className={styles.formRow}>
                            <div className={styles.rowSplitLeft}>
                                <div className={styles.formGroup}>
                                    <label className={styles.formLabel} htmlFor="position">Position you are applying to</label>
                                    <select
                                        id="position"
                                        name="position"
                                        className={styles.formSelect}
                                        value={formData.position}
                                        onChange={handleInputChange}
                                    >
                                        <option value="">Select Position</option>
                                        <option value="Lead Generation Specialist">Lead Generation Specialist</option>
                                        <option value="Back-end Developer">Back-end Developer</option>
                                        <option value="Front-end Developer">Front-end Developer</option>
                                        <option value="Fullstack Developer">Fullstack Developer</option>
                                        <option value="Technical Lead - IT development">Technical Lead - IT development</option>
                                        <option value="Other">Other / General Application</option>
                                    </select>
                                </div>

                                <div className={styles.formGroup}>
                                    <label className={styles.formLabel} htmlFor="startDate">
                                        Available start date <span className={styles.requiredAsterisk}>*</span>
                                    </label>
                                    <input
                                        id="startDate"
                                        name="startDate"
                                        type="date"
                                        required
                                        className={styles.formInput}
                                        value={formData.startDate}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>

                            {/* File Upload Drop Area */}
                            <div className={styles.uploadZone}>
                                <input
                                    ref={fileInputRef}
                                    type="file"
                                    accept=".pdf,.doc,.docx"
                                    className={styles.hiddenInput}
                                    onChange={handleFileChange}
                                />
                                <div
                                    className={`${styles.uploadBox} ${selectedFile ? styles.uploadActive : ''}`}
                                    onClick={() => fileInputRef.current?.click()}
                                    role="button"
                                    tabIndex={0}
                                    aria-label="Upload resume file"
                                >
                                    {selectedFile ? (
                                        <>
                                            <FaCheck className={styles.checkSuccessIcon} />
                                            <span>{selectedFile.name.length > 25 ? selectedFile.name.substring(0, 22) + '...' : selectedFile.name}</span>
                                        </>
                                    ) : (
                                        <>
                                            <FaCloudArrowUp className={styles.cloudUploadIcon} />
                                            <span>Upload File (Resume / CV)</span>
                                        </>
                                    )}
                                </div>
                                <span className={styles.uploadHelper}>Upload supported file (PDF, DOCX — Max 15MB)</span>
                            </div>
                        </div>

                        {/* Bottom Row: Verification & Submit */}
                        <div className={styles.bottomRow}>
                            {/* reCAPTCHA Widget */}
                            <div
                                className={styles.recaptchaCard}
                                onClick={() => setIsCaptchaVerified(!isCaptchaVerified)}
                                role="checkbox"
                                aria-checked={isCaptchaVerified}
                                tabIndex={0}
                            >
                                <div className={`${styles.recaptchaCheck} ${isCaptchaVerified ? styles.recaptchaChecked : ''}`}>
                                    {isCaptchaVerified && <FaCheck className={styles.recaptchaCheckIcon} />}
                                </div>
                                <span className={styles.recaptchaText}>I’m not a robot</span>
                                <div className={styles.recaptchaBrand}>
                                    <FaRotate className={styles.rotateIcon} />
                                    <span className={styles.recaptchaBrandLabel}>reCAPTCHA</span>
                                </div>
                            </div>

                            {/* Submit Application Button */}
                            <button
                                type="submit"
                                className={styles.submitAppBtn}
                                disabled={isSubmitting}
                            >
                                <span>{isSubmitting ? 'Submitting Application...' : 'Submit Application'}</span>
                                <FaArrowRight className={styles.btnArrowIcon} />
                            </button>
                        </div>

                        {/* Success Notice */}
                        {submittedSuccess && (
                            <div className={styles.successBanner}>
                                <FaCheck className={styles.bannerCheckIcon} />
                                <span>Thank you! Your resume and application have been received. Our HR team will review your application and get in touch shortly.</span>
                            </div>
                        )}
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Careers;