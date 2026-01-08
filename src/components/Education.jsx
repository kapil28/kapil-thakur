import { useEffect, useRef } from 'react';

function Education() {
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
            <div className="section-card scroll-animate" style={{ position: 'relative', overflow: 'hidden' }}>
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundImage: 'url(/images/university.png)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        opacity: 0.2,
                        zIndex: 0
                    }}
                />
                <div style={{ position: 'relative', zIndex: 1 }}>
                    <h2>Educational Background</h2>
                    <div className="grid grid-2 stagger-children" style={{ marginTop: '2rem' }}>
                        <div className="edu-card">
                            <div className="edu-icon">🎓</div>
                            <div className="edu-content">
                                <h4>Bachelor of Science</h4>
                                <p className="school">University of Delhi</p>
                                <p className="dates">June 1998 - June 2001</p>
                            </div>
                        </div>
                        <div className="edu-card">
                            <div className="edu-icon">💻</div>
                            <div className="edu-content">
                                <h4>Master of Computer Applications</h4>
                                <p className="school">Graphic Era Deemed University</p>
                                <p className="dates">June 2001 - June 2004</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Education;
