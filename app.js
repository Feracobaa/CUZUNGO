// ==========================================================================
// CARTA DE PLATOS (BASE DE DATOS JSON)
// ==========================================================================
const MENU_DATA = {
    entradas: [
        {
            id: "coctel-camaron",
            title: "Coctel de Camarón",
            price: 22000,
            priceLabel: "22k",
            description: "Camarones frescos preparados en una deliciosa salsa de la casa, cebolla y limón, acompañado de galletas saladas.",
            image: "assets/mojarra_roja.png", // Reutilizamos fotos marinas hermosas
            featured: false
        },
        {
            id: "chips-suero",
            title: "Chips de Plátano y Suero",
            price: 12000,
            priceLabel: "12k",
            description: "Crispy de plátano verde fresco frito de la casa, acompañados de delicioso y cremoso suero costeño tradicional.",
            image: null,
            featured: false
        }
    ],
    especiales: [
        {
            id: "filet-mignon",
            title: "Filet Mignon 250gr",
            price: 38000,
            priceLabel: "38k",
            description: "Corte premium de lomo fino abrazado en tocineta, bañado en salsa demi-glace. Servido con cremoso puré de papa y ensalada fresca.",
            image: "assets/filet_mignon.png",
            featured: true,
            options: [
                {
                    title: "Término de la carne",
                    type: "radio",
                    required: true,
                    choices: [
                        { name: "Término Medio", price: 0 },
                        { name: "Tres Cuartos", price: 0 },
                        { name: "Bien Cocido", price: 0 }
                    ]
                }
            ]
        },
        {
            id: "baby-beef",
            title: "Baby Beef 250gr",
            price: 35000,
            priceLabel: "35k",
            description: "Jugoso corte de lomo fino asado al carbón. Acompañado de papa o yuca cocida y ensalada fresca.",
            image: null,
            featured: false,
            options: [
                {
                    title: "Elige tu Acompañante",
                    type: "radio",
                    required: true,
                    choices: [
                        { name: "Papa Cocida", price: 0 },
                        { name: "Yuca Cocida", price: 0 }
                    ]
                }
            ]
        },
        {
            id: "steak-pimienta",
            title: "Steak Pimienta 250gr",
            price: 35000,
            priceLabel: "35k",
            description: "Corte de lomo fino a la plancha bañado en salsa cremosa de pimienta negra. Acompañado de puré de papa y ensalada.",
            image: null,
            featured: false
        },
        {
            id: "churrasco",
            title: "Churrasco 350gr",
            price: 38000,
            priceLabel: "38k",
            description: "Corte mariposa de lomo fino de res asado al carbón. Servido con chimichurri, ensalada y acompañante a elegir.",
            image: null,
            featured: false,
            options: [
                {
                    title: "Elige tu Acompañante",
                    type: "radio",
                    required: true,
                    choices: [
                        { name: "Papa Cocida", price: 0 },
                        { name: "Yuca Cocida", price: 0 }
                    ]
                }
            ]
        },
        {
            id: "costillitas-bbq",
            title: "Costillitas BBQ",
            price: 30000,
            priceLabel: "30k",
            description: "Costillas de cerdo tiernas bañadas en nuestra salsa BBQ ahumada. Servidas con ensalada, guacamole y acompañante a elegir.",
            image: null,
            featured: false,
            options: [
                {
                    title: "Elige tu Acompañante",
                    type: "radio",
                    required: true,
                    choices: [
                        { name: "Papas a la Francesa", price: 0 },
                        { name: "Papa Cocida", price: 0 },
                        { name: "Yuca Cocida", price: 0 },
                        { name: "Palitos de Yuca", price: 0 }
                    ]
                }
            ]
        },
        {
            id: "alitas-bbq",
            title: "Alitas de Pollo BBQ",
            price: 20000,
            priceLabel: "20k",
            description: "Alitas de pollo doradas y crujientes, bañadas en salsa BBQ de la casa. Acompañadas de ensalada, guacamole y acompañante a elegir.",
            image: null,
            featured: false,
            options: [
                {
                    title: "Elige tu Acompañante",
                    type: "radio",
                    required: true,
                    choices: [
                        { name: "Papas a la Francesa", price: 0 },
                        { name: "Papa Cocida", price: 0 },
                        { name: "Yuca Cocida", price: 0 },
                        { name: "Palitos de Yuca", price: 0 }
                    ]
                }
            ]
        }
    ],
    mar: [
        {
            id: "mojarra-roja",
            title: "Mojarra Roja",
            price: 28000, // Base para Mediana
            priceLabel: "Según tamaño",
            description: "Mojarra roja fresca sazonada y frita al punto crocante. Acompañada de delicioso arroz de coco tradicional, patacón crujiente y ensalada de la casa.",
            image: "assets/mojarra_roja.png",
            featured: true,
            options: [
                {
                    title: "Elige el tamaño",
                    type: "radio",
                    required: true,
                    choices: [
                        { name: "Mediana (Arroz de coco, patacón, ensalada)", price: 28000 },
                        { name: "Grande (Arroz de coco, patacón, ensalada)", price: 35000 },
                        { name: "Familiar (Arroz de coco, patacón, ensalada)", price: 42000 }
                    ]
                }
            ]
        },
        {
            id: "arroz-camaron",
            title: "Arroz de Camarón",
            price: 35000,
            priceLabel: "35k",
            description: "Arroz aromático al estilo costero, colmado de camarones jugosos y vegetales frescos, acompañado de patacón.",
            image: null,
            featured: false
        },
        {
            id: "cazuela-camaron",
            title: "Cazuela de Camarón",
            price: 35000,
            priceLabel: "35k",
            description: "Cazuela cremosa elaborada a base de leche de coco y camarones seleccionados. Acompañada de arroz de coco, patacón y ensalada.",
            image: null,
            featured: false
        },
        {
            id: "arroz-mariscos",
            title: "Arroz de Mariscos",
            price: 40000,
            priceLabel: "40k",
            description: "Especialidad marinera con variedad de mariscos (camarón, calamar, pulpo y almejas) al wok, servida con patacón.",
            image: null,
            featured: false
        },
        {
            id: "cazuela-mariscos",
            title: "Cazuela de Mariscos",
            price: 40000,
            priceLabel: "40k",
            description: "Nuestra famosa cazuela con mixtura seleccionada de mariscos frescos en salsa cremosa de coco. Servida con arroz de coco, patacón y ensalada.",
            image: null,
            featured: false
        },
        {
            id: "miti-miti-arroz",
            title: "Miti-Miti de Arroz",
            price: 30000,
            priceLabel: "30k",
            description: "Una fantástica combinación mitad Arroz de Camarón y mitad Arroz de Lisa tradicional costeño, servida con patacón.",
            image: null,
            featured: false
        },
        {
            id: "filete-tilapia",
            title: "Filete de Tilapia",
            price: 20000, // Base
            priceLabel: "Desde 20k",
            description: "Filete de tilapia blanca y tierna, preparado según tu preferencia. Acompañado de arroz de coco, patacón y ensalada.",
            image: null,
            featured: false,
            options: [
                {
                    title: "Estilo de preparación",
                    type: "radio",
                    required: true,
                    choices: [
                        { name: "A la Plancha", price: 20000 },
                        { name: "En Salsa de Camarón", price: 35000 },
                        { name: "A la Marinera", price: 35000 }
                    ]
                }
            ]
        }
    ],
    cuzunguitos: [
        {
            id: "cuz-carne",
            title: "Carne Asada (150gr)",
            price: 18000,
            priceLabel: "18k",
            description: "Porción tierna de carne a la parrilla pensada para niños, acompañada de ensalada, guacamole y papas francesas.",
            image: null,
            featured: false
        },
        {
            id: "cuz-pechuga",
            title: "Pechuga Asada (200gr)",
            price: 18000,
            priceLabel: "18k",
            description: "Filete de pechuga deshuesada asada al carbón, servida con papas a la francesa, ensalada y guacamole.",
            image: null,
            featured: false
        },
        {
            id: "cuz-cerdo",
            title: "Churrasquito de Cerdo (150gr)",
            price: 18000,
            priceLabel: "18k",
            description: "Tierno churrasquito de cerdo asado, acompañado de crujientes papas a la francesa, ensalada y guacamole.",
            image: null,
            featured: false
        }
    ],
    ejecutivo: [
        {
            id: "ejecutivo-dia",
            title: "Ejecutivo del Día",
            price: 18000,
            priceLabel: "18k",
            description: "Almuerzo ejecutivo casero completo que cambia todos los días de lunes a viernes. Acompañado de arroz, ensalada, tajada, granos del día y sopa.",
            image: null,
            featured: false,
            options: [
                {
                    title: "Día de la semana",
                    type: "radio",
                    required: true,
                    choices: [
                        { name: "Lunes", price: 18000 },
                        { name: "Martes", price: 18000 },
                        { name: "Miércoles", price: 18000 },
                        { name: "Jueves", price: 18000 },
                        { name: "Viernes", price: 18000 }
                    ]
                }
            ]
        }
    ],
    sancochos: [
        {
            id: "sancocho-mondongo",
            title: "Sancocho de Mondongo",
            price: 16000, // Base
            priceLabel: "16k / 23k",
            description: "Sancocho tradicional de mondongo preparado a fuego lento con verduras frescas y especias. Acompañado de arroz blanco, ensalada y aguacate.",
            image: null,
            featured: false,
            options: [
                {
                    title: "Elige el Tamaño",
                    type: "radio",
                    required: true,
                    choices: [
                        { name: "Pequeño", price: 16000 },
                        { name: "Grande", price: 23000 }
                    ]
                }
            ]
        },
        {
            id: "sancocho-costilla",
            title: "Sancocho de Costilla",
            price: 23000,
            priceLabel: "16k / 23k",
            description: "Sancocho levanta-muertos elaborado con costilla de res carnuda en olla de barro tradicional. Servido con arroz, ensalada y aguacate.",
            image: "assets/sancocho.png",
            featured: true,
            options: [
                {
                    title: "Elige el Tamaño",
                    type: "radio",
                    required: true,
                    choices: [
                        { name: "Pequeño", price: 16000 },
                        { name: "Grande", price: 23000 }
                    ]
                }
            ]
        },
        {
            id: "sancocho-salada",
            title: "Sancocho de Carne Salada",
            price: 16000,
            priceLabel: "16k / 23k",
            description: "Tradicional sopa caribeña con carne salada de res desmechada, yuca, plátano, papa y cilantro, con acompañantes de la casa.",
            image: null,
            featured: false,
            options: [
                {
                    title: "Elige el Tamaño",
                    type: "radio",
                    required: true,
                    choices: [
                        { name: "Pequeño", price: 16000 },
                        { name: "Grande", price: 23000 }
                    ]
                }
            ]
        },
        {
            id: "sancocho-miti",
            title: "Sancocho Miti-Miti",
            price: 18000,
            priceLabel: "18k",
            description: "Exquisita combinación de dos carnes en una sola sopa sustanciosa, servida bien caliente con una porción de arroz blanco.",
            image: null,
            featured: false
        }
    ],
    asados: [
        {
            id: "punta-gorda",
            title: "Punta Gorda 250gr",
            price: 30000,
            priceLabel: "30k",
            description: "Corte jugoso de punta de anca asado al carbón al término de tu gusto. Acompañado de ensalada, guacamole y acompañante a elegir.",
            image: null,
            featured: false,
            options: [
                {
                    title: "Elige tu Acompañante",
                    type: "radio",
                    required: true,
                    choices: [
                        { name: "Papa Cocida", price: 0 },
                        { name: "Yuca Cocida", price: 0 },
                        { name: "Palitos de Yuca", price: 0 }
                    ]
                }
            ]
        },
        {
            id: "lomo-cerdo",
            title: "Lomo de Cerdo 250gr",
            price: 28000,
            priceLabel: "28k",
            description: "Medallón de lomo de cerdo tierno asado a la parrilla con sazón secreta. Acompañado de ensalada, guacamole y acompañante a elegir.",
            image: null,
            featured: false,
            options: [
                {
                    title: "Elige tu Acompañante",
                    type: "radio",
                    required: true,
                    choices: [
                        { name: "Papa Cocida", price: 0 },
                        { name: "Yuca Cocida", price: 0 },
                        { name: "Palitos de Yuca", price: 0 }
                    ]
                }
            ]
        },
        {
            id: "pechuga-asada",
            title: "Pechuga Asada 300gr",
            price: 28000,
            priceLabel: "28k",
            description: "Gran filete de pechuga de pollo asado a las brasas. Opción especial bañada en salsa por un valor adicional. Servido con acompañante y ensalada.",
            image: null,
            featured: false,
            options: [
                {
                    title: "Estilo de Pechuga",
                    type: "radio",
                    required: true,
                    choices: [
                        { name: "Asada Clásica", price: 28000 },
                        { name: "Opción Especial con Salsa de Champiñones", price: 38000 }
                    ]
                },
                {
                    title: "Elige tu Acompañante",
                    type: "radio",
                    required: true,
                    choices: [
                        { name: "Papa Cocida", price: 0 },
                        { name: "Yuca Cocida", price: 0 },
                        { name: "Palitos de Yuca", price: 0 }
                    ]
                }
            ]
        },
        {
            id: "picada-especial",
            title: "Picada Especial 500gr",
            price: 55000,
            priceLabel: "55k",
            description: "Plato generoso para compartir: carne de res, pechuga de pollo, lomo de cerdo y chorizo al carbón. Acompañada de ensalada, guacamole y dos guarniciones.",
            image: "assets/picada_especial.png",
            featured: true,
            options: [
                {
                    title: "Elige tus Acompañantes (Selecciona dos)",
                    type: "checkbox",
                    maxChoices: 2,
                    choices: [
                        { name: "Papas a la Francesa", price: 0 },
                        { name: "Patacón", price: 0 },
                        { name: "Palitos de Yuca", price: 0 },
                        { name: "Ensalada y Guacamole", price: 0 }
                    ]
                }
            ]
        }
    ],
    bebidas: [
        {
            id: "limonadas",
            title: "Limonadas de la Casa",
            price: 8000, // Base
            priceLabel: "8k - 15k",
            description: "Refrescante limonada cítrica recién exprimida. Disponible clásica, con cerezas dulces o en jarra familiar.",
            image: "assets/limonada_cerezada.png",
            featured: true,
            options: [
                {
                    title: "Variedad de Limonada",
                    type: "radio",
                    required: true,
                    choices: [
                        { name: "Limonada Natural (Vaso)", price: 8000 },
                        { name: "Limonada Cerezada (Vaso)", price: 10000 },
                        { name: "Limonada (Jarra)", price: 15000 }
                    ]
                }
            ]
        },
        {
            id: "agua-panela",
            title: "Agua de Panela con Limón",
            price: 4000,
            priceLabel: "4k / 14k",
            description: "Bebida tradicional fría de panela con zumo fresco de limón. Disponible en vaso individual o jarra.",
            image: null,
            featured: false,
            options: [
                {
                    title: "Elige el tamaño",
                    type: "radio",
                    required: true,
                    choices: [
                        { name: "Vaso", price: 4000 },
                        { name: "Jarra", price: 14000 }
                    ]
                }
            ]
        },
        {
            id: "granizados-naturales",
            title: "Granizados Naturales",
            price: 10000,
            priceLabel: "10k",
            description: "Granizado súper refrescante de frutas naturales al estilo frozen de la costa.",
            image: null,
            featured: false,
            options: [
                {
                    title: "Sabor del Granizado",
                    type: "radio",
                    required: true,
                    choices: [
                        { name: "Lulo", price: 0 },
                        { name: "Maracuyá", price: 0 },
                        { name: "Limón", price: 0 }
                    ]
                }
            ]
        },
        {
            id: "gaseosas-postobon",
            title: "Gaseosas Postobón",
            price: 4000,
            priceLabel: "4k",
            description: "Gaseosas nacionales surtidas de la marca Postobón (Manzana, Naranja, Kola, etc.).",
            image: null,
            featured: false,
            options: [
                {
                    title: "Elige el Sabor",
                    type: "radio",
                    required: true,
                    choices: [
                        { name: "Manzana Postobón", price: 0 },
                        { name: "Naranja Postobón", price: 0 },
                        { name: "Kola Román", price: 0 },
                        { name: "Uva", price: 0 }
                    ]
                }
            ]
        },
        {
            id: "mr-te",
            title: "Mr Te",
            price: 4000,
            priceLabel: "4k",
            description: "Té helado de limón embotellado de 400ml.",
            image: null,
            featured: false
        },
        {
            id: "coca-cola",
            title: "Coca Cola",
            price: 4500,
            priceLabel: "4.5k",
            description: "Coca Cola refrescante botella personal (sabor original o zero).",
            image: null,
            featured: false,
            options: [
                {
                    title: "Tipo",
                    type: "radio",
                    required: true,
                    choices: [
                        { name: "Original", price: 0 },
                        { name: "Sabor Original Zero Azúcar", price: 0 }
                    ]
                }
            ]
        },
        {
            id: "agua-personal",
            title: "Agua Personal",
            price: 3000,
            priceLabel: "3k",
            description: "Agua mineral fresca embotellada para calmar la sed.",
            image: null,
            featured: false
        },
        {
            id: "agua-saborizada",
            title: "Agua Saborizada",
            price: 4000,
            priceLabel: "4k",
            description: "Agua embotellada saborizada con un toque sutil de fruta.",
            image: null,
            featured: false
        },
        {
            id: "cervezas",
            title: "Cervezas Nacionales e Importadas",
            price: 5000,
            priceLabel: "5k - 6k",
            description: "Cervezas bien frías para acompañar un buen asado. Disponibles marcas nacionales e internacionales.",
            image: null,
            featured: false,
            options: [
                {
                    title: "Elige tu Cerveza",
                    type: "radio",
                    required: true,
                    choices: [
                        { name: "Águila Light (Nacional)", price: 5000 },
                        { name: "Club Colombia Dorada (Nacional)", price: 5000 },
                        { name: "Corona Extra (Importada)", price: 6000 },
                        { name: "Stella Artois (Importada)", price: 6000 }
                    ]
                }
            ]
        }
    ]
};

