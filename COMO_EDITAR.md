# ⚡ Guía Rápida de Edición

Ediciones que necesitas hacer ANTES de compartir:

---

## ✅ PASO 1: Foto de Luciana

1. Busca una foto de 250x350 píxeles (o más grande)
2. Colócala en la carpeta `images/`
3. Renómbrala como `luciana.jpg`

Si quieres otro nombre:
- Abre `index.html` con un editor de texto
- Busca: `src="images/luciana.jpg"`
- Cambia a tu nombre: `src="images/mi-foto.jpg"`

---

## ✅ PASO 2: Fecha del Evento

1. Abre `index.html` con editor de texto
2. Busca: `data-date="2026-05-23T18:00:00"`
3. Reemplaza con tu fecha en formato: `YYYY-MM-DDTHH:MM:SS`

Ejemplos:
```
2026-05-23T18:00:00 = 23 de mayo de 2026, 6:00 PM
2026-06-15T19:30:00 = 15 de junio de 2026, 7:30 PM
2026-04-10T17:00:00 = 10 de abril de 2026, 5:00 PM
```

---

## ✅ PASO 3: Número de WhatsApp

1. Abre `js/script.js` con editor de texto
2. Busca: `sendWhatsApp('+5491234567890')`
3. Reemplaza con tu número: `sendWhatsApp('+TU_NUMERO')`

Incluye código de país:
- Argentina: `+549` (ej: +5491234567890)
- México: `+52` (ej: +525512345678)
- España: `+34` (ej: +34612345678)
- Colombia: `+57` (ej: +573012345678)

---

## ✅ PASO 4: Información de Misa y Recepción

**Opción A - En la página (más fácil):**
1. Abre `index.html` en el navegador
2. Haz clic en cualquier campo que defina "Sábado, 23 de Mayo..."
3. Edita el texto
4. Haz clic fuera para guardar

**Opción B - En el código:**
1. Abre `index.html` con editor
2. Busca los campos `id="massDate"`, `id="massTime"`, etc.
3. Reemplaza el texto

Campos a editar:
- `massDate` = Fecha de la misa
- `massTime` = Hora de la misa
- `churchName` = Nombre de la iglesia
- `churchAddress` = Dirección de la iglesia
- `receptionDate` = Fecha de la recepción
- `receptionTime` = Hora de la recepción
- `hallName` = Nombre del salón
- `hallAddress` = Dirección del salón

---

## ✅ PASO 5: Google Maps (Ubicaciones)

1. Abre `index.html` con editor
2. Busca: `openMap('Capilla Santa María de los Ángeles', '0.0,0.0')`
3. Reemplaza el nombre:
   ```
   openMap('Tu Iglesia Aquí', '0.0,0.0')
   openMap('Tu Salón Aquí', '0.0,0.0')
   ```

Hay dos botones de Maps (uno para misa, otro para recepción).

---

## ✅ PASO 6: Música de Fondo

1. Coloca tu archivo MP3 en la carpeta `audio/`
2. Renómbralo como `musica.mp3`

**O cambia el nombre en el HTML:**
1. Abre `index.html`
2. Busca: `<source src="audio/musica.mp3"`
3. Cambia `musica.mp3` a tu archivo

Música recomendada:
- Pixabay.com - Música clásica elegante
- Freepik.com - Audio royalty-free
- Busca: "Instrumental romantic", "Classical elegant", "Soft piano"

---

## ✅ PASO 7: Colores (Opcional)

Si no quieres azul pastel, puedes cambiar los colores:

1. Abre `css/style.css`
2. Busca `:root {` al principio
3. Modifica estos colores:

```css
--color-primary: #B4D7E8;        /* Azul pastel - cambiar aquí */
--color-secondary: #87CEEB;      /* Azul cielo - cambiar aquí */
--color-accent: #E8E8E8;         /* Plata - cambiar aquí */
--color-gold: #D4AF37;           /* Oro - cambiar aquí */
```

Opciones de colores:
- **Azul clara**: #B0E0E6, #ADD8E6, #B4D7E8
- **Rosa pastel**: #FFB6C1, #FFC0CB, #FFD7E1
- **Púrpura**: #DDA0DD, #D8BFD8, #ECC5E5
- **Verde suave**: #98D98E, #90EE90, #B0E0A0

---

## 🎯 RESUMEN: Archivos a Editar

```
1. Foto: images/luciana.jpg (cambiar archivo)
2. Fecha: index.html (buscar data-date)
3. WhatsApp: js/script.js (buscar sendWhatsApp)
4. Misa/Recepción: index.html o editar en página
5. Maps: index.html (buscar openMap)
6. Música: audio/musica.mp3 (cambiar archivo)
7. Colores: css/style.css (buscar :root)
```

---

## 🚀 Listo para Compartir

Una vez hayas hecho estos cambios:

1. **Abre index.html en el navegador**
2. **Verifica que todo se vea correcto**
3. **Prueba todos los botones** (Maps, WhatsApp, música)
4. **Copia el enlace o el archivo**
5. **Comparte por WhatsApp**

---

## 💡 Tips Útiles

**Para probar en móvil antes de compartir:**
- Abre el archivo en tu celular
- Usa "F12" o el menú de desarrollador para ver cómo se ve
- Prueba todos los botones

**Si quieres que se vea en un link en lugar de un archivo:**
- Sube todo a un servicio gratis: Netlify.com, Vercel.com, GitHub Pages
- Te darán un link público para compartir

**Si algo no funciona:**
- Verifica el formato de números y fechas
- Busca en Google el código de país de tu país
- Asegúrate de que los archivos de imagen y música existan

---

**¡Listo! Ahora solo personaliza y comparte.** 🎉✨
