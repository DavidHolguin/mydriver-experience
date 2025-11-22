# Configuración recomendada de Google Tag Manager

## 🎯 Eventos críticos a rastrear en MyDriver

### 1. CONVERSIONES PRINCIPALES

#### Registro de Usuario
```
Event Name: form_submit
Parámetros:
- form_name: "registro_usuario"
- titulo_formulario: (nombre del servicio)
- ciudad: (ciudad seleccionada)
```

#### Click en CTA Principal (Hero)
```
Event Name: button_click
Parámetros:
- button_name: (texto del botón)
- location: "hero_slider"
```

#### Contacto por WhatsApp
```
Event Name: contact
Parámetros:
- contact_type: "whatsapp"
- service: (servicio relacionado)
```

---

### 2. EVENTOS POR PÁGINA

#### Página Principal (Index)
- **Hero Slider clicks**: Cada opción de slide
- **Descargar App clicks**: iOS/Android
- **Video demo play**: Si existe video
- **Scroll tracking**: Secciones vistas

#### Página Socio Conductor
- Form submit: "solicitud_conductor"
- Download: "guia_conductor"

#### Página Socio Repartidor
- Form submit: "solicitud_repartidor"

#### Página Socio Flotilla
- Form submit: "solicitud_flotilla"

#### Página Negocio Aliado
- Form submit: "solicitud_aliado"

#### Página MyDriver Cargo
- Form submit: "informacion_cargo"

#### Página de Descargas
- File downloads tracked
- Sistema operativo
- Tipo de archivo

#### Página de Blog
- Lectura de post
- Tiempo de permanencia
- Click en enlaces

#### Página de Contacto
- Form submit: "contacto_general"
- Call button: "llamar"

---

### 3. GOALS EN GOOGLE ANALYTICS

Configurar estos goals en GA4:

1. **Registro completado**
   - Evento: form_submit
   - Valor: conversión importante

2. **Contact solicitudes**
   - Evento: contact
   - Valor: lead generado

3. **Descargas de app**
   - Evento: button_click
   - Filtro: location = "download_app"

4. **Tiempo en página**
   - Duración > 30 segundos en página importante

5. **Scroll depth**
   - 50%, 75%, 100% de página

---

### 4. CONFIGURACIÓN DE META PIXEL (Opcional)

Si necesitas Meta Pixel para publicidad en Facebook/Instagram:

```javascript
// En index.html agregar antes del cierre de body
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', 'TU_PIXEL_ID_AQUI');
fbq('track', 'PageView');
</script>
<noscript>
<img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=TU_PIXEL_ID_AQUI&ev=PageView&noscript=1" />
</noscript>
```

---

### 5. CUSTOM EVENTS PARA RASTREAR

```typescript
// Ejemplos de eventos personalizados a disparar:

// En Hero section
trackButtonClick('Quiero ser socio', 'hero_flotilla')
trackButtonClick('Solicita tu viaje', 'hero_app')
trackButtonClick('Descubrir más', 'hero_lucifernagas')

// En formularios
trackFormSubmit('solicitud_socio_conductor')
trackFormSubmit('solicitud_socio_repartidor')
trackFormSubmit('solicitud_flotilla')

// En contactos
trackContact('whatsapp', 'socio_conductor')
trackContact('llamada', 'general')
trackContact('email', 'consulta')

// En descargas
trackDownload('app_driver', 'apk')
trackDownload('app_driver', 'ios')
trackDownload('guia_conductor', 'pdf')

// En búsqueda/filtros
trackSearch('conductor')

// Eventos personalizados
trackCustomEvent('banner_viewed', { 
  banner_name: 'promo_annual' 
})
```

---

### 6. IMPLEMENTACIÓN RÁPIDA

#### Paso 1: Verificar GTM está funcionando
```javascript
// En consola del navegador
console.log(window.dataLayer);
```

#### Paso 2: Ver eventos en GTM Preview
1. Login en Google Tag Manager
2. Click "Preview" en tu contenedor
3. Accede a tu sitio
4. Deberías ver eventos disparados

#### Paso 3: Conectar a Google Analytics
1. En GTM, crea un "Google Analytics: GA4 Configuration" tag
2. Usa tu ID de propiedad GA4
3. Publica el cambio

#### Paso 4: Crear Goals/Conversiones
En Google Analytics:
1. Admin → Conversions
2. Crea nueva conversión
3. Selecciona evento personalizado
4. Mapea el evento de GTM

---

### 7. VARIABLES GTM ÚTILES

Crear estas variables en GTM para usar en eventos:

```
- Página (URL)
- Título de página
- Hora actual
- Device type (Mobile/Desktop)
- User ID (si tienes sesiones)
```

---

### 8. CHECKLIST DE IMPLEMENTACIÓN

- [ ] Verificar GTM se carga en index.html
- [ ] Verificar page views se rastrean automáticamente
- [ ] Agregar eventos de click en botones principales
- [ ] Agregar rastreo de formularios
- [ ] Configurar Google Analytics en GTM
- [ ] Crear goals en GA
- [ ] Crear Meta Pixel (si aplica)
- [ ] Verificar en Preview que funciona
- [ ] Publicar cambios
- [ ] Esperar 24 horas para ver datos en GA
- [ ] Crear dashboard de métricas

---

### 9. METRICAS CLAVE A MONITOREAR

📊 **Por semana:**
- Total de sesiones
- Tasa de conversión
- Origen de tráfico (orgánico, directo, referral)
- Páginas principales
- Dispositivos (móvil vs desktop)

💰 **Por mes:**
- Conversiones por canal
- Costo por conversión (si tienes ads)
- Embudo de conversión
- Tasa de rebote por página

---

### 10. RECURSOS

- [Google Tag Manager Help](https://support.google.com/tagmanager)
- [Google Analytics Setup](https://support.google.com/analytics)
- [GTM Best Practices](https://developers.google.com/tag-manager/quickstart)
- [Guía de implementación](https://developers.google.com/analytics/devguides/collection/gtagjs)

---

## 📞 Soporte

Para preguntas específicas sobre tu implementación:
1. Abre GTM Preview
2. Navega por tu sitio
3. Verifica qué eventos se disparan
4. Ajusta según sea necesario
