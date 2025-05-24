// Object with all translations
const translations = {
    'es': {
        // Header
        'request_demo': 'Solicitar Demo',
        'home': 'Inicio',
        'features': 'Funcionalidades',
        'benefits': 'Beneficios',
        'about_us': 'Nosotros',
        'contact': 'Contacto',

        // Hero Section
        'hero_title': 'Gestión Inteligente de Equipos de Refrigeración',
        'hero_subtitle': 'Conectamos negocios con técnicos especializados para un mantenimiento preventivo y automatizado de sistemas de congelación.',
        'free_demo': 'Pruebalo ahora',
        'how_it_works': '¿Cómo funciona?',
        'trust_us': 'Confían en nosotros:',

        // For whom Section
        'for_whom': '¿Para quién es OsitoPolar?',
        'businesses_cold': 'Negocios con Equipos de Frío',
        'businesses_desc': 'Supermercados, minimarkets, laboratorios, restaurantes y empresas del sector alimentario o farmacéutico.',
        'technicians': 'Técnicos Especializados',
        'technicians_desc': 'Profesionales en refrigeración que buscan optimizar su servicio y gestionar mejor sus clientes.',
        'suppliers': 'Proveedores de Equipos',
        'suppliers_desc': 'Empresas que venden y dan mantenimiento a equipos de refrigeración comercial e industrial.',

        // Features Section
        'features_title': 'Funcionalidades Clave',
        'monitoring_title': 'Monitoreo en Tiempo Real',
        'monitoring_desc': 'Seguimiento de temperatura, consumo energético y tiempo de uso de tus equipos.',
        'reports_title': 'Reportes Técnicos',
        'reports_desc': 'Generación automática de informes detallados sobre el estado de tus equipos.',
        'alerts_title': 'Alertas Automatizadas',
        'alerts_desc': 'Notificaciones inmediatas ante fallas o comportamientos anómalos.',
        'history_title': 'Historial de Rendimiento',
        'history_desc': 'Registro completo del funcionamiento histórico de cada equipo.',
        'maintenance_title': 'Mantenimiento Programado',
        'maintenance_desc': 'Planificación inteligente de mantenimientos preventivos.',
        'connection_title': 'Conexión con Técnicos',
        'connection_desc': 'Acceso directo a profesionales especializados en tu zona.',

        // Benefits Section
        'benefits_title': 'Beneficios',
        'for_businesses': 'Para Negocios',
        'for_technicians': 'Para Proveedores',
        'benefit1_businesses': 'Reducción de pérdidas por fallas inesperadas',
        'benefit2_businesses': 'Optimización del consumo energético',
        'benefit3_businesses': 'Prolongación de la vida útil de los equipos',
        'benefit4_businesses': 'Respuesta rápida ante emergencias',
        'benefit5_businesses': 'Cumplimiento de normativas sanitarias',
        'benefit1_technicians': 'Gestión centralizada de todos los clientes',
        'benefit2_technicians': 'Acceso al historial técnico completo',
        'benefit3_technicians': 'Generación automática de reportes',
        'benefit4_technicians': 'Planificación eficiente de visitas técnicas',
        'benefit5_technicians': 'Nuevas oportunidades de negocio',

        // About us Section
        'about_us_title': 'Sobre OsitoPolar',
        'mission_title': 'Misión',
        'mission_desc': 'Proporcionar una solución tecnológica inteligente que permita a los negocios proteger su inventario y optimizar la gestión de sus equipos de refrigeración, ofreciendo al mismo tiempo herramientas especializadas para mejorar la eficiencia operativa de los técnicos y proveedores del sector.',
        'vision_title': 'Visión',
        'vision_desc': 'Ser la empresa líder en gestión y mantenimiento de equipos de refrigeración, empezando por Lima y prontamente expandirnos a más lugares del Perú.',
        // Video CTA Section
        'video_cta_title': 'Ve OsitoPolar en Acción',
        'video_cta_subtitle': 'Mira cómo funciona nuestro sistema inteligente de gestión de refrigeración y descubre por qué las empresas confían en nosotros para proteger su valioso inventario.',
        'video_benefit_1': 'Resumen del producto en 3 minutos',
        'video_benefit_2': 'Recorrido del dashboard en tiempo real',
        'video_benefit_3': 'Historias de éxito de clientes',
        'try_free_demo': 'Prueba Demo Gratis',
        'request_consultation': 'Solicitar Consulta',
        'video_title': 'OsitoPolar: Gestión Inteligente de Refrigeración',
        'video_duration': 'Duración: 3:24',

        // How it works Section
        'how_it_works_title': '¿Cómo Funciona?',
        'step1_title': 'Conecta tus equipos',
        'step1_desc': 'Instalamos sensores IoT compatibles con cualquier equipo de refrigeración.',
        'step2_title': 'Monitoreo automático',
        'step2_desc': 'Nuestro sistema comienza a recopilar y analizar datos en tiempo real.',
        'step3_title': 'Recibe alertas',
        'step3_desc': 'Te notificamos ante cualquier anomalía o necesidad de mantenimiento.',
        'step4_title': 'Contacto con técnicos',
        'step4_desc': 'Conectamos automáticamente con especialistas disponibles en tu zona.',
        // Pricing Plans
        'pricing_title':             'Precios',
        'pricing_tab_users':         'Para Usuarios',
        'pricing_tab_providers':     'Para Proveedores',

// Plan Titles - Users
        'plan_basic_title':          'Básico (Osito Polar)',
        'plan_basic_price':          'S/. 69.99 (USD $18.99)/mes',
        'plan_basic_subtitle':       'Hasta 3 equipos',

        'plan_standard_title':       'Estándar (Osito Nevado)',
        'plan_standard_price':       'S/. 129.99 (USD $35.13)/mes',
        'plan_standard_subtitle':    'Hasta 8 equipos',

        'plan_premium_title':        'Premium (Osito Glacial)',
        'plan_premium_price':        'S/. 249.99 (USD $67.56)/mes',
        'plan_premium_subtitle':     'Hasta 20 equipos',

        // Plan Titles - Providers
        'plan_small_title':          'Pequeña Empresa',
        'plan_small_price':          'S/. 149.99 (USD $40.51)/mes',
        'plan_small_subtitle':       'Hasta 10 clientes',

        'plan_medium_title':         'Mediana Empresa',
        'plan_medium_price':         'S/. 299.99 (USD $81.08)/mes',
        'plan_medium_subtitle':      'Hasta 30 clientes',

        'plan_enterprise_title':     'Enterprise Premium',
        'plan_enterprise_price':     'S/. 599.99 (USD $162.16)/mes',
        'plan_enterprise_subtitle':  'Clientes ilimitados',
// Características del plan Básico
        'basic_feature_1': 'Monitoreo de temperatura en tiempo real',
        'basic_feature_2': 'Alertas por email de fallas críticas',
        'basic_feature_3': 'Control remoto de encendido/apagado',
        'basic_feature_4': 'Registro de historial de mantenimiento',
        'basic_feature_5': 'Soporte por email',

// Características del plan Estándar
        'standard_feature_1': 'Todo lo incluido en Básico',
        'standard_feature_2': 'Monitoreo avanzado (energía, uso)',
        'standard_feature_3': 'Ajuste remoto de temperatura',
        'standard_feature_4': 'Informes mensuales de energía',
        'standard_feature_5': 'Mantenimiento programado',

// Características del plan Premium
        'premium_feature_1': 'Todo lo incluido en Estándar',
        'premium_feature_2': 'Monitoreo completo (temp, energía, tiempo de funcionamiento)',
        'premium_feature_3': 'Mantenimiento preventivo auto-programado',
        'premium_feature_4': 'Panel de análisis exclusivo',

// Características del plan Pequeña Empresa
        'small_feature_1': 'Gestión de clientes y unidades',
        'small_feature_2': 'Programación de visitas técnicas',
        'small_feature_3': 'Informes técnicos básicos',
        'small_feature_4': 'Notificaciones de fallas de clientes',
        'small_feature_5': 'Registro de historial de servicio',
        'small_feature_6': 'Soporte por email',

// Características del plan Mediana Empresa
        'medium_feature_1': 'Todo lo incluido en Pequeña Empresa',
        'medium_feature_2': 'Informes técnicos detallados',
        'medium_feature_3': 'Métricas de rendimiento técnico',
        'medium_feature_4': 'Encuestas de satisfacción de clientes',
        'medium_feature_5': 'Panel de servicio',
        'medium_feature_6': 'Soporte prioritario',

// Características del plan Enterprise
        'enterprise_feature_1': 'Todo lo incluido en Mediana Empresa',
        'enterprise_feature_2': 'Panel de administración avanzado',
        'enterprise_feature_3': 'Alertas de mantenimiento predictivo',
        'enterprise_feature_4': 'Exportación de datos históricos',
        'enterprise_feature_5': 'Informes personalizados y marca personalizada',
        // Testimonials Section
        'testimonials_title': 'Lo que dicen nuestros clientes',

        'testimonial_1': '"Desde que implementamos OsitoPolar, hemos reducido las pérdidas por fallas en nuestros equipos de refrigeración en un 40%. El sistema de alertas nos ha salvado varias veces de perder inventario valioso."',
        'testimonial_2': '"Como técnico especializado, OsitoPolar ha revolucionado mi forma de trabajar con mi Empresa. Ahora puedo ver el historial completo de cada equipo antes de visitarlo y generar informes profesionales en minutos."',
        'testimonial_3': '"La tranquilidad que proporciona saber que nuestros equipos están siendo monitoreados 24/7 no tiene precio. Además, hemos notado ahorros significativos en nuestro consumo de electricidad gracias a las recomendaciones del sistema."',

        'testimonial_position_1': 'Gerente de Operaciones, Supermercados ABC',
        'testimonial_position_2': 'Técnica de Refrigeración Industrial',
        'testimonial_position_3': 'Propietario, Restaurante El Glaciar',

        'prev_testimonial': 'Testimonio anterior',
        'next_testimonial': 'Siguiente testimonio',
        // CTA Section
        'cta_title': '¿Listo para optimizar la gestión de tus equipos de refrigeración?',
        'cta_subtitle': 'Solicita una demostración gratuita y descubre cómo OsitoPolar puede transformar tu negocio.',
        'full_name': 'Nombre completo',
        'email': 'Correo electrónico',
        'phone': 'Teléfono',
        'business_type': 'Tipo de negocio',
        'business_type_placeholder': 'Tipo de negocio',
        'supermarket': 'Supermercado',
        'restaurant': 'Restaurante',
        'pharmacy': 'Farmacia/Laboratorio',
        'technician': 'Técnico de refrigeración',
        'provider': 'Proveedor de equipos',
        'other': 'Otro',
        'request': 'Solicitar Demo',
        'form_success': '¡Gracias por tu interés! Te contactaremos pronto para coordinar tu demostración.',

        // Footer
        'smart_management': 'Gestión inteligente de equipos de refrigeración',
        'company': 'Empresa',
        'about_us_footer': 'Sobre nosotros',
        'our_team': 'Nuestro equipo',
        'blog': 'Blog',
        'press': 'Prensa',
        'solutions': 'Soluciones',
        'for_businesses_footer': 'Para negocios',
        'for_technicians_footer': 'Para técnicos',
        'for_suppliers': 'Para proveedores',
        'pricing': 'Precios',
        'support': 'Soporte',
        'help_center': 'Centro de ayuda',
        'tutorials': 'Tutoriales',
        'faq': 'Preguntas frecuentes',
        'contact_footer': 'Contacto',
        'rights_reserved': 'Todos los derechos reservados.',
        'terms': 'Términos y condiciones',
        'privacy': 'Política de privacidad',
        'cookies_policy': 'Política de cookies',
        'cookies_message': 'Utilizamos cookies para mejorar tu experiencia en nuestro sitio web.',
        'more_info': 'Más información',
        'accept': 'Aceptar',
        'decline': 'Rechazar',
        'back_to_top': 'Volver arriba',
        // Team Video Component
        'team_video_title': 'Conoce Nuestro Equipo',
        'team_video_subtitle': 'Conoce a las personas detrás de OsitoPolar',
        'play_team_video': 'Reproducir video de presentación del equipo',
        'no_video_title': 'Video Próximamente',
        'no_video_message': 'Estamos preparando un emocionante video de presentación del equipo. ¡Mantente atento!',
        'back_to_photo': 'Volver a la Foto',
        // Form errors
        'error_name': 'Por favor, ingresa tu nombre',
        'error_email': 'Por favor, ingresa un email válido',
        'error_phone': 'Por favor, ingresa tu teléfono',
        'error_business_type': 'Por favor, selecciona tu tipo de negocio'
    },
    'en': {
        // No need to define English translations as they are the default in HTML file bruh
    }
};

