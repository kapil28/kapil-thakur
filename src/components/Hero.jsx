import { useEffect, useRef } from 'react';

function Hero() {
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
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section className="section hero" ref={sectionRef}>
            <div className="hero-content scroll-animate visible">
                <h1>Kapil Thakur</h1>
                <p className="hero-title">Microsoft .NET Full Stack Developer | 15+ Years Experience</p>
                <div className="btn-group">
                    <a
                        href="mailto:thakur.kapil@gmail.com"
                        className="btn btn-primary"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Get in Touch
                    </a>
                    <a
                        href="https://www.linkedin.com/in/kapil-thakur-43b72214"
                        className="btn btn-outline"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        LinkedIn Profile
                    </a>
                </div>
            </div>
            <div className="hero-image scroll-animate visible">
                <img src={`${import.meta.env.BASE_URL}images/profile.png`} alt="Kapil Thakur" />
            </div>
        </section>
    );
}

export default Hero;
