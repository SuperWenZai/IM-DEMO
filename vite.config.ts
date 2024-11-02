import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [uni()],
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern'
      }
    }
  },
  server:{
		proxy: {
			'/api': {
				target: 'https://www.boxim.online',
				changeOrigin: true
			}
		}
	}
});