// Function to change language
function changeLanguage(lang) {
    // Save language preference
    localStorage.setItem('language', lang);

    // If switching to English, restore original HTML content
    if (lang === 'en') {
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            // Reset to original English content
            if (element.hasAttribute('data-i18n-original')) {
                const originalText = element.getAttribute('data-i18n-original');
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = originalText;
                } else {
                    element.textContent = originalText;
                }
            }
        });
    }
    // If switching to Spanish or another language, translate content
    else {
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');

            // Store original English text if not already stored
            if (!element.hasAttribute('data-i18n-original')) {
                const originalText = element.tagName === 'INPUT' || element.tagName === 'TEXTAREA'
                    ? element.placeholder
                    : element.textContent;
                element.setAttribute('data-i18n-original', originalText);
            }

            // Set translated text
            if (translations[lang] && translations[lang][key]) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = translations[lang][key];
                } else {
                    element.textContent = translations[lang][key];
                }
            }
        });
    }

    // Update special attributes like title, alt, etc.
    document.querySelectorAll('[data-i18n-attr]').forEach(element => {
        const data = element.getAttribute('data-i18n-attr').split(',');
        data.forEach(item => {
            const [attr, key] = item.split(':');
            if (attr && key) {
                // For English, restore original attribute if stored
                if (lang === 'en' && element.hasAttribute(`data-i18n-original-${attr}`)) {
                    element.setAttribute(attr, element.getAttribute(`data-i18n-original-${attr}`));
                }
                // For other languages, translate and store original if needed
                else if (lang !== 'en' && translations[lang] && translations[lang][key]) {
                    // Store original English attribute if not already stored
                    if (!element.hasAttribute(`data-i18n-original-${attr}`)) {
                        element.setAttribute(`data-i18n-original-${attr}`, element.getAttribute(attr));
                    }
                    element.setAttribute(attr, translations[lang][key]);
                }
            }
        });
    });

    // Handle special cases like selects
    const businessType = document.getElementById('business-type');
    if (businessType) {
        // Save selected value
        const selectedValue = businessType.value;

        // If not English, translate options
        if (lang !== 'en') {
            // Default option
            const defaultOption = businessType.querySelector('option[value=""]');
            if (defaultOption && translations[lang]['business_type_placeholder']) {
                defaultOption.textContent = translations[lang]['business_type_placeholder'];
            }

            // Other options
            const optionKeys = ['supermarket', 'restaurant', 'pharmacy', 'technician', 'provider', 'other'];
            optionKeys.forEach(key => {
                const option = businessType.querySelector(`option[value="${key}"]`);
                if (option && translations[lang][key]) {
                    option.textContent = translations[lang][key];
                }
            });
        }
        // If English, restore original options
        else {
            // Restore from data attributes if they exist
            businessType.querySelectorAll('option').forEach(option => {
                if (option.hasAttribute('data-i18n-original')) {
                    option.textContent = option.getAttribute('data-i18n-original');
                }
            });
        }

        // Restore selected value
        businessType.value = selectedValue;
    }

    // Update form error messages if present
    const errorMappings = {
        'name-error': 'error_name',
        'email-error': 'error_email',
        'phone-error': 'error_phone',
        'business-type-error': 'error_business_type'
    };

    for (const [id, key] of Object.entries(errorMappings)) {
        const element = document.getElementById(id);
        if (element && element.textContent) {
            if (lang === 'en') {
                // Restore original English error message if stored
                if (element.hasAttribute('data-i18n-original')) {
                    element.textContent = element.getAttribute('data-i18n-original');
                }
            } else if (translations[lang] && translations[lang][key]) {
                // Store original English message if not already stored
                if (!element.hasAttribute('data-i18n-original')) {
                    element.setAttribute('data-i18n-original', element.textContent);
                }
                element.textContent = translations[lang][key];
            }
        }
    }

    // Update the language toggle button
    const languageToggle = document.getElementById('language-toggle');
    if (languageToggle) {
        languageToggle.textContent = lang === 'es' ? 'EN' : 'ES';
    }
}

