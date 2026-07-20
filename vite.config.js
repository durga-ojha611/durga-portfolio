import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Custom plugin to handle Vercel-like API routes locally
const vercelApiPlugin = () => ({
  name: 'vercel-api',
  configureServer(server) {
    // Load env vars (like VITE_GEMINI_API_KEY) and inject them into process.env
    // so that Node-based Vercel serverless functions can access them.
    const env = loadEnv(server.config.mode, process.cwd(), '');
    process.env = { ...process.env, ...env, GEMINI_API_KEY: env.GEMINI_API_KEY || env.VITE_GEMINI_API_KEY };
    
    server.middlewares.use(async (req, res, next) => {
      if (req.url && req.url.startsWith('/api/')) {
        let body = '';
        req.on('data', chunk => {
          body += chunk.toString();
        });
        req.on('end', async () => {
          try {
            if (body) {
              req.body = JSON.parse(body);
            }
            
            // Extract just the path, dropping any query params
            const urlObj = new URL(req.url, `http://${req.headers.host}`);
            const modulePath = urlObj.pathname; // /api/gemini
            const filePath = `.${modulePath}.js`; // ./api/gemini.js
            
            // Use Vite's ssrLoadModule to dynamically load and re-evaluate the module
            const mod = await server.ssrLoadModule(filePath);
            
            // Shim the standard Vercel res.status and res.json
            res.status = (code) => {
              res.statusCode = code;
              return res;
            };
            res.json = (data) => {
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify(data));
            };
            
            // Call the exported handler
            await mod.default(req, res);
          } catch (e) {
            console.error('API Error:', e);
            res.statusCode = 500;
            res.end(JSON.stringify({ error: 'Internal Server Error' }));
          }
        });
        return;
      }
      next();
    });
  }
});

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), vercelApiPlugin()],
})
