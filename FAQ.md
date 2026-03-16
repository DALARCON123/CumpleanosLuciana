# ❓ Preguntas Frecuentes (FAQ)

Respuestas rápidas a las preguntas más comunes.

---

## 🎯 EMPEZAR

### ¿Cómo abro la página por primera vez?
1. Busca el archivo `index.html` en la carpeta
2. Haz doble clic en él
3. Se abrirá en tu navegador automáticamente

### ¿Qué necesito tener instalado?
Nada especial. Solo:
- Un navegador web (Chrome, Firefox, Safari, Edge)
- Un editor de texto para cambios pequeños (Notepad, Word, VS Code)
- La foto de Luciana en JPG o PNG

### ¿Puedo abrirlo sin internet?
Sí, perfectamente. Abre `index.html` directamente.
La única excepción es Google Maps y las fuentes de Google, que necesitan internet.

---

## 📸 FOTOS

### ¿Qué tamaño debe tener la foto?
- Ancho: 250 píxeles
- Alto: 350 píxeles
- O más grande en esa proporción (250x350, 500x700, etc.)

### ¿Qué formato es mejor?
- JPG - Para fotos de personas (más ligero)
- PNG - Para mejor calidad (más pesado)

### La foto no aparece - ¿Por qué?
1. ¿La foto está en la carpeta `images/`? 
   - Abre `images/` y verifica
2. ¿Se llama `luciana.jpg`?
   - Renómbrala si tiene otro nombre
3. ¿Es un archivo válido?
   - Intenta abrirla directamente, debe verse bien
4. ¿Verificaste el HTML?
   - Busca `images/luciana.jpg` en `index.html`

### ¿Cómo cambio el tamaño de la foto si es muy grande?
Usa una herramienta online:
- https://pixlr.com (online, sin descargar)
- https://photopea.com (editor online)
- Paint (en Windows, herramienta básica)

### ¿La foto aparece cortada en móvil?
Es normal. La foto se ajusta al ancho de la pantalla.
Prueba con una foto donde Luciana está más al centro.

---

## 📅 FECHA Y HORA

### No entiendo el formato de fecha - ¿Me das un ejemplo?

**Si el evento es el 23 de Mayo de 2026 a las 6:00 PM:**

```
2026-05-23T18:00:00
│    │  │  │ │  │
Año  │  │  │ │  Segundos (00)
     Mes│  │ Minutos (00)
        Día│ Horas (18 = 6 PM)
           T (siempre va aquí)
```

### ¿Cómo sé si es 6 PM o 18 horas?
- 12:00 AM = 00:00 medianoche
- 1:00 AM = 01:00
- 12:00 PM = 12:00 mediodía
- 1:00 PM = 13:00
- 6:00 PM = 18:00
- 11:00 PM = 23:00

### El contador regresivo marca un número negativo - ¿Por qué?
Significa que la fecha ya pasó. Cambia a una fecha futura.

### Cambié la fecha pero el contador no se actualiza
Abre el navegador en modo incógnito o limpia el caché:
- En Chrome: Ctrl + Shift + Delete
- En Firefox: Ctrl + Shift + Delete
- En Safari: Historial → Borrar historial

---

## 📱 WHATSAPP

### ¿Cuál es el formato del número?
`+CODIGOPAIS + NUMERO`

Ejemplos:
- Argentina: `+5491234567890` (sin el 0 inicial)
- México: `+525512345678`
- España: `+34612345678`

