// Global variables
let isLoggedIn = false;
let currentUser = null;
let courseData = {};

// Course data structure
const courses = {
    cpr: {
        title: "CPR (Cardiopulmonary Resuscitation)",
        description: "Life-saving technique for cardiac arrest and breathing emergencies",
        image: "https://pixabay.com/get/g48882d1350af5fcb99e6441ee08a577471964bd3b7b3bb466a5c32975abf81505697acaf1dd17775c8bbab8eb1767f00e45bbdf8f882daa9e57e52d64a0e70f0_1280.jpg",
        duration: "2-5 minutes",
        severity: "Critical",
        category: "Emergency",
        whatItIs: "CPR (Cardiopulmonary Resuscitation) is an emergency procedure that combines chest compressions with artificial ventilation to manually preserve intact brain function until further measures can be taken to restore spontaneous blood circulation and breathing in a person in cardiac arrest.",
        symptoms: [
            "Person is unresponsive and not breathing normally",
            "No pulse can be felt",
            "Skin appears blue or gray",
            "Unconsciousness",
            "No chest movement"
        ],
        steps: [
            "Check for responsiveness by tapping shoulders and shouting 'Are you okay?'",
            "Call emergency services (193 in Ghana) immediately",
            "Position the person on their back on a firm surface",
            "Tilt head back and lift chin to open airway",
            "Place heel of one hand on center of chest between nipples",
            "Place other hand on top, interlocking fingers",
            "Push hard and fast at least 2 inches deep at 100-120 compressions per minute",
            "Give 30 chest compressions followed by 2 rescue breaths",
            "Continue cycles of 30:2 until emergency services arrive",
            "Switch with another person every 2 minutes to avoid fatigue"
        ],
        tools: [
            { icon: "fas fa-hands", name: "Your hands (no equipment needed)" },
            { icon: "fas fa-tshirt", name: "Clean cloth or barrier device (if available)" },
            { icon: "fas fa-phone", name: "Phone to call emergency services" }
        ],
        warnings: [
            "Only perform CPR if the person is unresponsive and not breathing normally",
            "Do not perform CPR on someone who is conscious or breathing",
            "Chest compressions may break ribs - this is normal and necessary",
            "Do not stop CPR until emergency services take over",
            "If you're not trained, dispatcher can guide you through the process"
        ],
        emergency: [
            "The person remains unresponsive",
            "No signs of normal breathing",
            "No pulse can be detected",
            "Skin color is blue or gray",
            "You are unable to perform effective CPR alone"
        ]
    },
    burns: {
        title: "Burns Treatment",
        description: "Proper care for thermal, chemical, and electrical burns",
        image: "https://pixabay.com/get/g570f4007815d3f6bf3aa84932553a066c6e828ae23aa8ca3849c528fadceca721f777b343b2df6ac68456d7652fd1968d62d10640a7a62a421eb970c7b74ae0b_1280.jpg",
        duration: "1-3 minutes",
        severity: "Variable",
        category: "Injuries",
        whatItIs: "Burns are injuries to tissues caused by heat, chemicals, electricity, sunlight, or radiation. Burns are classified by degree: first-degree (superficial), second-degree (partial thickness), and third-degree (full thickness).",
        symptoms: [
            "First-degree: Red, painful skin without blisters",
            "Second-degree: Red, painful skin with blisters",
            "Third-degree: White, charred, or leathery skin",
            "Pain (may be absent in severe burns)",
            "Swelling around the burn area"
        ],
        steps: [
            "Remove the person from the source of the burn",
            "Cool the burn with cool (not cold) running water for 10-20 minutes",
            "Remove jewelry and loose clothing before swelling occurs",
            "Do not break blisters if they form",
            "Cover the burn with a sterile, non-adhesive bandage",
            "Take over-the-counter pain medication if needed",
            "Keep the burned area elevated if possible",
            "Monitor for signs of infection in the following days"
        ],
        tools: [
            { icon: "fas fa-tint", name: "Cool running water" },
            { icon: "fas fa-band-aid", name: "Sterile gauze or bandages" },
            { icon: "fas fa-pills", name: "Pain medication (ibuprofen/acetaminophen)" },
            { icon: "fas fa-snowflake", name: "Clean, cool cloth" }
        ],
        warnings: [
            "Never use ice directly on burns - it can cause further damage",
            "Do not apply butter, oils, or home remedies",
            "Do not break blisters as this increases infection risk",
            "Avoid using adhesive bandages directly on burns",
            "Do not remove clothing stuck to the burn"
        ],
        emergency: [
            "Burns larger than your palm",
            "Burns on face, hands, feet, genitals, or major joints",
            "Third-degree burns of any size",
            "Chemical or electrical burns",
            "Signs of infection (fever, increased pain, pus)",
            "Difficulty breathing (may indicate airway burns)"
        ]
    },
    choking: {
        title: "Choking Rescue",
        description: "Heimlich maneuver and airway clearance techniques",
        image: "https://pixabay.com/get/g98b9d60a324696a4619feb6950c90fbf4aff634046252e2b950a3482263f0a69d86def0c732591d2a90fb66216832dde11e0a92d8f1c9d04a01e8cb4ed668556_1280.jpg",
        duration: "1-2 minutes",
        severity: "Critical",
        category: "Emergency",
        whatItIs: "Choking occurs when an object blocks the airway, preventing normal breathing. The Heimlich maneuver (abdominal thrusts) is a first aid procedure used to treat upper airway obstructions by foreign objects.",
        symptoms: [
            "Unable to speak or cry out",
            "Difficulty breathing or noisy breathing",
            "Unable to cough effectively",
            "Skin turning blue around lips and fingernails",
            "Universal choking sign (hands clutching throat)"
        ],
        steps: [
            "Ask 'Are you choking?' - if they can speak/cough, encourage coughing",
            "If they cannot speak, call for emergency help immediately",
            "Stand behind the person and wrap your arms around their waist",
            "Make a fist with one hand and place it above the navel",
            "Grasp the fist with your other hand",
            "Give quick, upward thrusts into the abdomen",
            "Continue until object is expelled or person becomes unconscious",
            "If person becomes unconscious, begin CPR immediately"
        ],
        tools: [
            { icon: "fas fa-hands", name: "Your hands (abdominal thrusts)" },
            { icon: "fas fa-phone", name: "Phone to call emergency services" },
            { icon: "fas fa-chair", name: "Chair back (for self-administered thrusts)" }
        ],
        warnings: [
            "Do not perform abdominal thrusts on pregnant women or infants",
            "Use chest thrusts for pregnant women and obese individuals",
            "Do not stick fingers in mouth unless you can see the object",
            "Be prepared to perform CPR if person becomes unconscious",
            "Seek medical attention even after successful removal"
        ],
        emergency: [
            "Person cannot breathe, speak, or cough",
            "Skin is turning blue",
            "Person becomes unconscious",
            "Abdominal thrusts are not effective",
            "Object cannot be removed after several attempts"
        ]
    },
    bleeding: {
        title: "Bleeding Control",
        description: "Methods to stop bleeding and prevent shock",
        image: "https://pixabay.com/get/g21161bdc2ff35cc08f02de65abebc595eaaeea643f24da27afeadb252624ce203ded7b53f336947abc5d7be1584bebb9_1280.jpg",
        duration: "1-5 minutes",
        severity: "Variable",
        category: "Wounds",
        whatItIs: "Bleeding control involves techniques to stop or slow bleeding from wounds to prevent excessive blood loss and shock. The primary methods include direct pressure, elevation, and pressure points.",
        symptoms: [
            "Active bleeding from a wound",
            "Blood soaking through clothing or bandages",
            "Signs of shock (pale skin, rapid pulse, weakness)",
            "Dizziness or fainting",
            "Rapid or shallow breathing"
        ],
        steps: [
            "Ensure your safety and use protective barriers if available",
            "Apply direct pressure to the wound with a clean cloth",
            "Maintain continuous pressure - do not lift to check",
            "Elevate the injured area above heart level if possible",
            "Add more bandages on top if blood soaks through",
            "Apply pressure to arterial pressure points if needed",
            "Secure bandages with tape or additional cloth",
            "Monitor for signs of shock and keep person warm"
        ],
        tools: [
            { icon: "fas fa-band-aid", name: "Clean cloth or gauze" },
            { icon: "fas fa-tape", name: "Medical tape or bandages" },
            { icon: "fas fa-gloves", name: "Protective gloves (if available)" },
            { icon: "fas fa-blanket", name: "Blanket to prevent shock" }
        ],
        warnings: [
            "Do not remove embedded objects - stabilize them instead",
            "Never lift bandages to check if bleeding has stopped",
            "Do not use a tourniquet unless trained and as last resort",
            "Watch for signs of shock and treat accordingly",
            "Some wounds may require stitches even after bleeding stops"
        ],
        emergency: [
            "Bleeding cannot be controlled with direct pressure",
            "Signs of severe shock develop",
            "Blood loss appears excessive",
            "Wound is very deep or gaping",
            "Foreign object is embedded in wound",
            "Bleeding is from major artery"
        ]
    },
    nosebleed: {
        title: "Nosebleed Treatment",
        description: "Simple steps to control and stop nosebleeds safely",
        image: "https://pixabay.com/get/g9e061bf14e573f31c7425edab71e4e8477f2edacd57123737cab2f3af134e3276d5e936627da48339c8945bdd320ef674d6018224c77f37331b01119938deb4f_1280.jpg",
        duration: "5-10 minutes",
        severity: "Minor",
        category: "Wounds",
        whatItIs: "Nosebleeds (epistaxis) are common occurrences where blood flows from the nasal cavity. Most nosebleeds are anterior (front of nose) and can be easily treated with proper technique.",
        symptoms: [
            "Blood flowing from one or both nostrils",
            "Blood dripping down the back of throat",
            "Metallic taste in mouth",
            "Light-headedness (with heavy bleeding)",
            "Nausea from swallowed blood"
        ],
        steps: [
            "Sit upright and lean slightly forward",
            "Pinch soft part of nose (just below bony bridge) with thumb and finger",
            "Hold pressure for 10-15 minutes without releasing",
            "Breathe through your mouth during this time",
            "Apply ice pack to bridge of nose if available",
            "Avoid tilting head back (can cause blood to run down throat)",
            "After bleeding stops, avoid blowing nose for several hours",
            "Use humidifier or nasal saline spray to prevent recurrence"
        ],
        tools: [
            { icon: "fas fa-tissues", name: "Clean tissues or cloth" },
            { icon: "fas fa-snowflake", name: "Ice pack or cold compress" },
            { icon: "fas fa-tint", name: "Saline nasal spray" },
            { icon: "fas fa-chair", name: "Chair to sit upright" }
        ],
        warnings: [
            "Do not tilt head back - this can cause choking",
            "Do not pack nose with tissues or cotton",
            "Avoid blowing nose forcefully after bleeding stops",
            "Do not pick or scratch inside nose",
            "Be gentle when cleaning dried blood"
        ],
        emergency: [
            "Bleeding continues for more than 20 minutes",
            "Heavy bleeding that doesn't slow with pressure",
            "Nosebleed after head injury",
            "Difficulty breathing through mouth",
            "Signs of significant blood loss",
            "Frequent recurring nosebleeds"
        ]
    },
    snakebite: {
        title: "Snake Bite Response",
        description: "Critical steps for venomous and non-venomous snake bites",
        image: "https://pixabay.com/get/g9e55f56589c7d77c9daaacaed9f4d0e505b83fafa1bdbcc8c676848527ea68ab301f0bf5c53556b581194b65216e74e1946849785cdef14818974e63b9abc7d8_1280.jpg",
        duration: "Immediate action required",
        severity: "Critical",
        category: "Emergency",
        whatItIs: "Snake bites can be venomous or non-venomous. Since it's difficult to identify snake species immediately, all snake bites should be treated as potentially venomous emergencies requiring immediate medical attention.",
        symptoms: [
            "Two puncture wounds from fangs",
            "Pain, swelling, redness at bite site",
            "Discoloration around the bite",
            "Nausea, vomiting, dizziness",
            "Difficulty breathing or swallowing",
            "Blurred vision, drooping eyelids"
        ],
        steps: [
            "Call emergency services (193) immediately",
            "Keep the person calm and still",
            "Remove jewelry near the bite before swelling occurs",
            "Position bite below heart level if possible",
            "Wash bite with soap and water if available",
            "Cover with clean, dry bandage",
            "Mark swelling progression with pen every 15 minutes",
            "Do not leave person alone - monitor breathing and consciousness"
        ],
        tools: [
            { icon: "fas fa-phone", name: "Phone for emergency services" },
            { icon: "fas fa-soap", name: "Soap and clean water" },
            { icon: "fas fa-band-aid", name: "Clean bandage" },
            { icon: "fas fa-pen", name: "Pen to mark swelling" }
        ],
        warnings: [
            "Never cut the bite or try to suck out venom",
            "Do not apply ice or tourniquet",
            "Do not give alcohol or caffeine",
            "Do not try to catch or kill the snake",
            "Do not use electric shock therapy",
            "Time is critical - get medical help immediately"
        ],
        emergency: [
            "Any snake bite should be treated as emergency",
            "Rapid swelling at bite site",
            "Difficulty breathing",
            "Changes in mental status",
            "Severe pain or numbness",
            "Signs of allergic reaction"
        ]
    },
    seizures: {
        title: "Seizure Management",
        description: "How to safely assist someone having a seizure",
        image: "https://pixabay.com/get/gab54bcbbf1b3a657cf8f0a2d6940d4acc2a8f92167d7cfd1f017757a29078d0ce91ec1a9f3126e420d4b932a70debbd6c71591f2000c60f46b0929e1c5eca3e7_1280.jpg",
        duration: "During episode (2-5 minutes typically)",
        severity: "Variable",
        category: "Emergency",
        whatItIs: "Seizures are sudden, uncontrolled electrical disturbances in the brain. They can cause changes in behavior, movements, feelings, and levels of consciousness. Most seizures stop on their own within a few minutes.",
        symptoms: [
            "Sudden loss of consciousness",
            "Uncontrolled muscle contractions",
            "Staring spells",
            "Confusion or disorientation",
            "Loss of bowel or bladder control",
            "Difficulty speaking after episode"
        ],
        steps: [
            "Stay calm and time the seizure",
            "Clear area of dangerous objects",
            "Do not restrain the person",
            "Place something soft under their head",
            "Turn person on their side if possible",
            "Do not put anything in their mouth",
            "Stay with person until fully conscious",
            "Call emergency services if seizure lasts over 5 minutes"
        ],
        tools: [
            { icon: "fas fa-pillow", name: "Soft cushion or jacket" },
            { icon: "fas fa-clock", name: "Watch to time seizure" },
            { icon: "fas fa-phone", name: "Phone for emergency services" },
            { icon: "fas fa-blanket", name: "Blanket for comfort after" }
        ],
        warnings: [
            "Never put anything in the person's mouth",
            "Do not try to hold down or restrain them",
            "Do not give water or food immediately after",
            "Do not perform CPR unless they stop breathing",
            "The person may be confused after seizure ends"
        ],
        emergency: [
            "Seizure lasts longer than 5 minutes",
            "Person has multiple seizures without recovering",
            "Person is injured during seizure",
            "Difficulty breathing after seizure",
            "First-time seizure",
            "Pregnant woman having seizure"
        ]
    },
    fractures: {
        title: "Fracture Stabilization",
        description: "Immobilization techniques for suspected broken bones",
        image: "https://pixabay.com/get/gf182260a0aee10ef95c06d957d0342016e008233c8cd709f63a9a223b88387de72caba81f84058e0542aa5758ae5dacc_1280.jpg",
        duration: "5-10 minutes",
        severity: "Moderate to Severe",
        category: "Injuries",
        whatItIs: "Fractures are breaks in bones that can range from hairline cracks to complete breaks. Proper immobilization prevents further damage and reduces pain until professional medical care is available.",
        symptoms: [
            "Severe pain at injury site",
            "Visible deformity or swelling",
            "Inability to move the affected area",
            "Bone protruding through skin (open fracture)",
            "Numbness or tingling",
            "Bruising around the area"
        ],
        steps: [
            "Do not move the person unless in immediate danger",
            "Call emergency services immediately",
            "Control any bleeding with direct pressure around wound",
            "Immobilize the injured area above and below fracture",
            "Use splints, magazines, or rigid materials for support",
            "Secure splint with bandages or cloth strips",
            "Check circulation below injury every 15 minutes",
            "Treat for shock - keep person warm and comfortable"
        ],
        tools: [
            { icon: "fas fa-ruler", name: "Rigid splinting materials" },
            { icon: "fas fa-newspaper", name: "Magazines or newspapers" },
            { icon: "fas fa-tape", name: "Bandages or cloth strips" },
            { icon: "fas fa-snowflake", name: "Ice pack (wrapped in cloth)" }
        ],
        warnings: [
            "Do not try to straighten or align the bone",
            "Do not push protruding bones back into place",
            "Do not give food or water in case surgery is needed",
            "Check for loss of circulation below injury",
            "Be prepared to treat for shock"
        ],
        emergency: [
            "Bone is protruding through skin",
            "No pulse below the fracture site",
            "Area below fracture is blue or cold",
            "Person shows signs of severe shock",
            "Multiple injuries are present",
            "Spinal injury is suspected"
        ]
    }
};

// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    initializeWebsite();
});

// Initialize website functionality
function initializeWebsite() {
    // Check login status
    checkLoginStatus();
    
    // Initialize navigation
    initializeNavigation();
    
    // Initialize page-specific functionality
    const currentPage = getCurrentPage();
    switch(currentPage) {
        case 'index':
            initializeHomePage();
            break;
        case 'courses':
            initializeCoursesPage();
            break;
        case 'course-details':
            initializeCourseDetailsPage();
            break;
        case 'contact':
            initializeContactPage();
            break;
        case 'login':
            initializeLoginPage();
            break;
        case 'signup':
            initializeSignupPage();
            break;
    }
}

// Get current page name
function getCurrentPage() {
    const path = window.location.pathname;
    const page = path.split('/').pop().replace('.html', '') || 'index';
    return page;
}

// Check login status from localStorage
function checkLoginStatus() {
    const userData = localStorage.getItem('aidFirstUser');
    if (userData) {
        currentUser = JSON.parse(userData);
        isLoggedIn = true;
        updateAuthUI();
    }
}

// Update authentication UI
function updateAuthUI() {
    const loginBtns = document.querySelectorAll('.btn-login');
    const signupBtns = document.querySelectorAll('.btn-signup');
    
    if (isLoggedIn && currentUser) {
        loginBtns.forEach(btn => {
            btn.textContent = currentUser.firstName;
            btn.href = '#';
            btn.onclick = (e) => {
                e.preventDefault();
                showUserMenu();
            };
        });
        
        signupBtns.forEach(btn => {
            btn.textContent = 'Logout';
            btn.href = '#';
            btn.onclick = (e) => {
                e.preventDefault();
                logout();
            };
        });
    }
}

