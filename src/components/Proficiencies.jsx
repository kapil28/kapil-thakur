import { useEffect, useRef } from 'react';

function Proficiencies() {
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

    const proficiencies = [
        {
            icon: '📱',
            title: 'Application Types',
            description: 'Web Applications, Web APIs, Web Services, WCF Services, Front End Development'
        },
        {
            icon: '🔧',
            title: 'Third Party Controls',
            description: 'Telerik, KendoUI, Highcharts for enhanced UI/UX'
        },
        {
            icon: '📂',
            title: 'Source Control',
            description: 'Azure DevOps (ADO), GIT, TFS, VSS, SVN'
        },
        {
            icon: '📋',
            title: 'Project Management',
            description: 'Azure ADO, Microsoft Project Plan (MPP), JIRA'
        }
    ];

    return (
        <section className="section" ref={sectionRef}>
            <div className="section-card scroll-animate">
                <h2>Technical Proficiencies</h2>
                <div className="layout-with-image reverse" style={{ marginTop: '2rem' }}>
                    <div className="layout-image">
                        <img src="/images/developer-workspace.png" alt="Developer workspace" />
                    </div>
                    <div className="layout-content">
                        <div className="grid grid-2 stagger-children">
                            {proficiencies.map((prof, index) => (
                                <div key={index} className="skill-item">
                                    <div className="skill-icon">{prof.icon}</div>
                                    <div className="skill-content">
                                        <h4>{prof.title}</h4>
                                        <p>{prof.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Proficiencies;
