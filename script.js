/* ============================================================================
   PORTFOLIO JAVASCRIPT
   Clean, beginner-friendly JavaScript for interactive features
   Dark mode first, with theme toggle and storage
   ============================================================================ */

// ============================================================================
// INITIALIZATION - WAIT FOR DOM
// ============================================================================

document.addEventListener('DOMContentLoaded', function () {
    initThemeToggle();
    initMobileMenu();
    initSkillsToggle();
});

// ============================================================================
// 1. THEME TOGGLE (DARK/LIGHT MODE)
// ============================================================================

function initThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    
    if (!themeToggle) {
        return;
    }

    // Load saved theme or default to dark mode
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);

    // Toggle theme when button is clicked
    themeToggle.addEventListener('click', function () {
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    });
}

function setTheme(theme) {
    if (theme === 'light') {
        document.documentElement.setAttribute('data-theme', 'light');
        document.getElementById('theme-toggle').setAttribute('aria-pressed', 'false');
    } else {
        // Dark mode is default - remove the attribute or set to dark
        document.documentElement.removeAttribute('data-theme');
        document.getElementById('theme-toggle').setAttribute('aria-pressed', 'true');
    }
    
    // Save preference to localStorage
    localStorage.setItem('theme', theme);
}

// ============================================================================
// 2. MOBILE NAVIGATION
// ============================================================================

function initMobileMenu() {
    const menuButton = document.getElementById('mobile-menu-btn');
    const navMenu = document.getElementById('nav-menu');

    // Check that elements exist before adding event listeners
    if (!menuButton || !navMenu) {
        return;
    }

    // Toggle menu when button is clicked
    menuButton.addEventListener('click', function () {
        toggleMenu();
    });

    // Close menu when a navigation link is clicked
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            closeMenu();
        });
    });

    // Close menu when Escape key is pressed
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            closeMenu();
        }
    });
}

function toggleMenu() {
    const menuButton = document.getElementById('mobile-menu-btn');
    const navMenu = document.getElementById('nav-menu');

    if (!menuButton || !navMenu) {
        return;
    }

    // Check if menu is currently open by looking for menu-open class
    const isOpen = navMenu.classList.contains('menu-open');

    if (isOpen) {
        closeMenu();
    } else {
        openMenu();
    }
}

function openMenu() {
    const menuButton = document.getElementById('mobile-menu-btn');
    const navMenu = document.getElementById('nav-menu');

    if (menuButton && navMenu) {
        navMenu.classList.add('menu-open');
        menuButton.setAttribute('aria-expanded', 'true');
    }
}

function closeMenu() {
    const menuButton = document.getElementById('mobile-menu-btn');
    const navMenu = document.getElementById('nav-menu');

    if (menuButton && navMenu) {
        navMenu.classList.remove('menu-open');
        menuButton.setAttribute('aria-expanded', 'false');
    }
}

// ============================================================================
// 3. SKILLS / WHAT I DO INTERACTION
// ============================================================================

function initSkillsToggle() {
    const showWhatIDoBtn = document.getElementById('show-what-i-do-btn');
    const showSkillsBtn = document.getElementById('show-skills-btn');
    const skillsView = document.getElementById('skills-view');
    const whatIDoView = document.getElementById('what-i-do-view');

    // Check that elements exist before adding event listeners
    if (!showWhatIDoBtn || !showSkillsBtn || !skillsView || !whatIDoView) {
        return;
    }

    // Show What I Do when center button is clicked
    showWhatIDoBtn.addEventListener('click', function () {
        switchToWhatIDo();
    });

    // Show Skills when Show My Skills button is clicked
    showSkillsBtn.addEventListener('click', function () {
        switchToSkills();
    });
}

function switchToWhatIDo() {
    const skillsView = document.getElementById('skills-view');
    const whatIDoView = document.getElementById('what-i-do-view');

    if (skillsView && whatIDoView) {
        // Hide skills view
        skillsView.classList.remove('active');
        
        // Show what I do view
        whatIDoView.classList.add('active');
    }
}

function switchToSkills() {
    const skillsView = document.getElementById('skills-view');
    const whatIDoView = document.getElementById('what-i-do-view');

    if (skillsView && whatIDoView) {
        // Show skills view
        skillsView.classList.add('active');
        
        // Hide what I do view
        whatIDoView.classList.remove('active');
    }
}