// Show user menu
function showUserMenu() {
    // Simple user menu - could be expanded
    const menu = confirm(`Hello ${currentUser.firstName}!\n\nChoose an option:\nOK - View Profile\nCancel - Logout`);
    if (menu) {
        alert('Profile feature coming soon!');
    } else {
        logout();
    }
}

// Logout function
function logout() {
    localStorage.removeItem('aidFirstUser');
    isLoggedIn = false;
    currentUser = null;
    location.reload();
}

// Initialize navigation
function initializeNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navAuth = document.querySelector('.nav-auth');
    
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navAuth.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking links
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navAuth.classList.remove('active');
        });
    });
}

// Initialize home page
function initializeHomePage() {
    // Add smooth scrolling for CTA button
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', (e) => {
            // Default behavior will navigate to courses page
        });
    }
    
    // Animate stats on scroll
    animateStatsOnScroll();
}

// Animate stats when they come into view
function animateStatsOnScroll() {
    const statsItems = document.querySelectorAll('.stat-item h3');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateNumber(entry.target);
            }
        });
    });
    
    statsItems.forEach(item => observer.observe(item));
}

// Animate number counting
function animateNumber(element) {
    const text = element.textContent;
    const number = parseInt(text.replace(/\D/g, ''));
    
    if (isNaN(number)) return;
    
    let current = 0;
    const increment = number / 50;
    const timer = setInterval(() => {
        current += increment;
        if (current >= number) {
            current = number;
            clearInterval(timer);
        }
        element.textContent = text.replace(number.toString(), Math.floor(current).toString());
    }, 30);
}

