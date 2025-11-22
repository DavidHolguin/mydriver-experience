# 🚀 Guía de Despliegue - Google Tag Manager

## Pre-despliegue

Antes de desplegar a producción, asegúrate de:

- [ ] Todos los scripts de GTM están en `index.html`
- [ ] `src/App.tsx` inicializa GTM
- [ ] No hay errores en la consola del navegador
- [ ] Los eventos se disparan en GTM Preview
- [ ] Has testeado en navegadores principales

---

## Paso 1: Verificación local

```bash
# En tu terminal
npm run dev
# o
bun run dev
```

En navegador:
1. Abre http://localhost:5173
2. Abre DevTools (F12)
3. Console
4. Ejecuta: `console.log(window.dataLayer)`
5. Verifica que hay eventos

---

## Paso 2: Build para producción

```bash
# Build the project
npm run build
# o
bun run build

# Verificar que no hay errores
npm run lint
# o
bun run lint
```

---

## Paso 3: Desplegar a Vercel

Dado que tienes `vercel.json` en tu proyecto:

```bash
# Si ya tienes Vercel configurado
vercel deploy --prod
```

### Primera vez con Vercel

```bash
# Instalar Vercel CLI
npm install -g vercel

# Login a Vercel
vercel login

# Desplegar
vercel --prod
```

---

## Paso 4: Verificar en producción

Después de desplegar:

1. Ve a tu sitio en producción
2. Abre DevTools (F12)
3. Console
4. Ejecuta: `window.dataLayer`
5. Deberías ver eventos

**Nota**: El sitio tendrá GTM completamente funcional en producción.

---

## Paso 5: Conectar Google Analytics

1. Ve a [Google Tag Manager](https://tagmanager.google.com)
2. Selecciona contenedor `GTM-555W2DG3`
3. **Tags** → **New**
4. Elige **Google Analytics: GA4 Configuration**
5. Ingresa tu **Measurement ID** de GA4
6. Trigger: **All Pages**
7. **Save**
8. **Publish** (botón azul arriba)

---

## Paso 6: Esperar datos

- **Real-time**: 0-10 minutos (en Google Analytics)
- **Reportes**: 24-48 horas

En Google Analytics:
- Ve a **Reports** → **Realtime**
- Deberías ver sesiones activas
- En **Events** verás los eventos

---

## Paso 7: Crear Goals/Conversiones (Opcional)

En Google Analytics:

1. **Admin** → **Conversions** (o **Goals** en UA)
2. **New Goal/Conversion**
3. Selecciona **Event**
4. Elige evento (ej: `form_submit`)
5. **Create**

---

## Paso 8: Crear Dashboard (Opcional)

En Google Analytics:

1. **Dashboard** → **Create new dashboard**
2. **Add widget**
3. Selecciona métrica (Users, Events, etc.)
4. Filtra por evento si quieres

---

## 📊 Métricas importantes a monitorear

### Diarias
- Usuarios activos
- Sesiones
- Página principal vistas
- Bounce rate

### Semanales
- Conversiones totales
- Origen del tráfico
- Dispositivos (mobile/desktop)
- Páginas principales

### Mensuales
- Crecimiento de usuarios
- Tasa de conversión
- Top referrals
- Top páginas

---

## 🔄 Actualizaciones futuras

Si necesitas agregar más eventos:

1. Edita `src/lib/gtmEvents.ts` (agregar función)
2. O usa `trackCustomEvent('mi_evento', data)`
3. Usa en componentes
4. Build y deploy
5. Verificar en GTM Preview

**No necesitas actualizar GTM scripts en HTML**.

---

## 🆘 Troubleshooting en producción

### Problema: GTM no funciona en producción

**Solución**:
1. Verifica `index.html` después del build
2. En navegador, inspecciona source de `index.html`
3. Busca GTM-555W2DG3
4. Limpia caché de navegador
5. Abre en incógnito

### Problema: No veo datos en Analytics

**Solución**:
1. Espera 24 horas
2. Verifica GA4 está conectado en GTM
3. Publica cambios en GTM si no lo hiciste
4. Usa Real-time en Google Analytics (más rápido)

### Problema: Eventos no se disparan

**Solución**:
1. Verifica que implementaste `trackButtonClick()` etc. correctamente
2. Abre GTM Preview en producción
3. Verifica que se disparan eventos
4. Revisa consola del navegador por errores

---

## 📋 Checklist pre-despliegue

- [ ] `npm run build` sin errores
- [ ] `npm run lint` sin errores
- [ ] Eventos funcionan en localhost
- [ ] GTM Preview funciona
- [ ] index.html tiene scripts GTM
- [ ] No hay secrets/API keys en código
- [ ] Descripción de cambios lista

---

## 📋 Checklist post-despliegue

- [ ] Sitio está online en producción
- [ ] DevTools muestra eventos
- [ ] GTM Preview funciona
- [ ] No hay errores en console
- [ ] Analytics muestra datos (en real-time)
- [ ] Goals están creados

---

## 🔐 Seguridad

Antes de desplegar:

```bash
# Verificar que no hay variables de entorno expuestas
grep -r "GTM_" src/
# Solo deberían aparecer en config/gtmConfig.ts

# Verificar que no hay API keys
grep -r "api_key\|secret\|password" src/
# Si encuentra algo, remover antes de desplegar
```

---

## 📞 Variables de entorno (si aplica)

Si necesitas variables de entorno, crea `.env.local`:

```
VITE_GTM_ID=GTM-555W2DG3
VITE_GA4_ID=G-XXXXXXXXXX
```

Luego usa en código:
```typescript
const GTM_ID = import.meta.env.VITE_GTM_ID;
```

**Nota**: Ya está hardcoded, así que no es necesario.

---

## 🎯 Después del despliegue

1. Monitorea analytics diariamente por 1 semana
2. Ajusta goals si es necesario
3. Documenta eventos para tu equipo
4. Configura alertas si disponibles
5. Planifica análisis mensual

---

## 📈 Primeras métricas (después de 24h)

| Métrica | Objetivo | Acción si <objetivo |
|---------|----------|-------|
| Usuarios | >10/día | Revisar tráfico |
| Conv rate | >2% | Revisar UX |
| Bounce rate | <50% | Revisar contenido |
| Session duration | >1min | Revisar engagement |

---

## 🚨 Errores comunes

### ❌ "GTM-555W2DG3 not found in HTML"
✅ Solución: Verifica `index.html` después del build

### ❌ "dataLayer is undefined"
✅ Solución: GTM no cargó, espera un momento o recarga

### ❌ "Analytics no muestra datos"
✅ Solución: Espera 24 horas desde el deploy

### ❌ "Eventos no se disparan"
✅ Solución: Verifica que usaste `trackButtonClick()` etc.

---

## ✅ Despliegue completado

Una vez que:
- [ ] Sitio está online
- [ ] GTM funciona
- [ ] Datos en Analytics
- [ ] Goals creados

**¡Felicidades! Tu integración de GTM está completa y funcional.**

---

**Fecha**: 21 de noviembre de 2025  
**Versión**: 1.0  
**Estado**: ✅ Listo para producción
