# Checklist de integración GTM por componente

Esta guía te ayudará a integrar eventos de GTM en cada componente importante de tu aplicación.

---

## 🔍 Componentes principales a rastrear

### ✅ COMPLETADOS (Ya integrados)

#### 1. Hero.tsx
```tsx
import { trackButtonClick } from '@/lib/gtmEvents';

// Ya implementado: Click tracking en botones del slider
<Button onClick={() => trackButtonClick(currentSlide.buttonText, 'hero_slider')}>
```

#### 2. RegisterForm.tsx
```tsx
import { trackFormSubmit } from '@/lib/gtmEvents';

// Ya implementado: Form submission tracking
trackFormSubmit('registro_usuario', {
  titulo_formulario: title,
  ciudad: formData.city,
});
```

---

### 📋 POR IMPLEMENTAR

#### 1. Navbar.tsx
**Tipo**: Navigation tracking
```tsx
import { trackButtonClick } from '@/lib/gtmEvents';

// Agregar en cada Link/Button
<Link to="/socio-conductor" onClick={() => trackButtonClick('nav_socio_conductor', 'navbar')}>
  Socio Conductor
</Link>

// Para descargar app
<button onClick={() => trackButtonClick('nav_descargar_app', 'navbar')}>
  Descargar
</button>
```

#### 2. ServicesSection.tsx
**Tipo**: Service interaction tracking
```tsx
import { trackButtonClick } from '@/lib/gtmEvents';

// Rastrear cada servicio visto/clickeado
<div onClick={() => trackButtonClick('servicio_' + service.id, 'services_section')}>
  {service.title}
</div>

// Si hay botón de más info
<button onClick={() => trackCustomEvent('service_info_clicked', {
  service_id: service.id,
  service_name: service.title
})}>
  Más información
</button>
```

#### 3. DownloadBar.tsx
**Tipo**: Download tracking
```tsx
import { trackDownload } from '@/lib/gtmEvents';

// Para descargas de iOS
<button onClick={() => {
  trackDownload('mydriver_app_ios', 'ios');
  // iniciar descarga o abrir App Store
}}>
  Descargar iOS
</button>

// Para descargas de Android
<button onClick={() => {
  trackDownload('mydriver_app_android', 'apk');
  // iniciar descarga o abrir Play Store
}}>
  Descargar Android
</button>
```

#### 4. Contacto.tsx
**Tipo**: Contact form & contact methods
```tsx
import { trackFormSubmit, trackContact } from '@/lib/gtmEvents';

// Form de contacto
const handleContactSubmit = (data) => {
  trackFormSubmit('contacto_general', {
    asunto: data.subject,
  });
  // enviar form...
};

// Botón de WhatsApp
<button onClick={() => {
  trackContact('whatsapp', 'contacto_page');
  window.open('https://wa.me/...');
}}>
  WhatsApp
</button>

// Botón de llamada
<button onClick={() => {
  trackContact('llamada', 'contacto_page');
  window.location.href = 'tel:+...';
}}>
  Llamar
</button>

// Link de email
<a href="mailto:..." onClick={() => {
  trackContact('email', 'contacto_page');
}}>
  Email
</a>
```

#### 5. Footer.tsx
**Tipo**: Footer navigation & social links
```tsx
import { trackButtonClick } from '@/lib/gtmEvents';

// Links en footer
<Link to="/politicas" onClick={() => trackButtonClick('link_politicas', 'footer')}>
  Políticas
</Link>

// Social media links
<a href="https://instagram.com/..." onClick={() => {
  trackButtonClick('social_instagram', 'footer');
}}>
  Instagram
</a>
```

#### 6. BlogCard.tsx
**Tipo**: Blog content interaction
```tsx
import { trackContentView } from '@/lib/gtmEvents';

// Al hacer click en un post
<div onClick={() => {
  trackContentView(post.title, 'blog_post');
  navigate(`/blog/${post.id}`);
}}>
  {post.title}
</div>
```

#### 7. Blog.tsx & BlogPost.tsx
**Tipo**: Blog reading analytics
```tsx
import { useTrackPageView } from '@/hooks/useGoogleTagManager';
import { trackTimeSpent } from '@/lib/gtmEvents';

// En BlogPost.tsx
export const BlogPost = () => {
  useTrackPageView(`/blog/${id}`, post.title);
  
  // Rastrear tiempo de lectura
  useEffect(() => {
    const startTime = Date.now();
    return () => {
      const timeSpent = Date.now() - startTime;
      trackTimeSpent(`blog_${id}`, timeSpent);
    };
  }, [id]);

  return (
    // contenido del post
  );
};
```