// Function to add data-i18n attributes dynamically
function addTranslationAttributes() {
    // Navigation
    const navItems = {
        'Home': 'home',
        'Features': 'features',
        'Benefits': 'benefits',
        'About us': 'about_us',
        'Contact': 'contact'
    };

    document.querySelectorAll('.nav-menu a').forEach(item => {
        const text = item.textContent.trim();
        if (navItems[text]) {
            item.setAttribute('data-i18n', navItems[text]);
        }
    });

    // CTA button
    document.querySelectorAll('.btn').forEach(btn => {
        const text = btn.textContent.trim();
        if (text === 'Request Demo') {
            btn.setAttribute('data-i18n', 'request_demo');
        } else if (text === 'Request Free Demo') {
            btn.setAttribute('data-i18n', 'free_demo');
        } else if (text === 'How does it work?') {
            btn.setAttribute('data-i18n', 'how_it_works');
        } else if (text === 'Accept') {
            btn.setAttribute('data-i18n', 'accept');
        } else if (text === 'Decline') {
            btn.setAttribute('data-i18n', 'decline');
        }
    });

    // Hero section
    const heroTitle = document.querySelector('.hero-content h2');
    if (heroTitle) heroTitle.setAttribute('data-i18n', 'hero_title');

    const heroSubtitle = document.querySelector('.hero-content p');
    if (heroSubtitle) heroSubtitle.setAttribute('data-i18n', 'hero_subtitle');

    // Trust us
    const trustText = document.querySelector('.hero-clients p');
    if (trustText) trustText.setAttribute('data-i18n', 'trust_us');

    // For whom section
    const forWhomTitle = document.querySelector('#for-whom .section-title');
    if (forWhomTitle) forWhomTitle.setAttribute('data-i18n', 'for_whom');

    // For whom cards
    const cardTitles = {
        'Businesses with Cold Equipment': 'businesses_cold',
        'Specialized Technicians': 'technicians',
        'Equipment Suppliers': 'suppliers'
    };

    document.querySelectorAll('.card h3').forEach(title => {
        const text = title.textContent.trim();
        if (cardTitles[text]) {
            title.setAttribute('data-i18n', cardTitles[text]);

            // Also corresponding paragraph
            const description = title.nextElementSibling;
            if (description && description.tagName === 'P') {
                description.setAttribute('data-i18n', cardTitles[text] + '_desc');
            }
        }
    });

    // Features section
    const featuresTitle = document.querySelector('#features .section-title');
    if (featuresTitle) featuresTitle.setAttribute('data-i18n', 'features_title');

    // Features
    const featureTitles = {
        'Real-Time Monitoring': 'monitoring_title',
        'Technical Reports': 'reports_title',
        'Automated Alerts': 'alerts_title',
        'Performance History': 'history_title',
        'Scheduled Maintenance': 'maintenance_title',
        'Connection with Technicians': 'connection_title'
    };

    document.querySelectorAll('.feature h3').forEach(title => {
        const text = title.textContent.trim();
        if (featureTitles[text]) {
            title.setAttribute('data-i18n', featureTitles[text]);

            // Also corresponding paragraph
            const description = title.nextElementSibling;
            if (description && description.tagName === 'P') {
                description.setAttribute('data-i18n', featureTitles[text].replace('_title', '_desc'));
            }
        }
    });
    // Video CTA section
    const videoCTATitle = document.querySelector('#video-demo .section-title');
    if (videoCTATitle) videoCTATitle.setAttribute('data-i18n', 'video_cta_title');

    const videoCTASubtitle = document.querySelector('.video-cta-content p');
    if (videoCTASubtitle) videoCTASubtitle.setAttribute('data-i18n', 'video_cta_subtitle');

// Video benefits
    const videoBenefits = [
        'video_benefit_1',
        'video_benefit_2',
        'video_benefit_3'
    ];

    document.querySelectorAll('.video-benefit span').forEach((benefit, index) => {
        if (index < videoBenefits.length) {
            benefit.setAttribute('data-i18n', videoBenefits[index]);
        }
    });

// Video CTA buttons
    document.querySelectorAll('.video-cta-buttons .btn').forEach(btn => {
        const text = btn.textContent.trim();
        if (text === 'Try Free Demo') {
            btn.setAttribute('data-i18n', 'try_free_demo');
        } else if (text === 'Request Consultation') {
            btn.setAttribute('data-i18n', 'request_consultation');
        }
    });

// Video info
    const videoTitle = document.querySelector('.video-info h4');
    if (videoTitle) videoTitle.setAttribute('data-i18n', 'video_title');

    const videoDuration = document.querySelector('.video-info p');
    if (videoDuration) videoDuration.setAttribute('data-i18n', 'video_duration');
    

    // Benefits section
    const benefitsTitle = document.querySelector('#benefits .section-title');
    if (benefitsTitle) benefitsTitle.setAttribute('data-i18n', 'benefits_title');

    // Benefits tabs
    document.querySelectorAll('.tab-btn').forEach(tab => {
        const text = tab.textContent.trim();
        if (text === 'For Business') {
            tab.setAttribute('data-i18n', 'for_businesses');
        } else if (text === 'For Companies') {
            tab.setAttribute('data-i18n', 'for_technicians');
        }
    });

    // Benefits list
    const businessBenefits = [
        'benefit1_businesses',
        'benefit2_businesses',
        'benefit3_businesses',
        'benefit4_businesses',
        'benefit5_businesses'
    ];

    const technicianBenefits = [
        'benefit1_technicians',
        'benefit2_technicians',
        'benefit3_technicians',
        'benefit4_technicians',
        'benefit5_technicians'
    ];

    document.querySelectorAll('#negocios .benefit-item p').forEach((item, index) => {
        if (index < businessBenefits.length) {
            item.setAttribute('data-i18n', businessBenefits[index]);
        }
    });

    document.querySelectorAll('#tecnicos .benefit-item p').forEach((item, index) => {
        if (index < technicianBenefits.length) {
            item.setAttribute('data-i18n', technicianBenefits[index]);
        }
    });
    // Pricing section
    const launchPrototypeBtn = document.querySelector('.btn.btn-secondary');
    if (launchPrototypeBtn) launchPrototypeBtn.setAttribute('data-i18n', 'request_demo');

    const tryItNowBtn = document.querySelector('.hero-cta .btn-primary');
    if (tryItNowBtn) tryItNowBtn.setAttribute('data-i18n', 'free_demo');

    // Pricing plan tabs - use the most specific selector possible
    const userTab = document.querySelector('.pricing-tabs .tab-btn[data-target="users"]');
    if (userTab) userTab.setAttribute('data-i18n', 'pricing_tab_users');

    const providersTab = document.querySelector('.pricing-tabs .tab-btn[data-target="providers"]');
    if (providersTab) providersTab.setAttribute('data-i18n', 'pricing_tab_providers');
// Plan titles
    document.querySelectorAll('.plan-card .plan-title').forEach(title => {
        const text = title.textContent.trim();
        if (text === 'Basic (Polar Bear)') {
            title.setAttribute('data-i18n', 'plan_basic_title');
        } else if (text === 'Standard (Snow Bear)') {
            title.setAttribute('data-i18n', 'plan_standard_title');
        } else if (text === 'Premium (Glacial Bear)') {
            title.setAttribute('data-i18n', 'plan_premium_title');
        } else if (text === 'Small Company') {
            title.setAttribute('data-i18n', 'plan_small_title');
        } else if (text === 'Medium Company') {
            title.setAttribute('data-i18n', 'plan_medium_title');
        } else if (text === 'Enterprise Premium') {
            title.setAttribute('data-i18n', 'plan_enterprise_title');
        }
    });

// Plan prices
    document.querySelectorAll('.plan-card .plan-price').forEach(price => {
        const titleElement = price.parentElement.querySelector('.plan-title');
        if (titleElement) {
            const titleText = titleElement.textContent.trim();
            if (titleText === 'Basic (Polar Bear)') {
                price.setAttribute('data-i18n', 'plan_basic_price');
            } else if (titleText === 'Standard (Snow Bear)') {
                price.setAttribute('data-i18n', 'plan_standard_price');
            } else if (titleText === 'Premium (Glacial Bear)') {
                price.setAttribute('data-i18n', 'plan_premium_price');
            } else if (titleText === 'Small Company') {
                price.setAttribute('data-i18n', 'plan_small_price');
            } else if (titleText === 'Medium Company') {
                price.setAttribute('data-i18n', 'plan_medium_price');
            } else if (titleText === 'Enterprise Premium') {
                price.setAttribute('data-i18n', 'plan_enterprise_price');
            }
        }
    });
    const planFeatures = {
        'Real-time temperature monitoring': 'basic_feature_1',
        'Critical-fault email alerts': 'basic_feature_2',
        'Remote on/off control': 'basic_feature_3',
        'Maintenance history log': 'basic_feature_4',
        'Email support': 'basic_feature_5',

        'Everything in Basic': 'standard_feature_1',
        'Advanced monitoring (energy, usage)': 'standard_feature_2',
        'Remote temperature adjustment': 'standard_feature_3',
        'Monthly energy reports': 'standard_feature_4',
        'Scheduled maintenance': 'standard_feature_5',

        'Everything in Standard': 'premium_feature_1',
        'Full monitoring (temp, energy, run-time)': 'premium_feature_2',
        'Auto-scheduled preventive maintenance': 'premium_feature_3',
        'Exclusive analytics dashboard': 'premium_feature_4',

        'Client & unit management': 'small_feature_1',
        'Technician visit scheduling': 'small_feature_2',
        'Basic technical reports': 'small_feature_3',
        'Client-fault notifications': 'small_feature_4',
        'Service history log': 'small_feature_5',

        'Everything in Small Company': 'medium_feature_1',
        'Detailed technical reports': 'medium_feature_2',
        'Tech performance metrics': 'medium_feature_3',
        'Client feedback surveys': 'medium_feature_4',
        'Service dashboard': 'medium_feature_5',
        'Priority support': 'medium_feature_6',

        'Everything in Medium Company': 'enterprise_feature_1',
        'Advanced admin dashboard': 'enterprise_feature_2',
        'Predictive maintenance alerts': 'enterprise_feature_3',
        'Historical data exports': 'enterprise_feature_4',
        'Custom reporting & branding': 'enterprise_feature_5'
    };

    document.querySelectorAll('.plan-features li').forEach(feature => {
        const text = feature.textContent.trim();
        if (planFeatures[text]) {
            feature.setAttribute('data-i18n', planFeatures[text]);
        }
    });
// Plan subtitles
    document.querySelectorAll('.plan-card .plan-subtitle').forEach(subtitle => {
        const titleElement = subtitle.parentElement.querySelector('.plan-title');
        if (titleElement) {
            const titleText = titleElement.textContent.trim();
            if (titleText === 'Basic (Polar Bear)') {
                subtitle.setAttribute('data-i18n', 'plan_basic_subtitle');
            } else if (titleText === 'Standard (Snow Bear)') {
                subtitle.setAttribute('data-i18n', 'plan_standard_subtitle');
            } else if (titleText === 'Premium (Glacial Bear)') {
                subtitle.setAttribute('data-i18n', 'plan_premium_subtitle');
            } else if (titleText === 'Small Company') {
                subtitle.setAttribute('data-i18n', 'plan_small_subtitle');
            } else if (titleText === 'Medium Company') {
                subtitle.setAttribute('data-i18n', 'plan_medium_subtitle');
            } else if (titleText === 'Enterprise Premium') {
                subtitle.setAttribute('data-i18n', 'plan_enterprise_subtitle');
            }
        }
    });
// Pricing title 
    const pricingTitle = document.querySelector('#pricing .section-title');
    if (pricingTitle) pricingTitle.setAttribute('data-i18n', 'pricing_title');
    // Explicitly add attributes to problematic elements
    document.querySelectorAll('.nav-menu a').forEach(item => {
        const text = item.textContent.trim();
        if (text === 'Home') item.setAttribute('data-i18n', 'home');
        if (text === 'Features') item.setAttribute('data-i18n', 'features');
        if (text === 'Benefits') item.setAttribute('data-i18n', 'benefits');
        if (text === 'About us') item.setAttribute('data-i18n', 'about_us');
        if (text === 'Contact') item.setAttribute('data-i18n', 'contact');
    });


    const launchBtn = document.querySelector('.cta-buttons .btn-secondary');
    if (launchBtn) launchBtn.setAttribute('data-i18n', 'request_demo');


    const tryItBtn = document.querySelector('.hero-cta .btn-primary');
    if (tryItBtn) tryItBtn.setAttribute('data-i18n', 'free_demo');
    if (pricingTitle) pricingTitle.setAttribute('data-i18n', 'pricing_title');

    document.querySelectorAll('.pricing-tabs .tabs-header .tab-btn').forEach(tab => {
        const text = tab.textContent.trim();
        if (text === 'For Users') tab.setAttribute('data-i18n', 'pricing_tab_users');
        if (text === 'For Providers') tab.setAttribute('data-i18n', 'pricing_tab_providers');
    });
    // About us section
    const aboutUsTitle = document.querySelector('#about-us .section-title');
    if (aboutUsTitle) aboutUsTitle.setAttribute('data-i18n', 'about_us_title');

    // Mission and Vision
    const missionTitle = document.querySelector('.mission h3');
    if (missionTitle) missionTitle.setAttribute('data-i18n', 'mission_title');

    const missionDesc = document.querySelector('.mission p');
    if (missionDesc) missionDesc.setAttribute('data-i18n', 'mission_desc');

    const visionTitle = document.querySelector('.vision h3');
    if (visionTitle) visionTitle.setAttribute('data-i18n', 'vision_title');

    const visionDesc = document.querySelector('.vision p');
    if (visionDesc) visionDesc.setAttribute('data-i18n', 'vision_desc');

    // How it works section
    const howItWorksTitle = document.querySelector('#how-it-works .section-title');
    if (howItWorksTitle) howItWorksTitle.setAttribute('data-i18n', 'how_it_works_title');

    // Steps
    const stepTitles = [
        'step1_title',
        'step2_title',
        'step3_title',
        'step4_title'
    ];

    const stepDescs = [
        'step1_desc',
        'step2_desc',
        'step3_desc',
        'step4_desc'
    ];

    document.querySelectorAll('.step-content h3').forEach((title, index) => {
        if (index < stepTitles.length) {
            title.setAttribute('data-i18n', stepTitles[index]);
        }
    });

    document.querySelectorAll('.step-content p').forEach((desc, index) => {
        if (index < stepDescs.length) {
            desc.setAttribute('data-i18n', stepDescs[index]);
        }
    });

    // Testimonials
    const testimonialsTitle = document.querySelector('.testimonials .section-title');
    if (testimonialsTitle) testimonialsTitle.setAttribute('data-i18n', 'testimonials_title');
    document.querySelectorAll('.testimonial-content > p').forEach((testimonial, index) => {
        testimonial.setAttribute('data-i18n', `testimonial_${index + 1}`);
    });

    document.querySelectorAll('.testimonial-author div p').forEach((position, index) => {
        position.setAttribute('data-i18n', `testimonial_position_${index + 1}`);
    });

    const prevBtn = document.querySelector('.prev-btn');
    if (prevBtn) {
        prevBtn.setAttribute('data-i18n-attr', 'aria-label:prev_testimonial');
    }

    const nextBtn = document.querySelector('.next-btn');
    if (nextBtn) {
        nextBtn.setAttribute('data-i18n-attr', 'aria-label:next_testimonial');
    }
    // CTA Section
    const ctaTitle = document.querySelector('.cta-content h2');
    if (ctaTitle) ctaTitle.setAttribute('data-i18n', 'cta_title');

    const ctaSubtitle = document.querySelector('.cta-content > p');
    if (ctaSubtitle) ctaSubtitle.setAttribute('data-i18n', 'cta_subtitle');

    // Form
    const name = document.getElementById('name');
    if (name) name.setAttribute('data-i18n', 'full_name');

    const email = document.getElementById('email');
    if (email) email.setAttribute('data-i18n', 'email');

    const phone = document.getElementById('phone');
    if (phone) phone.setAttribute('data-i18n', 'phone');

    // Form success message
    const formSuccess = document.querySelector('.form-success p');
    if (formSuccess) formSuccess.setAttribute('data-i18n', 'form_success');

    // Footer
    const smartManagement = document.querySelector('.footer-logo p');
    if (smartManagement) smartManagement.setAttribute('data-i18n', 'smart_management');

    // Footer columns
    const footerTitles = {
        'Company': 'company',
        'Solutions': 'solutions',
        'Support': 'support',
        'Contact': 'contact_footer'
    };

    document.querySelectorAll('.footer-column h4').forEach(title => {
        const text = title.textContent.trim();
        if (footerTitles[text]) {
            title.setAttribute('data-i18n', footerTitles[text]);
        }
    });

    // Footer links
    const footerLinks = {
        'About us': 'about_us_footer',
        'Our team': 'our_team',
        'Blog': 'blog',
        'Press': 'press',
        'For businesses': 'for_businesses_footer',
        'For technicians': 'for_technicians_footer',
        'For suppliers': 'for_suppliers',
        'Pricing': 'pricing',
        'Help center': 'help_center',
        'Tutorials': 'tutorials',
        'FAQ': 'faq',
        'Terms and conditions': 'terms',
        'Privacy policy': 'privacy',
        'Cookie policy': 'cookies_policy'
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
        backToTopBtn.setAttribute('data-i18n-attr', 'aria-label:back_to_top');
    }

    // Copyright
    const copyright = document.querySelector('.footer-bottom p');
    if (copyright) {
        const yearMatch = copyright.textContent.match(/\d{4}/);
        if (yearMatch) {
            const year = yearMatch[0];
            copyright.innerHTML = `&copy; ${year} OsitoPolar. <span data-i18n="rights_reserved">All rights reserved.</span>`;
        }
    }

    // Cookie consent
    const cookieMessage = document.querySelector('.cookie-consent p');
    if (cookieMessage) {
        cookieMessage.innerHTML = `<span data-i18n="cookies_message">We use cookies to improve your experience on our website.</span> <a href="#cookies" data-i18n="more_info">More information</a>`;
    }

    const cookieAccept = document.getElementById('cookie-accept');
    if (cookieAccept) cookieAccept.setAttribute('data-i18n', 'accept');

    const cookieDecline = document.getElementById('cookie-decline');
    if (cookieDecline) cookieDecline.setAttribute('data-i18n', 'decline');
}