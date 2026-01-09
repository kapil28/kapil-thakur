import { useEffect, useRef } from 'react';

function CurrentRole() {
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
                <h2>Current Role Highlights</h2>
                <h3 style={{ marginTop: '1rem', marginBottom: '1.5rem' }}>Xome - Principal Software Development Engineer</h3>
                <div className="layout-with-image">
                    <div className="layout-content">
                        <p>
                            Leading enterprise-level software development initiatives at Xome since 2018,
                            progressing from Senior to Principal Engineer. Architecting scalable solutions
                            using cutting-edge Microsoft technologies and cloud platforms. Driving technical
                            excellence across development teams while mentoring junior developers and
                            establishing best practices.
                        </p>
                        <ul style={{ marginTop: '1rem' }}>
                            <li>7+ years tenure demonstrating consistent growth</li>
                            <li>Leadership in architectural decisions</li>
                            <li>Cross-functional team collaboration</li>
                        </ul>
                    </div>
                    <div className="layout-image">
                        <img src={`${import.meta.env.BASE_URL}images/team-meeting.png`} alt="Team meeting illustration" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CurrentRole;
