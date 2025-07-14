// Navigation Menu Slide Out Controller
        let navOpen = false;

        function toggleNavIcon() {
            navOpen = !navOpen;

            const btn = document.getElementById('hamburgerBtn');
            const [top, middle, bottom] = btn.querySelectorAll('.line');

            if (navOpen) {
                openNavMenu();

                top.classList.add('rotate-45');
                top.style.top = '12px'; // Move top line to center
                bottom.classList.add('-rotate-45');
                bottom.style.top = '12px'; // Move bottom line to center
                middle.classList.add('opacity-0');
            } else {
                closeNavMenu();

                top.classList.remove('rotate-45');
                top.style.top = '6px';
                bottom.classList.remove('-rotate-45');
                bottom.style.top = '18px';
                middle.classList.remove('opacity-0');
            }

        }