// Initialize courses page
function initializeCoursesPage() {
    initializeSearch();
    initializeFilters();
}

// Initialize search functionality
function initializeSearch() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            filterTopics(e.target.value);
        });
    }
}

// Initialize filter buttons
function initializeFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Remove active class from all buttons
            filterButtons.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            e.target.classList.add('active');
            
            const category = e.target.dataset.category;
            filterByCategory(category);
        });
    });
}

// Filter topics by search term
function filterTopics(searchTerm) {
    const topicCards = document.querySelectorAll('.topic-card');
    const noResults = document.getElementById('noResults');
    let visibleCount = 0;
    
    topicCards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        const description = card.querySelector('p').textContent.toLowerCase();
        const searchLower = searchTerm.toLowerCase();
        
        if (title.includes(searchLower) || description.includes(searchLower)) {
            card.style.display = 'block';
            visibleCount++;
        } else {
            card.style.display = 'none';
        }
    });
    
    // Show/hide no results message
    if (noResults) {
        noResults.style.display = visibleCount === 0 ? 'block' : 'none';
    }
}

// Filter topics by category
function filterByCategory(category) {
    const topicCards = document.querySelectorAll('.topic-card');
    const noResults = document.getElementById('noResults');
    let visibleCount = 0;
    
    topicCards.forEach(card => {
        const cardCategories = card.dataset.category;
        
        if (category === 'all' || cardCategories.includes(category)) {
            card.style.display = 'block';
            visibleCount++;
        } else {
            card.style.display = 'none';
        }
    });
    
    // Show/hide no results message
    if (noResults) {
        noResults.style.display = visibleCount === 0 ? 'block' : 'none';
    }
}

