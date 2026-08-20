const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');

// Al hacer clic en la hamburguesa, abre el menú y hace la X
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('toggle');
});

// Al hacer clic en cualquier enlace del menú, se cierra automáticamente
links.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('toggle');
    });
});

// --- LÓGICA BILINGÜE ---

// 1. "Diccionario" de traducciones
const translations = {
    es: {
        "nav-about": "Sobre mí",
        "nav-publications": "Publicaciones",
        "nav-experience": "Experiencia",
        "nav-contact": "Contacto",
        "hero-subtitle": "Investigador Postdoctoral en Matemáticas",
        "hero-description": "Actualmente Investigador Postdoctoral en el Departamento de Matemáticas de la Universidad de Trento, Italia. Mi investigación se centra en la Teoría Geométrica de la Medida, Geometría Fractal y el estudio de Dimensiones Intermedias y Proyecciones.",
        "btn-research": "Investigación y Publicaciones",
        "btn-cv": "Descargar CV",
        "sec-pub": "Publicaciones Científicas",
        "sub-pub": "Artículos Publicados",
        "sub-pre": "Preprints y En Revisión",
        "sec-edu": "Formación Académica",
        "sub-pos": "Cargos e Investigación",
        "sub-deg": "Educación",
        "sec-talks": "Charlas y Becas",
        "sub-talks": "Charlas y Conferencias Destacadas",
        "sub-fell": "Becas y Estancias de Investigación",
        "sec-contact": "Contacto",
        "txt-contact": "Para consultas académicas, colaboraciones o acceso a pre-prints, no dude en comunicarse por correo electrónico."
    },
    en: {
        "nav-about": "About",
        "nav-publications": "Publications",
        "nav-experience": "Experience",
        "nav-contact": "Contact",
        "hero-subtitle": "Postdoctoral Mathematics Researcher",
        "hero-description": "Currently a Postdoctoral Researcher at the Department of Mathematics, University of Trento, Italy. My research focuses on Geometric Measure Theory, Fractal Geometry, and the study of Intermediate Dimensions and Projections.",
        "btn-research": "Research & Publications",
        "btn-cv": "Download CV",
        "sec-pub": "Scientific Publications",
        "sub-pub": "Published Papers",
        "sub-pre": "Preprints & Under Review",
        "sec-edu": "Academic Background",
        "sub-pos": "Positions",
        "sub-deg": "Education",
        "sec-talks": "Talks & Fellowships",
        "sub-talks": "Selected Talks & Lectures",
        "sub-fell": "Fellowships & Research Stays",
        "sec-contact": "Contact",
        "txt-contact": "For academic inquiries, collaborations, or access to pre-prints, please feel free to reach out via email."
    }
};

// 2. Seleccionar los botones y todos los elementos a traducir
const btnEs = document.getElementById('btn-es');
const btnEn = document.getElementById('btn-en');
const elementsToTranslate = document.querySelectorAll('[data-translate]');

// 3. Función principal para cambiar el idioma
function setLanguage(language) {

    // Esta línea cambia <html lang="en"> a <html lang="es"> dinámicamente
    document.documentElement.lang = language;

    elementsToTranslate.forEach(element => {
        const key = element.getAttribute('data-translate');
        element.textContent = translations[language][key];
    });

    // Cambiar la clase 'active' de los botones
    if (language === 'es') {
        btnEs.classList.add('active');
        btnEn.classList.remove('active');
    } else {
        btnEn.classList.add('active');
        btnEs.classList.remove('active');
    }
}

// 4. Escuchar los clics del usuario
btnEs.addEventListener('click', (e) => {
    e.preventDefault(); // Evita que la página salte hacia arriba
    setLanguage('es');
});

btnEn.addEventListener('click', (e) => {
    e.preventDefault();
    setLanguage('en');
});