#### 8. Descargas.tsx
**Tipo**: Resource download tracking
```tsx
import { trackDownload } from '@/lib/gtmEvents';

// Para cada recurso descargable
<button onClick={() => {
  trackDownload('guia_conductor', 'pdf');
  downloadFile('/docs/guia_conductor.pdf');
}}>
  Descargar Guía
</button>

<button onClick={() => {
  trackDownload('app_conductor', 'apk');
  downloadFile('/app/conductor.apk');
}}>
  Descargar APK
</button>
```

#### 9. Páginas de Socios (SocioConductor.tsx, etc.)
**Tipo**: Service-specific form tracking
```tsx
import { trackFormSubmit, trackButtonClick } from '@/lib/gtmEvents';

// Form de solicitud
const handleSolicitud = (data) => {
  trackFormSubmit('solicitud_conductor', {
    tipo_vehiculo: data.vehiculo,
    experiencia: data.experiencia,
  });
  // enviar solicitud...
};

// Botón de WhatsApp en página de servicio
<button onClick={() => {
  trackContact('whatsapp', 'socio_conductor');
  window.open('https://wa.me/...');
}}>
  Solicitar por WhatsApp
</button>

// Video demo (si existe)
<video onPlay={() => {
  trackCustomEvent('video_play', {
    video_name: 'demo_conductor',
    seccion: 'hero',
  });
}}>
```

#### 10. AppPromptModal.tsx
**Tipo**: App promotion tracking
```tsx
import { trackButtonClick } from '@/lib/gtmEvents';

<button onClick={() => {
  trackButtonClick('app_prompt_instalar', 'modal');
  // abrir app store
}}>
  Instalar App
</button>

<button onClick={() => {
  trackButtonClick('app_prompt_cerrar', 'modal');
  closeModal();
}}>
  Cerrar
</button>
```

---

## 🎯 Eventos por tipo de página

### Página Principal (Index)
```
✓ page_view: automático
✓ button_click: hero buttons
✓ button_click: download buttons
✓ button_click: CTA buttons
```

### Páginas de Socios
```
✓ page_view: automático
✓ form_submit: solicitud
✓ contact: WhatsApp/llamada
✓ button_click: nav buttons
```

### Página de Blog
```
✓ page_view: automático
✓ view_item: cuando abren post
✓ time_spent: tiempo leyendo
✓ button_click: link click
```

### Página de Contacto
```
✓ page_view: automático
✓ form_submit: contact form
✓ contact: WhatsApp
✓ contact: llamada
✓ contact: email
```

---

## 📊 Patrón de implementación estándar

**1. Importar función necesaria:**
```tsx
import { trackButtonClick } from '@/lib/gtmEvents';
// o
import { trackFormSubmit } from '@/lib/gtmEvents';
// o
import { trackCustomEvent } from '@/lib/gtmEvents';
```

**2. Llamar función en handler:**
```tsx
const handleClick = () => {
  trackButtonClick('nombre_boton', 'ubicacion');
  // tu lógica...
};

const handleSubmit = (data) => {
  trackFormSubmit('nombre_form', {
    campo1: data.field1,
    campo2: data.field2,
  });
  // tu lógica...
};
```

**3. Agregar a elemento:**
```tsx
<button onClick={handleClick}>Click</button>
<form onSubmit={handleSubmit}>...</form>
```

---

## ⚡ Sugerencias de eventos adicionales

### Engagement
- Scroll tracking (50%, 75%, 100% de página)
- Hover sobre elementos importantes
- Video play/pause

### E-commerce (si aplica)
- Add to cart
- Remove from cart
- Begin checkout
- Purchase complete

### Error tracking
- Form validation errors
- Network errors
- 404 pages

---

## 🔗 Referencia rápida de funciones

```typescript
trackButtonClick(buttonName, location?)
trackFormSubmit(formName, data?)
trackContact(contactType, service?)
trackDownload(fileName, fileType)
trackSearch(searchTerm)
trackConversion(name, value?, currency?)
trackPurchase(transactionId, value, currency, items?)
trackContentView(contentName, contentType)
trackCustomEvent(eventName, data?)
trackTimeSpent(sectionName, timeMs)
```

---

## 📝 Notas

- **Orden de implementación sugerida**: Hero → RegisterForm → Navbar → Footer → Otros
- **Prueba cada cambio**: Abre GTM Preview y verifica que se disparen los eventos
- **No incluyas datos sensibles**: Evita rastrear contraseñas, números de tarjeta, etc.
- **Usa nombres consistentes**: Ayuda a mantener los reportes limpios

---

## ✅ Checklist de validación

Después de implementar cada componente:

- [ ] Evento se dispara al interactuar
- [ ] Datos correctos en GTM Preview
- [ ] No hay errores en consola
- [ ] Parámetros tienen nombres consistentes
- [ ] Funcionalidad original no se ve afectada

---

**Status**: 📝 En progreso - Implementar componentes según prioridad