// Initialize course details page
function initializeCourseDetailsPage() {
    loadCourseDetails();
    initializeToggleSections();
    loadRelatedTopics();
}

// Load course details from URL parameter
function loadCourseDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const topic = urlParams.get('topic');
    
    if (topic && courses[topic]) {
        const course = courses[topic];
        populateCourseDetails(course);
    } else {
        // Default to CPR if no topic specified
        populateCourseDetails(courses.cpr);
    }
}

// Populate course details on the page
function populateCourseDetails(course) {
    // Update course header
    document.getElementById('courseImage').src = course.image;
    document.getElementById('courseImage').alt = course.title;
    document.getElementById('courseTitle').textContent = course.title;
    document.getElementById('courseDescription').textContent = course.description;
    document.getElementById('courseDuration').innerHTML = `<i class="fas fa-clock"></i> ${course.duration}`;
    document.getElementById('courseSeverity').innerHTML = `<i class="fas fa-exclamation-triangle"></i> ${course.severity}`;
    document.getElementById('courseCategory').innerHTML = `<i class="fas fa-tag"></i> ${course.category}`;
    
    // Update content sections
    document.getElementById('whatItIsContent').textContent = course.whatItIs;
    
    // Update symptoms
    const symptomsList = document.getElementById('symptomsContent');
    symptomsList.innerHTML = '';
    course.symptoms.forEach(symptom => {
        const li = document.createElement('li');
        li.textContent = symptom;
        symptomsList.appendChild(li);
    });
    
    // Update steps
    const stepsContainer = document.getElementById('stepsContent');
    stepsContainer.innerHTML = '';
    course.steps.forEach((step, index) => {
        const stepDiv = document.createElement('div');
        stepDiv.className = 'step-item';
        stepDiv.innerHTML = `
            <div class="step-number">${index + 1}</div>
            <div class="step-content">${step}</div>
        `;
        stepsContainer.appendChild(stepDiv);
    });
    
    // Update tools
    const toolsContainer = document.getElementById('toolsContent');
    toolsContainer.innerHTML = '';
    course.tools.forEach(tool => {
        const toolDiv = document.createElement('div');
        toolDiv.className = 'tool-item';
        toolDiv.innerHTML = `
            <i class="${tool.icon}"></i>
            <span>${tool.name}</span>
        `;
        toolsContainer.appendChild(toolDiv);
    });
    
    // Update warnings
    const warningsContainer = document.getElementById('warningsContent');
    warningsContainer.innerHTML = '';
    course.warnings.forEach(warning => {
        const p = document.createElement('p');
        p.textContent = warning;
        warningsContainer.appendChild(p);
    });
    
    // Update emergency conditions
    const emergencyList = document.getElementById('emergencyContent');
    emergencyList.innerHTML = '';
    course.emergency.forEach(condition => {
        const li = document.createElement('li');
        li.textContent = condition;
        emergencyList.appendChild(li);
    });
}