// ==========================================================================
// ESTADO GLOBAL DE LA APLICACIÓN (CARRITO Y SELECCIÓN ACTUAL)
// ==========================================================================
let cart = [];
let activeDish = null;
let currentModalQty = 1;

// Configuración del Restaurante
const RESTAURANT_CONFIG = {
    whatsappPhone: "573052780809", // Formato internacional Colombia + Número
    deliveryCost: 0 // Envío gratuito o calculado
};

// ==========================================================================
// INICIALIZACIÓN
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
    // Inicializar el Tema (Light / Dark Mode)
    initTheme();

    // Cargar Platos en la interfaz
    renderMenu();
    
    // Cargar Carrito desde localStorage si existe
    if (localStorage.getItem("cuzungo_cart")) {
        try {
            cart = JSON.parse(localStorage.getItem("cuzungo_cart"));
            updateCartUI();
        } catch (e) {
            cart = [];
        }
    }

    // Configurar Eventos
    setupEventListeners();
    
    // Configurar Scroll Spy para categorías activas
    setupScrollSpy();

    // Configurar parallax para el fondo de madera
    setupParallaxBackground();

    // Configurar botón Volver Arriba
    setupScrollToTopButton();

    // Configurar barra de progreso de scroll
    setupScrollProgressBar();

    // Configurar animaciones de scroll (Intersection Observer)
    setupScrollReveal();
});

