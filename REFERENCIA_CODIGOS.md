# 🔧 Referencia de Códigos - Ejemplos de Edición

Aquí encontrarás ejemplos de cómo hacer cambios específicos en el código.

---

## 1. EJEMPLOS DE FECHAS

Para cambiar la fecha en `index.html`, busca esta línea:

```html
<div id="eventDate" data-date="2026-05-23T18:00:00" style="display:none;"></div>
```

### Ejemplos por País y Región:

**Argentina - CABA:**
```html
<div id="eventDate" data-date="2026-05-23T18:00:00" style="display:none;"></div>
<!-- 23 de mayo de 2026, 6:00 PM -->
```

**México - CDMX:**
```html
<div id="eventDate" data-date="2026-06-15T19:30:00" style="display:none;"></div>
<!-- 15 de junio de 2026, 7:30 PM -->
```

**España - Madrid:**
```html
<div id="eventDate" data-date="2026-04-10T20:00:00" style="display:none;"></div>
<!-- 10 de abril de 2026, 8:00 PM -->
```

**Colombia - Bogotá:**
```html
<div id="eventDate" data-date="2026-07-25T17:00:00" style="display:none;"></div>
<!-- 25 de julio de 2026, 5:00 PM -->
```

**Venezuela - Caracas:**
```html
<div id="eventDate" data-date="2026-08-14T18:30:00" style="display:none;"></div>
<!-- 14 de agosto de 2026, 6:30 PM -->
```

### Formato Explicado:
```
YYYY-MM-DDTHH:MM:SS

YYYY = Año (4 dígitos) → 2026
MM = Mes (00-12) → 05 para mayo
DD = Día (01-31) → 23
T = Separador (siempre va aquí)
HH = Hora (00-23) → 18 para 6:00 PM
MM = Minuto (00-59) → 00
SS = Segundo (00-59) → 00
```

---

## 2. EJEMPLOS DE NÚMEROS WHATSAPP

En `js/script.js`, busca:

```javascript
function sendWhatsApp(phoneNumber) {
```

Más abajo verás:

```javascript
onclick="sendWhatsApp('+5491234567890')"
```

### Ejemplos por País:

**Argentina (Buenos Aires):**
```javascript
sendWhatsApp('+5491134567890')
// +54 (código país) + 9 (celular) + 11 (área CABA) + número
```

**Argentina (Rosario):**
```javascript
sendWhatsApp('+5493416789012')
// +54 (código país) + 9 (celular) + 341 (área Rosario) + número
```

**Argentina (Córdoba):**
```javascript
sendWhatsApp('+5493514567890')
// +54 (código país) + 9 (celular) + 351 (área Córdoba) + número
```

**México (CDMX):**
```javascript
sendWhatsApp('+525555123456')
// +52 (código país) + 55 (área CDMX) + número
```

**México (Guadalajara):**
```javascript
sendWhatsApp('+523312345678')
// +52 (código país) + 33 (área Guadalajara) + número
```

**España (Madrid):**
```javascript
sendWhatsApp('+34612345678')
// +34 (código país) + 6 (número celular) + dígitos
```

**España (Barcelona):**
```javascript
sendWhatsApp('+34712345678')
// +34 (código país) + 7 (número celular) + dígitos
```

**Colombia (Bogotá):**
```javascript
sendWhatsApp('+573012345678')
// +57 (código país) + 30 (código celular) + 1 (área Bogotá) + número
```

**Colombia (Medellín):**
```javascript
sendWhatsApp('+573104567890')
// +57 (código país) + 31 (código celular) + 04 (área Medellín) + número
```

**Venezuela (Caracas):**
```javascript
sendWhatsApp('+584121234567')
// +58 (código país) + 412 (código área Caracas) + número
```

**Venezuela (Maracaibo):**
```javascript
sendWhatsApp('+584261234567')
// +58 (código país) + 426 (código área Maracaibo) + número
```

**Chile (Santiago):**
```javascript
sendWhatsApp('+56912345678')
// +56 (código país) + 9 (celular) + número
```

**Perú (Lima):**
```javascript
sendWhatsApp('+51987654321')
// +51 (código país) + 9 (celular) + número
```

**Ecuador (Quito):**
```javascript
sendWhatsApp('+593987654321')
// +593 (código país) + 9 (celular) + número
```

### El Formato Completo en HTML:

```html
<button class="btn-whatsapp" onclick="sendWhatsApp('+5491234567890')">
    <i class="fab fa-whatsapp"></i>
    <span>Confirmar por WhatsApp</span>
</button>
```

---

## 3. EJEMPLOS DE GOOGLE MAPS

En `index.html`, busca `openMap()`:

