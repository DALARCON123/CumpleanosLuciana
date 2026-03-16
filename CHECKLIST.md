# 📋 Checklist de Personalización

Usa este checklist para asegurarte de que todo esté listo antes de compartir.

## Antes de Empezar
- [ ] Tenvo la foto de Luciana (250x350 píxeles o más grande)
- [ ] Tengo la fecha y hora exacta del evento
- [ ] Tengo el número de WhatsApp (con código de país)
- [ ] Tengo información de la iglesia (nombre, dirección)
- [ ] Tengo información del salón (nombre, dirección)
- [ ] Tengo una canción de fondo elegante en MP3

---

## Cambios Necesarios

### 📸 1. Foto de Luciana
**Archivo a cambiar:** `images/luciana.jpg`

- [ ] Tengo la foto lista
- [ ] La copié a la carpeta `images/`
- [ ] Se llama `luciana.jpg` (o actualicé el HTML)
- [ ] Es de buena resolución (JPG o PNG)

**Ruta en HTML:** `index.html` → buscar `src="images/luciana.jpg"`

---

### 📅 2. Fecha del Evento
**Archivo a cambiar:** `index.html` → buscar `data-date="2026-05-23T18:00:00"`

- [ ] Cambié la fecha al día correcto
- [ ] Cambié la hora correcta en formato 24h
- [ ] Verifiqué que sea una fecha futura

**Formato correcto:** `YYYY-MM-DDTHH:MM:SS`
**Ejemplo:** `2026-05-23T18:00:00` (23 mayo 2026, 6:00 PM)

---

### 📱 3. Número de WhatsApp
**Archivo a cambiar:** `js/script.js` → buscar `sendWhatsApp('+5491234567890')`

- [ ] Cambié el número por el mío
- [ ] Incluí el código de país (+549, +52, +34, etc.)
- [ ] Sin espacios ni guiones (solo números)

**Formato:** `+CODIGOPAIS + NUMERO`
**Ejemplos válidos:**
- Argentina: `+5491234567890`
- México: `+525512345678`
- España: `+34612345678`

---

### ⛪ 4. Información de la Misa
**Archivo a cambiar:** `index.html` → Sección "Misa de Acción de Gracias"

- [ ] Cambié la fecha de la misa
- [ ] Cambié la hora de inicio
- [ ] Cambié el nombre de la iglesia
- [ ] Cambié la dirección de la iglesia

**Campos en HTML:**
- `id="massDate"` → Fecha
- `id="massTime"` → Hora
- `id="churchName"` → Nombre iglesia
- `id="churchAddress"` → Dirección

**Nota:** Puedes editar directamente en la página haciendo clic en los campos.

---

### 🎉 5. Información de la Recepción
**Archivo a cambiar:** `index.html` → Sección "Recepción"

- [ ] Cambié la fecha de la recepción
- [ ] Cambié la hora de inicio
- [ ] Cambié el nombre del salón
- [ ] Cambié la dirección del salón

**Campos en HTML:**
- `id="receptionDate"` → Fecha
- `id="receptionTime"` → Hora
- `id="hallName"` → Nombre salón
- `id="hallAddress"` → Dirección

---

### 🗺️ 6. Ubicaciones en Google Maps
**Archivo a cambiar:** `index.html` → Botones "Ver en Google Maps"

Busca DOS líneas con `onclick="openMap()`

**Primera (Misa):**
- [ ] Cambié el nombre de la iglesia en `openMap('Aquí', ...)`

**Segunda (Recepción):**
- [ ] Cambié el nombre del salón en `openMap('Aquí', ...)`

**No es necesario cambiar las coordenadas** - Google Maps buscará por nombre.

---

### 🎵 7. Música de Fondo
**Archivo a cambiar:** `audio/musica.mp3`

