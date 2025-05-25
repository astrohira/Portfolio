document.addEventListener('DOMContentLoaded', () => {

    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-list a'); 

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        menuToggle.querySelector('i').classList.toggle('fa-bars');
        menuToggle.querySelector('i').classList.toggle('fa-times');
    });


    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                menuToggle.querySelector('i').classList.add('fa-bars');
                menuToggle.querySelector('i').classList.remove('fa-times');
            }
        });
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); 

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth' 
            });
        });
    });


    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    if (contactForm) { 
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            if (name === '' || email === '' || message === '') {
                formMessage.textContent = 'Por favor, preencha todos os campos.';
                formMessage.className = 'form-message error';
            } else if (!isValidEmail(email)) {
                formMessage.textContent = 'Por favor, insira um email válido.';
                formMessage.className = 'form-message error';
            } else {
                
                formMessage.textContent = 'Mensagem enviada com sucesso! Obrigado!';
                formMessage.className = 'form-message success';
                contactForm.reset(); 

                setTimeout(() => {
                    formMessage.textContent = '';
                    formMessage.className = 'form-message';
                }, 5000); 
            }
        });
    }

    function isValidEmail(email) {

        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) { 
            header.classList.add('scrolled'); 
        } else {
            header.classList.remove('scrolled'); 
        }
    });

    /*
    .header.scrolled {
        background-color: #2c3e50;
        box-shadow: 0 4px 10px rgba(0,0,0,0.3);
    }
    */
});