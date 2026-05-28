// ==========================================================================
// ROSELOOPS - DYNAMIC CONTROLLER & INTERACTION ENGINE
// ==========================================================================

// --- 1. Real Crochet Products Catalog Data ---
const creations = [
    {
        id: 1,
        name: "Beanie",
        category: "beanies",
        price: "Ksh 500",
        img: "./imgs/beanie-removebg-preview.png",
        material: "Cotton",
        time: "2 - 3 Days",
        description: "An ultra-soft, warm, and double-layered rose pink beanie designed to keep you cozy. Styled with a classic folded brim and delicate ribbing that conforms perfectly to any head shape without losing elasticity.",
        care: "Hand wash cold with wool-friendly soap. Lay flat to dry on a dry towel. Do not wring or hang."
    },
    {
        id: 2,
        name: "Headband",
        category: "beanies",
        price: "Ksh 500",
        img: "./imgs/head-removebg-preview.png",
        material: "Cotton",
        time: "1 - 2 Days",
        description: "Elegant, breathable, and wonderfully elastic headband featuring a handcrafted decorative bow. Perfect for accessorizing warm outfits, outdoor events, or adding a soft artisan touch to your hair styling.",
        care: "Gentle hand wash. Lay flat on dry towel away from direct sunlight."
    },
    {
        id: 3,
        name: "Scrunchies",
        category: "bags",
        price: "Ksh 500",
        img: "./imgs/xy-removebg-preview.png",
        material: "Cotton",
        time: "5 - 7 Days",
        description: "A highly structured, heavy-duty hand-woven shoulder tote bag featuring an exquisite lattice knit pattern. Comes with premium durable shoulder straps and double internal lining to securely hold all daily essentials.",
        care: "Spot clean with damp cloth or hand wash cold. Lay flat to dry."
    },
    {
        id: 4,
        name: "Flower Headband",
        category: "bags",
        price: "Ksh 500",
        img: "./imgs/WhatsApp_Image_2026-05-15_at_17.46.06-removebg-preview.png",
        material: "Cotton",
        time: "3 - 5 Days",
        description: "A dainty, elegant bucket handbag adorned with delicate hand-knitted rose petal details. Complete with high-quality gold-ringed loop handles that fit comfortably in hand or over the forearm.",
        care: "Hand wash with cold water. Dry flat. Do not iron."
    },
    {
        id: 5,
        name: "Beanies",
        category: "bags",
        price: "Ksh 500",
        img: "./imgs/WhatsApp_Image_2026-05-15_at_17.46.07-removebg-preview.png",
        material: "Cotton",
        time: "3 - 4 Days",
        description: "A retro-inspired, shell-stitched evening clutch with a beautiful tactile drape. Features a secure, invisible metal magnetic snap closure to keep your personal items safe during dinner dates and high events.",
        care: "Dry clean recommended, or gentle spot clean with cold water."
    },
    {
        id: 6,
        name: "Mickey Mouse Beanies",
        category: "accessories",
        price: "Ksh 500",
        img: "./imgs/WhatsApp_Image_2026-05-15_at_17.46.08-removebg-preview.png",
        material: "Cotton",
        time: "1 - 2 Days",
        description: "Bring cozy, whimsical artisan design to your coffee table! A delightful set of 4 fluffy, marshmallow-style absorbent crochet coasters designed to protect delicate wooden surfaces from warm teacups.",
        care: "Machine washable inside a delicates laundry bag. Lay flat to dry."
    },
    {
        id: 7,
        name: "Poncho",
        category: "accessories",
        price: "Ksh 2,500",
        img: "./imgs/WhatsApp_Image_2026-05-15_at_17.46.09-removebg-preview.png",
        material: "Cotton",
        time: "1 Day",
        description: "Set of 3 handcrafted miniature crochet rosebud snap clips. The sturdy metal hair grips are wrapped in soft, matching pastel yarns, preventing pulls and providing a soft, lightweight all-day hold.",
        care: "Gently wipe with a damp cloth if necessary."
    },
    {
        id: 8,
        name: "Ruffle Hat",
        category: "wearables",
        price: "Ksh 1,500",
        img: "./imgs/WhatsApp_Image_2026-05-15_at_17.46.10-removebg-preview.png",
        material: "Cotton",
        time: "5 - 8 Days",
        description: "A highly breathable, beautifully detailed floral lace-pattern crop top. Features a customizable lace-up corseted back design that ensures a perfectly adjustable, custom contouring fit for any bust.",
        care: "Always hand wash cold. Lay flat to dry on a towel. Store folded, never hanging."
    },
    {
        id: 9,
        name: "Scrunchies",
        category: "wearables",
        price: "Ksh 500",
        img: "./imgs/WhatsApp_Image_2026-05-15_at_17.46.11-removebg-preview.png",
        material: "Cotton",
        time: "8 - 14 Days",
        description: "The ultimate luxury statement! A chunky, oversized balloon-sleeve cardigan with deep honeycomb stitches. Adorned with beautiful rustic wooden buttons and finished with premium snug ribbing on cuffs and hem.",
        care: "Hand wash cold inside out with wool-wash liquid. Lay flat to dry. Do not wring or tumble dry."
    },
    {
        id: 10,
        name: "Scrunchies",
        category: "wearables",
        price: "Ksh 500",
        img: "./imgs/WhatsApp_Image_2026-05-15_at_17.46.12-removebg-preview.png",
        material: "Cotton",
        time: "4 - 6 Days",
        description: "Sweet and summery! A daisy flower bralette featuring delicate ruffle shoulder details and comfortable, elastic underbust band. Double-lined across the cups to ensure excellent coverage and secure styling.",
        care: "Hand wash cold. Lay flat to dry. Do not bleach."
    }
];

