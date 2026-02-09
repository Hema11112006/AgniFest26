// --- DATA: 8 Events with Unique File Paths ---
const eventsData = [
    {
        id: 1,
        title: "SCRIPTATHAN",
        img: "script1.jpeg",
        desc: "Where ideas turn into impact through research.",
        pageUrl: "SCRIPTATHAN.html" 
    },
    {
        id: 2,
        title: "RAPID HARDWARE",
        img: "rapid1.jpeg",
        desc: "Build fast, think smart, prove it live.",
        pageUrl: "rapid.html" 
    },
    {
        id: 3,
        title: "INNO WAVE",
        img: "inno1.jpeg",
        desc: "Turning creativity into momentum.",
        pageUrl: "innowave.html" 
    },
    {
        id: 4,
        title: "PULSE IQ",
        img: "pulse2.jpeg",
        desc: "sync your brain with innovation.",
        pageUrl: "pulse.html" 
    },
    {
        id: 5,
        title: "ELECTROPICTIONARY",
        img: "electro1.jpeg",
        desc: "From doodles to devices.",
        pageUrl: "electro.html" 
    },
    {
        id: 6,
        title: "VECNA'S CURSE",
        img: "vecna1.jpeg",
        desc: "Only the sharpest minds survive",
        pageUrl: "vecna.html" 
    },
    {
        id: 7,
        title: "IPL AUCTION",
        img: "ipl1.jpeg",
        desc: "where every moves hits for six.",
        pageUrl: "ipl .html" 
    },
    {
        id: 8,
        title: "HAWKIN'S LOCKDOWN",
        img: "hawkins1.jpeg",
        desc: "Can you survive the lockdown ?",
        pageUrl: "hawkin.html" 
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('events-grid');
    if(grid) {
        eventsData.forEach(event => {
            const card = document.createElement('div');
            card.classList.add('event-card');
            card.innerHTML = `
                <img src="${event.img}" alt="${event.title}" class="card-img">
                <div class="card-info">
                    <h3 class="card-title">${event.title}</h3>
                    <p class="card-desc">${event.desc}</p>
                </div>
                <a href="${event.pageUrl}" class="view-btn">VIEW</a>
            `;
            grid.appendChild(card);
        });
    }

    const tl = gsap.timeline();
    gsap.set("#web-line", { attr: { d: "M50,0 L50,0" } });
    tl.to("#web-line", { attr: { d: "M50,0 L50,600" }, duration: 0.8, ease: "power4.in" })
      .to(".intro-content", {
          y: 0, opacity: 1, duration: 1.5, ease: "elastic.out(1, 0.3)",
          onStart: () => gsap.fromTo("#intro-screen", {x: -5}, {x: 5, duration: 0.05, repeat: 5, yoyo: true})
      }, "-=0.2")
      .to("#enter-btn", { opacity: 1, y: -20, duration: 0.5, className: "cyber-btn" });

    const enterBtn = document.getElementById('enter-btn');
    const introScreen = document.getElementById('intro-screen');
    const homePage = document.getElementById('home-page');
    const eventsSection = document.getElementById('events-section-anchor');

    if(enterBtn) {
        enterBtn.addEventListener('click', () => {
            gsap.to(introScreen, {
                y: "-100%", duration: 1, ease: "power2.inOut",
                onComplete: () => {
                    introScreen.style.display = 'none';
                    homePage.style.display = 'block';
                    gsap.to(homePage, { 
                        opacity: 1, duration: 0.5,
                        onComplete: () => {
                            if(eventsSection) eventsSection.scrollIntoView({ behavior: 'smooth' });
                        }
                    });
                    ScrollTrigger.refresh();
                    gsap.utils.toArray(".event-card").forEach((card) => {
                        gsap.from(card, {
                            scrollTrigger: { trigger: card, start: "top 95%", toggleActions: "play none none reverse" },
                            y: 50, opacity: 0, scale: 0.9, duration: 0.5, ease: "back.out(1.5)"
                        });
                    });
                }
            });
        });
    }

    const navHome = document.getElementById('nav-home');
    if(navHome) {
        navHome.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    const footerRegisterBtn = document.getElementById('footer-register-btn');
    const openForm = () => window.open("https://docs.google.com/forms/d/e/1FAIpQLScFxdLpKx9J1gw6bLsTptoR9faOt06_KhGESCqqrZDbtqxi8g/viewform?usp=dialog-box", '_blank');
    if(footerRegisterBtn) footerRegisterBtn.addEventListener('click', openForm);
});