### Para la Misa:
```html
<button class="btn-secondary" onclick="openMap('Capilla Santa María de los Ángeles', '0.0,0.0')">
    <i class="fas fa-map"></i>
    Ver en Google Maps
</button>
```

**Ejemplos por Ciudad:**

**Buenos Aires - Catedral Metropolitana:**
```html
openMap('Catedral Metropolitana, Buenos Aires', '0.0,0.0')
```

**CABA - Basílica de Luján:**
```html
openMap('Basílica de Luján, San Isidro, Buenos Aires', '0.0,0.0')
```

**México - Catedral Metropolitana CDMX:**
```html
openMap('Catedral Metropolitana de la Asunción, CDMX', '0.0,0.0')
```

**Madrid - Catedral de Madrid:**
```html
openMap('Catedral de la Almudena, Madrid', '0.0,0.0')
```

**Bogotá - Catedral Primada:**
```html
openMap('Catedral Primada de Colombia, Bogotá', '0.0,0.0')
```

### Para la Recepción (Salón):

**Buenos Aires - Ejemplo:**
```html
openMap('Salón Real Palace, Av. Figueroa Alcorta, Buenos Aires', '0.0,0.0')
```

**México - Ejemplo:**
```html
openMap('Salón Las Flores, Paseo de la Reforma, CDMX', '0.0,0.0')
```

**Madrid - Ejemplo:**
```html
openMap('Salón Versailles, Calle Gran Vía, Madrid', '0.0,0.0')
```

---

## 4. EJEMPLOS DE INFORMACIÓN DE MISA

En `index.html`, busca la sección "Misa de Acción de Gracias":

### Ejemplo Argentina:
```html
<p id="massDate" class="editable" contenteditable="true">Sábado, 23 de Mayo de 2026</p>
<p id="massTime" class="editable" contenteditable="true">5:00 PM</p>
<p id="churchName" class="editable" contenteditable="true">Basílica de Luján, San Isidro</p>
<p id="churchAddress" class="editable" contenteditable="true">Calle Lavalle 305, San Isidro, Buenos Aires</p>
```

### Ejemplo México:
```html
<p id="massDate" class="editable" contenteditable="true">Sábado, 15 de Junio de 2026</p>
<p id="massTime" class="editable" contenteditable="true">7:00 PM</p>
<p id="churchName" class="editable" contenteditable="true">Catedral Metropolitana de México</p>
<p id="churchAddress" class="editable" contenteditable="true">Plaza de la Constitución, Centro, CDMX</p>
```

### Ejemplo España:
```html
<p id="massDate" class="editable" contenteditable="true">Sábado, 10 de Abril de 2026</p>
<p id="massTime" class="editable" contenteditable="true">8:00 PM</p>
<p id="churchName" class="editable" contenteditable="true">Catedral de la Almudena, Madrid</p>
<p id="churchAddress" class="editable" contenteditable="true">Calle Bailén 10, Madrid</p>
```

---

## 5. EJEMPLOS DE INFORMACIÓN DE RECEPCIÓN

En `index.html`, busca la sección "Recepción":

### Ejemplo Argentina:
```html
<p id="receptionDate" class="editable" contenteditable="true">Sábado, 23 de Mayo de 2026</p>
<p id="receptionTime" class="editable" contenteditable="true">7:00 PM</p>
<p id="hallName" class="editable" contenteditable="true">Salón Real Palace</p>
<p id="hallAddress" class="editable" contenteditable="true">Av. Figueroa Alcorta 4200, Recoleta, Buenos Aires</p>
```

### Ejemplo México:
```html
<p id="receptionDate" class="editable" contenteditable="true">Sábado, 15 de Junio de 2026</p>
<p id="receptionTime" class="editable" contenteditable="true">9:00 PM</p>
<p id="hallName" class="editable" contenteditable="true">Salón Las Flores</p>
<p id="hallAddress" class="editable" contenteditable="true">Paseo de la Reforma 505, Cuauhtémoc, CDMX</p>
```

### Ejemplo España:
```html
<p id="receptionDate" class="editable" contenteditable="true">Sábado, 10 de Abril de 2026</p>
<p id="receptionTime" class="editable" contenteditable="true">10:00 PM</p>
<p id="hallName" class="editable" contenteditable="true">Salón Versailles</p>
<p id="hallAddress" class="editable" contenteditable="true">Calle Gran Vía 640, Madrid</p>
```

---

## 6. EJEMPLOS DE NOMBRES PARA SALONES

Algunos nombres elegantes para las invitaciones:

**Premium:**
- Salón Real Palace
- Salón Versailles
- Salón Elegancia
- Salón Royal
- Salón Cristal

