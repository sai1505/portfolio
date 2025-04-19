// Projects page specific JavaScript
document.addEventListener('DOMContentLoaded', () => {
    // Get all project cards and filter tabs
    const projectCards = document.querySelectorAll('.project-card');
    const tabButtons = document.querySelectorAll('.google-tab');
    const searchInput = document.querySelector('.google-search-input');

    // Function to filter projects
    const filterProjects = (category) => {
        projectCards.forEach(card => {
            const cardCategories = card.dataset.category ? card.dataset.category.split(' ') : [];
            
            if (category === 'all' || cardCategories.includes(category)) {
                card.style.display = '';
                // Add a small animation
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 50);
            } else {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    };

    // Add click event to tab buttons
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
            
            // Filter projects based on the selected category
            const category = button.getAttribute('data-filter');
            filterProjects(category);
        });
    });

    // Search functionality for projects
    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                const searchTerm = searchInput.value.toLowerCase();
                let foundMatch = false;
                
                projectCards.forEach(card => {
                    const projectTitle = card.querySelector('h3').textContent.toLowerCase();
                    const projectDesc = card.querySelector('p').textContent.toLowerCase();
                    const techTags = Array.from(card.querySelectorAll('.tech-tag')).map(tag => tag.textContent.toLowerCase());
                    
                    // Check if search term is in title, description or tech tags
                    if (projectTitle.includes(searchTerm) || 
                        projectDesc.includes(searchTerm) || 
                        techTags.some(tag => tag.includes(searchTerm))) {
                        card.style.display = '';
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                        foundMatch = true;
                    } else {
                        card.style.opacity = '0';
                        card.style.transform = 'translateY(20px)';
                        setTimeout(() => {
                            card.style.display = 'none';
                        }, 300);
                    }
                });
                
                // Reset tab active states
                tabButtons.forEach(btn => {
                    btn.classList.remove('active');
                    btn.classList.remove('text-google-blue');
                    btn.classList.remove('border-google-blue');
                });
                
                // If no matches found, show a message
                if (!foundMatch) {
                    alert(`No projects found matching: ${searchTerm}`);
                    // Reset to show all projects
                    filterProjects('all');
                    tabButtons[0].classList.add('active');
                    tabButtons[0].classList.add('text-google-blue');
                    tabButtons[0].classList.add('border-google-blue');
                }
            }
        });
    }

    // Initialize with "All" filter
    filterProjects('all');
});