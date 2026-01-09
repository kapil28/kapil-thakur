import { useEffect, useRef } from 'react';

function Aspirations() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section className="section" ref={sectionRef}>
            <div className="section-card scroll-animate">
                <h2>Future Aspirations</h2>
                <div className="layout-with-image" style={{ marginTop: '2rem' }}>
                    <div className="layout-content">
                        <h3>Looking Ahead</h3>
                        <p style={{ marginTop: '1rem' }}>
                            Passionate about expanding expertise into Artificial Intelligence and Machine Learning.
                            Committed to continuous learning and staying at the forefront of emerging technologies.
                            Eager to leverage 15+ years of software development experience to contribute to innovative
                            AI-driven solutions.
                        </p>
                        <blockquote style={{ marginTop: '1.5rem' }}>
                            "Looking to gain knowledge and start working in AI"
                        </blockquote>
                    </div>
                    <div className="layout-image">
                        <img src={`${import.meta.env.BASE_URL}images/ai-visualization.png`} alt="AI visualization" />
                    </div>
                </div>

                <div className="btn-group" style={{ marginTop: '2rem' }}>
                    <a
                        href="mailto:thakur.kapil@gmail.com"
                        className="btn btn-primary"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Connect With Me
                    </a>
                    <a
                        href="https://www.linkedin.com/in/kapil-thakur-43b72214"
                        className="btn btn-outline"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        View Full Profile
                    </a>
                    <a
                        href={`${import.meta.env.BASE_URL}resume.docx`}
                        className="btn btn-outline"
                        download="Kapil_Thakur_Resume.docx"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="download-icon"
                        >
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                            <polyline points="7 10 12 15 17 10"></polyline>
                            <line x1="12" y1="15" x2="12" y2="3"></line>
                        </svg>
                        Download Resume
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Aspirations;
