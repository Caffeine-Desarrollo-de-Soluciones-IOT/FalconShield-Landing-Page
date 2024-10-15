
window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    navbarShrink();

    document.addEventListener('scroll', navbarShrink);

    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

const texts = {
    en: {
        solutions: 'Solutions',
        subscriptions: 'Subscription',
        team: 'Work Team',
        followers: 'Followers',
        find: 'Find us here!',
        about: 'About us',
        title: 'Innovative Security for Your Property',
        subtitle: 'Protect your home with advanced technology and effective solutions from \n Verysafe in Lima, Peru',
        button: "Get Started",
        phrase: "We provide protection in every corner, so that growth is your only concern"
    },
    es: {
        solutions: 'Soluciones',
        subscriptions: 'Suscripción',
        team: 'Equipo de Trabajo',
        followers: 'Seguidores',
        find: '¡Encuéntranos aquí!',
        about: 'Sobre nosotros',
        title: 'Seguridad Innovadora para su Propiedad',
        subtitle: 'Proteja su hogar con tecnología avanzada y soluciones efectivas de \n Verysafe en Lima, Perú',
        button: 'Empezar Ahora!',
        phrase: '"Brindamos protección en cada rincón, para que el crecimiento sea tu única preocupación"'
    }
};

// Selecciona el switch
const languageSwitch = document.getElementById('language-switch');

// Añadir un evento al switch para detectar cambios
languageSwitch.addEventListener('change', function() {
    if (this.checked) {
        // Cambiar al español
        document.getElementById('solutions-link').textContent = texts.es.solutions;
        document.getElementById('subscriptions-link').textContent = texts.es.subscriptions;
        document.getElementById('team-link').textContent = texts.es.team;
        document.getElementById('followers-link').textContent = texts.es.followers;
        document.getElementById('find-link').textContent = texts.es.find;
        document.getElementById('about-link').textContent = texts.es.about;
        document.getElementById('title-link').textContent = texts.es.title;
        document.getElementById('subtitle-link').textContent = texts.es.subtitle;
        document.getElementById('button-get-link').textContent = texts.es.button;
        document.getElementById('phrase-link').textContent = texts.es.phrase;
    } else {
        // Cambiar al inglés
        document.getElementById('solutions-link').textContent = texts.en.solutions;
        document.getElementById('subscriptions-link').textContent = texts.en.subscriptions;
        document.getElementById('team-link').textContent = texts.en.team;
        document.getElementById('followers-link').textContent = texts.en.followers;
        document.getElementById('find-link').textContent = texts.en.find;
        document.getElementById('about-link').textContent = texts.en.about;
        document.getElementById('title-link').textContent = texts.en.title;
        document.getElementById('subtitle-link').textContent = texts.en.subtitle;
        document.getElementById('button-get-link').textContent = texts.en.button;
        document.getElementById('phrase-link').textContent = texts.en.phrase;
    }
});
