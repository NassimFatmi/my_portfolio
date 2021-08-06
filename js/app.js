// loading screen

window.addEventListener('load', function() {
    document.querySelector('.loading-progress span').style.width = '100%';
    this.document.querySelector('.upper').classList.add('loaded');
    this.document.querySelector('.lower').classList.add('loaded');
    document.querySelector('.splash-screen').remove();
});

// toggle menu
const toggleMenu = document.querySelector('.toggle-menu');
toggleMenu.addEventListener('click', () => {
    document.querySelector('.links').classList.add('show');
});
const closeBtn = document.querySelector('.close-btn');
closeBtn.addEventListener('click', () => {
    document.querySelector('.links').classList.remove('show');
});

// links

const links = document.querySelectorAll('.links li a');
links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        e.target.parentElement.parentElement.querySelectorAll('a').forEach(element => {
            element.classList.remove('active');
        });
        e.target.classList.add('active');
        document.querySelector(e.target.dataset.scroll).scrollIntoView({
            behavior: "smooth"
        });
        document.querySelector('.links').classList.remove('show');
    });
});

// scroll up button
const scrollUp = document.querySelector('.scroll-up');

scrollUp.addEventListener('click', (e) => {
    document.querySelector('main').scrollTo(0, 0);
});

let scrollObserver = new IntersectionObserver((entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            scrollUp.classList.remove('show');
            return;
        }
        scrollUp.classList.add('show');
    });
}));
const landing = document.querySelector('.landing-content');
scrollObserver.observe(landing);


// skills

const progressSpans = document.querySelectorAll('.skill .skill-progress span');

progressSpans.forEach(span => {
    span.style.width = span.dataset.progress;
});

// works section => change colors to dark

const navBar = document.querySelector('.header nav');
const worksSection = document.querySelector('.work-list');

let workScrollIn = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navBar.classList.add('scroll-to-works');
            return;
        }
        navBar.classList.remove('scroll-to-works');
    });
});

workScrollIn.observe(worksSection);


// set projects to show links

const projects = document.querySelectorAll('.project');

projects.forEach(project => {
    project.addEventListener('click', function() {
        project.classList.toggle('show-info');

    });
});

// add active class on scroll
const sections = document.querySelectorAll('section');

sections.forEach(section => {
    let observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                links.forEach(link => {
                    link.classList.remove('active');
                    if (link.dataset.scroll.slice(1) === section.className) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, { threshold: 1.0 });
    observer.observe(section);
});

// landding see my work button
document.querySelector('.landing .see-more').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('.work').scrollIntoView({ behavior: 'smooth' });
});