// --- 2. Initializer Functions ---
document.addEventListener('DOMContentLoaded', () => {
    initGallery();
    initFilterTabs();
    initLightboxModal();
    initInteractiveOrderPlanner();
    initAccordionFAQs();
    initMobileNav();
    initScrollHeaderEffects();
});

// --- 3. Dynamic Gallery Builder ---
function initGallery() {
    const grid = document.getElementById('creations-grid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    creations.forEach(product => {
        const card = document.createElement('div');
        card.className = `gallery-card`;
        card.setAttribute('data-category', product.category);
        card.setAttribute('data-id', product.id);
        
        card.innerHTML = `
            <div class="card-img-wrapper">
                <span class="card-badge">${product.category}</span>
                <span class="card-price">${product.price}</span>
                <img src="${product.img}" alt="${product.name}" loading="lazy">
            </div>
            <div class="card-body">
                <h3 class="card-title">${product.name}</h3>
                <p class="card-desc">${truncateText(product.description, 95)}</p>
                <div class="card-footer">
                    <span class="card-specs">🧶 ${product.material}</span>
                    <button class="card-btn">
                        <span>View Specs</span>
                        <span>&rarr;</span>
                    </button>
                </div>
            </div>
        `;
        
        // Modal trigger click listener on card or btn
        card.addEventListener('click', () => openProductModal(product));
        
        grid.appendChild(card);
    });
}

function truncateText(text, limit) {
    if (text.length <= limit) return text;
    return text.substring(0, limit) + '...';
}

// --- 4. Filtering Engine ---
function initFilterTabs() {
    const tabs = document.querySelectorAll('.gallery-tabs .tab-btn');
    const cards = document.querySelectorAll('.gallery-grid .gallery-card');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Toggle Active Tab Button
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            const filter = tab.getAttribute('data-filter');
            
            // Filter card animations
            cards.forEach(card => {
                const cardCat = card.getAttribute('data-category');
                
                if (filter === 'all' || cardCat === filter) {
                    card.classList.remove('hidden');
                    // Trigger reflow for slide/fade-in animation
                    card.style.animation = 'none';
                    card.offsetHeight; /* trigger reflow */
                    card.style.animation = 'fadeInUp 0.5s ease-out forwards';
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });
}

// --- 5. Immersive Lightbox Modal Engine ---
let activeProduct = null;

function initLightboxModal() {
    const modal = document.getElementById('product-modal');
    const closeBtn = document.querySelector('.modal-close');
    const backdrop = document.querySelector('.modal-backdrop');
    
    if (!modal) return;
    
    const closeModal = () => {
        modal.classList.remove('active');
        document.body.style.overflow = ''; // Restore scroll
    };
    
    closeBtn.addEventListener('click', closeModal);
    backdrop.addEventListener('click', closeModal);
    
    // Escape key press to close
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
    
    // Direct modal CTAs
    const orderBtn = document.getElementById('modal-order-btn');
    const plannerBtn = document.getElementById('modal-planner-btn');
    
    orderBtn.addEventListener('click', () => {
        if (!activeProduct) return;
        
        const message = `Hello RoseLoops! 🌸 I'm interested in ordering the gorgeous "${activeProduct.name}" (${activeProduct.price}) shown on your website catalog. 

        • Material: ${activeProduct.material}
        • Crafting Lead Time: ${activeProduct.time}

        Could you please confirm if you have slots available to begin production? Thank you!`;
        
        sendWhatsAppMessage(message);
    });
    
    plannerBtn.addEventListener('click', () => {
        closeModal();
        
        // Scroll to custom planner
        const plannerSection = document.getElementById('planner');
        if (plannerSection) {
            plannerSection.scrollIntoView({ behavior: 'smooth' });
            
            // Pre-select matching product in custom planner select list!
            const selectEl = document.getElementById('planner-product-type');
            if (selectEl) {
                // Find matching value or fallback
                for (let option of selectEl.options) {
                    if (option.text.toLowerCase().includes(activeProduct.name.toLowerCase()) || 
                        activeProduct.name.toLowerCase().includes(option.text.toLowerCase())) {
                        selectEl.value = option.value;
                        break;
                    }
                }
            }
        }
    });
}

function openProductModal(product) {
    activeProduct = product;
    
    const modal = document.getElementById('product-modal');
    if (!modal) return;
    
    // Populate elements
    document.getElementById('modal-product-img').src = product.img;
    document.getElementById('modal-product-img').alt = product.name;
    document.getElementById('modal-product-category').textContent = product.category;
    document.getElementById('modal-product-title').textContent = product.name;
    document.getElementById('modal-product-price').textContent = product.price;
    document.getElementById('modal-product-desc').textContent = product.description;
    document.getElementById('modal-product-material').textContent = product.material;
    document.getElementById('modal-product-time').textContent = product.time;
    
    // Open
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Stop background scroll
}

// --- 6. Step-by-Step Custom Order Planner Form ---
function initInteractiveOrderPlanner() {
    const dots = document.querySelectorAll('.interactive-color-selector .color-dot');
    const colorInput = document.getElementById('planner-selected-color');
    const form = document.getElementById('crochet-order-form');
    
    // Interactive yarn color swatches selection
    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            dots.forEach(d => d.classList.remove('active'));
            dot.classList.add('active');
            
            const colorName = dot.getAttribute('data-color');
            colorInput.value = colorName;
        });
    });
    
    // Form submission processing
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const product = document.getElementById('planner-product-type').value;
            const material = document.querySelector('input[name="yarn-material"]:checked').value;
            const color = colorInput.value;
            const details = document.getElementById('planner-measurements').value;
            
            if (!product) {
                alert('Please select a product category to start planning your custom order.');
                return;
            }
            
            const customMessage = `Hello RoseLoops! 🌸 I would love to place a custom crochet order with the following specifications:

• Product: ${product}
• Material Preferred: ${material}
• Selected Yarn Color: ${color}
• Measurements & Details: ${details}

Please let me know the availability, final timeline, and pricing options. Thank you!`;
            
            sendWhatsAppMessage(customMessage);
        });
    }
}

