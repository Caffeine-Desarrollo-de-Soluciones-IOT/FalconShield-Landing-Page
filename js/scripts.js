
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
        subtitle: 'Protect your home with advanced technology and effective solutions from Verysafe in Lima, Peru',
        buttonget: 'Get Started',
        phrase: '"We provide protection in every corner, so that growth is your only concern"',
        signin: 'Sign In',
        camera1: 'Security Cameras',
        camera2: 'We offer Room Service to satisfy your needs and make your stay unforgettable.',
        sensors1: 'Innovative sensors',
        sensors2: 'We provide the convenience of booking online, so you can easily plan your stay and make sure you secure your spot at our property.',
        alarms1: 'Alarms',
        alarms2: 'We guarantee the security of all your reservations and dispositives rental transactions. Your peace of mind is our priority.',
        plans: 'Subscription Plans',
        team: 'Work Team',
        textteam: 'United and connected',
        developer: 'Developer',
        phraseteam: '"As a web development team, we build the future together, always collaborating and supporting each other."',
        followers: 'Followers',
        comment: 'Verysafe devices have transformed the security of my property in Lima. Highly recommended!',
        find: 'Find us here!',
        aboutus: 'Learn more about us',
        copy: 'Copyright &copy; FalconShield 2024',
        privacy: 'Privacy Policy',
        terms: 'Terms of Use',
        images: {
            bronce: 'assets/img/portfolio/bronce.png',
            premium: 'assets/img/portfolio/premium.png',
            gold: 'assets/img/portfolio/gold.png'
        }
    },
    es: {
        solutions: 'Soluciones',
        subscriptions: 'Suscripción',
        team: 'Equipo de Trabajo',
        followers: 'Seguidores',
        find: '¡Encuéntranos aquí!',
        about: 'Sobre nosotros',
        title: 'Seguridad Innovadora para su Propiedad',
        subtitle: 'Proteja su hogar con tecnología avanzada y soluciones efectivas de Verysafe en Lima, Perú',
        buttonget: 'Empezar Ahora!',
        phrase: '"Brindamos protección en cada rincón, para que el crecimiento sea tu única preocupación"',
        signin: 'Iniciar Sesión',
        camera1: 'Cámaras de Seguridad',
        camera2: 'Ofrecemos Room Service para satisfacer sus necesidades y hacer su estancia inolvidable.',
        sensors1: 'Sensores Innovadores',
        sensors2: 'Ofrecemos la comodidad de reservar en línea, para que pueda planificar fácilmente su estadía y asegurarse de asegurar su lugar en nuestra propiedad.',
        alarms1: 'Alarmas',
        alarms2: 'Garantizamos la seguridad de todas sus reservas y transacciones de alquiler de dispositivos. Su tranquilidad es nuestra prioridad.',
        plans: 'Planes de Suscripción',
        team: 'Equipo de Trabajo',
        textteam: 'Unidos y conectados',
        developer: 'Desarrollador',
        phraseteam: '“Como equipo de desarrollo web, construimos el futuro juntos, siempre colaborando y apoyándonos unos a otros”.',
        followers: 'Seguidores',
        comment: 'Los dispositivos Verysafe han transformado la seguridad de mi propiedad en Lima. ¡Muy recomendables!',
        find: '¡Encuéntranos aquí!',
        aboutus: 'Conozca más sobre nosotros',
        copy: 'Derechos de autor &copy; FalconShield 2024',
        privacy: 'Política de Privacidad',
        terms: 'Términos de Uso',
        images: {
            bronce: 'assets/img/portfolio/broncees.png',
            premium: 'assets/img/portfolio/premiumes.png',
            gold: 'assets/img/portfolio/goldes.png'
        }
    },
    pt: {
        solutions: 'Soluções',
        subscriptions: 'Subscrição',
        team: 'Equipe de trabalho',
        followers: 'Seguidores',
        find: 'Encontre-nos aqui!',
        about: 'Sobre nós',
        title: 'Segurança inovadora para sua propriedade',
        subtitle: 'Proteja sua casa com tecnologia avançada e soluções eficazes da Verysafe em Lima, Peru',
        buttonget: 'Começar',
        phrase: '"Nós fornecemos proteção em cada canto, para que o crescimento seja sua única preocupação"',
        signin: 'Entrar',
        camera1: 'Câmeras de segurança',
        camera2: 'Oferecemos serviço de quarto para satisfazer suas necessidades e tornar sua estadia inesquecível.',
        sensors1: 'Sensores inovadores',
        sensors2: 'Oferecemos a conveniência de reservar on-line para que você possa planejar facilmente sua estadia e garantir seu lugar em nossa propriedade.',
        alarms1: 'Alarmes',
        alarms2: 'Nós garantimos a segurança de todas as suas reservas e transações de aluguel de dispositivos. Sua paz de espírito é nossa prioridade.',
        plans: 'Planos de Assinatura',
        team: 'Equipe de trabalho',
        textteam: 'Unidos e conectados',
        developer: 'Desenvolvedor',
        phraseteam: '"Como uma equipe de desenvolvimento web, construímos o futuro juntos, sempre colaborando e apoiando uns aos outros."',
        followers: 'Seguidores',
        comment: 'Os dispositivos Verysafe transformaram a segurança da minha propriedade em Lima. Altamente recomendado!',
        find: 'Encontre-nos aqui!',
        aboutus: 'Saiba mais sobre nós',
        copy: 'Direitos autorais &copy; FalconShield 2024',
        privacy: 'Política de Privacidade',
        terms: 'Termos de Uso',
        images: {
            bronce: 'assets/img/portfolio/broncept.png',
            premium: 'assets/img/portfolio/premiumpt.png',
            gold: 'assets/img/portfolio/goldpt.png'
        }
    }
};

// Seleccionar el switch
const languageRadios = document.querySelectorAll('input[name="language"]');

// Función para cambiar el idioma
function changeLanguage(language) {
    // Cambiar los textos
    const elementsToTranslate = document.querySelectorAll('[data-text]');
    elementsToTranslate.forEach(el => {
        const key = el.getAttribute('data-text');
        if (texts[language][key]) {
            el.innerHTML = texts[language][key];
        } else {
            console.warn(`Clave no encontrada para '${key}' en idioma '${language}'`);
        }
    });

    // Cambiar las imágenes de acuerdo con el idioma
    const images = document.querySelectorAll('img[data-img]');
    images.forEach(img => {
        const imgKey = img.getAttribute('data-img');  // Obtener el valor de 'data-img'
        if (texts[language].images[imgKey]) {
            img.src = texts[language].images[imgKey];  // Cambiar la ruta de la imagen según el idioma
        } else {
            console.warn(`No se encontró imagen para '${imgKey}' en idioma '${language}'`);
        }
    });
}

languageRadios.forEach(radio => {
    radio.addEventListener('change', function () {
        changeLanguage(this.value);  // Cambiar al idioma seleccionado
    });
});

// Establecer el idioma por defecto al cargar la página
changeLanguage('en');