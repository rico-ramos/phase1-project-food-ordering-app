let navOpen = false;

        function toggleNavIcon() {
            navOpen = !navOpen;

            const btn = document.getElementById('hamburgerBtn');
            const [top, middle, bottom] = btn.querySelectorAll('.line');

            if (navOpen) {
                openNavMenu();

                // Animate into X
                top.classList.add('rotate-45', 'top-2.5');
                bottom.classList.add('-rotate-45', 'top-2.5');
                middle.classList.add('opacity-0');
            } else {
                closeNavMenu();

                // Back to hamburger
                top.classList.remove('rotate-45', 'top-2.5');
                bottom.classList.remove('-rotate-45', 'top-2.5');
                middle.classList.remove('opacity-0');
            }
        }


        function openNavMenu() {
            document.getElementById('navOverlay').classList.remove('hidden');
            document.getElementById('navMenu').classList.remove('-translate-x-full');
        }

        function closeNavMenu() {
            document.getElementById('navOverlay').classList.add('hidden');
            document.getElementById('navMenu').classList.add('-translate-x-full');
            // Reset icon
            navOpen = false;
            const btn = document.getElementById('hamburgerBtn');
            const [top, middle, bottom] = btn.querySelectorAll('.line');
            top.classList.remove('rotate-45', 'top-2.5');
            bottom.classList.remove('-rotate-45', 'top-2.5');
            middle.classList.remove('opacity-0');
        }

        function handleNavClick(option) {
            closeNavMenu();
            if (option === 'orders') {
                showOrdersView();
            }
            // Add more options later
        }