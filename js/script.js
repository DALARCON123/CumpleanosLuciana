// ========================================
// FUNCIONALIDADES DE LA INVITACIÓN
// ========================================

// ========================================
// 1. CONTROL DE MÚSICA DE FONDO
// ========================================

const musicToggle = document.getElementById('musicToggle');
const backgroundMusic = document.getElementById('backgroundMusic');
let isPlaying = false;
function updateMusicButton(isNowPlaying) {
    if (!musicToggle) return;
    const icon = musicToggle.querySelector('i');
    musicToggle.classList.toggle('playing', isNowPlaying);
    musicToggle.title = isNowPlaying ? 'Pausar música' : 'Reproducir música';
    if (icon) {
        icon.className = isNowPlaying ? 'fas fa-volume-up' : 'fas fa-volume-xmark';
    }
}
function playMusic() {
    if (!backgroundMusic) {
        return;
    }
    backgroundMusic.volume = 0.3;
    const playback = backgroundMusic.play();
    if (playback && typeof playback.then === 'function') {
        playback
            .then(() => {
                isPlaying = true;
                updateMusicButton(true);
            })
            .catch(() => {
                isPlaying = false;
                updateMusicButton(false);
            });
        return;
    }
    isPlaying = true;
    updateMusicButton(true);
}
function pauseMusic() {
    if (!backgroundMusic) return;
    backgroundMusic.pause();
    isPlaying = false;
    updateMusicButton(false);
}
if (backgroundMusic) {
    backgroundMusic.addEventListener('play', () => {
        isPlaying = true;
        updateMusicButton(true);
    });
    backgroundMusic.addEventListener('pause', () => {
        isPlaying = false;
        updateMusicButton(false);
    });
}
if (musicToggle) {
    musicToggle.addEventListener('click', () => {
        if (isPlaying) {
            pauseMusic();
        } else {
            playMusic();
        }
    });
}
// Activar audio cuando exista interacción real del usuario
function unlockMusicOnce() {
    playMusic();
}
document.addEventListener('pointerdown', unlockMusicOnce, { once: true });
document.addEventListener('click', unlockMusicOnce, { once: true });
document.addEventListener('touchstart', unlockMusicOnce, { once: true });
document.addEventListener('keydown', unlockMusicOnce, { once: true });
updateMusicButton(false);

// ========================================
// 2. CUENTA REGRESIVA
// ========================================

function startCountdown() {
    // EDITAR: Cambia esta fecha a la de tu evento
    // Formato: YYYY-MM-DDTHH:MM:SS
    // Ejemplo: 2026-04-11T18:00:00 = 11 de abril de 2026, 6:00 PM
    const eventDateElement = document.getElementById('eventDate');
    let eventDate = eventDateElement.dataset.date;
    
    // Si no está definida, usar fecha por defecto (ejemplo)
    if (!eventDate) {
        eventDate = '2026-04-11T18:00:00';
    }

    const eventTime = new Date(eventDate).getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = eventTime - now;

        if (distance < 0) {
            // El evento ya pasó
            document.getElementById('days').textContent = '0';
            document.getElementById('hours').textContent = '0';
            document.getElementById('minutes').textContent = '0';
            document.getElementById('seconds').textContent = '0';
            return;
        }

        // Cálculos
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Actualizar en el DOM con animación
        updateCountdownNumber('days', days);
        updateCountdownNumber('hours', hours);
        updateCountdownNumber('minutes', minutes);
        updateCountdownNumber('seconds', seconds);
    }

    // Actualizar cada segundo
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

function updateCountdownNumber(id, newValue) {
    const element = document.getElementById(id);
    const currentValue = parseInt(element.textContent);

    if (currentValue !== newValue) {
        element.style.animation = 'none';
        setTimeout(() => {
            element.textContent = String(newValue).padStart(2, '0');
            element.style.animation = 'pulse-number 0.3s ease-out';
        }, 10);
    }
}

// Iniciar la cuenta regresiva cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', startCountdown);

// ========================================
// 3. SCROLL SUAVE A SECCIONES
// ========================================

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// ========================================
// 4. ABRIR GOOGLE MAPS
// ========================================

// EDITAR: Reemplaza la función con tus coordenadas de Google Maps
function openMap(locationName, coordinates) {
    // Función mejorada para abrir en Google Maps
    // En móvil abre la app de Google Maps, en desktop abre en navegador
    
    // Codificar el nombre de la ubicación
    const encodedLocation = encodeURIComponent(locationName);
    
    // URLs de Google Maps
    const googleMapsAppUrl = `https://www.google.com/maps/search/${encodedLocation}`;
    const googleMapsUrl = `https://maps.google.com/?q=${encodedLocation}`;
    
    // En dispositivos móviles Apple, usar Maps.apple.com
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    if (isIOS) {
        window.open(`https://maps.apple.com/?q=${encodedLocation}`, '_blank');
    } else {
        // Para Android y desktop, usar Google Maps
        window.open(googleMapsUrl, '_blank');
    }
}

// ========================================
// 5. CONFIRMACIÓN DE ASISTENCIA POR WHATSAPP
// ========================================

