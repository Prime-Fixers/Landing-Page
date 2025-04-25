// Objeto con todas las traducciones
const translations = {
    'es': {
        // Header
        'solicitar_demo': 'Solicitar Demo',
        'inicio': 'Inicio',
        'funcionalidades': 'Funcionalidades',
        'beneficios': 'Beneficios',
        'nosotros': 'Nosotros',
        'contacto': 'Contacto',

        // Hero Section
        'hero_title': 'Gestión Inteligente de Equipos de Refrigeración',
        'hero_subtitle': 'Conectamos negocios con técnicos especializados para un mantenimiento preventivo y automatizado de sistemas de congelación.',
        'demo_gratis': 'Solicitar Demo Gratis',
        'como_funciona': '¿Cómo funciona?',
        'confian': 'Confían en nosotros:',

        // Para quién Section
        'para_quien': '¿Para quién es OsitoPolar?',
        'negocios_frio': 'Negocios con Equipos de Frío',
        'negocios_desc': 'Supermercados, minimarkets, laboratorios, restaurantes y empresas del sector alimentario o farmacéutico.',
        'tecnicos': 'Técnicos Especializados',
        'tecnicos_desc': 'Profesionales en refrigeración que buscan optimizar su servicio y gestionar mejor sus clientes.',
        'proveedores': 'Proveedores de Equipos',
        'proveedores_desc': 'Empresas que venden y dan mantenimiento a equipos de refrigeración comercial e industrial.',

        // Funcionalidades Section
        'funcionalidades_title': 'Funcionalidades Clave',
        'monitoreo_title': 'Monitoreo en Tiempo Real',
        'monitoreo_desc': 'Seguimiento de temperatura, consumo energético y tiempo de uso de tus equipos.',
        'reportes_title': 'Reportes Técnicos',
        'reportes_desc': 'Generación automática de informes detallados sobre el estado de tus equipos.',
        'alertas_title': 'Alertas Automatizadas',
        'alertas_desc': 'Notificaciones inmediatas ante fallas o comportamientos anómalos.',
        'historial_title': 'Historial de Rendimiento',
        'historial_desc': 'Registro completo del funcionamiento histórico de cada equipo.',
        'mantenimiento_title': 'Mantenimiento Programado',
        'mantenimiento_desc': 'Planificación inteligente de mantenimientos preventivos.',
        'conexion_title': 'Conexión con Técnicos',
        'conexion_desc': 'Acceso directo a profesionales especializados en tu zona.',

        // Beneficios Section
        'beneficios_title': 'Beneficios',
        'para_negocios': 'Para Negocios',
        'para_tecnicos': 'Para Técnicos',
        'beneficio1_negocios': 'Reducción de pérdidas por fallas inesperadas',
        'beneficio2_negocios': 'Optimización del consumo energético',
        'beneficio3_negocios': 'Prolongación de la vida útil de los equipos',
        'beneficio4_negocios': 'Respuesta rápida ante emergencias',
        'beneficio5_negocios': 'Cumplimiento de normativas sanitarias',
        'beneficio1_tecnicos': 'Gestión centralizada de todos los clientes',
        'beneficio2_tecnicos': 'Acceso al historial técnico completo',
        'beneficio3_tecnicos': 'Generación automática de reportes',
        'beneficio4_tecnicos': 'Planificación eficiente de visitas técnicas',
        'beneficio5_tecnicos': 'Nuevas oportunidades de negocio',

        // Nosotros Section
        'nosotros_title': 'Sobre OsitoPolar',
        'mision_title': 'Misión',
        'mision_desc': 'Proporcionar una solución tecnológica inteligente que permita a los negocios proteger su inventario y optimizar la gestión de sus equipos de refrigeración, ofreciendo al mismo tiempo herramientas especializadas para mejorar la eficiencia operativa de los técnicos y proveedores del sector.',
        'vision_title': 'Visión',
        'vision_desc': 'Ser la empresa líder en gestión y mantenimiento de equipos de refrigeración, empezando por Lima y prontamente expandirnos a más lugares del Perú.',

        // Cómo funciona Section
        'como_funciona_title': '¿Cómo Funciona?',
        'paso1_title': 'Conecta tus equipos',
        'paso1_desc': 'Instalamos sensores IoT compatibles con cualquier equipo de refrigeración.',
        'paso2_title': 'Monitoreo automático',
        'paso2_desc': 'Nuestro sistema comienza a recopilar y analizar datos en tiempo real.',
        'paso3_title': 'Recibe alertas',
        'paso3_desc': 'Te notificamos ante cualquier anomalía o necesidad de mantenimiento.',
        'paso4_title': 'Contacto con técnicos',
        'paso4_desc': 'Conectamos automáticamente con especialistas disponibles en tu zona.',

        // Testimonios Section
        'testimonios_title': 'Lo que dicen nuestros clientes',

        // CTA Section
        'cta_title': '¿Listo para optimizar la gestión de tus equipos de refrigeración?',
        'cta_subtitle': 'Solicita una demostración gratuita y descubre cómo OsitoPolar puede transformar tu negocio.',
        'nombre': 'Nombre completo',
        'correo': 'Correo electrónico',
        'telefono': 'Teléfono',
        'tipo_negocio': 'Tipo de negocio',
        'tipo_negocio_placeholder': 'Tipo de negocio',
        'supermercado': 'Supermercado',
        'restaurante': 'Restaurante',
        'farmacia': 'Farmacia/Laboratorio',
        'tecnico': 'Técnico de refrigeración',
        'proveedor': 'Proveedor de equipos',
        'otro': 'Otro',
        'solicitar': 'Solicitar Demo',
        'form_success': '¡Gracias por tu interés! Te contactaremos pronto para coordinar tu demostración.',

        // Footer
        'gestion_inteligente': 'Gestión inteligente de equipos de refrigeración',
        'empresa': 'Empresa',
        'sobre_nosotros': 'Sobre nosotros',
        'nuestro_equipo': 'Nuestro equipo',
        'blog': 'Blog',
        'prensa': 'Prensa',
        'soluciones': 'Soluciones',
        'para_negocios_footer': 'Para negocios',
        'para_tecnicos_footer': 'Para técnicos',
        'para_proveedores': 'Para proveedores',
        'precios': 'Precios',
        'soporte': 'Soporte',
        'ayuda': 'Centro de ayuda',
        'tutoriales': 'Tutoriales',
        'faq': 'Preguntas frecuentes',
        'contacto_footer': 'Contacto',
        'derechos': 'Todos los derechos reservados.',
        'terminos': 'Términos y condiciones',
        'privacidad': 'Política de privacidad',
        'cookies': 'Política de cookies',
        'cookies_mensaje': 'Utilizamos cookies para mejorar tu experiencia en nuestro sitio web.',
        'mas_info': 'Más información',
        'aceptar': 'Aceptar',
        'rechazar': 'Rechazar',
        'volver_arriba': 'Volver arriba',

        // Errores formulario
        'error_nombre': 'Por favor, ingresa tu nombre',
        'error_email': 'Por favor, ingresa un email válido',
        'error_telefono': 'Por favor, ingresa tu teléfono',
        'error_tipo_negocio': 'Por favor, selecciona tu tipo de negocio'
    },
    'en': {
        // Header
        'solicitar_demo': 'Request Demo',
        'inicio': 'Home',
        'funcionalidades': 'Features',
        'beneficios': 'Benefits',
        'nosotros': 'About Us',
        'contacto': 'Contact',

        // Hero Section
        'hero_title': 'Smart Refrigeration Equipment Management',
        'hero_subtitle': 'We connect businesses with specialized technicians for preventive and automated maintenance of freezing systems.',
        'demo_gratis': 'Request Free Demo',
        'como_funciona': 'How it works?',
        'confian': 'They trust us:',

        // Para quién Section
        'para_quien': 'Who is OsitoPolar for?',
        'negocios_frio': 'Businesses with Cold Equipment',
        'negocios_desc': 'Supermarkets, minimarkets, laboratories, restaurants, and companies in the food or pharmaceutical sector.',
        'tecnicos': 'Specialized Technicians',
        'tecnicos_desc': 'Refrigeration professionals looking to optimize their service and better manage their clients.',
        'proveedores': 'Equipment Suppliers',
        'proveedores_desc': 'Companies that sell and maintain commercial and industrial refrigeration equipment.',

        // Funcionalidades Section
        'funcionalidades_title': 'Key Features',
        'monitoreo_title': 'Real-Time Monitoring',
        'monitoreo_desc': 'Track temperature, energy consumption and usage time of your equipment.',
        'reportes_title': 'Technical Reports',
        'reportes_desc': 'Automatic generation of detailed reports on the status of your equipment.',
        'alertas_title': 'Automated Alerts',
        'alertas_desc': 'Immediate notifications of failures or abnormal behavior.',
        'historial_title': 'Performance History',
        'historial_desc': 'Complete record of the historical operation of each equipment.',
        'mantenimiento_title': 'Scheduled Maintenance',
        'mantenimiento_desc': 'Intelligent planning of preventive maintenance.',
        'conexion_title': 'Connection with Technicians',
        'conexion_desc': 'Direct access to specialized professionals in your area.',

        // Beneficios Section
        'beneficios_title': 'Benefits',
        'para_negocios': 'For Businesses',
        'para_tecnicos': 'For Technicians',
        'beneficio1_negocios': 'Reduction of losses due to unexpected failures',
        'beneficio2_negocios': 'Optimization of energy consumption',
        'beneficio3_negocios': 'Extended equipment lifespan',
        'beneficio4_negocios': 'Quick response to emergencies',
        'beneficio5_negocios': 'Compliance with health regulations',
        'beneficio1_tecnicos': 'Centralized management of all clients',
        'beneficio2_tecnicos': 'Access to complete technical history',
        'beneficio3_tecnicos': 'Automatic report generation',
        'beneficio4_tecnicos': 'Efficient scheduling of technical visits',
        'beneficio5_tecnicos': 'New business opportunities',

        // Nosotros Section
        'nosotros_title': 'About OsitoPolar',
        'mision_title': 'Mission',
        'mision_desc': 'To provide an intelligent technological solution that allows businesses to protect their inventory and optimize the management of their refrigeration equipment, while offering specialized tools to improve the operational efficiency of technicians and suppliers in the sector.',
        'vision_title': 'Vision',
        'vision_desc': 'To be the leading company in refrigeration equipment management and maintenance, starting in Lima and soon expanding to more locations in Peru.',

        // Cómo funciona Section
        'como_funciona_title': 'How Does It Work?',
        'paso1_title': 'Connect your equipment',
        'paso1_desc': 'We install IoT sensors compatible with any refrigeration equipment.',
        'paso2_title': 'Automatic monitoring',
        'paso2_desc': 'Our system begins collecting and analyzing data in real-time.',
        'paso3_title': 'Receive alerts',
        'paso3_desc': 'We notify you of any anomalies or maintenance needs.',
        'paso4_title': 'Contact with technicians',
        'paso4_desc': 'We automatically connect you with available specialists in your area.',

        // Testimonios Section
        'testimonios_title': 'What our clients say',

        // CTA Section
        'cta_title': 'Ready to optimize the management of your refrigeration equipment?',
        'cta_subtitle': 'Request a free demonstration and discover how OsitoPolar can transform your business.',
        'nombre': 'Full name',
        'correo': 'Email',
        'telefono': 'Phone',
        'tipo_negocio': 'Business type',
        'tipo_negocio_placeholder': 'Business type',
        'supermercado': 'Supermarket',
        'restaurante': 'Restaurant',
        'farmacia': 'Pharmacy/Laboratory',
        'tecnico': 'Refrigeration technician',
        'proveedor': 'Equipment provider',
        'otro': 'Other',
        'solicitar': 'Request Demo',
        'form_success': 'Thank you for your interest! We will contact you soon to coordinate your demonstration.',

        // Footer
        'gestion_inteligente': 'Smart refrigeration equipment management',
        'empresa': 'Company',
        'sobre_nosotros': 'About us',
        'nuestro_equipo': 'Our team',
        'blog': 'Blog',
        'prensa': 'Press',
        'soluciones': 'Solutions',
        'para_negocios_footer': 'For businesses',
        'para_tecnicos_footer': 'For technicians',
        'para_proveedores': 'For suppliers',
        'precios': 'Pricing',
        'soporte': 'Support',
        'ayuda': 'Help center',
        'tutoriales': 'Tutorials',
        'faq': 'FAQ',
        'contacto_footer': 'Contact',
        'derechos': 'All rights reserved.',
        'terminos': 'Terms and conditions',
        'privacidad': 'Privacy policy',
        'cookies': 'Cookie policy',
        'cookies_mensaje': 'We use cookies to improve your experience on our website.',
        'mas_info': 'More information',
        'aceptar': 'Accept',
        'rechazar': 'Decline',
        'volver_arriba': 'Back to top',

        // Errores formulario
        'error_nombre': 'Please enter your name',
        'error_email': 'Please enter a valid email',
        'error_telefono': 'Please enter your phone number',
        'error_tipo_negocio': 'Please select your business type'
    }
};

