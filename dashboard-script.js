document.addEventListener('DOMContentLoaded', () => {
    console.log('Dashboard loaded successfully');

    // Dropdown menü animasyonları için ek işlevler
    const dropdownItems = document.querySelectorAll('.has-dropdown');

    dropdownItems.forEach(item => {
        const dropdownMenu = item.querySelector('.dropdown-menu');

        item.addEventListener('mouseenter', () => {
            if (dropdownMenu) {
                dropdownMenu.style.display = 'flex';
                setTimeout(() => {
                    dropdownMenu.style.opacity = '1';
                    dropdownMenu.style.transform = 'translateY(0)';
                }, 10);
            }
        });

        item.addEventListener('mouseleave', () => {
            if (dropdownMenu) {
                dropdownMenu.style.opacity = '0';
                dropdownMenu.style.transform = 'translateY(-10px)';
                setTimeout(() => {
                    dropdownMenu.style.display = 'none';
                }, 300);
            }
        });
    });

    // Sidebar menü aktif durumu
    const menuLinks = document.querySelectorAll('.user-menu-list a');

    menuLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Çıkış yap hariç, diğer linklerde aktif durumu değiştir
            if (!link.href.includes('index.html')) {
                e.preventDefault();
                menuLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            }
        });
    });
});