function confirmAttendance() {
    const nameInput = document.getElementById('guestNameInput');
    const attendanceMessage = document.getElementById('attendanceMessage');
    if (!nameInput || !attendanceMessage) return;

    const guestName = nameInput.value.trim();
    if (!guestName) {
        attendanceMessage.textContent = 'Por favor escribe los nombres de las personas invitadas que asistirán.';
        return;
    }

    const phoneNumber = '+573174191907';
    const message = encodeURIComponent(
        `Hola, confirmamos la asistencia a los 15 de Luciana ${guestName}, estaremos felices de acompañarla.`
    );
    const isMobile = /iPhone|iPad|iPod|Android|webOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const whatsappUrl = isMobile
        ? `whatsapp://send?phone=${phoneNumber}&text=${message}`
        : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;

    attendanceMessage.textContent = `Perfecto ${guestName}, abriendo WhatsApp para enviar tu confirmaci\u00f3n.`;
    window.open(whatsappUrl, '_blank');
}

// ========================================
// 6. ANIMACIONES AL HACER SCROLL
// ========================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
        }
    });
}, observerOptions);

// Observar secciones para animaciones
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        observer.observe(section);
    });
});

// ========================================
// 7. FUNCIONALIDADES ADICIONALES
// ========================================

// Prevenir que el usuario seleccione el texto accidentalmente en móvil
document.addEventListener('selectstart', (e) => {
    if (e.target.closest('.hero-image')) {
        e.preventDefault();
    }
});

// Optimizar rendimiento: descargar música si es necesario
window.addEventListener('load', () => {
    // Los navegadores modernos manejan esto automáticamente
});

// ========================================
// 8. PULSO VISUAL PARA NÚMEROS DE CUENTA REGRESIVA
// ========================================

// Este keyframe se define en CSS, aquí lo agregamos de forma dinámica si no existe
if (!document.querySelector('style[data-countdown]')) {
    const style = document.createElement('style');
    style.setAttribute('data-countdown', 'true');
    style.textContent = `
        @keyframes pulse-number {
            0% {
                transform: scale(1);
            }
            50% {
                transform: scale(1.1);
            }
            100% {
                transform: scale(1);
            }
        }
    `;
    document.head.appendChild(style);
}

// ========================================
// 9. GUARDA DATOS EDITABLES EN localStorage
// ========================================

// Guardar cambios de campos editables
document.addEventListener('DOMContentLoaded', () => {
    // Cargar datos guardados
    const editableFields = document.querySelectorAll('.editable');
    editableFields.forEach(field => {
        let savedValue = localStorage.getItem(field.id);
        if (!savedValue) return;

        if (
            (field.id === 'massDate' || field.id === 'receptionDate') &&
            savedValue === 'Sábado, 23 de Mayo de 2026'
        ) {
            savedValue = 'Sábado, 11 de Abril de 2026';
            localStorage.setItem(field.id, savedValue);
        }

        if (field.id === 'hallName' && /Real Palace/i.test(savedValue)) {
            savedValue = 'María Luisa';
            localStorage.setItem(field.id, savedValue);
        }

        field.textContent = savedValue;
    });

    // Guardar al cambiar
    editableFields.forEach(field => {
        field.addEventListener('blur', () => {
            localStorage.setItem(field.id, field.textContent);
        });
    });

    const guestNameInput = document.getElementById('guestNameInput');
    if (guestNameInput) {
        guestNameInput.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                event.preventDefault();
                confirmAttendance();
            }
        });
    }
});

// ========================================
// 10. MANEJO DE ERRORES DE CARGA
// ========================================

// Mostrar mensaje si las imágenes no cargan
document.addEventListener('error', (e) => {
    if (e.target.tagName === 'IMG') {
        console.warn('No se pudo cargar la imagen:', e.target.src);
        e.target.style.opacity = '0.5';
        e.target.title = 'Imagen no disponible - por favor, reemplaza en las opciones de edición';
    }
}, true);

// ========================================
// GUÍA DE EDICIÓN RÁPIDA
// ========================================

/*
EDICIONES COMUNES:

1. CAMBIAR LA FOTO:
   - Reemplaza "images/fotoprincipal.png.png" por la ruta de tu foto
   - Crea una carpeta "images" si no existe

2. CAMBIAR FECHA DE CUENTA REGRESIVA:
   - En el HTML, busca: data-date="2026-04-11T18:00:00"
   - Cambia a tu fecha: YYYY-MM-DDTHH:MM:SS

3. CONFIRMACIÓN DE ASISTENCIA:
   - El invitado escribe su nombre en el campo y presiona confirmar
   - Se abre WhatsApp con el mensaje listo para enviar

4. CAMBIAR UBICACIONES EN MAPS:
   - Busca: openMap('Nombre Lugar', 'COORDENADAS')
   - En móvil buscará automáticamente por nombre

5. CAMBIAR MÚSICA:
   - Reemplaza el archivo: audio/No Crezcas Mas - Tercer Cielo.mp3
   - Formato recomendado: .mp3

6. PERSONALIZAR TEXTO:
   - Los textos de misa y recepción son editables directamente en la página
   - Los cambios se guardan en el navegador

7. CAMBIAR COLORES:
   - Busca :root en CSS
   - Modifica los valores de --color-primary, --color-secondary, etc.

*/

console.log('Invitación XV años de Luciana - Lista para personalizar');
console.log('Busca los comentarios "EDITAR:" en el código para cambios rápidos');




