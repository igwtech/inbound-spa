export const config = {
  useApi: import.meta.env.VITE_USE_API === 'true', // Switch to false to use in-memory repositories
  apiBaseUrl: import.meta.env.VITE_API_BASE_URL || 'https://api-trilogy23.do.wdlnds.com'
}
