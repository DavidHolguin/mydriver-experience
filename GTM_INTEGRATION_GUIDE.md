# Integración de Google Tag Manager - Guía de Uso

## 📋 Resumen

Se ha integrado **Google Tag Manager (GTM)** profesionalmente en tu aplicación MyDriver. El sistema está configurado para rastrear automáticamente todas las páginas y eventos de usuario con el ID: `GTM-555W2DG3`

## ✅ Lo que se ha instalado

### 1. **Scripts de GTM en HTML** (`index.html`)
- ✓ Script principal en el `<head>` (carga asincrónica)
- ✓ Fallback noscript en el `<body>` (para navegadores sin JS)

### 2. **Hook personalizado** (`src/hooks/useGoogleTagManager.ts`)
- `useGoogleTagManager()` - Inicializa GTM (ejecutado automáticamente en App.tsx)
- `useTrackEvent()` - Rastrear eventos personalizados
- `useTrackPageView()` - Rastrear vistas de página manual

### 3. **Componente de rastreo de rutas** (`src/components/GoogleTagManagerPageTracker.tsx`)
- Rastrea automáticamente cambios de página en React Router
- Envía `page_view` event a GTM en cada navegación

### 4. **Funciones de eventos comunes** (`src/lib/gtmEvents.ts`)
- Conversiones, clicks de botones, envíos de formularios
- Búsquedas, compras, descargas, contactos
- Eventos personalizados

---

## 🚀 Cómo usar

### A. Rastrear clics en botones

```tsx
import { trackButtonClick } from '@/lib/gtmEvents';

<button onClick={() => {
  trackButtonClick('registro_hero', 'seccion_principal');
  // tu lógica...
}}>
  Registrarse
</button>
```

### B. Rastrear envío de formularios

```tsx
import { trackFormSubmit } from '@/lib/gtmEvents';

const handleSubmit = (data) => {
  trackFormSubmit('registro_conductor', {
    tipo_usuario: 'conductor',
  });
  // enviar formulario...
};
```

### C. Rastrear contactos/consultas

```tsx
import { trackContact } from '@/lib/gtmEvents';

<button onClick={() => {
  trackContact('whatsapp', 'socio-conductor');
  // abrir WhatsApp
}}>
  Contactar por WhatsApp
</button>
```

### D. Rastrear descargas

```tsx
import { trackDownload } from '@/lib/gtmEvents';

<button onClick={() => {
  trackDownload('app_conductor', 'apk');
  // iniciar descarga
}}>
  Descargar APK
</button>
```

### E. Rastrear conversiones

```tsx
import { trackConversion } from '@/lib/gtmEvents';

trackConversion('registro_exitoso', 100, 'MXN');
```

### F. Rastrear búsquedas

```tsx
import { trackSearch } from '@/lib/gtmEvents';

const handleSearch = (term) => {
  trackSearch(term);
};
```

### G. Rastrear compras/transacciones

```tsx
import { trackPurchase } from '@/lib/gtmEvents';

trackPurchase('TXN-12345', 1500, 'MXN', [
  { id: 'SKU001', name: 'Membresía Plus', quantity: 1, price: 1500 },
]);
```

### H. Evento personalizado

```tsx
import { trackCustomEvent } from '@/lib/gtmEvents';

trackCustomEvent('video_reproducido', {
  video_title: 'Tutorial de MyDriver',
  duracion_segundos: 120,
});
```

### I. Usar en componentes React

```tsx
import { useTrackEvent } from '@/hooks/useGoogleTagManager';

const MyComponent = () => {
  const trackEvent = useTrackEvent('mi_evento', {
    categoria: 'engagement',
  });

  const handleClick = () => {
    trackEvent({ accion: 'click' });
  };

  return <button onClick={handleClick}>Click</button>;
};
```

---

## 📊 Rastreo automático

✓ **Page Views**: Todos los cambios de ruta se rastrean automáticamente
✓ **Session**: GTM registra automáticamente el inicio de sesión

---

## 🔗 Eventos recomendados para rastrear

### Página Principal (Index)
- Click en CTA "Registrarse"
- Click en "Descargar Aplicación"
- Visualización de video demo
- Secciones vistas (scroll tracking)

### Páginas de Socios
- Click en "Solicitar Acceso"
- Envío del formulario de registro
- Descarga de documentos/guías

### Página de Contacto
- Envío de formulario de contacto
- Click en "Llamar"
- Click en "WhatsApp"

### Descargas
- Click en botón de descarga
- Tipo de archivo descargado
- Sistema operativo (si aplica)

### Blog
- Visualización de post
- Tiempo de permanencia
- Click en enlaces relacionados

---

## 🔍 Verificar en Google Tag Manager

1. Ve a [Google Tag Manager Console](https://tagmanager.google.com)
2. Selecciona tu contenedor (GTM-555W2DG3)
3. Ve a **Preview** para ver los eventos en tiempo real
4. En tu sitio web, abre **Console** (F12 → Console)
5. Deberías ver eventos siendo registrados

### Ver eventos en la consola:
```javascript
console.log(window.dataLayer);
```

---

## 📱 Meta Pixel (Si necesitas)

Para integrar Meta Pixel (Facebook), puedes:

1. Crear un tag en GTM que dispare el evento de Meta Pixel
2. O agregar el script de Meta Pixel manualmente en `index.html`

```html
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  // ... código Meta Pixel
}
</script>
```

---

## ✨ Próximos pasos

1. **Configura tu cuenta de Google Analytics** en GTM
2. **Crea eventos personalizados** en GTM según tu negocio
3. **Configura Meta Pixel** si necesitas publicidad en Facebook/Instagram
4. **Verifica los datos** en Google Analytics después de 24 horas
5. **Crea goals/conversiones** para cada objetivo importante

---

## ❓ Preguntas frecuentes

**P: ¿Funciona en modo development?**
R: Sí, GTM funciona en desarrollo y producción.

**P: ¿Se ralentizará mi sitio?**
R: No, GTM se carga de forma asincrónica (no bloquea).

**P: ¿Los eventos se rastrean si el usuario tiene ad blockers?**
R: Algunos ad blockers pueden bloquear GTM, pero la mayoría de usuarios no los usan.

**P: ¿Necesito cambiar el ID de GTM?**
R: No, está preconfigurado con `GTM-555W2DG3`

---

## 📞 Soporte

Si necesitas ayuda con eventos específicos, contacta al equipo de desarrollo.
