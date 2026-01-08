import { useEffect, useRef } from 'react';

function Certifications() {
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
            <div className="section-card accent-card scroll-animate">
                <h2>Microsoft Certifications</h2>

                <div className="grid grid-2 stagger-children" style={{ marginTop: '2rem' }}>
                    <div className="cert-card">
                        <div className="cert-icon">🏆</div>
                        <h4>Microsoft Certified Professional</h4>
                        <p>Core Microsoft technology certification</p>
                    </div>
                    <div className="cert-card">
                        <div className="cert-icon">🌐</div>
                        <h4>MCSA: Web Applications</h4>
                        <p>Solutions Associate specialization</p>
                    </div>
                </div>

                <div className="grid grid-2 stagger-children" style={{ marginTop: '1.5rem' }}>
                    <div className="cert-card">
                        <div className="cert-icon">📄</div>
                        <h4>70-480 Certification</h4>
                        <p>Programming in HTML5 with JavaScript and CSS3</p>
                    </div>
                    <div className="cert-card">
                        <div className="cert-icon">⚡</div>
                        <h4>70-486 Certification</h4>
                        <p>Developing ASP.NET MVC Web Applications</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Certifications;