// Initialize toggle sections
function initializeToggleSections() {
    const toggles = document.querySelectorAll('.section-toggle');
    toggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const sectionId = toggle.dataset.section;
            const content = document.getElementById(sectionId);
            const icon = toggle.querySelector('i');
            
            if (content.style.display === 'none') {
                content.style.display = 'block';
                icon.style.transform = 'rotate(0deg)';
                toggle.classList.remove('collapsed');
            } else {
                content.style.display = 'none';
                icon.style.transform = 'rotate(-90deg)';
                toggle.classList.add('collapsed');
            }
        });
    });
}

// Load related topics
function loadRelatedTopics() {
    const relatedContainer = document.getElementById('relatedTopics');
    if (!relatedContainer) return;
    
    // Get 3 random related topics
    const allTopics = Object.keys(courses);
    const shuffled = allTopics.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 3);
    
    relatedContainer.innerHTML = '';
    selected.forEach(topicKey => {
        const topic = courses[topicKey];
        const card = document.createElement('div');
        card.className = 'topic-card';
        card.innerHTML = `
            <div class="card-image">
                <img src="${topic.image}" alt="${topic.title}">
            </div>
            <div class="card-content">
                <h3>${topic.title}</h3>
                <p>${topic.description}</p>
                <a href="course-details.html?topic=${topicKey}" class="view-details-btn">View Details</a>
            </div>
        `;
        relatedContainer.appendChild(card);
    });
}

// Initialize contact page
function initializeContactPage() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }
}

// Handle contact form submission
function handleContactForm(e) {
    e.preventDefault();
    
    // Validate form
    if (!validateContactForm()) {
        return;
    }
    
    // Show success message
    const form = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');
    
    form.style.display = 'none';
    successMessage.style.display = 'block';
    
    // Reset form after delay
    setTimeout(() => {
        form.reset();
        form.style.display = 'block';
        successMessage.style.display = 'none';
        clearErrors();
    }, 5000);
}