// Global helper to redirect to WhatsApp API
function sendWhatsAppMessage(text) {
    const phoneNumber = "254797420107"; // Real-format phone number from contact
    const encodedText = encodeURIComponent(text);
    const url = `https://wa.me/${phoneNumber}?text=${encodedText}`;
    window.open(url, '_blank');
}

// --- 7. Accordion FAQs ---
function initAccordionFAQs() {
    const triggers = document.querySelectorAll('.faq-trigger');
    
    triggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            const faqItem = trigger.parentElement;
            const isActive = faqItem.classList.contains('active');
            
            // Close other open FAQs for a clean accordion effect
            const activeItems = document.querySelectorAll('.faq-item.active');
            activeItems.forEach(item => {
                if (item !== faqItem) {
                    item.classList.remove('active');
                }
            });
            
            // Toggle current
            if (isActive) {
                faqItem.classList.remove('active');
            } else {
                faqItem.classList.add('active');
            }
        });
    });
}

// --- 8. Mobile Navigation Drawer ---
function initMobileNav() {
    const toggleBtn = document.querySelector('.mobile-nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (!toggleBtn) return;
    
    toggleBtn.addEventListener('click', () => {
        const isActive = navMenu.classList.contains('active');
        if (isActive) {
            navMenu.classList.remove('active');
            toggleBtn.style.transform = 'rotate(0deg)';
        } else {
            navMenu.classList.add('active');
            toggleBtn.style.transform = 'rotate(90deg)';
        }
    });
    
    // Close mobile menu drawer on click of nav link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            toggleBtn.style.transform = 'rotate(0deg)';
        });
    });
}

// --- 9. Sticky Header & Active Navigation Link Tracker ---
function initScrollHeaderEffects() {
    const header = document.querySelector('.site-header');
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', () => {
        // Sticky Header scroll styling toggle
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Active scroll section tracking calculation
        let currentSectionId = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120; // Compensate for sticky header
            const sectionHeight = section.offsetHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute('id');
            }
        });
        
        if (currentSectionId) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${currentSectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// --- 10. Direct Contact Message Handler ---
const contactForm = document.getElementById('contact-message-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('contact-name').value;
        const email = document.getElementById('contact-email').value;
        const subject = document.getElementById('contact-subject').value;
        const message = document.getElementById('contact-message').value;
        
        // Simulate email submit feedback elegantly
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span>Sending Message... 🌸</span>';
        
        setTimeout(() => {
            alert(`Thank you for your message, ${name}! We have received your inquiry regarding "${subject}" and will respond to your email at ${email} shortly.`);
            
            contactForm.reset();
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalText;
        }, 1500);
    });
}