// ==========================================================================
// RENDERIZADO DEL MENÚ EN EL DOM
// ==========================================================================
function renderMenu() {
    Object.keys(MENU_DATA).forEach(categoryKey => {
        const gridElement = document.getElementById(`grid-${categoryKey}`);
        if (!gridElement) return;
        
        gridElement.innerHTML = "";
        const dishes = MENU_DATA[categoryKey];
        
        dishes.forEach(dish => {
            const card = document.createElement("div");
            card.className = `dish-card ${dish.featured ? 'featured' : ''}`;
            card.id = `dish-card-${dish.id}`;
            card.dataset.id = dish.id;
            card.dataset.title = dish.title.toLowerCase();
            card.dataset.description = dish.description.toLowerCase();
            
            // Formatear precio
            const priceFormatted = formatCurrency(dish.price);

            if (dish.featured) {
                // Renderizado para platos destacados con imagen
                card.innerHTML = `
                    <div class="dish-img-container">
                        <span class="badge-featured">Recomendado</span>
                        <img src="${dish.image}" alt="${dish.title}" class="dish-img" onerror="this.src='https://placehold.co/400x300?text=Sabor+Cuzungo'">
                    </div>
                    <div class="dish-info-column">
                        <div class="dish-main-info">
                            <div class="dish-item-header">
                                <h4 class="dish-title">${dish.title}</h4>
                                <span class="dish-leader-dots"></span>
                                <span class="dish-price">${dish.priceLabel}</span>
                            </div>
                            <p class="dish-desc">${dish.description}</p>
                            ${dish.options && dish.options[0] && dish.options[0].choices && categoryKey !== 'bebidas' ? 
                                `<span class="dish-sides">Personalizable con acompañantes</span>` : ''}
                        </div>
                        <div class="dish-actions">
                            <button class="btn-add-cart-premium" onclick="handleAddToCartClick('${categoryKey}', '${dish.id}')" aria-label="Agregar ${dish.title}">
                                <span class="btn-text">Añadir al pedido</span>
                                <span class="btn-plus-icon">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                                </span>
                            </button>
                        </div>
                    </div>
                `;
            } else {
                // Renderizado para platos normales (estilo pergamino texto limpio)
                card.innerHTML = `
                    <div class="dish-main-info">
                        <div class="dish-item-header">
                            <h4 class="dish-title">${dish.title}</h4>
                            <span class="dish-leader-dots"></span>
                            <span class="dish-price">${dish.priceLabel}</span>
                            <button class="btn-add-item-circle" onclick="handleAddToCartClick('${categoryKey}', '${dish.id}')" aria-label="Agregar ${dish.title}">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                            </button>
                        </div>
                        <p class="dish-desc">${dish.description}</p>
                        ${dish.options && dish.options.some(opt => opt.title.toLowerCase().includes("acompañante")) ? 
                            `<span class="dish-sides">Acompañantes seleccionables</span>` : ''}
                    </div>
                `;
            }
            
            gridElement.appendChild(card);
        });
    });
}

