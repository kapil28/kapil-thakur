/**
 * Scroll Animation Utility
 * Uses Intersection Observer API for scroll-triggered animations
 */

export function initScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -50px 0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Once animated, stop observing to improve performance
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all elements with scroll-animate class
    const animateElements = document.querySelectorAll('.scroll-animate, .stagger-children');
    animateElements.forEach((el) => observer.observe(el));

    return observer;
}

// Custom hook for React components
export function useScrollAnimation(ref, options = {}) {
    const { threshold = 0.1, rootMargin = '0px 0px -50px 0px' } = options;

    if (typeof window !== 'undefined' && ref.current) {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold, rootMargin }
        );

        observer.observe(ref.current);
        return () => observer.disconnect();
    }
}
