/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" /> // Solo si usas SVGR

// Tipos para variables de entorno (si usas .env)
interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  readonly VITE_MODE: 'development' | 'production';
  // Agrega otras variables aquí...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

// Extiende los tipos para CSS modules (opcional)
declare module '*.module.css' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

// Tipos para archivos estáticos (opcional)
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.svg';