// Helper para dar formato de pesos colombianos a precios numericos
function formatCurrency(value) {
    return new Intl.NumberFormat("es-CO", {
        style: "currency",
        currency: "COP",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(value);
}

// ==========================================================================
// CONTROLADORES DE EVENTOS GENERALES
// ==========================================================================
function setupEventListeners() {
    // Header Scroll class
    window.addEventListener("scroll", () => {
        const header = document.getElementById("mainHeader");
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });

    // Configurar Cambio de Tema Manual
    const btnThemeDesktop = document.getElementById("themeToggleBtnDesktop");
    const btnThemeMobile = document.getElementById("themeToggleBtnMobile");
    
    if (btnThemeDesktop) {
        btnThemeDesktop.addEventListener("click", toggleTheme);
    }
    if (btnThemeMobile) {
        btnThemeMobile.addEventListener("click", toggleTheme);
    }

    // Botones de Carrito Desplegable (Drawer)
    const btnHeaderOrder = document.getElementById("btnHeaderOrder");
    const btnMobileCart = document.getElementById("btnMobileCart");
    const btnCloseCartDrawer = document.getElementById("btnCloseCartDrawer");
    const cartDrawerOverlay = document.getElementById("cartDrawerOverlay");
    const cartDrawer = document.getElementById("cartDrawer");

    const toggleCart = () => {
        cartDrawer.classList.toggle("open");
        cartDrawerOverlay.classList.toggle("open");
    };

    btnHeaderOrder.addEventListener("click", toggleCart);
    btnMobileCart.addEventListener("click", toggleCart);
    btnCloseCartDrawer.addEventListener("click", toggleCart);
    cartDrawerOverlay.addEventListener("click", toggleCart);

    // Botones del Modal de Plato
    const btnCloseDishModal = document.getElementById("btnCloseDishModal");
    const dishModalOverlay = document.getElementById("dishModalOverlay");
    
    btnCloseDishModal.addEventListener("click", closeDishModal);
    dishModalOverlay.addEventListener("click", (e) => {
        if (e.target === dishModalOverlay) closeDishModal();
    });

    // Control del Selector de Cantidad en Modal
    const modalQtyMinus = document.getElementById("modalQtyMinus");
    const modalQtyPlus = document.getElementById("modalQtyPlus");
    const modalQtyVal = document.getElementById("modalQtyVal");

    modalQtyMinus.addEventListener("click", () => {
        if (currentModalQty > 1) {
            currentModalQty--;
            modalQtyVal.textContent = currentModalQty;
            updateModalPrice();
        }
    });

    modalQtyPlus.addEventListener("click", () => {
        currentModalQty++;
        modalQtyVal.textContent = currentModalQty;
        updateModalPrice();
    });

    // Confirmar plato en Modal y agregar al carrito
    document.getElementById("btnModalAddCart").addEventListener("click", addActiveDishToCart);

    // Buscador en tiempo real
    const searchInput = document.getElementById("searchInput");
    const clearSearchBtn = document.getElementById("clearSearchBtn");

    searchInput.addEventListener("input", (e) => {
        const term = e.target.value.toLowerCase().trim();
        if (term.length > 0) {
            clearSearchBtn.style.display = "block";
            filterMenu(term);
        } else {
            clearSearchBtn.style.display = "none";
            resetMenuFilter();
        }
    });

    clearSearchBtn.addEventListener("click", () => {
        searchInput.value = "";
        clearSearchBtn.style.display = "none";
        resetMenuFilter();
    });

    // Pestañas de categoría (Tabs) - Navegación suave
    const categoryTabs = document.querySelectorAll(".category-tab");
    categoryTabs.forEach(tab => {
        tab.addEventListener("click", (e) => {
            e.preventDefault();
            const category = tab.dataset.category;
            const targetSection = document.getElementById(`section-${category}`);
            
            if (targetSection) {
                // Desactivar temporalmente scroll spy para evitar saltos raros durante el scroll animado
                window.removeEventListener("scroll", onScrollSpy);
                
                // Activar pestaña actual
                categoryTabs.forEach(t => t.classList.remove("active"));
                tab.classList.add("active");
                
                const headerOffset = 180; // Compensación de barra sticky
                const elementPosition = targetSection.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });

                // Reactivar scroll spy tras terminar de scrollear
                setTimeout(() => {
                    window.addEventListener("scroll", onScrollSpy);
                }, 800);
            }
        });
    });

    // Carrusel horizontal de categorías (Botones navegación)
    const carouselPrevBtn = document.getElementById("carouselPrevBtn");
    const carouselNextBtn = document.getElementById("carouselNextBtn");
    const categoriesScrollWrapper = document.getElementById("categoriesScrollWrapper");

    carouselPrevBtn.addEventListener("click", () => {
        categoriesScrollWrapper.scrollBy({ left: -150, behavior: "smooth" });
    });

    carouselNextBtn.addEventListener("click", () => {
        categoriesScrollWrapper.scrollBy({ left: 150, behavior: "smooth" });
    });

    // Botón de Enviar Pedido a WhatsApp
    document.getElementById("btnSendOrderWhatsApp").addEventListener("click", processCheckout);
}

