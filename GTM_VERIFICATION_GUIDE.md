# 🔍 Guía de Verificación - Google Tag Manager

## ✅ Verificación Inmediata

### 1. Verificar en tu navegador

Abre tu sitio web y en la consola del navegador (F12):

```javascript
// Verifica si GTM está cargado
console.log(window.dataLayer);
```

**Resultado esperado**: Array con eventos
```javascript
[
  {"gtm.start": 1734872956789, "event": "gtm.js"},
  {"event": "page_view", "page_path": "/", "page_title": "MYDRIVER MÉXICO"}
]
```

---

### 2. Verificar ID de GTM

En la consola:
```javascript
// Busca referencias a GTM-555W2DG3 en el HTML
console.log(document.documentElement.innerHTML.includes('GTM-555W2DG3'));
// Debe retornar: true
```

---

### 3. Verificar script en HTML

Abre la página y busca en el HTML:
- `<head>`: Script principal con GTM-555W2DG3
- `<body>`: noscript iframe con GTM-555W2DG3

```bash
# En terminal (PowerShell)
(Get-Content "index.html") | Select-String "GTM-555W2DG3" | Measure-Object -Line
# Debe mostrar 2 líneas con GTM-555W2DG3
```

---

## 🧪 Pruebas de eventos

### Prueba 1: Page View automático

1. Abre tu sitio
2. En consola: `window.dataLayer`
3. Deberías ver `"event": "page_view"`
4. Navega a otra página (ej: /blog)
5. Verifica que haya otro `page_view` event

### Prueba 2: Button Click

1. Encuentra un botón con onClick (ej: en Hero)
2. Haz click
3. En consola: `console.log(window.dataLayer[window.dataLayer.length - 1])`
4. Deberías ver el último evento disparado

**Esperado**:
```javascript
{
  event: "button_click",
  button_name: "Quiero ser socio",
  location: "hero_slider"
}
```

### Prueba 3: Form Submit

1. Abre un formulario (ej: RegisterForm)
2. Completa y envía
3. En consola verifica eventos
4. Deberías ver `"event": "form_submit"`

---

## 🌐 Verificación en Google Tag Manager

### Paso 1: Abrir Preview

1. Ve a [Google Tag Manager](https://tagmanager.google.com/)
2. Login con tu cuenta Google
3. Selecciona el contenedor **GTM-555W2DG3**
4. Click en botón **"Preview"** (arriba a la derecha)

### Paso 2: Conectar tu sitio a Preview

1. Se abrirá una ventana emergente
2. Abre tu sitio web en otra pestaña
3. Deberías ver una barra naranja en tu sitio indicando "Preview mode"

### Paso 3: Verificar eventos

En el panel de Preview en GTM:

1. **Summary tab**: Muestra todos los eventos
2. **Tags Fired**: Qué tags se dispararon
3. **Data Layer**: Contenido del dataLayer

**Verifica**:
- ✓ `gtm.js` event al cargar
- ✓ `page_view` events cuando navegas
- ✓ Otros eventos personalizados que implementaste

---

## 📊 Verificación en Google Analytics

### Si ya tienes GA4 conectado:

1. Ve a [Google Analytics](https://analytics.google.com/)
2. Selecciona tu propiedad
3. **Real-time** en el menú izquierdo
4. Deberías ver actividad en tiempo real
5. Click en tu sitio y espera
6. Verás eventos bajo "Events"

**Nota**: Si no ves datos, espera 24 horas. GA4 demora en procesar datos iniciales.

---

## 🔧 Debugging avanzado

### Ver todos los eventos en consola

```javascript
// Ejecuta esto en la consola
window.dataLayer.forEach((event, index) => {
  console.log(`Evento ${index}:`, event);
});
```

### Monitorear eventos en tiempo real

```javascript
// Ejecuta en consola para ver eventos mientras navegas
const originalPush = window.dataLayer.push;
window.dataLayer.push = function(...args) {
  console.log('🎯 Nuevo evento GTM:', args[0]);
  return originalPush.apply(window.dataLayer, args);
};
```

### Verificar si GTM se cargó correctamente

```javascript
// En consola
{
  console.log('✓ dataLayer existe:', !!window.dataLayer);
  console.log('✓ gtag existe:', !!window.gtag);
  console.log('✓ Total eventos:', window.dataLayer.length);
  console.log('✓ Últimos 5 eventos:', window.dataLayer.slice(-5));
}
```

---

## 🐛 Solución de problemas comunes

### Problema: GTM no se carga
**Solución**:
1. Verifica que GTM-555W2DG3 está en index.html
2. Verifica que el script está en el `<head>`
3. Limpiar caché del navegador (Ctrl+Shift+Delete)
4. Recargar página

### Problema: Eventos no se disparan
**Solución**:
1. Verifica import: `import { trackButtonClick } from '@/lib/gtmEvents';`
2. Verifica que `window.gtag` existe: `console.log(window.gtag)`
3. Verifica sintaxis: `trackButtonClick('nombre', 'ubicacion')`
4. Abre GTM Preview para ver si se disparan

### Problema: No veo datos en GA4
**Solución**:
1. GA4 demora ~24 horas para mostrar datos iniciales
2. Verifica que GA4 está conectado en GTM
3. En GTM → Tags, debe haber "Google Analytics: GA4 Configuration"
4. Verifica en Google Analytics → Real-time (más rápido)

### Problema: Eventos se disparan pero no llegan a Analytics
**Solución**:
1. Verifica GA4 ID en GTM es correcto
2. Verifica que el tag GA4 tiene trigger "All Pages"
3. Publica los cambios en GTM
4. Espera 24-48 horas

---

## 📋 Checklist de verificación completa

Marca cada item conforme lo verifiques:

- [ ] GTM script está en `<head>` de index.html
- [ ] GTM noscript está en `<body>` de index.html
- [ ] ID GTM-555W2DG3 aparece 2 veces en index.html
- [ ] `window.dataLayer` existe en consola
- [ ] Page views se rastrean automáticamente
- [ ] Button clicks se rastrean (si implementaste)
- [ ] Form submits se rastrean (si implementaste)
- [ ] GTM Preview funciona y muestra eventos
- [ ] No hay errores en consola del navegador
- [ ] No hay errores en consola de GTM
- [ ] Cambios están publicados en GTM (si aplica)
- [ ] Google Analytics muestra datos (después de 24h)

---

## 🚀 Después de la verificación

Una vez verificado todo:

1. **Publica cambios en GTM**: Si no lo has hecho
2. **Espera 24 horas**: Para datos en Google Analytics
3. **Crea goals/conversiones**: En Google Analytics
4. **Crea dashboard**: Con métricas importantes
5. **Documenta eventos**: Para tu equipo

---

## 📞 Soporte

Si encuentras problemas:

1. **Primero**: Revisa la consola del navegador (F12)
2. **Segundo**: Usa GTM Preview para debuggear
3. **Tercero**: Verifica archivos:
   - `src/hooks/useGoogleTagManager.ts`
   - `src/lib/gtmEvents.ts`
   - `src/config/gtmConfig.ts`
4. **Finalmente**: Contacta al equipo de desarrollo

---

**Última actualización**: Noviembre 21, 2025
**Estado**: ✅ Listo para verificación
