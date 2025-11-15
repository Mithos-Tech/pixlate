// config/constants.ts
/**
 * Configuración centralizada de Pixlate
 * Las variables de entorno se cargan desde .env
 */

export const BUSINESS_CONFIG = {
  // 📱 Configuración de WhatsApp
  whatsapp: {
    number: import.meta.env.VITE_WHATSAPP_NUMBER || '51987654321',
    defaultMessage: import.meta.env.VITE_WHATSAPP_MESSAGE || '¡Hola!%20Me%20interesa%20cotizar%20un%20servicio',
    
    /**
     * Genera un enlace de WhatsApp con mensaje personalizado
     * @param customMessage - Mensaje opcional personalizado (debe estar URL encoded)
     * @returns URL completa de WhatsApp
     */
    getLink: (customMessage?: string): string => {
      const message = customMessage || BUSINESS_CONFIG.whatsapp.defaultMessage;
      return `https://wa.me/${BUSINESS_CONFIG.whatsapp.number}?text=${message}`;
    }
  },

  // 📧 Configuración de contacto
  contact: {
    email: import.meta.env.VITE_BUSINESS_EMAIL || 'contacto@pixlate.pe',
    formspreeEndpoint: import.meta.env.VITE_FORMSPREE_ENDPOINT 
      ? `https://formspree.io/f/${import.meta.env.VITE_FORMSPREE_ENDPOINT}`
      : `https://formspree.io/f/YOUR_FORM_ID_HERE`,
    businessName: import.meta.env.VITE_BUSINESS_NAME || 'Pixlate'
  },

  // 📍 Información del negocio
  business: {
    name: 'Pixlate',
    fullName: 'Pixlate - Centro de Impresión y Servicios Universitarios',
    address: 'Av. Universitaria 1234, San Miguel',
    addressDetail: 'A 2 cuadras de UTP y UCH',
    phone: '+51 987 654 321',
    
    // Horarios
    schedule: {
      weekdays: 'Lunes a Sábado: 8:00 AM - 8:00 PM',
      sunday: 'Cerrado',
      isOpen24Hours: false
    }
  },

  // 🎨 Colores del tema (para uso en JS/TS si es necesario)
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