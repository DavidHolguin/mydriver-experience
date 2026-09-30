/**
 * MyDriver Experiencias — línea de negocio de turismo.
 *
 * Fuente de los destinos: tabla enviada por el cliente
 * "Ideas de destinos de 1 día desde Puebla" (Tabla_destinos_1_dia_Puebla.docx).
 *
 * Regla de la casa: no se publican precios, medidas ni imágenes que no estén
 * confirmados. Por eso esta línea NO publica precios — cada destino se cotiza
 * según el número de personas y la fecha — y las tarjetas no usan fotografías
 * de destinos que todavía no tenemos en /public/images.
 */

export type Experiencia = {
  slug: string;
  nombre: string;
  emoji: string;
  /** Época ideal tal como la definió el cliente */
  epoca: string;
  /** Concepto corto, tal como venía en la tabla del cliente */
  concepto: string;
  /** Ubicación del destino */
  destino: string;
  /** Dos o tres líneas de qué es el día */
  resumen: string;
  /** Lo que hace especial la salida */
  imperdibles: string[];
  /** Clases de Tailwind para la portada degradada de la tarjeta */
  tono: string;
};

export const SALIDA = "Puebla";

export const experiencias: Experiencia[] = [
  {
    slug: "six-flags-festival-del-terror",
    nombre: "Six Flags México · Festival del Terror",
    emoji: "🎢",
    epoca: "Octubre",
    concepto: "Van del terror 👻",
    destino: "Ciudad de México",
    resumen:
      "Salida de un día al Festival del Terror de Six Flags México. Viajamos de noche para que llegues con energía a las casas de terror, los juegos y los espectáculos de la temporada.",
    imperdibles: ["Casas de terror de la temporada", "Juegos mecánicos", "Salida de madrugada y regreso el mismo día"],
    tono: "from-orange-600 via-red-700 to-neutral-900",
  },
  {
    slug: "guanajuato-romantico",
    nombre: "Guanajuato romántico",
    emoji: "💕",
    epoca: "14 de febrero",
    concepto: "San Valentín en Guanajuato",
    destino: "Guanajuato",
    resumen:
      "Un día en la ciudad de los callejones para celebrar en pareja: callejoneadas, plazas, miradores y comida. Regresas la misma noche.",
    imperdibles: ["Callejón del Beso", "Teatro Juárez y Plaza de la Paz", "Mirador del Pipila y callejoneada"],
    tono: "from-rose-500 via-pink-600 to-purple-800",
  },
  {
    slug: "atlixco-villa-iluminada",
    nombre: "Atlixco + Villa Iluminada",
    emoji: "💡",
    epoca: "Noviembre – Diciembre",
    concepto: "Luces y Navidad",
    destino: "Atlixco, Puebla",
    resumen:
      "La Villa Iluminada de Atlixco en un solo día: recorrido de luz por el centro histórico, zócalo, viveros y antojitos. Salida cómoda desde Puebla capital.",
    imperdibles: ["Recorrido de luces en el centro", "Zócalo y calle de los dulces", "Viveros y viveros de noche"],
    tono: "from-amber-400 via-orange-500 to-indigo-900",
  },
  {
    slug: "valquirico-cholula",
    nombre: "Val'Quirico + Cholula",
    emoji: "🎄",
    epoca: "Diciembre",
    concepto: "Ruta navideña",
    destino: "Tlaxcala y Puebla",
    resumen:
      "Dos paradas navideñas en un mismo día: el pueblo estilo toscano de Val'Quirico con su ambientación decembrina y la zona arqueológica y gastronómica de Cholula.",
    imperdibles: ["Val'Quirico en época navideña", "Zona arqueológica y conventos de Cholula", "Comida y mercado local"],
    tono: "from-emerald-600 via-red-600 to-neutral-800",
  },
  {
    slug: "atlixco-de-las-flores",
    nombre: "Atlixco de las Flores",
    emoji: "🌺",
    epoca: "Primavera",
    concepto: "Día de flores, comida y fotos",
    destino: "Atlixco, Puebla",
    resumen:
      "Un día para recorrer viveros y campos de flores, comer en el centro y regresar con fotos. Ideal para familias, parejas y grupos de amigas.",
    imperdibles: ["Viveros y tapetes de flores", "Centro histórico y mercado", "Miradores de Atlixco"],
    tono: "from-fuchsia-500 via-pink-500 to-emerald-600",
  },
  {
    slug: "queretaro-pena-de-bernal",
    nombre: "Querétaro + Peña de Bernal",
    emoji: "🏛️",
    epoca: "Todo el año",
    concepto: "Pueblo + viñedos",
    destino: "Querétaro",
    resumen:
      "Centro histórico de Querétaro por la mañana y Peña de Bernal por la tarde, con parada en viñedos de la ruta. Un clásico para grupos y empresas.",
    imperdibles: ["Centro histórico de Querétaro", "Peña de Bernal y su pueblo mágico", "Parada en viñedos"],
    tono: "from-violet-600 via-indigo-600 to-amber-500",
  },
  {
    slug: "ruta-del-vino-queretaro",
    nombre: "Ruta del Vino en Querétaro",
    emoji: "🍷",
    epoca: "Todo el año",
    concepto: "Experiencia gastronómica",
    destino: "Tequisquiapan y Ezequiel Montes, Querétaro",
    resumen:
      "Día de viñedos, catas y gastronomía en la ruta del vino queretana. Salimos temprano y regresamos por la noche; te llevamos y te traemos sin que nadie tenga que conducir.",
    imperdibles: ["Visitas y catas en viñedos", "Tequisquiapan y su centro", "Comida de campo"],
    tono: "from-red-800 via-rose-700 to-amber-600",
  },
  {
    slug: "veracruz",
    nombre: "Veracruz",
    emoji: "🌊",
    epoca: "Verano",
    concepto: "Playa + malecón + comida",
    destino: "Veracruz, Veracruz",
    resumen:
      "Escapada de un día al puerto: playa, malecón, centro histórico y comida jarocha. Salimos de madrugada para aprovechar el día completo.",
    imperdibles: ["Malecón y playa", "Centro histórico y Portal de Miranda", "Comida y café del puerto"],
    tono: "from-sky-500 via-cyan-600 to-emerald-600",
  },
  {
    slug: "xilitla",
    nombre: "Xilitla",
    emoji: "🏰",
    epoca: "Primavera / Verano",
    concepto: "Jardín surrealista",
    destino: "Xilitla, San Luis Potosí",
    resumen:
      "Visita al jardín surrealista de Las Pozas, entre selva y cascadas de la Huasteca potosina. Un destino distinto para grupos que buscan algo fuera de lo común.",
    imperdibles: ["Jardín escultórico de Las Pozas", "Pozas y vegetación de la Huasteca", "Comida huasteca"],
    tono: "from-emerald-600 via-teal-700 to-lime-600",
  },
  {
    slug: "huauchinango-zacatlan",
    nombre: "Huauchinango + Zacatlán",
    emoji: "🌲",
    epoca: "Todo el año",
    concepto: "Montaña + pueblos mágicos",
    destino: "Sierra Norte de Puebla",
    resumen:
      "Dos pueblos mágicos en un día por la Sierra Norte: cascadas y cafetales de Huauchinango más el mirador, la sidra y el reloj floral de Zacatlán.",
    imperdibles: ["Cascadas y miradores de la sierra", "Zacatlán: sidra, pan y reloj floral", "Clima de montaña todo el año"],
    tono: "from-green-700 via-emerald-800 to-stone-600",
  },
  {
    slug: "zacatlan-chignahuapan",
    nombre: "Zacatlán + Chignahuapan",
    emoji: "🍎",
    epoca: "Otoño / Invierno",
    concepto: "Sidra + esferas",
    destino: "Sierra Norte de Puebla",
    resumen:
      "La ruta clásica de temporada en la Sierra Norte: sidra y fábricas de Zacatlán más las esferas navideñas y las aguas termales de Chignahuapan.",
    imperdibles: ["Fábricas de sidra y pan de Zacatlán", "Esferas navideñas de Chignahuapan", "Aguas termales y centro del pueblo"],
    tono: "from-red-700 via-green-700 to-amber-600",
  },
];