**Sofisticado:**
- Casa Grande
- Mansión Deluxe
- Salón de Gala
- Salón Dorado
- Salón Francés

**Moderno:**
- Salón Contemporáneo
- Espacio Lujo
- Salón Prestigious
- Loft Elegancia
- Salón Premium

---

## 7. EJEMPLOS DE CAMBIOS DE COLORES

En `css/style.css`, busca `:root`:

### Paleta Azul (Actual - La que ya está):
```css
:root {
    --color-primary: #B4D7E8;        /* Azul pastel principal */
    --color-secondary: #87CEEB;      /* Azul cielo */
    --color-accent: #E8E8E8;         /* Plata clara */
    --color-gold: #D4AF37;           /* Oro suave */
}
```

### Paleta Rosa Pastel:
```css
:root {
    --color-primary: #FFB6C1;        /* Rosa pastel principal */
    --color-secondary: #FFC0CB;      /* Rosa claro */
    --color-accent: #E8E8E8;         /* Plata clara */
    --color-gold: #D4AF37;           /* Oro suave */
}
```

### Paleta Púrpura Elegante:
```css
:root {
    --color-primary: #DDA0DD;        /* Púrpura claro */
    --color-secondary: #D8BFD8;      /* Púrpura pastel */
    --color-accent: #E8E8E8;         /* Plata clara */
    --color-gold: #D4AF37;           /* Oro suave */
}
```

### Paleta Verde Suave:
```css
:root {
    --color-primary: #98D98E;        /* Verde pastel */
    --color-secondary: #90EE90;      /* Verde claro */
    --color-accent: #E8E8E8;         /* Plata clara */
    --color-gold: #D4AF37;           /* Oro suave */
}
```

### Paleta Turquesa Tropical:
```css
:root {
    --color-primary: #7FFFD4;        /* Turquesa claro */
    --color-secondary: #AFEEEE;      /* Turquesa pastel */
    --color-accent: #E8E8E8;         /* Plata clara */
    --color-gold: #D4AF37;           /* Oro suave */
}
```

---

## 8. EJEMPLO COMPLETO PERSONALIZADO

Aquí un ejemplo completo para una región específica.

**Para: Luciana en Bogotá, Colombia**

### 1. Fecha: `index.html`
```html
<div id="eventDate" data-date="2026-05-16T18:00:00" style="display:none;"></div>
```

### 2. WhatsApp: `js/script.js`
```javascript
sendWhatsApp('+573012345678')
```

### 3. Misa: `index.html`
```html
<p id="massDate" class="editable" contenteditable="true">Sábado, 16 de Mayo de 2026</p>
<p id="massTime" class="editable" contenteditable="true">5:00 PM</p>
<p id="churchName" class="editable" contenteditable="true">Catedral Primada de Colombia</p>
<p id="churchAddress" class="editable" contenteditable="true">Calle 11 No. 6-50, Centro Histórico, Bogotá</p>
```
```html
openMap('Catedral Primada de Colombia, Bogotá', '0.0,0.0')
```

### 4. Recepción: `index.html`
```html
<p id="receptionDate" class="editable" contenteditable="true">Sábado, 16 de Mayo de 2026</p>
<p id="receptionTime" class="editable" contenteditable="true">7:00 PM</p>
<p id="hallName" class="editable" contenteditable="true">Salón Cristal del Zipa</p>
<p id="hallAddress" class="editable" contenteditable="true">Carrera 7 No. 75-50, Usaquén, Bogotá</p>
```
```html
openMap('Salón Cristal del Zipa, Usaquén, Bogotá', '0.0,0.0')
```

---

## 9. VERIFICACIÓN DE SINTAXIS

Si algo no funciona después de editar, revisa:

✅ **Para fechas:**
- Formato: `YYYY-MM-DDTHH:MM:SS`
- La `T` está presente
- El mes es 01-12
- El día es 01-31
- La hora es 00-23
- Es una fecha futura

✅ **Para números WhatsApp:**
- Comienza con `+`
- Solo contiene números después del `+`
- Sin espacios, guiones o paréntesis
- Tiene código de país

✅ **Para HTML:**
- Todas las comillas están cerradas
- No hay caracteres especiales sin codificar
- Las etiquetas están completas

---

## 10. HERRAMIENTAS ÚTILES

**Para validar JSON o código:**
- https://jsonlint.com/
- https://codevalidator.com/

**Para buscar códigos de país:**
- https://en.wikipedia.org/wiki/List_of_country_calling_codes

**Para convertir color a Hex:**
- https://htmlcolorcodes.com/

**Para probar Google Maps:**
- https://maps.google.com/

---

¡Usa estos ejemplos como reference para personalizar tu invitación! 💎✨
