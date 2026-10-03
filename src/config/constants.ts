// MyDriver Latam — Centralized Configuration

export const WHATSAPP_NUMBER = '5212215590718';

export const WHATSAPP_LINKS = {
  general: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola, me gustaría tener más información sobre MyDriver.')}`,
  socioConductor: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola, quiero registrarme como Socio Conductor.')}`,
  conductorStandard: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola, quiero registrarme como Conductor Standard.')}`,
  socioRepartidor: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola, quiero registrarme como Socio Repartidor.')}`,
  negocioAliado: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola, quiero registrar mi negocio en MyDriver.')}`,
  socioFlotilla: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('¡Hola MyDriver! Quiero información para ser socio flotilla.')}`,
  cargo: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola, quiero cotizar un servicio de MyDriver Cargo.')}`,
  empresas: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola, me gustaría tener más información sobre MyDriver para empresas.')}`,
  luciernagas: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola, me gustaría reservar un viaje al Santuario de las Luciérnagas.')}`,
  carnaval: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola, quiero reservar mi viaje para el Carnaval de Veracruz.')}`,
  soporte: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola, necesito ayuda de soporte.')}`,
  socioInversionista: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola, me interesa información sobre el programa exclusivo de Socio Inversionista / Cofundador de MyDriver.')}`,
};

export const SOCIAL_LINKS = {
  tiktok: 'https://www.tiktok.com/@mydrivermexico',
  facebook: 'https://www.facebook.com/people/myDriver-Mx/61577308812929/',
  instagram: 'https://www.instagram.com/mydrivermexico/',
  whatsapp: `https://wa.me/${WHATSAPP_NUMBER}`,
};

export const APP_LINKS = {
  pasajero: {
    ios: 'https://apps.apple.com/us/app/mydrivertaxi/id6443749551',
    android: 'https://play.google.com/store/apps/details?id=com.rider.mydrivermxn',
  },
  conductor: {
    ios: 'https://apps.apple.com/us/app/mydriver-conductor-app/id6443749599',
    android: 'https://play.google.com/store/apps/details?id=com.driver.mydrivermxn',
  },
};

export const COMPANY_INFO = {
  name: 'MyDriver',
  tagline: 'La app de movilidad que transforma tu ciudad',
  description: 'Transformando la movilidad urbana con tecnología e innovación.',
  phone: '2215590718',
  email: 'contacto@mydriver.com',
  poweredBy: 'Auto Transportes Tepactepec',
  year: new Date().getFullYear(),
};

export const EMBED_FORMS = {
  pasajero: 'https://mydriverapp.lovable.app/embed/usuario_pasajero?pipeline=usuario_pasajero&stage=5ecedf8a-1c0a-48f2-82a1-6a2a54fc290b&position=bottom-center&primaryColor=b60000&theme=light&borderRadius=8&buttonSize=default',
  socioConductor: 'https://mydriverapp.lovable.app/embed/socio_conductor?pipeline=socio_conductor&stage=c82c9b7c-324c-4035-9553-638a0a058774&position=bottom-center&primaryColor=b60000&theme=light&borderRadius=8&buttonSize=default',
};