// ==========================================================================
// SCROLL SPY LOGIC (INTERSECTION OBSERVER / SCROLL EVENT)
// ==========================================================================
function setupScrollSpy() {
    window.addEventListener("scroll", onScrollSpy);
}

function onScrollSpy() {
    const sections = document.querySelectorAll(".menu-section");
    const tabs = document.querySelectorAll(".category-tab");
    const scrollPosition = window.scrollY + 200; // Offset para detectar antes

    sections.forEach(section => {
        if (section.classList.contains("hidden")) return;
        
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute("data-category");

        if (scrollPosition >= top && scrollPosition < top + height) {
            tabs.forEach(tab => {
                tab.classList.remove("active");
                if (tab.dataset.category === id) {
                    tab.classList.add("active");
                    // Centrar pestaña en pantalla móvil
                    tab.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
                }
            });
        }
    });
}

// ==========================================================================
// LOGICA DE FILTRO / BUSCADOR EN TIEMPO REAL
// ==========================================================================
function filterMenu(term) {
    let sectionsToShow = new Set();
    
    // Buscar en todos los platos
    Object.keys(MENU_DATA).forEach(categoryKey => {
        const dishes = MENU_DATA[categoryKey];
        let hasVisibleDishes = false;
        
        dishes.forEach(dish => {
            const card = document.getElementById(`dish-card-${dish.id}`);
            if (!card) return;
            
            const matchesTitle = dish.title.toLowerCase().includes(term);
            const matchesDesc = dish.description.toLowerCase().includes(term);
            
            if (matchesTitle || matchesDesc) {
                card.classList.remove("hidden");
                hasVisibleDishes = true;
                sectionsToShow.add(categoryKey);
            } else {
                card.classList.add("hidden");
            }
        });
        
        // Ocultar sección completa si no tiene platos visibles
        const section = document.getElementById(`section-${categoryKey}`);
        if (section) {
            if (hasVisibleDishes) {
                section.classList.remove("hidden");
            } else {
                section.classList.add("hidden");
            }
        }
    });
}

function resetMenuFilter() {
    // Mostrar todos los platos y secciones
    document.querySelectorAll(".dish-card").forEach(card => card.classList.remove("hidden"));
    document.querySelectorAll(".menu-section").forEach(sec => sec.classList.remove("hidden"));
}

// ==========================================================================
// GESTIÓN DEL MODAL DE PERSONALIZACIÓN
// ==========================================================================
function handleAddToCartClick(categoryKey, dishId) {
    const dish = MENU_DATA[categoryKey].find(d => d.id === dishId);
    if (!dish) return;

    // Si no tiene opciones de personalización, se agrega directo
    if (!dish.options || dish.options.length === 0) {
        addDirectlyToCart(dish);
    } else {
        // De lo contrario, abrir modal de personalización
        openDishModal(dish);
    }
}

