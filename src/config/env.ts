interface EnvConfig {
  APP_NAME: string;
  LOGO_PATH: string;
  API_URL: string;
}

export const env: EnvConfig = {
  APP_NAME: import.meta.env.VITE_APP_NAME || 'Caffero',
  LOGO_PATH: import.meta.env.VITE_LOGO_PATH || '/coffee-maker-logo.jpg',
  API_URL: import.meta.env.VITE_API_URL || 'https://api.caffero.com',
}; 