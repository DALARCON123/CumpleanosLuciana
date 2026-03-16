# 💎 Invitación Digital - XV Años de Luciana

Una página web elegante, responsiva y femenina para invitar a los 15 años de Luciana. 
Diseño tipo princesa/palacio con colores azul pastel, plata y blanco.

---

## 🎯 Características

✨ **Diseño Premium**
- Estilo princesa elegante y delicado
- Colores azul pastel, azul cielo, plata y blanco
- Efectos visuales sutiles y animaciones suaves
- Tipografías elegantes (Playfair Display, Cormorant Garamond)

📱 **100% Responsivo**
- Optimizado para celular (especialmente para WhatsApp)
- Perfecto en tablets y desktop
- Carga rápida y rendimiento óptimo

⚡ **Funcionalidades**
- Cuenta regresiva en tiempo real
- Control de música de fondo elegante
- Información editable de misa y recepción
- Integración directa con Google Maps
- Botón de confirmación por WhatsApp
- Animaciones al hacer scroll

---

## 📁 Estructura de Archivos

```
CumpleanosLuciana/
├── index.html              # Archivo principal (HTML)
├── css/
│   └── style.css          # Estilos (CSS)
├── js/
│   └── script.js          # Funcionalidades (JavaScript)
├── images/
│   └── (tu foto aquí)     # Carpeta para imágenes
├── audio/
│   └── (tu música aquí)   # Carpeta para música
├── README.md              # Este archivo
└── COMO_EDITAR.md         # Guía de edición
```

---

## 🚀 Cómo Usar

### 1. Descarga los Archivos
- Descarga todo el contenido de la carpeta `CumpleanosLuciana`

### 2. Abre en el Navegador
- Haz doble clic en `index.html` para abrir en tu navegador
- O haz clic derecho > "Abrir con" > tu navegador favorito

### 3. Comparte por WhatsApp
- Una vez personalizada, comparte el enlace o el archivo HTML directamente

### 4. Publica en Internet (Opcional)
- Si quieres compartir por link:
  - Sube los archivos a un servicio como Netlify, Vercel, GitHub Pages, etc.
  - Encontrarás un enlace público para compartir por WhatsApp

---

## ✏️ Ediciones Principales

### 1️⃣ Cambiar la Foto de Luciana

**Opción A: Con editor de código**
1. Abre `index.html` con un editor de texto
2. Busca: `<img src="images/luciana.jpg" alt="Luciana" class="hero-image">`
3. Reemplaza `luciana.jpg` por el nombre de tu foto
4. Ejemplo: `<img src="images/mi-foto.jpg" ...>`

**Opción B: Rápida**
1. Coloca tu foto en la carpeta `images/`
2. Renómbrala como `luciana.jpg` (o actualiza el nombre en el HTML)

### 2️⃣ Cambiar la Fecha de la Cuenta Regresiva

1. Abre `index.html`
2. Busca: `<div id="eventDate" data-date="2026-05-23T18:00:00"...`
3. Cambia `2026-05-23T18:00:00` a tu fecha
4. Formato: `YYYY-MM-DDTHH:MM:SS`

**Ejemplos:**
- `2026-05-23T18:00:00` = 23 de mayo de 2026, 6:00 PM
- `2026-06-15T19:30:00` = 15 de junio de 2026, 7:30 PM
- `2026-04-10T17:00:00` = 10 de abril de 2026, 5:00 PM

### 3️⃣ Editar Información de Misa y Recepción

Estos campos son **editables directamente en la página**:

1. **Abre la página en el navegador**
2. **Haz clic en cualquier texto** (Fecha, Hora, Iglesia, Dirección)
3. **Edita el texto**
4. **Haz clic afuera** para guardar

Los cambios se guardan automáticamente en tu navegador.

También puedes editar directamente en el HTML:
- Busca `id="massDate"`, `id="massTime"`, etc.
- Reemplaza el texto dentro

### 4️⃣ Cambiar Número de WhatsApp

1. Abre `js/script.js`
2. Busca: `sendWhatsApp('+5491234567890')`
3. Reemplaza `+5491234567890` con tu número
4. Incluye el código de país (ej: +549 para Argentina)

**Ejemplos de números:**
- Argentina: `+5491234567890`
- Mexico: `+525512345678`
- España: `+34612345678`
- Colombia: `+573012345678`

### 5️⃣ Cambiar Ubicaciones en Google Maps

1. Abre `index.html`
2. Busca: `onclick="openMap('Capilla Santa María de los Ángeles', '0.0,0.0')"`
3. Reemplaza el nombre con tu ubicación real

**Ejemplo:**
```html
openMap('Iglesia San Pedro', '0.0,0.0')
```

El sistema buscará automáticamente por nombre en Google Maps.

**Para usar coordenadas exactas:**
1. Abre Google Maps
2. Haz clic derecho en la ubicación
3. Copia las coordenadas que aparecen
4. Pégalas en lugar de `0.0,0.0`

### 6️⃣ Cambiar Música de Fondo

1. Coloca tu archivo de música en la carpeta `audio/`
2. Nómbralo como `musica.mp3`
3. O abre `index.html` y busca:
   ```html
   <source src="audio/musica.mp3" type="audio/mpeg">
   ```
