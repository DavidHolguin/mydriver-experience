# 📚 GTM - Referencia Rápida

## 🎯 Tu ID de GTM
```
GTM-555W2DG3
```

---

## 📁 Archivos creados/modificados

| Archivo | Cambio | Propósito |
|---------|--------|----------|
| `index.html` | ✏️ Actualizado | Scripts de GTM |
| `src/App.tsx` | ✏️ Actualizado | Inicializar GTM |
| `src/hooks/useGoogleTagManager.ts` | ✨ Nuevo | Hook principal |
| `src/components/GoogleTagManagerPageTracker.tsx` | ✨ Nuevo | Auto page tracking |
| `src/lib/gtmEvents.ts` | ✨ Nuevo | Funciones de eventos |
| `src/config/gtmConfig.ts` | ✨ Nuevo | Configuración centralizada |
| `src/components/RegisterForm.tsx` | ✏️ Actualizado | Form tracking |
| `src/components/Hero.tsx` | ✏️ Actualizado | Button tracking |

---

## 📖 Documentación

1. **GTM_INTEGRATION_GUIDE.md** ← Guía principal de uso
2. **GTM_CONFIG_RECOMMENDED.md** ← Configuración en GTM Console
3. **GTM_COMPONENT_CHECKLIST.md** ← Eventos por componente
4. **GTM_VERIFICATION_GUIDE.md** ← Cómo verificar que funciona
5. **GTM_IMPLEMENTATION_SUMMARY.md** ← Resumen ejecutivo

---

## 🚀 Uso rápido

### Importar función
```tsx
import { trackButtonClick } from '@/lib/gtmEvents';
```

### Usar en componente
```tsx
<button onClick={() => trackButtonClick('mi_boton', 'ubicacion')}>
  Click aquí
</button>
```

---

## 📊 Funciones disponibles

```typescript
trackButtonClick(name, location?)        // Clics
trackFormSubmit(name, data?)              // Formularios
trackContact(type, service?)              // Contactos
trackDownload(name, type)                 // Descargas
trackSearch(term)                         // Búsquedas
trackConversion(name, value?, currency?)  // Conversiones
trackPurchase(id, value, currency, items) // Compras
trackContentView(name, type)              // Contenido
trackCustomEvent(name, data?)             // Personalizado
trackTimeSpent(section, time)             // Tiempo
```

---

## ✅ Verificación inmediata

En consola del navegador:
```javascript
// Ver si GTM está cargado
console.log(window.dataLayer);

// Debería mostrar algo como:
[
  {"gtm.start": 1234567890, "event": "gtm.js"},
  {"event": "page_view", "page_path": "/"}
]
```

---

## 🔗 Links importantes

- **Google Tag Manager**: https://tagmanager.google.com
- **Google Analytics**: https://analytics.google.com
- **GTM Documentation**: https://support.google.com/tagmanager
- **GA4 Setup**: https://support.google.com/analytics

---

## 🎓 Próximos pasos

1. ✅ GTM está instalado
2. 🔄 Implementar en más componentes (ver checklist)
3. 📊 Conectar Google Analytics
4. 🎯 Crear goals/conversiones
5. 📈 Monitorear datos

---

## 💡 Ejemplos de uso

### Tracking de click
```tsx
<button onClick={() => trackButtonClick('registrarse', 'hero')}>
  Registrarse
</button>
```

### Tracking de formulario
```tsx
const handleSubmit = (data) => {
  trackFormSubmit('contacto', { email: data.email });
  // enviar form...
};
```

### Tracking de contacto
```tsx
<a href="https://wa.me/..." onClick={() => {
  trackContact('whatsapp', 'contacto');
}}>
  WhatsApp
</a>
```

### Tracking personalizado
```tsx
import { trackCustomEvent } from '@/lib/gtmEvents';

trackCustomEvent('video_play', {
  video_title: 'Demo MyDriver',
  duration: 120
});
```

---

## 🐛 Si algo no funciona

1. **Abre GTM Preview**: Verifica eventos en tiempo real
2. **Revisa consola**: F12 → Console → Ver errores
3. **Verifica dataLayer**: `console.log(window.dataLayer)`
4. **Recarga caché**: Ctrl+Shift+Delete
5. **Contacta al equipo**: Si el problema persiste

---

## 📱 Meta Pixel (Opcional)

Para agregar Meta Pixel (Facebook/Instagram ads):

1. Obtén tu Meta Pixel ID
2. Edita `src/config/gtmConfig.ts`
3. Agrupa `META_PIXEL_ID: 'TU_ID'`
4. Usa `trackCustomEvent('meta_event', data)` para enviar a Meta

---

## 🎯 KPIs a rastrear

- **Conversiones**: Registros, solicitudes
- **Tráfico**: Sessions, usuarios, página vistas
- **Engagement**: Tiempo en página, scroll depth
- **Contactos**: WhatsApp, llamadas, emails
- **Descargas**: Aplicación, documentos

---

## 📞 Soporte rápido

| Problema | Solución |
|----------|----------|
| GTM no se carga | Verifica `index.html` tiene los scripts |
| Eventos no se disparan | Verifica importes y sintaxis |
| No veo datos en GA | Espera 24h o usa Real-time en GA |
| GTM Preview no funciona | Limpiar caché y recargar |

---

**Versión**: 1.0  
**Actualizado**: 21 de noviembre de 2025  
**Estado**: ✅ Listo para usar
