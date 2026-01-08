import { useEffect, useRef } from 'react';

function ContactInfo() {
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
                <h2>Contact Information</h2>
                <div className="contact-grid" style={{ marginTop: '1.5rem' }}>
                    <div className="contact-item">
                        <h4>Phone</h4>
                        <p>+1 (646) 744-5757</p>
                    </div>
                    <div className="contact-item">
                        <h4>Email</h4>
                        <p>thakur.kapil@gmail.com</p>
                    </div>
                    <div className="contact-item">
                        <h4>Location</h4>
                        <p>Lewisville, Texas, United States</p>
                    </div>
                    <div className="contact-item">
                        <h4>LinkedIn</h4>
                        <p>
                            <a href="https://www.linkedin.com/in/kapil-thakur-43b72214" target="_blank" rel="noopener noreferrer">
                                linkedin.com/in/kapil-thakur-43b72214
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactInfo;
