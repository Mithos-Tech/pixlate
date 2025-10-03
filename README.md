# Pixlate - Landing Page de Servicios Universitarios

Este repositorio contiene el código fuente de una landing page moderna y completamente responsive para "Pixlate", un centro ficticio de impresión y servicios para estudiantes universitarios. El proyecto está construido con React, TypeScript y Tailwind CSS, mostrando un diseño profesional y diversos componentes interactivos.

---

### ✨ Características Principales

- **Diseño 100% Responsivo:** Adaptado para una visualización perfecta en dispositivos móviles, tablets y computadoras de escritorio.
- **Navegación Fluida:** Desplazamiento suave entre secciones para una experiencia de usuario sin interrupciones.
- **Componentes Interactivos:**
    - Carruseles para Productos y Testimonios.
    - Contadores numéricos que se animan al hacer scroll.
    - Acordeón funcional para la sección de Preguntas Frecuentes (FAQ).
- **UI/UX Moderna:** Animaciones sutiles, efectos `hover` y una paleta de colores cohesiva que refuerza la identidad de la marca.
- **Preparado para Negocio:** Incluye un formulario de contacto y múltiples puntos de llamada a la acción (CTA) a WhatsApp.
- **Código Limpio y Modular:** Estructurado en componentes de React reutilizables para un fácil mantenimiento.

### 🛠️ Stack Tecnológico

- **[React 19](https://react.dev/)**: Biblioteca principal para la construcción de la interfaz de usuario.
- **[TypeScript](https://www.typescriptlang.org/)**: Para un tipado estático que mejora la robustez y mantenibilidad del código.
- **[Tailwind CSS](https://tailwindcss.com/)**: Framework de CSS utility-first para un diseño rápido y personalizado (utilizado a través de CDN).
- **[Lucide React](https://lucide.dev/)**: Biblioteca de iconos SVG ligera y personalizable.

---

### 🚀 Cómo Empezar

Este proyecto está configurado para ejecutarse directamente en un navegador sin un proceso de compilación complejo, gracias al uso de `importmap` en el `index.html`.

1.  **Clona el repositorio:**
    ```bash
    git clone https://github.com/tu-usuario/nombre-del-repositorio.git
    ```

2.  **Navega al directorio del proyecto:**
    ```bash
    cd nombre-del-repositorio
    ```

3.  **Inicia un servidor local:**
    Dado que el proyecto utiliza módulos ES (`import`), necesitas servir los archivos desde un servidor local para evitar problemas de CORS. Una forma sencilla es usando el paquete `serve` de Node.js.
    
    - Si no tienes `serve` instalado, instálalo globalmente:
      ```bash
      npm install -g serve
      ```
    - Inicia el servidor en el directorio del proyecto:
      ```bash
      serve -l 3000
      ```

4.  **Abre tu navegador:**
    Visita [`http://localhost:3000`](http://localhost:3000) y verás la aplicación en funcionamiento.

---

### 🔒 Gestión de Datos Sensibles (WhatsApp y Formulario)

El código utiliza **valores de marcador de posición** para el número de WhatsApp y el endpoint del formulario de contacto.

```javascript
// Ejemplo en components/Contact.tsx
const formspreeEndpoint = `https://formspree.io/f/YOUR_FORM_ID_HERE`;
const whatsappLink = `https://wa.me/51987654321?text=...`;
```

**Para un despliegue real, es crucial NO escribir tus datos directamente en el código.** La práctica recomendada es:

1.  Migrar el proyecto a una herramienta de construcción como **Vite** o **Next.js**.
2.  Utilizar **variables de entorno** (`.env` files) para gestionar estos datos.
3.  Cargar estas variables de forma segura en tu plataforma de despliegue (como Vercel o Netlify).

### 🌐 Despliegue Profesional

Para llevar este proyecto a producción, se recomienda encarecidamente migrarlo a un framework moderno como **Next.js** o una herramienta de construcción como **Vite**. Esto te permitirá beneficiarte de:

- **Optimización de rendimiento:** Minificación de código, code-splitting y optimización de imágenes.
- **Mejor SEO:** Renderizado del lado del servidor (SSR) o generación de sitios estáticos (SSG) con Next.js.
- **Un ecosistema de desarrollo robusto.**

Una vez migrado, puedes desplegarlo fácilmente en plataformas como **[Vercel](https://vercel.com/)** o **[Netlify](https://www.netlify.com/)** conectando tu repositorio de GitHub para un flujo de trabajo de CI/CD (Integración Continua / Despliegue Continuo).