4. Reemplaza `musica.mp3` por el nombre de tu archivo

**Música recomendada:**
- Pixabay.com (música gratis, sin copyright)
- Freepik.com (tiene sección de audio)
- Pexels.com (música gratis)
- YouTube Audio Library

**Consejos:**
- Usa canciones románticas y elegantes
- Duración: 5-10 minutos mínimo (se repite)
- Formato: MP3 (mejor compatibilidad)

---

## 🎨 Personalizar Colores

Si quieres cambiar los colores (azul pastel, plata, etc.):

1. Abre `css/style.css`
2. Busca `:root` al principio del archivo
3. Modifica los valores:

```css
:root {
    --color-primary: #B4D7E8;        /* Azul pastel */
    --color-secondary: #87CEEB;      /* Azul cielo */
    --color-accent: #E8E8E8;         /* Plata */
    --color-gold: #D4AF37;           /* Oro */
    --color-dark: #2C3E50;           /* Azul oscuro */
    --color-white: #FFFFFF;          /* Blanco */
}
```

**Colores alternativos:**
- Rosa pastel: `#FFB6C1` o `#FFC0CB`
- Púrpura suave: `#D8BFD8` o `#DDA0DD`
- Verde pastel: `#98D98E` o `#90EE90`

---

## 📲 Compartir por WhatsApp

### Opción 1: Link (recomendado)
1. Sube los archivos a Netlify, Vercel o GitHub Pages
2. Comparte el enlace en WhatsApp
3. Se ve hermoso en cualquier navegador

### Opción 2: Archivo HTML directo
1. Comparte el archivo `index.html` como archivo
2. Los que lo descarguen pueden abrirlo en su navegador

### Opción 3: En una página web propia
1. Si tienes un servidor web, sube todos los archivos
2. Comparte la URL en WhatsApp

---

## 🔧 Solución de Problemas

### La foto no se ve
- Asegúrate de que el archivo esté en la carpeta `images/`
- Verifica que el nombre sea exacto (sensible a mayúsculas)
- Usa formato JPG o PNG

### La música no suena
- El navegador podría no permitir reproducción automática
- Haz clic en el botón de música en la esquina inferior derecha
- Algunos navegadores requieren un "click" del usuario primero

### Los números de la cuenta regresiva no cambian
- Verifica que la fecha sea futura (no pasada)
- Revisa el formato: `YYYY-MM-DDTHH:MM:SS`
- Abre la consola (F12) para ver si hay errores

### Los botones no funcionan
- Reemplaza el número de WhatsApp con el tuyo
- Verifica que el número tenga el código de país (+549...)

### Se ve extraño en móvil
- Limpia el caché del navegador (Ctrl+Shift+Delete)
- Abre en navegador modo incógnito
- Intenta con otro navegador

---

## 💡 Consejos y Trucos

### Para mejor visualización en WhatsApp:
1. Toma una captura de la portada para vista previa
2. Adjunta el link en el mensaje
3. Usa un emoji o GIF para llamar la atención

### Para optimizar la carga:
1. Comprime las imágenes (reducir peso)
2. Usa imagen JPG en lugar de PNG si es posible
3. Música: máximo 3-5 MB si es MP3

### Seguridad:
- No compartas números privados en el código fuente
- Si publicas en línea, los números serán visibles
- Considera usar un chatbot o servicio de WhatsApp Business

### Actualizaciones:
- Los cambios en los campos editables se guardan en el navegador
- Para borrar los cambios guardados, limpia el caché o abre en incógnito

---

## 📚 Secciones Incluidas

1. **Portada Principal** - Foto y mensaje bienvenida
2. **Cuenta Regresiva** - Sincronizada en tiempo real
3. **Misa de Acción de Gracias** - Editable + Google Maps
4. **Recepción** - Editable + Google Maps
5. **Confirmación de Asistencia** - Botón WhatsApp directo
6. **Música de Fondo** - Control elegante
7. **Mensaje Final** - Despedida elegante

---

## 🎁 Archivos Incluidos

- **index.html** - Estructura principal
- **css/style.css** - Estilos y animaciones
- **js/script.js** - Funcionalidades y lógica
- **Carpeta images/** - Para colocar fotos
- **Carpeta audio/** - Para la música

---

## 📞 Soporte Técnico

Si tienes problemas:
1. Verifica que todos los archivos estén en la misma carpeta
2. Usa un editor de código: VS Code (gratis)
3. Busca en Google el error específico

**Editores recomendados:**
- Visual Studio Code (gratis)
- Sublime Text (pago, hay versión trial)
- Notepad++ (gratis)

---

## 🎉 ¡Disfruta!

Esta invitación está hecha con amor para que Luciana tenga una celebración especial.
¡Que sea hermosa y que muchas personas confirmen su asistencia!

**¡Feliz XV Años, Luciana!** 💎✨

---

**Última actualización:** Marzo 2026
**Versión:** 1.0
**Licencia:** Uso personal

---

## 📝 Notas Finales

- La página es completamente responsiva
- Funciona sin conexión a internet una vez cargada
- Los estilos modernos se ven mejor en navegadores actuales
- Probada en Chrome, Firefox, Safari y Edge
- Optimizada especialmente para móviles