// Validate contact form
function validateContactForm() {
    let isValid = true;
    
    // Clear previous errors
    clearErrors();
    
    // Validate name
    const name = document.getElementById('name').value.trim();
    if (!name) {
        showError('nameError', 'Name is required');
        isValid = false;
    }
    
    // Validate email
    const email = document.getElementById('email').value.trim();
    if (!email) {
        showError('emailError', 'Email is required');
        isValid = false;
    } else if (!isValidEmail(email)) {
        showError('emailError', 'Please enter a valid email address');
        isValid = false;
    }
    
    // Validate subject
    const subject = document.getElementById('subject').value;
    if (!subject) {
        showError('subjectError', 'Please select a subject');
        isValid = false;
    }
    
    // Validate message
    const message = document.getElementById('message').value.trim();
    if (!message) {
        showError('messageError', 'Message is required');
        isValid = false;
    } else if (message.length < 10) {
        showError('messageError', 'Message must be at least 10 characters long');
        isValid = false;
    }
    
    return isValid;
}

// Initialize login page
function initializeLoginPage() {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
}

// Handle login form submission
function handleLogin(e) {
    e.preventDefault();
    
    // Validate form
    if (!validateLoginForm()) {
        return;
    }
    
    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value;
    const remember = document.getElementById('rememberMe').checked;
    
    // Check if user exists in localStorage
    const users = JSON.parse(localStorage.getItem('aidFirstUsers') || '[]');
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
        // Login successful
        currentUser = user;
        isLoggedIn = true;
        localStorage.setItem('aidFirstUser', JSON.stringify(user));
        
        // Show success message
        const form = document.getElementById('loginForm');
        const successMessage = document.getElementById('loginSuccess');
        
        form.style.display = 'none';
        successMessage.style.display = 'block';
        
        // Redirect after delay
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 2000);
    } else {
        showError('passwordError', 'Invalid email or password');
    }
}

// Validate login form
function validateLoginForm() {
    let isValid = true;
    clearErrors();
    
    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value;
    
    if (!email) {
        showError('emailError', 'Email is required');
        isValid = false;
    } else if (!isValidEmail(email)) {
        showError('emailError', 'Please enter a valid email address');
        isValid = false;
    }
    
    if (!password) {
        showError('passwordError', 'Password is required');
        isValid = false;
    }
    
    return isValid;
}

// Initialize signup page
function initializeSignupPage() {
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', handleSignup);
    }
    
    // Password strength checker
    const passwordInput = document.getElementById('signupPassword');
    if (passwordInput) {
        passwordInput.addEventListener('input', checkPasswordStrength);
    }
}

// Handle signup form submission
function handleSignup(e) {
    e.preventDefault();
    
    // Validate form
    if (!validateSignupForm()) {
        return;
    }
    
    const formData = new FormData(e.target);
    const userData = {
        firstName: formData.get('firstName'),
        lastName: formData.get('lastName'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        password: formData.get('password'),
        userType: formData.get('userType'),
        newsletter: formData.get('newsletter') === 'on',
        joinDate: new Date().toISOString()
    };
    
    // Save user to localStorage
    const users = JSON.parse(localStorage.getItem('aidFirstUsers') || '[]');
    users.push(userData);
    localStorage.setItem('aidFirstUsers', JSON.stringify(users));
    
    // Auto-login user
    currentUser = userData;
    isLoggedIn = true;
    localStorage.setItem('aidFirstUser', JSON.stringify(userData));
    
    // Show success message
    const form = document.getElementById('signupForm');
    const successMessage = document.getElementById('signupSuccess');
    
    form.style.display = 'none';
    successMessage.style.display = 'block';
    
    // Redirect after delay
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 3000);
}

// Validate signup form
function validateSignupForm() {
    let isValid = true;
    clearErrors();
    
    // Validate first name
    const firstName = document.getElementById('firstName').value.trim();
    if (!firstName) {
        showError('firstNameError', 'First name is required');
        isValid = false;
    }
    
    // Validate last name
    const lastName = document.getElementById('lastName').value.trim();
    if (!lastName) {
        showError('lastNameError', 'Last name is required');
        isValid = false;
    }
    
    // Validate email
    const email = document.getElementById('signupEmail').value.trim();
    if (!email) {
        showError('emailError', 'Email is required');
        isValid = false;
    } else if (!isValidEmail(email)) {
        showError('emailError', 'Please enter a valid email address');
        isValid = false;
    } else {
        // Check if email already exists
        const users = JSON.parse(localStorage.getItem('aidFirstUsers') || '[]');
        if (users.find(u => u.email === email)) {
            showError('emailError', 'Email already registered');
            isValid = false;
        }
    }
    
    // Validate password
    const password = document.getElementById('signupPassword').value;
    if (!password) {
        showError('passwordError', 'Password is required');
        isValid = false;
    } else if (password.length < 8) {
        showError('passwordError', 'Password must be at least 8 characters long');
        isValid = false;
    }
    
    // Validate confirm password
    const confirmPassword = document.getElementById('confirmPassword').value;
    if (!confirmPassword) {
        showError('confirmPasswordError', 'Please confirm your password');
        isValid = false;
    } else if (password !== confirmPassword) {
        showError('confirmPasswordError', 'Passwords do not match');
        isValid = false;
    }
    
    // Validate user type
    const userType = document.getElementById('userType').value;
    if (!userType) {
        showError('userTypeError', 'Please select your background');
        isValid = false;
    }
    
    // Validate terms
    const agreeTerms = document.getElementById('agreeTerms').checked;
    if (!agreeTerms) {
        showError('termsError', 'You must agree to the terms and conditions');
        isValid = false;
    }
    
    return isValid;
}

