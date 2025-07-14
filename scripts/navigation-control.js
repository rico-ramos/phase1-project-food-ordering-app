function toggleNavDropdown() {
            const menu = document.getElementById('dropdownMenu');
            menu.classList.toggle('hidden');
            navOpen = !navOpen;

            const btn = document.getElementById('hamburgerBtn');
            const [top, middle, bottom] = btn.querySelectorAll('.line');

            if (navOpen) {
                top.classList.add('rotate-45');
                top.style.top = '12px';
                bottom.classList.add('-rotate-45');
                bottom.style.top = '12px';
                middle.classList.add('opacity-0');
            } else {
                top.classList.remove('rotate-45');
                top.style.top = '6px';
                bottom.classList.remove('-rotate-45');
                bottom.style.top = '18px';
                middle.classList.remove('opacity-0');
            }
        }

        // Hide dropdown if user clicks outside
        window.addEventListener('click', (e) => {
            const dropdown = document.getElementById('dropdownMenu');
            const button = document.getElementById('hamburgerBtn');

            if (!dropdown.contains(e.target) && !button.contains(e.target)) {
                if (!dropdown.classList.contains('hidden')) {
                    dropdown.classList.add('hidden');
                    navOpen = false;

                    const [top, middle, bottom] = button.querySelectorAll('.line');
                    top.classList.remove('rotate-45');
                    top.style.top = '6px';
                    bottom.classList.remove('-rotate-45');
                    bottom.style.top = '18px';
                    middle.classList.remove('opacity-0');
                }
            }
        });


        function handleNavClick(option) {
            // closeNavMenu(); //removed this during the switch from slide panel to dropdown nav
            if (option === 'orders') {
                showOrdersView();
            }
            // Add more options later

            // Hide dropdown menu after click
            const dropdown = document.getElementById('dropdownMenu');
            dropdown.classList.add('hidden');
            navOpen = false;

            // Reset hamburger icon state
            const btn = document.getElementById('hamburgerBtn');
            const [top, middle, bottom] = btn.querySelectorAll('.line');
            top.classList.remove('rotate-45');
            top.style.top = '6px';
            bottom.classList.remove('-rotate-45');
            bottom.style.top = '18px';
            middle.classList.remove('opacity-0');
        }