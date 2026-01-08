import { useEffect, useRef } from 'react';

function Summary() {
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
                <h2>Professional Summary</h2>
                <p style={{ marginTop: '1.5rem' }}>
                    Accomplished Full Stack Developer with 15+ years of expertise in Microsoft .NET technologies,
                    cloud platforms, and modern web frameworks. Proven track record delivering enterprise-level
                    applications using ASP.NET Core, Azure, React, and Angular. Microsoft Certified Solutions
                    Associate specializing in web applications with strong foundation in both front-end and
                    back-end development.
                </p>
                <div className="grid grid-3 stagger-children" style={{ marginTop: '2rem' }}>
                    <div className="stat-box">
                        <h4>15+ Years</h4>
                        <p>Microsoft .Net Technologies</p>
                    </div>
                    <div className="stat-box">
                        <h4>MCSA Certified</h4>
                        <p>Web Applications</p>
                    </div>
                    <div className="stat-box">
                        <h4>Full Stack</h4>
                        <p>Front End & Backend API</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Summary;
