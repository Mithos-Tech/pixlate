// config/constants.ts
/**
 * Configuración centralizada de Pixlate
 * Las variables de entorno se cargan desde .env
 */

// config/constants.ts
export const BUSINESS_CONFIG = {
  whatsapp: {
    number: import.meta.env.VITE_WHATSAPP_NUMBER || '51987654321',
    defaultMessage: import.meta.env.VITE_WHATSAPP_MESSAGE || '¡Hola!%20Me%20interesa%20cotizar%20un%20servicio',
    getLink: (customMessage?: string): string => {
      const message = customMessage || BUSINESS_CONFIG.whatsapp.defaultMessage;
      return `https://wa.me/${BUSINESS_CONFIG.whatsapp.number}?text=${message}`;
    }
  },

  contact: {
    email: import.meta.env.VITE_BUSINESS_EMAIL || 'contacto@pixlate.pe',
    // ⭐ FORMSPARK ENDPOINT
    formsparkEndpoint: import.meta.env.VITE_FORMSPARK_FORM_ID 
      ? `https://submit-form.com/${import.meta.env.VITE_FORMSPARK_FORM_ID}`
      : '',
    businessName: import.meta.env.VITE_BUSINESS_NAME || 'Pixlate'
  },

  business: {
    name: 'Pixlate',
    fullName: 'Pixlate - Centro de Impresión y Servicios Universitarios',
    address: 'Av. Universitaria 1234, San Miguel',
    addressDetail: 'A 2 cuadras de UTP y UCH',
    phone: '+51 987 654 321',
    schedule: {
      weekdays: 'Lunes a Sábado: 8:00 AM - 8:00 PM',
      sunday: 'Cerrado',
      isOpen24Hours: false
    }
  },

  theme: {
    colors: {
      primary: '#1B2951',
      secondary: '#2A3B6B',
      accent: '#FF4D00',
      accentLight: '#FF6B35'
    }
  }
} as const;

// 📊 Tipos TypeScript para autocompletado
export type BusinessConfig = typeof BUSINESS_CONFIG;
export type WhatsAppConfig = typeof BUSINESS_CONFIG.whatsapp;
export type ContactConfig = typeof BUSINESS_CONFIG.contact;