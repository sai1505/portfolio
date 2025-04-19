// Main TypeScript file for your portfolio

document.addEventListener('DOMContentLoaded', () => {
  // Elements
  const navbar = document.getElementById('navbar');
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  const contactForm = document.getElementById('contact-form');
  const themeToggle = document.getElementById('theme-toggle');
  const themeToggleIcon = document.getElementById('theme-toggle-icon');
  
  // Theme toggle functionality
  const initTheme = () => {
    // Check for saved theme preference or use system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark');
      themeToggleIcon?.classList.remove('fa-moon');
      themeToggleIcon?.classList.add('fa-sun');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('dark');
      themeToggleIcon?.classList.remove('fa-sun');
      themeToggleIcon?.classList.add('fa-moon');
    }
  };
  
  // Initialize theme
  initTheme();
  
  // Theme toggle event listener
  themeToggle?.addEventListener('click', () => {
    // Toggle dark class on html element
    document.documentElement.classList.toggle('dark');
    document.body.classList.toggle('dark');
    
    // Update icon
    if (document.documentElement.classList.contains('dark')) {
      themeToggleIcon?.classList.remove('fa-moon');
      themeToggleIcon?.classList.add('fa-sun');
      localStorage.setItem('theme', 'dark');
    } else {
      themeToggleIcon?.classList.remove('fa-sun');
      themeToggleIcon?.classList.add('fa-moon');
      localStorage.setItem('theme', 'light');
    }
    
    // Add animation to theme toggle
    themeToggle.classList.add('animate-spin');
    setTimeout(() => {
      themeToggle.classList.remove('animate-spin');
    }, 500);
  });
  
  // Google-style floating navbar effect
  const handleScroll = () => {
    if (window.scrollY > 50) {
      navbar?.classList.add('shadow-google-hover');
      navbar?.classList.remove('top-4');
      navbar?.classList.add('top-2');
    } else {
      navbar?.classList.remove('shadow-google-hover');
      navbar?.classList.remove('top-2');
      navbar?.classList.add('top-4');
    }
  };
  
  window.addEventListener('scroll', handleScroll);
  
  // Initial call to set correct state
  handleScroll();
  
  // Mobile menu toggle
  mobileMenuButton?.addEventListener('click', () => {
    mobileMenu?.classList.toggle('hidden');
  });
  
  // Close mobile menu when clicking outside
  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    if (mobileMenu && !mobileMenu.classList.contains('hidden') && 
        !mobileMenuButton?.contains(target) && 
        !mobileMenu.contains(target)) {
      mobileMenu.classList.add('hidden');
    }
  });
  
  // Google search bar functionality (for demo purposes)
  const searchInput = document.querySelector('.google-search-input') as HTMLInputElement;
  if (searchInput) {
    searchInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        
        const searchTerm = searchInput.value.toLowerCase();
        
        // Simple search functionality - redirect to appropriate page based on keywords
        if (searchTerm.includes('about') || searchTerm.includes('me') || searchTerm.includes('who')) {
          window.location.href = './pages/about.html';
        } else if (searchTerm.includes('project') || searchTerm.includes('work') || searchTerm.includes('portfolio')) {
          window.location.href = './pages/projects.html';
        } else if (searchTerm.includes('skill') || searchTerm.includes('expertise') || searchTerm.includes('technology')) {
          window.location.href = './pages/skills.html';
        } else if (searchTerm.includes('contact') || searchTerm.includes('email') || searchTerm.includes('message')) {
          window.location.href = './pages/contact.html';
        } else {
          // If no match, show a message
          alert(`Searching for: ${searchTerm}`);
        }
      }
    });
  }
  
  // Google-style tabs functionality
  const tabButtons = document.querySelectorAll('.google-tab');
  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active class from all tabs
      tabButtons.forEach(btn => {
        btn.classList.remove('active');
        btn.classList.remove('text-google-blue');
        btn.classList.remove('border-google-blue');
      });
      
      // Add active class to clicked tab
      button.classList.add('active');
      button.classList.add('text-google-blue');
      button.classList.add('border-google-blue');
    });
  });
  
  // Form submission handling
  contactForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const nameInput = document.getElementById('name') as HTMLInputElement;
    const emailInput = document.getElementById('email') as HTMLInputElement;
    const subjectInput = document.getElementById('subject') as HTMLInputElement;
    const messageInput = document.getElementById('message') as HTMLTextAreaElement;
    
    // Here you would typically send the data to a server
    console.log('Form submitted:', {
      name: nameInput.value,
      email: emailInput.value,
      subject: subjectInput?.value || 'No subject',
      message: messageInput.value
    });
    
    // Show success message
    const formContainer = contactForm.parentElement;
    if (formContainer) {
      const successMessage = document.createElement('div');
      successMessage.className = 'bg-google-light-gray border border-google-blue text-google-blue px-4 py-3 rounded-google-md relative mt-4';
      successMessage.innerHTML = `
        <strong class="font-bold">Thank you!</strong>
        <span class="block sm:inline"> Your message has been sent successfully. I'll get back to you soon.</span>
      `;
      
      formContainer.appendChild(successMessage);
      
      // Reset form
      (contactForm as HTMLFormElement).reset();
      
      // Remove success message after 5 seconds
      setTimeout(() => {
        successMessage.remove();
      }, 5000);
    }
  });
  
  // Project hover effects
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.classList.add('shadow-google-hover');
    });
    
    card.addEventListener('mouseleave', () => {
      card.classList.remove('shadow-google-hover');
    });
  });
  
  // Animate skill bars on scroll
  const animateOnScroll = () => {
    const elements = document.querySelectorAll('.skill-progress');
    
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (elementPosition < windowHeight - 50) {
        element.classList.add('animate-width');
      }
    });
  };
  
  window.addEventListener('scroll', animateOnScroll);
  
  // Initial call to animate elements in view
  setTimeout(animateOnScroll, 500);
});