// Función para cambiar el idioma
function changeLanguage(lang) {
    // Guardar preferencia de idioma
    localStorage.setItem('language', lang);

    // Actualizar textos en la página
    updateContent(lang);

    // Actualizar el botón de idioma
    const languageToggle = document.getElementById('language-toggle');
    if (languageToggle) {
        languageToggle.textContent = lang === 'es' ? 'EN' : 'ES';
    }
}

// Función para obtener traducción de una clave
function getTranslation(key, lang) {
    return translations[lang][key] || key;
}

// Función para actualizar todos los contenidos de la página
function updateContent(lang) {
    // Actualizar los elementos con atributo data-i18n
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });

    // Actualizar atributos especiales como title, alt, etc.
    document.querySelectorAll('[data-i18n-attr]').forEach(element => {
        const data = element.getAttribute('data-i18n-attr').split(',');
        data.forEach(item => {
            const [attr, key] = item.split(':');
            if (attr && key && translations[lang][key]) {
                element.setAttribute(attr, translations[lang][key]);
            }
        });
    });

    // Manejar casos especiales como selects
    const tipoNegocio = document.getElementById('tipo-negocio');
    if (tipoNegocio) {
        // Guardar valor seleccionado
        const selectedValue = tipoNegocio.value;

        // Actualizar option por defecto
        const defaultOption = tipoNegocio.querySelector('option[value=""]');
        if (defaultOption) {
            defaultOption.textContent = translations[lang]['tipo_negocio_placeholder'];
        }

        // Actualizar resto de opciones
        const optionKeys = ['supermercado', 'restaurante', 'farmacia', 'tecnico', 'proveedor', 'otro'];
        optionKeys.forEach(key => {
            const option = tipoNegocio.querySelector(`option[value="${key}"]`);
            if (option) {
                option.textContent = translations[lang][key];
            }
        });

        // Restaurar valor seleccionado
        tipoNegocio.value = selectedValue;
    }

    // Actualizar mensajes de error del formulario
    const errorMessages = {
        'nombre-error': 'error_nombre',
        'email-error': 'error_email',
        'telefono-error': 'error_telefono',
        'tipo-negocio-error': 'error_tipo_negocio'
    };

    for (const [id, key] of Object.entries(errorMessages)) {
        const element = document.getElementById(id);
        if (element && element.textContent) {
            element.textContent = translations[lang][key];
        }
    }
}

