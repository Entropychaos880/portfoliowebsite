//Mobile menu
const nav = document.querySelector('nav');
const navLinks = document.querySelector('nav ul');

// Creation of the button 
const hamburger = document.createElement('div');
hamburger.id = 'hamburger-menu';
hamburger.innerHTML = '<i class="fas fa-bars"></i>'; 
hamburger.style.color = 'white';
hamburger.style.fontSize = '1.5rem';
hamburger.style.cursor = 'pointer';
hamburger.style.display = 'none'; // Hidden by default on desktop

// Add it to the nav
nav.appendChild(hamburger);

// Toggle logic
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    // Change icon based on state
    if (navLinks.classList.contains('active')) {
        hamburger.innerHTML = '<i class="fas fa-times"></i>';
    } else {
        hamburger.innerHTML = '<i class="fas fa-bars"></i>';
    }
});

//the typing effect in the homepage
const typingElement = document.querySelector('.typing-text');

if (typingElement) {
    const words = ["Software Engineer", "Systems Architect", "Tech Enthusiast"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const typeEffect = () => {
        const currentWord = words[wordIndex];
        const currentChar = currentWord.substring(0, charIndex);
        
        typingElement.textContent = currentChar;

        if (!isDeleting && charIndex < currentWord.length) {
            charIndex++;
            setTimeout(typeEffect, 100);
        } else if (isDeleting && charIndex > 0) {
            charIndex--;
            setTimeout(typeEffect, 50);
        } else {
            isDeleting = !isDeleting;
            if (!isDeleting) {
                wordIndex = (wordIndex + 1) % words.length;
            }
            setTimeout(typeEffect, 1000);
        }
    }
    typeEffect();
}


const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); 
        
        const name = contactForm.querySelector('input[type="text"]');
        const email = contactForm.querySelector('input[type="email"]');
        const message = contactForm.querySelector('textarea');
        let isValid = true;

        //validation logic
        if (name.value.trim() === '') {
            alert('Please enter your name.');
            isValid = false;
        } else if (!email.value.includes('@') || !email.value.includes('.')) {
            alert('Please enter a valid email address.');
            isValid = false;
        } else if (message.value.trim() === '') {
            alert('Please enter a message.');
            isValid = false;
        }

        if (isValid) {
            alert(`Thank you, ${name.value}! Your message has been "sent" (simulated).`);
            contactForm.reset();
        }
    });
}