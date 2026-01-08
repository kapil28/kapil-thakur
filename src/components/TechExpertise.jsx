import { useEffect, useRef } from 'react';

function TechExpertise() {
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

    const skills = [
        {
            icon: '🌐',
            title: 'Web Technologies',
            description: 'ASP.NET Core, Azure, MVC, ReactJS, AngularJS, WebAPI, HTML5, CSS3, Elastic Search'
        },
        {
            icon: '💻',
            title: 'Programming Languages',
            description: 'C#, VB.Net, React, Angular, JavaScript, jQuery, Python'
        },
        {
            icon: '🗄️',
            title: 'Database Systems',
            description: 'SQL Server, Oracle, MongoDB, NoSQL, Entity Framework'
        },
        {
            icon: '☁️',
            title: 'Cloud & DevOps',
            description: 'Azure DevOps, Jenkins, Teamcity, Octopus, Git, TFS, VSS'
        },
        {
            icon: '⚙️',
            title: '.NET Frameworks',
            description: '.NET Core, .NET Full Framework, DotNet Nuke (DNN), Entity Framework'
        },
        {
            icon: '🔒',
            title: 'Security Tools',
            description: 'Fortify, Veracode, Pentest'
        }
    ];

    return (
        <section className="section" ref={sectionRef}>
            <div className="section-card accent-card scroll-animate">
                <h2>Core Technical Expertise</h2>
                <div className="grid grid-2 stagger-children" style={{ marginTop: '2rem' }}>
                    {skills.map((skill, index) => (
                        <div key={index} className="skill-item">
                            <div className="skill-icon">{skill.icon}</div>
                            <div className="skill-content">
                                <h4>{skill.title}</h4>
                                <p>{skill.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default TechExpertise;
