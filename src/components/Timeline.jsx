import { useEffect, useRef } from 'react';

function Timeline() {
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

    const positions = [
        {
            title: 'Principal Software Development Engineer',
            company: 'Xome (Rocket Mortgage - Mr. Cooper Merger)',
            period: 'August 2018 - Present | Dallas, Texas'
        },
        {
            title: 'Computer System Analyst',
            company: 'Openwave Computing LLC',
            period: 'April 2017 - August 2018 | New York'
        },
        {
            title: 'Developer Analyst II',
            company: 'AON Hewitt',
            period: 'July 2014 - March 2017 | Gurgaon, India'
        },
        {
            title: 'Associate',
            company: 'Cognizant Technology Solutions',
            period: 'September 2010 - July 2014 | Gurgaon, India'
        },
        {
            title: 'Senior Software Engineer',
            company: 'Genie Technologies',
            period: 'June 2005 - May 2010 | Gurgaon, India'
        }
    ];

    return (
        <section className="section" ref={sectionRef}>
            <div className="section-card scroll-animate">
                <h2>Professional Experience Timeline</h2>
                <div className="timeline stagger-children" style={{ marginTop: '2rem' }}>
                    {positions.map((pos, index) => (
                        <div key={index} className="timeline-item" data-step={index + 1}>
                            <h4>{pos.title}</h4>
                            <p>
                                <span className="company">{pos.company}</span>
                                <br />
                                <span className="date">{pos.period}</span>
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Timeline;