// Función para agregar atributos data-i18n dinámicamente
function addTranslationAttributes() {
    // Navegación
    const navItems = {
        'Inicio': 'inicio',
        'Funcionalidades': 'funcionalidades',
        'Beneficios': 'beneficios',
        'Nosotros': 'nosotros',
        'Contacto': 'contacto'
    };

    document.querySelectorAll('.nav-menu a').forEach(item => {
        const text = item.textContent.trim();
        if (navItems[text]) {
            item.setAttribute('data-i18n', navItems[text]);
        }
    });

    // CTA botón
    document.querySelectorAll('.btn').forEach(btn => {
        const text = btn.textContent.trim();
        if (text === 'Solicitar Demo') {
            btn.setAttribute('data-i18n', 'solicitar_demo');
        } else if (text === 'Solicitar Demo Gratis') {
            btn.setAttribute('data-i18n', 'demo_gratis');
        } else if (text === '¿Cómo funciona?') {
            btn.setAttribute('data-i18n', 'como_funciona');
        } else if (text === 'Aceptar') {
            btn.setAttribute('data-i18n', 'aceptar');
        } else if (text === 'Rechazar') {
            btn.setAttribute('data-i18n', 'rechazar');
        }
    });

    // Hero section
    const heroTitle = document.querySelector('.hero-content h2');
    if (heroTitle) heroTitle.setAttribute('data-i18n', 'hero_title');

    const heroSubtitle = document.querySelector('.hero-content p');
    if (heroSubtitle) heroSubtitle.setAttribute('data-i18n', 'hero_subtitle');

    // Confían en nosotros
    const confianText = document.querySelector('.hero-clients p');
    if (confianText) confianText.setAttribute('data-i18n', 'confian');

    // Para quién section
    const paraQuienTitle = document.querySelector('#para-quien .section-title');
    if (paraQuienTitle) paraQuienTitle.setAttribute('data-i18n', 'para_quien');

    // Cards para quién
    const cardTitles = {
        'Negocios con Equipos de Frío': 'negocios_frio',
        'Técnicos Especializados': 'tecnicos',
        'Proveedores de Equipos': 'proveedores'
    };

    document.querySelectorAll('.card h3').forEach(title => {
        const text = title.textContent.trim();
        if (cardTitles[text]) {
            title.setAttribute('data-i18n', cardTitles[text]);

            // También el párrafo correspondiente
            const description = title.nextElementSibling;
            if (description && description.tagName === 'P') {
                description.setAttribute('data-i18n', cardTitles[text] + '_desc');
            }
        }
    });

    // Funcionalidades section
    const funcionalidadesTitle = document.querySelector('#funcionalidades .section-title');
    if (funcionalidadesTitle) funcionalidadesTitle.setAttribute('data-i18n', 'funcionalidades_title');

    // Features
    const featureTitles = {
        'Monitoreo en Tiempo Real': 'monitoreo_title',
        'Reportes Técnicos': 'reportes_title',
        'Alertas Automatizadas': 'alertas_title',
        'Historial de Rendimiento': 'historial_title',
        'Mantenimiento Programado': 'mantenimiento_title',
        'Conexión con Técnicos': 'conexion_title'
    };

    document.querySelectorAll('.feature h3').forEach(title => {
        const text = title.textContent.trim();
        if (featureTitles[text]) {
            title.setAttribute('data-i18n', featureTitles[text]);

            // También el párrafo correspondiente
            const description = title.nextElementSibling;
            if (description && description.tagName === 'P') {
                description.setAttribute('data-i18n', featureTitles[text].replace('_title', '_desc'));
            }
        }
    });

    // Beneficios section
    const beneficiosTitle = document.querySelector('#beneficios .section-title');
    if (beneficiosTitle) beneficiosTitle.setAttribute('data-i18n', 'beneficios_title');

    // Tabs de beneficios
    document.querySelectorAll('.tab-btn').forEach(tab => {
        const text = tab.textContent.trim();
        if (text === 'Para Negocios') {
            tab.setAttribute('data-i18n', 'para_negocios');
        } else if (text === 'Para Técnicos') {
            tab.setAttribute('data-i18n', 'para_tecnicos');
        }
    });

    // Lista de beneficios
    const beneficiosNegocios = [
        'beneficio1_negocios',
        'beneficio2_negocios',
        'beneficio3_negocios',
        'beneficio4_negocios',
        'beneficio5_negocios'
    ];

    const beneficiosTecnicos = [
        'beneficio1_tecnicos',
        'beneficio2_tecnicos',
        'beneficio3_tecnicos',
        'beneficio4_tecnicos',
        'beneficio5_tecnicos'
    ];

    document.querySelectorAll('#negocios .benefit-item p').forEach((item, index) => {
        if (index < beneficiosNegocios.length) {
            item.setAttribute('data-i18n', beneficiosNegocios[index]);
        }
    });

    document.querySelectorAll('#tecnicos .benefit-item p').forEach((item, index) => {
        if (index < beneficiosTecnicos.length) {
            item.setAttribute('data-i18n', beneficiosTecnicos[index]);
        }
    });

    // Nosotros section
    const nosotrosTitle = document.querySelector('#nosotros .section-title');
    if (nosotrosTitle) nosotrosTitle.setAttribute('data-i18n', 'nosotros_title');

    // Misión y Visión
    const misionTitle = document.querySelector('.mission h3');
    if (misionTitle) misionTitle.setAttribute('data-i18n', 'mision_title');

    const misionDesc = document.querySelector('.mission p');
    if (misionDesc) misionDesc.setAttribute('data-i18n', 'mision_desc');

    const visionTitle = document.querySelector('.vision h3');
    if (visionTitle) visionTitle.setAttribute('data-i18n', 'vision_title');

    const visionDesc = document.querySelector('.vision p');
    if (visionDesc) visionDesc.setAttribute('data-i18n', 'vision_desc');

    // Cómo funciona section
    const comoFuncionaTitle = document.querySelector('#como-funciona .section-title');
    if (comoFuncionaTitle) comoFuncionaTitle.setAttribute('data-i18n', 'como_funciona_title');

    // Pasos
    const pasosTitles = [
        'paso1_title',
        'paso2_title',
        'paso3_title',
        'paso4_title'
    ];

    const pasosDesc = [
        'paso1_desc',
        'paso2_desc',
        'paso3_desc',
        'paso4_desc'
    ];

    document.querySelectorAll('.step-content h3').forEach((title, index) => {
        if (index < pasosTitles.length) {
            title.setAttribute('data-i18n', pasosTitles[index]);
        }
    });

    document.querySelectorAll('.step-content p').forEach((desc, index) => {
        if (index < pasosDesc.length) {
            desc.setAttribute('data-i18n', pasosDesc[index]);
        }
    });

    // Testimonios
    const testimoniosTitle = document.querySelector('.testimonials .section-title');
    if (testimoniosTitle) testimoniosTitle.setAttribute('data-i18n', 'testimonios_title');

    // Sección CTA
    const ctaTitle = document.querySelector('.cta-content h2');
    if (ctaTitle) ctaTitle.setAttribute('data-i18n', 'cta_title');

    const ctaSubtitle = document.querySelector('.cta-content > p');
    if (ctaSubtitle) ctaSubtitle.setAttribute('data-i18n', 'cta_subtitle');

    // Formulario
    const nombre = document.getElementById('nombre');
    if (nombre) nombre.setAttribute('data-i18n', 'nombre');

    const email = document.getElementById('email');
    if (email) email.setAttribute('data-i18n', 'correo');

    const telefono = document.getElementById('telefono');
    if (telefono) telefono.setAttribute('data-i18n', 'telefono');

    // Mensaje de éxito del formulario
    const formSuccess = document.querySelector('.form-success p');
    if (formSuccess) formSuccess.setAttribute('data-i18n', 'form_success');

    // Footer
    const gestionInteligente = document.querySelector('.footer-logo p');
    if (gestionInteligente) gestionInteligente.setAttribute('data-i18n', 'gestion_inteligente');

    // Columnas del footer
    const footerTitles = {
        'Empresa': 'empresa',
        'Soluciones': 'soluciones',
        'Soporte': 'soporte',
        'Contacto': 'contacto_footer'
    };

    document.querySelectorAll('.footer-column h4').forEach(title => {
        const text = title.textContent.trim();
        if (footerTitles[text]) {
            title.setAttribute('data-i18n', footerTitles[text]);
        }
    });

    // Links del footer
    const footerLinks = {
        'Sobre nosotros': 'sobre_nosotros',
        'Nuestro equipo': 'nuestro_equipo',
        'Blog': 'blog',
        'Prensa': 'prensa',
        'Para negocios': 'para_negocios_footer',
        'Para técnicos': 'para_tecnicos_footer',
        'Para proveedores': 'para_proveedores',
        'Precios': 'precios',
        'Centro de ayuda': 'ayuda',
        'Tutoriales': 'tutoriales',
        'Preguntas frecuentes': 'faq',
        'Términos y condiciones': 'terminos',
        'Política de privacidad': 'privacidad',
        'Política de cookies': 'cookies'
    };

    document.querySelectorAll('.footer-column a, .legal-links a').forEach(link => {
        const text = link.textContent.trim();
        if (footerLinks[text]) {
            link.setAttribute('data-i18n', footerLinks[text]);
        }
    });

    // Back to top button
    const backToTopBtn = document.getElementById('back-to-top');
    if (backToTopBtn) {
        backToTopBtn.setAttribute('data-i18n-attr', 'aria-label:volver_arriba');
    }

    // Copyright
    const copyright = document.querySelector('.footer-bottom p');
    if (copyright) {
        const yearMatch = copyright.textContent.match(/\d{4}/);
        if (yearMatch) {
            const year = yearMatch[0];
            copyright.innerHTML = `&copy; ${year} OsitoPolar. <span data-i18n="derechos">Todos los derechos reservados.</span>`;
        }
    }

    // Cookie consent
    const cookieMessage = document.querySelector('.cookie-consent p');
    if (cookieMessage) {
        cookieMessage.innerHTML = `<span data-i18n="cookies_mensaje">Utilizamos cookies para mejorar tu experiencia en nuestro sitio web.</span> <a href="#cookies" data-i18n="mas_info">Más información</a>`;
    }

    const cookieAccept = document.getElementById('cookie-accept');
    if (cookieAccept) cookieAccept.setAttribute('data-i18n', 'aceptar');

    const cookieDecline = document.getElementById('cookie-decline');
    if (cookieDecline) cookieDecline.setAttribute('data-i18n', 'rechazar');
}