function openDishModal(dish) {
    activeDish = dish;
    currentModalQty = 1;
    document.getElementById("modalQtyVal").textContent = "1";
    
    // Cargar datos en el modal
    document.getElementById("modalDishTitle").textContent = dish.title;
    document.getElementById("modalDishPrice").textContent = dish.priceLabel;
    document.getElementById("modalDishDesc").textContent = dish.description;
    
    const imgWrapper = document.getElementById("modalDishImgWrapper");
    const img = document.getElementById("modalDishImg");
    if (dish.image) {
        imgWrapper.style.display = "block";
        img.src = dish.image;
    } else {
        imgWrapper.style.display = "none";
    }

    // Inyectar opciones de acompañantes o variaciones
    const optionsContainer = document.getElementById("modalOptionsContainer");
    optionsContainer.innerHTML = "";

    dish.options.forEach((optionSection, sectionIdx) => {
        const sectionDiv = document.createElement("div");
        sectionDiv.className = "modal-option-section";
        
        const title = document.createElement("h5");
        title.textContent = optionSection.title + (optionSection.required ? " *" : "");
        sectionDiv.appendChild(title);

        const choicesList = document.createElement("div");
        choicesList.className = "option-choices-list";

        optionSection.choices.forEach((choice, choiceIdx) => {
            const label = document.createElement("label");
            label.className = "choice-label";
            if (choiceIdx === 0 && optionSection.type === "radio") {
                label.classList.add("selected");
            }
            
            const inputType = optionSection.type === "radio" ? "radio" : "checkbox";
            const inputName = `modal-opt-section-${sectionIdx}`;
            
            const input = document.createElement("input");
            input.type = inputType;
            input.name = inputName;
            input.value = choiceIdx;
            input.checked = (choiceIdx === 0 && optionSection.type === "radio");
            
            // Si es checkbox, limitamos las selecciones máximas
            if (optionSection.type === "checkbox") {
                input.addEventListener("change", (e) => {
                    const checkedCount = choicesList.querySelectorAll("input:checked").length;
                    if (optionSection.maxChoices && checkedCount > optionSection.maxChoices) {
                        e.target.checked = false;
                        alert(`Solo puedes elegir un máximo de ${optionSection.maxChoices} acompañantes.`);
                        return;
                    }
                    label.classList.toggle("selected", e.target.checked);
                    updateModalPrice();
                });
            } else {
                // Si es radio
                input.addEventListener("change", () => {
                    choicesList.querySelectorAll(".choice-label").forEach(l => l.classList.remove("selected"));
                    label.classList.add("selected");
                    updateModalPrice();
                });
            }

            const labelContent = document.createElement("span");
            labelContent.className = "choice-label-content";
            labelContent.appendChild(input);
            labelContent.appendChild(document.createTextNode(choice.name));

            label.appendChild(labelContent);

            // Mostrar el precio extra si existe
            if (choice.price > 0 && choice.price !== dish.price) {
                const priceSpan = document.createElement("span");
                priceSpan.className = "choice-extra-price";
                
                // Si la opción redefine el precio base (ej. Tilapia o Sancocho) o suma adicional
                const diff = choice.price - dish.price;
                if (diff > 0 && (dish.id === "filete-tilapia" || dish.id === "sancocho-mondongo" || dish.id === "sancocho-costilla" || dish.id === "sancocho-salada" || dish.id === "mojarra-roja" || dish.id === "pechuga-asada" || dish.id === "agua-panela" || dish.id === "limonadas")) {
                    // Es una redefinición de precio base
                    priceSpan.textContent = `(${formatCurrency(choice.price)})`;
                } else {
                    priceSpan.textContent = `+ ${formatCurrency(choice.price)}`;
                }
                label.appendChild(priceSpan);
            }

            choicesList.appendChild(label);
        });

        sectionDiv.appendChild(choicesList);
        optionsContainer.appendChild(sectionDiv);
    });

    updateModalPrice();

    // Abrir Modal
    document.getElementById("dishModalOverlay").classList.add("open");
    document.body.style.overflow = "hidden"; // Desactivar scroll del fondo
}

function closeDishModal() {
    document.getElementById("dishModalOverlay").classList.remove("open");
    document.body.style.overflow = "auto"; // Reactivar scroll
    activeDish = null;
}

// Calcular precio total del plato en el modal considerando variaciones y cantidad
function calculateModalItemPrice() {
    if (!activeDish) return 0;
    
    let basePrice = activeDish.price;
    let extraCost = 0;
    
    const optionsContainer = document.getElementById("modalOptionsContainer");
    const optionSections = optionsContainer.querySelectorAll(".modal-option-section");

    activeDish.options.forEach((optionSection, sectionIdx) => {
        const sectionDiv = optionSections[sectionIdx];
        if (!sectionDiv) return;

        const checkedInputs = sectionDiv.querySelectorAll("input:checked");
        checkedInputs.forEach(input => {
            const choiceIdx = parseInt(input.value);
            const choice = optionSection.choices[choiceIdx];
            
            // Lógica especial: si el plato cambia de precio base según la opción (Sancocho, Tilapia, Mojarra)
            if (activeDish.id === "filete-tilapia" || 
                activeDish.id === "sancocho-mondongo" || 
                activeDish.id === "sancocho-costilla" || 
                activeDish.id === "sancocho-salada" || 
                activeDish.id === "mojarra-roja" || 
                activeDish.id === "pechuga-asada" ||
                activeDish.id === "agua-panela" ||
                activeDish.id === "limonadas") {
                basePrice = choice.price; // Reemplaza precio base
            } else {
                extraCost += choice.price; // Suma extra
            }
        });
    });

    return (basePrice + extraCost) * currentModalQty;
}

function updateModalPrice() {
    const total = calculateModalItemPrice();
    document.getElementById("modalTotalSum").textContent = formatCurrency(total);
}

// ==========================================================================
// LÓGICA DE GESTIÓN DEL CARRITO
// ==========================================================================
function addDirectlyToCart(dish) {
    const cartItem = {
        id: dish.id,
        title: dish.title,
        price: dish.price,
        quantity: 1,
        options: [] // Sin opciones
    };
    
    addToCart(cartItem);
}

function addActiveDishToCart() {
    if (!activeDish) return;
    
    const selectedOptions = [];
    let customBasePrice = activeDish.price;
    let extraCost = 0;
    
    const optionsContainer = document.getElementById("modalOptionsContainer");
    const optionSections = optionsContainer.querySelectorAll(".modal-option-section");

    activeDish.options.forEach((optionSection, sectionIdx) => {
        const sectionDiv = optionSections[sectionIdx];
        if (!sectionDiv) return;

        const checkedInputs = sectionDiv.querySelectorAll("input:checked");
        const selectedChoices = [];
        
        checkedInputs.forEach(input => {
            const choiceIdx = parseInt(input.value);
            const choice = optionSection.choices[choiceIdx];
            selectedChoices.push(choice.name);
            
            // Ajustar precio base según la opción o sumar extra
            if (activeDish.id === "filete-tilapia" || 
                activeDish.id === "sancocho-mondongo" || 
                activeDish.id === "sancocho-costilla" || 
                activeDish.id === "sancocho-salada" || 
                activeDish.id === "mojarra-roja" || 
                activeDish.id === "pechuga-asada" ||
                activeDish.id === "agua-panela" ||
                activeDish.id === "limonadas") {
                customBasePrice = choice.price;
            } else {
                extraCost += choice.price;
            }
        });

        if (selectedChoices.length > 0) {
            selectedOptions.push({
                sectionTitle: optionSection.title.replace(" *", ""),
                selections: selectedChoices
            });
        }
    });

    const finalUnitPrice = customBasePrice + extraCost;

    const cartItem = {
        id: `${activeDish.id}-${selectedOptions.map(o => o.selections.join("-")).join("-")}`,
        dishId: activeDish.id,
        title: activeDish.title,
        price: finalUnitPrice,
        quantity: currentModalQty,
        options: selectedOptions
    };

    addToCart(cartItem);
    closeDishModal();
}

