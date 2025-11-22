# 📂 Estructura de archivos GTM

## Árbol de archivos implementados

```
myDriverLatam/
├── index.html ✅ (Scripts GTM)
├── GTM_IMPLEMENTATION_SUMMARY.md
├── GTM_INTEGRATION_GUIDE.md
├── GTM_CONFIG_RECOMMENDED.md
├── GTM_COMPONENT_CHECKLIST.md
├── GTM_VERIFICATION_GUIDE.md
├── GTM_QUICK_REFERENCE.md
│
└── src/
    ├── App.tsx ✅ (Inicializar GTM)
    │
    ├── config/
    │   └── gtmConfig.ts ✨ (Configuración)
    │
    ├── hooks/
    │   └── useGoogleTagManager.ts ✨ (Hook principal)
    │
    ├── lib/
    │   └── gtmEvents.ts ✨ (Funciones de eventos)
    │
    └── components/
        ├── GoogleTagManagerPageTracker.tsx ✨ (Auto page tracking)
        ├── Hero.tsx ✅ (Button tracking)
        └── RegisterForm.tsx ✅ (Form tracking)
```

## ✨ = Archivo nuevo
## ✅ = Archivo actualizado

---

## 📋 Detalles de cada archivo

### 1. **index.html**
**Cambios**: 
- Script GTM en `<head>`
- noscript en `<body>`
- ID: GTM-555W2DG3

**Ubicación**: `/index.html`

---

### 2. **src/App.tsx**
**Cambios**:
- Importa `useGoogleTagManager`
- Importa `GoogleTagManagerPageTracker`
- Llama hook en componente
- Agrega component en router

**Ubicación**: `/src/App.tsx`

---

### 3. **src/config/gtmConfig.ts**
**Propósito**: Configuración centralizada
**Contiene**:
- GTM_ID
- META_PIXEL_ID (opcional)
- GA4_ID (opcional)
- Mapeo de páginas
- Mapeo de botones
- Mapeo de formularios

**Ubicación**: `/src/config/gtmConfig.ts`

---

### 4. **src/hooks/useGoogleTagManager.ts**
**Propósito**: Hook para inicializar GTM
**Exporta**:
- `useGoogleTagManager()` - Inicializar
- `useTrackEvent()` - Rastrear eventos
- `useTrackPageView()` - Rastrear páginas

**Ubicación**: `/src/hooks/useGoogleTagManager.ts`

---

### 5. **src/lib/gtmEvents.ts**
**Propósito**: Funciones de eventos
**Exporta**:
- `trackButtonClick()`
- `trackFormSubmit()`
- `trackContact()`
- `trackDownload()`
- `trackSearch()`
- `trackConversion()`
- `trackPurchase()`
- `trackContentView()`
- `trackCustomEvent()`
- `trackTimeSpent()`

**Ubicación**: `/src/lib/gtmEvents.ts`

---

### 6. **src/components/GoogleTagManagerPageTracker.tsx**
**Propósito**: Rastrear cambios de página automáticamente
**Funcionalidad**:
- Escucha cambios de ruta
- Envía `page_view` events a GTM
- Se usa en BrowserRouter

**Ubicación**: `/src/components/GoogleTagManagerPageTracker.tsx`

---

### 7. **src/components/Hero.tsx**
**Cambios**:
- Importa `trackButtonClick`
- Llama tracking en onClick de botones

**Ubicación**: `/src/components/Hero.tsx`

---

### 8. **src/components/RegisterForm.tsx**
**Cambios**:
- Importa `trackFormSubmit`
- Llama tracking en handleSubmit

**Ubicación**: `/src/components/RegisterForm.tsx`

---

## 📚 Documentación

### 1. **GTM_IMPLEMENTATION_SUMMARY.md**
Resumen ejecutivo de la implementación. Leer primero.

### 2. **GTM_INTEGRATION_GUIDE.md**
Guía completa de cómo usar la integración. Con ejemplos.

### 3. **GTM_CONFIG_RECOMMENDED.md**
Qué configurar en Google Tag Manager Console. Eventos, goals, etc.

### 4. **GTM_COMPONENT_CHECKLIST.md**
Cómo integrar eventos en cada componente. Paso a paso.

### 5. **GTM_VERIFICATION_GUIDE.md**
Cómo verificar que funciona. Testing y debugging.

### 6. **GTM_QUICK_REFERENCE.md**
Referencia rápida. Funciones y links.

---

## 🔄 Flujo de implementación

```
1. GTM scripts en HTML
   ↓
2. useGoogleTagManager hook en App.tsx
   ↓
3. GoogleTagManagerPageTracker en BrowserRouter
   ↓
4. Funciones de eventos en gtmEvents.ts
   ↓
5. Usar trackButtonClick, trackFormSubmit, etc. en componentes
```

---

## 🗂️ Cómo buscar archivos

### Por tipo
- **Configuración**: `src/config/gtmConfig.ts`
- **Hooks**: `src/hooks/useGoogleTagManager.ts`
- **Funciones**: `src/lib/gtmEvents.ts`
- **Componentes**: `src/components/GoogleTagManagerPageTracker.tsx`

### Por ubicación
- **Root**: `index.html`, archivos .md
- **src/**: App.tsx y carpetas
- **Documentación**: Archivos GTM_*.md

---

## ✅ Checklist de instalación

- [x] Scripts GTM en index.html
- [x] useGoogleTagManager en App.tsx
- [x] GoogleTagManagerPageTracker en routes
- [x] gtmConfig.ts creado
- [x] gtmEvents.ts creado
- [x] useGoogleTagManager.ts creado
- [x] GoogleTagManagerPageTracker.tsx creado
- [x] Hero.tsx actualizado con tracking
- [x] RegisterForm.tsx actualizado con tracking
- [x] Documentación completa

---

## 🚀 Siguientes pasos

1. Implementar eventos en más componentes (ver checklist)
2. Conectar Google Analytics en GTM
3. Crear goals en Google Analytics
4. Verificar datos en tiempo real
5. Esperar 24h para datos históricos

---

## 📞 Soporte

Si no encuentras un archivo:
1. Usa `Ctrl+P` en VS Code para búsqueda rápida
2. Busca por nombre de archivo
3. Busca por contenido con `Ctrl+Shift+F`

---

**Fecha**: 21 de noviembre de 2025
**Version**: 1.0
**Estado**: ✅ Completo