// Check password strength
function checkPasswordStrength() {
    const password = document.getElementById('signupPassword').value;
    const strengthBar = document.querySelector('.strength-fill');
    const strengthText = document.querySelector('.strength-text');
    
    let strength = 0;
    let strengthLabel = 'Very Weak';
    let color = '#ef4444';
    
    // Length check
    if (password.length >= 8) strength += 25;
    
    // Lowercase check
    if (/[a-z]/.test(password)) strength += 25;
    
    // Uppercase check
    if (/[A-Z]/.test(password)) strength += 25;
    
    // Number or symbol check
    if (/[\d\W]/.test(password)) strength += 25;
    
    // Set strength label and color
    if (strength >= 75) {
        strengthLabel = 'Strong';
        color = '#10b981';
    } else if (strength >= 50) {
        strengthLabel = 'Good';
        color = '#f59e0b';
    } else if (strength >= 25) {
        strengthLabel = 'Fair';
        color = '#f97316';
    }
    
    // Update UI
    strengthBar.style.width = strength + '%';
    strengthBar.style.backgroundColor = color;
    strengthText.textContent = strengthLabel;
}

// Toggle password visibility
function togglePassword(fieldId) {
    const field = document.getElementById(fieldId);
    const toggle = field.nextElementSibling;
    const icon = toggle.querySelector('i');
    
    if (field.type === 'password') {
        field.type = 'text';
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
    } else {
        field.type = 'password';
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
    }
}

// Social login placeholder
function socialLogin(provider) {
    alert(`${provider} login would be implemented here with actual OAuth integration.`);
}

// Utility functions
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.classList.add('show');
    }
}

function clearErrors() {
    const errorElements = document.querySelectorAll('.error-message');
    errorElements.forEach(element => {
        element.textContent = '';
        element.classList.remove('show');
    });
}

// Course action functions
function practiceMode() {
    alert('Practice mode would include interactive scenarios and step-by-step guided practice. This feature would be implemented with more advanced interactivity.');
}

function shareContent() {
    if (navigator.share) {
        navigator.share({
            title: document.title,
            url: window.location.href
        });
    } else {
        // Fallback for browsers without Web Share API
        const url = window.location.href;
        navigator.clipboard.writeText(url).then(() => {
            alert('Link copied to clipboard!');
        }).catch(() => {
            alert('Share this link: ' + url);
        });
    }
}

// Smooth scrolling for anchor links
document.addEventListener('click', function(e) {
    if (e.target.matches('a[href^="#"]')) {
        e.preventDefault();
        const target = document.querySelector(e.target.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
});

// Add loading states to forms
function addLoadingState(button) {
    const originalText = button.textContent;
    button.textContent = 'Loading...';
    button.disabled = true;
    
    return function removeLoadingState() {
        button.textContent = originalText;
        button.disabled = false;
    };
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.highlight-card, .topic-card, .value-item, .feature-item');
    animateElements.forEach(el => observer.observe(el));
});

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
    .highlight-card,
    .topic-card,
    .value-item,
    .feature-item {
        opacity: 0;
        transform: translateY(20px);
        transition: all 0.6s ease;
    }
    
    .animate-in {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(style);

// Service Worker registration (for offline functionality)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Service worker would be implemented for offline functionality
        console.log('Service Worker support detected');
    });
}

// Error handling for images
document.addEventListener('error', (e) => {
    if (e.target.tagName === 'IMG') {
        e.target.style.display = 'none';
        console.log('Image failed to load:', e.target.src);
    }
}, true);

// Keyboard navigation support
document.addEventListener('keydown', (e) => {
    // ESC key to close modals/menus
    if (e.key === 'Escape') {
        const activeMenu = document.querySelector('.nav-menu.active');
        if (activeMenu) {
            activeMenu.classList.remove('active');
            document.querySelector('.nav-auth').classList.remove('active');
        }
    }
});

// Performance monitoring
if ('performance' in window) {
    window.addEventListener('load', () => {
        const loadTime = performance.now();
        console.log(`Page loaded in ${Math.round(loadTime)}ms`);
    });
}
