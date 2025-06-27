// Environment configuration
interface Environment {
  basePath: string;
  apiUrl?: string;
  isDevelopment: boolean;
  isProduction: boolean;
}

// Get values from environment variables with fallbacks
const environment: Environment = {
  basePath: import.meta.env.VITE_BASE_PATH || "",
  apiUrl: import.meta.env.VITE_API_URL,
  isDevelopment: import.meta.env.DEV,
  isProduction: import.meta.env.PROD,
};

export default environment; 