function addToCart(newItem) {
    // Buscar si ya existe un elemento idéntico en el carrito (mismo ID generado por variaciones)
    const existingIndex = cart.findIndex(item => item.id === newItem.id);

    if (existingIndex > -1) {
        cart[existingIndex].quantity += newItem.quantity;
    } else {
        cart.push(newItem);
    }

    // Guardar en LocalStorage
    saveCartToStorage();
    
    // Actualizar interfaz
    updateCartUI();
    
    // Mostrar Toast flotante
    showToastNotification(`¡${newItem.title} agregado al pedido!`);
}

function changeCartQty(cartItemId, delta) {
    const index = cart.findIndex(item => item.id === cartItemId);
    if (index === -1) return;

    cart[index].quantity += delta;
    
    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }
    
    saveCartToStorage();
    updateCartUI();
}

function removeCartItem(cartItemId) {
    cart = cart.filter(item => item.id !== cartItemId);
    saveCartToStorage();
    updateCartUI();
}

function saveCartToStorage() {
    localStorage.setItem("cuzungo_cart", JSON.stringify(cart));
}

// Actualizar cantidad total y renderizar elementos en el Drawer
function updateCartUI() {
    const cartItemsContainer = document.getElementById("cartItemsContainer");
    const emptyCartMessage = document.getElementById("emptyCartMessage");
    const cartCheckoutForm = document.getElementById("cartCheckoutForm");
    const cartDrawerFooter = document.getElementById("cartDrawerFooter");
    const cartTotalPrice = document.getElementById("cartTotalPrice");
    
    const cartBadgeHeader = document.getElementById("cartBadgeHeader");
    const cartBadgeMobile = document.getElementById("cartBadgeMobile");

    // Calcular cantidad total de unidades
    const totalQty = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartBadgeHeader.textContent = totalQty;
    cartBadgeMobile.textContent = totalQty;

    // Animación de rebote del badge si cambia la cantidad
    if (totalQty > 0) {
        cartBadgeHeader.style.transform = "scale(1.2)";
        cartBadgeMobile.style.transform = "scale(1.2)";
        setTimeout(() => {
            cartBadgeHeader.style.transform = "scale(1)";
            cartBadgeMobile.style.transform = "scale(1)";
        }, 200);
    }

    // Si el carrito está vacío
    if (cart.length === 0) {
        emptyCartMessage.style.display = "block";
        cartCheckoutForm.style.display = "none";
        cartDrawerFooter.style.display = "none";
        
        // Limpiar el HTML previo de items
        const prevItems = cartItemsContainer.querySelectorAll(".cart-item");
        prevItems.forEach(i => i.remove());
        return;
    }

    // Si tiene elementos, mostrarlos
    emptyCartMessage.style.display = "none";
    cartCheckoutForm.style.display = "block";
    cartDrawerFooter.style.display = "block";

    // Limpiar items anteriores del contenedor respetando el mensaje vacío
    const prevItems = cartItemsContainer.querySelectorAll(".cart-item");
    prevItems.forEach(i => i.remove());

    let totalSum = 0;

    cart.forEach(item => {
        const itemSumPrice = item.price * item.quantity;
        totalSum += itemSumPrice;

        const cartItemDiv = document.createElement("div");
        cartItemDiv.className = "cart-item";
        
        // Formatear las opciones seleccionadas para mostrarlas debajo
        let optionsHtml = "";
        if (item.options && item.options.length > 0) {
            const optionsText = item.options.map(opt => `${opt.selections.join(", ")}`).join(" | ");
            optionsHtml = `<div class="cart-item-details">${optionsText}</div>`;
        }

        cartItemDiv.innerHTML = `
            <div class="cart-item-info">
                <div class="cart-item-title">${item.title}</div>
                ${optionsHtml}
                <div class="cart-item-price">${formatCurrency(item.price)} c/u</div>
            </div>
            <div class="cart-item-controls">
                <button class="cart-qty-btn" onclick="changeCartQty('${item.id}', -1)">-</button>
                <span class="cart-qty-val">${item.quantity}</span>
                <button class="cart-qty-btn" onclick="changeCartQty('${item.id}', 1)">+</button>
                <button class="cart-item-remove-btn" onclick="removeCartItem('${item.id}')" aria-label="Eliminar item">🗑️</button>
            </div>
        `;
        
        // Inyectar en el contenedor
        cartItemsContainer.appendChild(cartItemDiv);
    });

    // Actualizar total
    cartTotalPrice.textContent = formatCurrency(totalSum);
}

// Notificación flotante de confirmación (Toast)
function showToastNotification(message) {
    const toast = document.getElementById("toastNotification");
    toast.querySelector(".toast-message").textContent = message;
    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 2500);
}