### ¿Dónde encuentro el código de país?
[Wiki de códigos de país](https://en.wikipedia.org/wiki/List_of_country_calling_codes)

### El botón WhatsApp no funciona
1. ¿Editaste el número correctamente?
2. ¿Está en el formato `+PAIS + NUMERO`?
3. ¿Sin espacios ni guiones?
4. Intenta hacer clic nuevamente

### ¿El mensaje se ve extraño?
El mensaje predeterminado es: 
"Hola, confirmo mi asistencia a los 15 años de Luciana."

Si quieres cambiar el mensaje:
- Abre `js/script.js`
- Busca: `const message = encodeURIComponent('Hola, confirmo...')`
- Cambia el texto entre las comillas

### En móvil el botón no abre WhatsApp
- ¿Instalaste la app de WhatsApp?
- ¿O usas WhatsApp Web?
- Si usas Web, probablemente debes hacer clic en "abrir en aplicación"

---

## 🗺️ GOOGLE MAPS

### Los botones de Maps no abren la ubicación
1. Asegúrate de que el nombre sea claro:
   - `openMap('Nombre Exacto Iglesia', '0.0,0.0')`
2. Si no lo encuentra, intenta con dirección:
   - `openMap('Calle Principal 123, Ciudad', '0.0,0.0')`
3. En móvil debe abrir Google Maps app

### En desktop abre pero no en móvil
Es normal en algunos navegadores. El usuario puede:
- Copiar la dirección
- Abrirla manualmente en Google Maps
- O abrir en app de Maps

### ¿Puedo poner coordenadas exactas?
Sí. Pero no es necesario. Google Maps busca por nombre.

Ejemplo con coordenadas:
```html
openMap('Basílica de Luján', '-34.7696,-59.5435')
```

---

## 🎵 MÚSICA

### La música no suena
1. ¿Existe el archivo `musica.mp3`?
   - Verifica que esté en la carpeta `audio/`
2. ¿Hiciste clic en el botón de música?
   - Esquina inferior derecha
   - El navegador requiere un click para reproducir
3. ¿El archivo está dañado?
   - Intenta con otro archivo MP3

### ¿Puedo poner cualquier canción?
Sí, pero:
- Debe ser **royalty-free** (sin derechos de autor)
- Recomendado: música clásica, instrumental, piano
- Máximo 5 MB de peso

### ¿El usuario puede pausar la música?
Sí, haciendo clic en el botón de música (esquina inferior derecha).

### Cambié la canción pero sigue sonando la anterior
Limpia el caché:
- En Chrome: Ctrl + Shift + Delete
- Abre en modo incógnito

### La música se corta o se congela
- El archivo puede estar dañado, intenta otro
- El servidor (si está en línea) puede ser lento
- Intenta con un archivo más pequeño (menos MB)

---

## 🎨 DISEÑO Y COLORES

### Quiero cambiar los colores - ¿Es fácil?
Sí, muy fácil:
1. Abre `css/style.css`
2. Busca `:root {` al principio
3. Cambia los valores de color

### ¿Qué colores me recomiendas?
Mira las opciones en `REFERENCIA_CODIGOS.md`:
- Azul (actual)
- Rosa pastel
- Púrpura
- Verde
- Turquesa

### Los colores se ven diferente en móvil
Es normal, las pantallas varían. Pero debería verse similar.

### El fondo no se ve bonito
Intenta cambiar los colores primarios.
El fondo responde automáticamente.

---

## 📄 EDICIÓN Y GUARDADO

### ¿Cómo edito sin un editor de código?
Opción 1: Busca "Notepad++" (gratis)
Opción 2: Abre con Word y abrirá en modo texto
Opción 3: Los campos editables (misa/recepción) puedes cambiarlos directo

### Cambié algo pero no se guarda
¿Están los cambios en un campo editable (misa/recepción)?
- Esos se guardan automáticamente en el navegador
- Los cambios de código requieren guardar el archivo

### Cometí un error - ¿Hay un "deshacer"?
En el editor de código:
- Si no cerraste: Ctrl + Z para deshacer
- Si cerraste: necesitas la copia anterior

**Consejo:** Haz una copia de respaldo antes de editar:
1. Duplica la carpeta completa
2. Llámala `CumpleanosLuciana-COPIA`
3. Así tienes una versión de respaldo

### ¿Puedo compartir el código con alguien para que lo edite?
Sí, puedes:
1. Comprimir la carpeta en ZIP
2. Enviar por email
3. Alguien más abre, edita y te lo devuelve

---

## 💻 PROBLEMAS TÉCNICOS

### ¿Funciona en todos los navegadores?
Sí, pero mejor en:
- Chrome (Google)
- Firefox (Mozilla)
- Safari (Mac/iPhone)
- Edge (Windows)

### ¿Funciona en móvil?
Sí, 100%. Es responsiva.

### ¿Funciona en tablet?
Sí, perfectamente.

### La página se ve rota
Actualiza: Ctrl + R o Cmd + R
O abre en modo incógnito

### Me sale un error en la consola (F12)
Probablemente sea por:
- La foto no encontrada
- La música no encontrada
- Cambios incorrectos en el código

Revisa que los archivos existan.

### La página va lenta
1. La foto puede ser muy grande (comprime)
2. La música puede ser muy pesada (reduce)
3. Actualiza: Ctrl + Shift + R (limpia caché)

---

## 🌐 COMPARTIR EN LÍNEA

### ¿Cómo publico la página en internet?
Opciones gratis:
1. **Netlify.com** - Sube la carpeta completa
2. **Vercel.com** - Sube la carpeta completa
3. **GitHub Pages** - Requiere cuenta GitHub
4. **Firebase Hosting** - De Google

Todas te dan un link público para compartir.

### ¿Necesito pagar algo?
No, todas las opciones listadas son GRATIS.

### ¿Cuánto espacio ocupan los archivos?
- HTML: ~15 KB
- CSS: ~20 KB
- JavaScript: ~10 KB
- Foto: 100-500 KB (depende)
- Música: 1-5 MB (depende)

Total: ~2-10 MB

### ¿El link de la página caducará algún día?
No si lo publicasen en Netlify, Vercel, etc.
Seguirá funcionando indefinidamente (mientras exista la cuenta).

---

## 🔒 PRIVACIDAD Y SEGURIDAD

### ¿Es seguro compartir el número de WhatsApp?
En línea, sí está visible. Considera:
- Usar WhatsApp Business
- Cambiar el número después del evento
- Usar un chatbot

### ¿Pueden robarse mis datos?
Los únicos datos visibles son:
- Nombre de Luciana
- Ubicaciones (iglesia, salón)
- Número de WhatsApp (si está online)
- Las fechas y horas

No hay datos sensibles (tarjetas, contraseñas, etc.).

### ¿Qué privacidad tiene la página?
Es completamente privada:
- No guarda datos en ningún servidor
- No hace seguimiento del usuario
- No tiene cookies
- No envía información a nadie

---

## 📞 ¿Y si tengo otro problema?

### Pasos para solucionar:
1. Limpia el caché (Ctrl + Shift + Delete)
2. Abre en otro navegador
3. Abre en modo incógnito
4. Verifica que todos los archivos existan
5. Busca en Google el error específico

### No puedo resolver - ¿Dónde obtengo ayuda?
- Busca en YouTube "editar HTML beginner"
- Stack Overflow (para asuntos técnicos)
- Un amigo con experiencia en código

### ¿Hay un video tutorial?
Busca en YouTube:
- "Cómo editar un archivo HTML"
- "Personalizar página web HTML"
- "Editar CSS colors"

---

## ✅ CHECKLIST RÁPIDO

Si todo falla, verifica:

- [ ] ¿El archivo `index.html` existe?
- [ ] ¿La carpeta `css/` existe con `style.css`?
- [ ] ¿La carpeta `js/` existe con `script.js`?
- [ ] ¿La carpeta `images/` existe con la foto?
- [ ] ¿La carpeta `audio/` existe con la música?
- [ ] ¿El navegador es moderno (Chrome, Firefox, Safari)?
- [ ] ¿Limpié el caché?
- [ ] ¿Verifiqué los nombres de archivo (sensible a mayúsculas)?
- [ ] ¿Los cambios de código tienen comillas cerradas?
- [ ] ¿La fecha es futura?

Si pasas todos estos puntos, debe funcionar. 🎉

---

**¡Espero haber resuelto tu duda!** 💎✨

¿Algo más? Vuelve a leer la sección correspondiente o busca en Google.
