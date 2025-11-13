export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  publishedAt?: string;
  category: string;
  readTime: number;
  image: string;
  tags: string[];
  views?: number;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Cómo Maximizar tus Ganancias como Conductor en MyDriver",
    excerpt: "Descubre las mejores estrategias para aumentar tus ingresos y optimizar tu tiempo en la plataforma.",
    content: `
# Cómo Maximizar tus Ganancias como Conductor en MyDriver

Como conductor en MyDriver, tienes muchas oportunidades para aumentar tus ganancias. En este artículo te compartimos las estrategias más efectivas que nuestros mejores conductores utilizan.

## 1. Entiende la Demanda

La plataforma funciona mejor durante ciertos horarios. Generalmente, la demanda es mayor:
- Mañanas (6:00 AM - 9:00 AM)
- Mediodías (11:00 AM - 1:00 PM)
- Tardes (5:00 PM - 8:00 PM)

Planifica tu horario durante estos períodos para maximizar solicitudes.

## 2. Mantén una Calificación Excelente

Tu calificación es tu mejor herramienta:
- Responde rápidamente a las solicitudes
- Mantén tu vehículo limpio y en buenas condiciones
- Sé cortés y profesional con los pasajeros
- Sigue las rutas más eficientes

Una calificación de 4.8+ te coloca entre los mejores conductores, lo que te genera más solicitudes.

## 3. Optimiza tus Rutas

Utiliza las herramientas de navegación para:
- Planificar rutas antes de aceptar viajes
- Evitar horas pico en carreteras congestionadas
- Conocer las rutas más rentables en tu área

## 4. Aprovecha los Bonos y Promociones

MyDriver ofrece constantemente:
- Bonos por número de viajes completados
- Promociones en horarios específicos
- Incentivos especiales para nuevos sectores

Mantente atento a las notificaciones en tu app.

## 5. Proporciona Excelente Servicio

El servicio excepcional genera:
- Propinas más altas
- Clientes frecuentes
- Mejor calificación
- Recomendaciones a otros usuarios

## Conclusión

Combinando estas estrategias, muchos conductores de MyDriver han duplicado sus ingresos. Recuerda que la consistencia y la dedicación son clave para el éxito.
    `,
    author: "MyDriver Blog",
    date: "2025-11-10",
    publishedAt: "2025-11-10",
    category: "Consejos para Conductores",
    readTime: 5,
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=500&fit=crop",
    tags: ["consejos", "ganancias", "conducción", "estrategia"],
    views: 850
  },
  {
    id: "2",
    title: "MyDriver Cargo: La Nueva Era del Transporte de Mercancías",
    excerpt: "Conoce cómo MyDriver Cargo revoluciona el envío de paquetes en México con tecnología de vanguardia.",
    content: `
# MyDriver Cargo: La Nueva Era del Transporte de Mercancías

## Introducción a MyDriver Cargo

MyDriver Cargo es nuestra solución innovadora para pequeños y medianos empresarios que necesitan enviar mercancías de manera segura, rápida y económica.

## Características Principales

### 1. Cobertura Extendida
- Disponible en las principales ciudades de México
- Rutas optimizadas por IA
- Entregas mismo día en muchas áreas

### 2. Seguridad Garantizada
- GPS en tiempo real
- Seguros de cobertura completa
- Fotografia de entrega
- Notificaciones en tiempo real

### 3. Precios Competitivos
Nuestros precios son hasta 40% más bajos que la competencia sin sacrificar calidad.

### 4. Facilidad de Uso
- Cotiza al instante
- Agenda tus entregas en minutos
- Seguimiento en tiempo real
- Recibos digitales

## Beneficios para tu Negocio

- Aumenta la satisfacción de tus clientes
- Reduce costos de logística
- Automatiza procesos
- Acceso a reportes detallados

## Casos de Éxito

Cientos de pequeños negocios han incrementado sus ventas un 30% al mejorar su logística con MyDriver Cargo.

## Comienza Hoy

Registra tu negocio y obtén 5 envíos gratis en tu primer mes.
    `,
    author: "Equipo MyDriver",
    date: "2025-11-08",
    publishedAt: "2025-11-08",
    category: "Negocios",
    readTime: 4,
    image: "https://images.unsplash.com/photo-1578575437999-3967291ba8c0?w=800&h=500&fit=crop",
    tags: ["cargo", "negocios", "logística", "tecnología"],
    views: 1230
  },
  {
    id: "3",
    title: "Seguridad en Carretera: 10 Tips Esenciales para Conductores",
    excerpt: "Medidas de seguridad que todo conductor debe conocer para protegerse a sí mismo y a sus pasajeros.",
    content: `
# Seguridad en Carretera: 10 Tips Esenciales para Conductores

## 1. Mantenimiento del Vehículo

Realiza revisiones regulares de:
- Frenos
- Llantas
- Luces
- Fluidos

## 2. Revisión Pre-Viaje

Antes de cada turno:
- Verifica el estado del vehículo
- Comprueba combustible
- Asegúrate que todos los sistemas funcionen

## 3. Distancia de Seguridad

Mantén una distancia mínima de:
- 1 segundo por cada 16 km/h de velocidad
- Aumenta en condiciones adversas

## 4. Manejo Defensivo

- Anticipa el comportamiento de otros conductores
- Mantén la calma en situaciones difíciles
- No uses el celular mientras conduces

## 5. Cumple los Límites de Velocidad

- Protégete a ti y a tus pasajeros
- Evita multas
- Ahorra combustible

## 6. Descansos Regulares

En viajes largos, descansa cada 2 horas.

## 7. Conoce las Leyes

Mantente actualizado en regulaciones de tránsito.

## 8. Equipo de Emergencia

Lleva siempre:
- Botiquín
- Triángulos de emergencia
- Linterna
- Herramientas básicas

## 9. Seguros Actualizados

Mantén tus pólizas al día.

## 10. Reporta Problemas

Si identificas un vehículo con problemas, reporta al autoridades.

## Conclusión

Tu seguridad es nuestra prioridad. Conducir responsablemente beneficia a todos.
    `,
    author: "Departamento de Seguridad",
    date: "2025-11-05",
    publishedAt: "2025-11-05",
    category: "Seguridad",
    readTime: 6,
    image: "https://images.unsplash.com/photo-1507136566006-cfc505b114d1?w=800&h=500&fit=crop",
    tags: ["seguridad", "conducción", "carretera", "consejos"],
    views: 2100
  }
];