- [ ] Tengo un archivo MP3 elegante
- [ ] Lo coloqué en la carpeta `audio/`
- [ ] Se llama `musica.mp3` (o cambié el nombre en HTML)
- [ ] El archivo pesa menos de 5MB

**Dónde encontrar música:**
- Pixabay.com (música clásica, instrumental)
- Freepik.com (audio royalty-free)
- YouTube Audio Library (música gratis)

**Búsquedas recomendadas:**
- "Instrumental romantic"
- "Soft piano background"
- "Classical elegant"
- "Waltz"

---

### 🎨 7B. Colores (Opcional)
**Archivo a cambiar:** `css/style.css` → buscar `:root {`

- [ ] Decidí si quiero cambiar los colores
- [ ] Si cambio, modifiqué los valores en `:root`
- [ ] Probé la página para ver cómo se ve

**Colores actuales:**
- Azul pastel (principal)
- Azul cielo (secundario)
- Plata (acentos)
- Oro (detalles)

---

## Verificación Final

### Antes de Compartir:

- [ ] Abro `index.html` en el navegador
- [ ] La foto de Luciana se ve grande y clara
- [ ] La cuenta regresiva muestra una fecha futura
- [ ] Hago clic en "Ver invitación" y desciende suave
- [ ] Los datos de misa se ven actualizados
- [ ] Los datos de recepción se ven actualizados
- [ ] El botón "Ver en Google Maps" (misa) abre la ubicación correcta
- [ ] El botón "Ver en Google Maps" (recepción) abre la ubicación correcta
- [ ] Hago clic en botón WhatsApp y se abre con el mensaje correcto
- [ ] Hago clic en el botón de música (esquina inferior derecha)
- [ ] Proyecto en móvil y se ve hermoso (responsive)

---

## Cómo Compartir

### Opción 1: Por WhatsApp Directo (Recomendado)
- [ ] Copio la ruta completa de `index.html`
- [ ] La coloco en el navegador
- [ ] Tomo una captura de pantalla de la portada
- [ ] Comparto la captura + mensaje en WhatsApp
- [ ] Incluyo el link a la página web (si está en internet)

### Opción 2: Archivo HTML
- [ ] Comprimo toda la carpeta en ZIP
- [ ] Comparto el ZIP por WhatsApp
- [ ] El que lo descargue abre `index.html`

### Opción 3: Página Web (Más elegante)
- [ ] Subo los archivos a Netlify, Vercel o GitHub Pages
- [ ] Obtengo un link público (ej: https://luciana-xv.netlify.app)
- [ ] Comparto el link en WhatsApp
- [ ] La gente abre en cualquier navegador

---

## Pruebas Finales

- [ ] Probé en **Chrome**
- [ ] Probé en **Firefox** o **Safari**
- [ ] Probé en **móvil** (iPhone o Android)
- [ ] Probé en **tablet**
- [ ] Los botones responden correctamente
- [ ] La música se escucha (después de hacer clic en el botón)
- [ ] Las animaciones se ven suave
- [ ] La página carga rápido

---

## Notas Importantes

⚠️ **Seguridad:**
- Si publicas en internet, el número de WhatsApp será visible
- Considera usar WhatsApp Business si compartes el número
- No incluyas información privada en campos públicos

💡 **Optimización:**
- Comprime la foto para que cargue más rápido
- La música debe ser un MP3 de buena calidad pero optimizado
- Máximo 3-5 MB de peso total

📱 **Para WhatsApp:**
- La página debe verse perfecta en móvil (lo hace)
- Los botones deben ser fáciles de tocar
- Los títulos y textos deben ser legibles

---

## ¿Todo Listo?

Si marcaste TODO ✅ entonces:

1. **Tu invitación está lista para compartir**
2. **Se verá hermosa en cualquier dispositivo**
3. **Luciana tendrá una invitación digital premium**

---

**¡A Celebrar los XV Años de Luciana!** 🎉💎✨

*Versión Checklist - Marzo 2026*