// ==========================================================================
// PREPARACIÓN DE CHECKOUT Y ENVÍO POR WHATSAPP
// ==========================================================================
function processCheckout() {
    // Validar formulario de domicilio
    const clientName = document.getElementById("clientName").value.trim();
    const clientAddress = document.getElementById("clientAddress").value.trim();
    const paymentMethod = document.getElementById("paymentMethod").value;
    const orderNotes = document.getElementById("orderNotes").value.trim();

    if (!clientName || !clientAddress || !paymentMethod) {
        alert("Por favor completa los campos obligatorios (*) para poder procesar el pedido.");
        return;
    }

    if (cart.length === 0) {
        alert("Tu carrito está vacío. Agrega platos antes de ordenar.");
        return;
    }

    // Formatear mensaje para WhatsApp
    let message = `*¡Hola Sabor Cuzungo! 🥩 Sabores Auténticos*\n`;
    message += `Me gustaría hacer un pedido para domicilio:\n\n`;

    let subtotal = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        subtotal += itemTotal;

        message += `*${item.quantity}x ${item.title}*\n`;
        
        // Si tiene opciones
        if (item.options && item.options.length > 0) {
            item.options.forEach(opt => {
                message += `  _- ${opt.sectionTitle}: ${opt.selections.join(", ")}_\n`;
            });
        }
        
        message += `  _Precio: ${formatCurrency(item.price)} c/u_ | *Total: ${formatCurrency(itemTotal)}*\n\n`;
    });

    message += `*Total Pedido:* ${formatCurrency(subtotal)} COP\n\n`;
    message += `--------------------------------------\n\n`;
    message += `*Datos para la Entrega en Ciénaga:*\n`;
    message += `📍 *Nombre:* ${clientName}\n`;
    message += `📍 *Dirección:* ${clientAddress}\n`;
    message += `💳 *Método de Pago:* ${paymentMethod}\n`;
    
    if (orderNotes) {
        message += `📝 *Notas adicionales:* ${orderNotes}\n`;
    }
    
    message += `\nEnviado desde la carta digital de Sabor Cuzungo.`;

    // Codificar mensaje para URL
    const encodedText = encodeURIComponent(message);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${RESTAURANT_CONFIG.whatsappPhone}&text=${encodedText}`;

    // Abrir WhatsApp en pestaña nueva
    window.open(whatsappUrl, "_blank");

    // Opcional: Vaciar carrito tras pedir y cerrar drawer
    // cart = [];
    // saveCartToStorage();
    // updateCartUI();
    // document.getElementById("cartDrawer").classList.remove("open");
    // document.getElementById("cartDrawerOverlay").classList.remove("open");
    // alert("¡Hemos preparado tu pedido! Serás redirigido a WhatsApp para enviarlo al restaurante.");
}

// ==========================================================================
// CONTROL DE TEMA (LIGHT / DARK MODE)
// ==========================================================================
function initTheme() {
    const savedTheme = localStorage.getItem("cuzungo_theme");
    let isDark = false;
    
    if (savedTheme) {
        isDark = (savedTheme === "dark");
    } else {
        // Detectar según la hora del día (6:00 PM (18h) a 6:00 AM (6h) es Noche/Oscuro)
        const hours = new Date().getHours();
        isDark = (hours >= 18 || hours < 6);
    }
    
    if (isDark) {
        document.body.classList.add("dark-theme");
    } else {
        document.body.classList.remove("dark-theme");
    }
    
    updateThemeToggleIcons(isDark);
}

function toggleTheme() {
    const isCurrentlyDark = document.body.classList.contains("dark-theme");
    const makeDark = !isCurrentlyDark;
    
    if (makeDark) {
        document.body.classList.add("dark-theme");
        localStorage.setItem("cuzungo_theme", "dark");
    } else {
        document.body.classList.remove("dark-theme");
        localStorage.setItem("cuzungo_theme", "light");
    }
    
    updateThemeToggleIcons(makeDark);
}

function updateThemeToggleIcons(isDark) {
    const sunSvg = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="5"></circle>
            <line x1="12" y1="1" x2="12" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="23"></line>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
            <line x1="1" y1="12" x2="3" y2="12"></line>
            <line x1="21" y1="12" x2="23" y2="12"></line>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        </svg>
    `;
    const moonSvg = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
    `;

    const iconHtml = isDark ? sunSvg : moonSvg;
    
    const btnDesktop = document.getElementById("themeToggleBtnDesktop");
    const btnMobile = document.getElementById("themeToggleBtnMobile");
    
    if (btnDesktop) btnDesktop.innerHTML = iconHtml;
    if (btnMobile) btnMobile.innerHTML = iconHtml;
}

// ==========================================================================
// ANIMACIÓN DE FONDO PARALLAX (MESA DE MADERA)
// ==========================================================================
function setupParallaxBackground() {
    let scrollY = window.scrollY;
    let ticking = false;
    
    window.addEventListener("scroll", () => {
        scrollY = window.scrollY;
        if (!ticking) {
            window.requestAnimationFrame(() => {
                // Parallax de Fondo de Mesa de Madera
                document.body.style.backgroundPositionY = `${scrollY * 0.15}px`;
                ticking = false;
            });
            ticking = true;
        }
    });
}

// ==========================================================================
// BOTÓN FLOTANTE VOLVER ARRIBA
// ==========================================================================
function setupScrollToTopButton() {
    const scrollBtn = document.getElementById("scrollToTopBtn");
    if (!scrollBtn) return;

    window.addEventListener("scroll", () => {
        if (window.scrollY > 400) {
            scrollBtn.classList.add("show");
        } else {
            scrollBtn.classList.remove("show");
        }
    });

    scrollBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

// ==========================================================================
// BARRA DE PROGRESO DE LECTURA / SCROLL SPY MÓVIL
// ==========================================================================
function setupScrollProgressBar() {
    const menuWrapper = document.getElementById("menu-secciones");
    const progressBar = document.getElementById("scrollProgressBar");
    if (!menuWrapper || !progressBar) return;
    
    window.addEventListener("scroll", () => {
        // Rango de scroll de las secciones del menú
        const startOffset = menuWrapper.offsetTop - 180; // Offset por el menú sticky
        const endOffset = startOffset + menuWrapper.offsetHeight - window.innerHeight;
        
        const scrolled = window.scrollY - startOffset;
        const range = endOffset - startOffset;
        
        let progress = 0;
        if (range > 0) {
            progress = (scrolled / range) * 100;
            progress = Math.max(0, Math.min(100, progress));
        }
        progressBar.style.width = `${progress}%`;
    });
}

// ==========================================================================
// REVELADO DE ELEMENTOS EN SCROLL (INTERSECTION OBSERVER)
// ==========================================================================
function setupScrollReveal() {
    const options = {
        root: null,
        rootMargin: "0px 0px -50px 0px", // Revela un poco antes de salir
        threshold: 0.05
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                observer.unobserve(entry.target); // Solo anima una vez al entrar
            }
        });
    }, options);

    // Seleccionar todas las secciones y las cartas de platos
    const elementsToReveal = document.querySelectorAll(".menu-section, .dish-card, .footer-info-card");
    elementsToReveal.forEach(el => {
        el.classList.add("reveal-scroll");
        observer.observe(el);
    });
}