/** Servicios de temporada: son las páginas que ya existían y ahora se agrupan aquí. */
export type ServicioTemporada = {
  titulo: string;
  emoji: string;
  temporada: string;
  descripcion: string;
  url: string;
  wa: string;
};

export const serviciosTemporada: ServicioTemporada[] = [
  {
    titulo: "Santuario de las Luciérnagas",
    emoji: "✨",
    temporada: "Mediados de junio a mediados de agosto",
    descripcion:
      "Nanacamilpa, Tlaxcala: el bosque se ilumina con millones de luciérnagas. Salida en la tarde, recorrido guiado y regreso la misma noche.",
    url: "/santuario-luciernagas",
    wa: "https://wa.me/5212461569161?text=Hola,%20me%20gustar%C3%ADa%20reservar%20un%20viaje%20al%20Santuario%20de%20las%20Luci%C3%A9rnagas.",
  },
  {
    titulo: "Carnaval de Veracruz",
    emoji: "🎭",
    temporada: "Febrero y marzo",
    descripcion:
      "El carnaval más grande de México con transporte redondo desde Puebla: desfiles, malecón, música y regreso seguro el mismo día.",
    url: "/carnaval-veracruz",
    wa: "https://wa.me/5212461569161?text=Hola,%20quiero%20reservar%20mi%20viaje%20para%20el%20Carnaval%20de%20Veracruz.",
  },
];

/** WhatsApp de turismo: el mismo número publicado hoy en el sitio. */
export const waExperiencias = (nombre: string) =>
  `https://wa.me/5212461569161?text=${encodeURIComponent(
    `Hola, quiero información de la experiencia "${nombre}" con MyDriver Experiencias.`
  )}`;

export const waExperienciasGeneral =
  "https://wa.me/5212461569161?text=" +
  encodeURIComponent("Hola, quiero información sobre MyDriver Experiencias (turismo).");
