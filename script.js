document.addEventListener('DOMContentLoaded', () => {
    // Wallpapers klasöründeki mevcut dosya isimleri
    const wallpapers = [
        "wallpaper_04(1024x768).jpg",
        "wallpaper_06(1024x768).jpg",
        "wallpaper_07(1024x768).jpg",
        "wallpaper_08(1024x768).jpg",
        "wallpaper_202211(1024x768).jpg"
    ];

    // Rastgele bir görsel seç
    const randomIndex = Math.floor(Math.random() * wallpapers.length);
    const selectedWallpaper = wallpapers[randomIndex];

    // Klasör yolu
    const wallpaperPath = `wallpapers/${selectedWallpaper}`;

    const container = document.querySelector('.game-container');

    // Resmi arka plan olarak ayarla
    container.style.setProperty('--bg-image', `url('${wallpaperPath}')`);

    console.log(`Wallpaper set to: ${wallpaperPath}`);

    // Buton işlevleri
    const clearBtn = document.getElementById('clearBtn');
    if (clearBtn) {
        clearBtn.addEventListener('click', () => {
            const inputs = document.querySelectorAll('.login-box input');
            inputs.forEach(input => input.value = '');
        });
    }
});
