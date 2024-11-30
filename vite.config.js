import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd(), "");
	return {
		resolve: {
			alias: {
				"@": "/src",
				"@features": "/src/services/features",
			},
		},
		define: {
			env: env,
		},
		plugins: [react()],
		server: {
			port: 3000,
			host: "0.0.0.0",
			proxy: {
				"/api": {
					target: env.REACT_APP_API_KEY,
					changeOrigin: true,
					rewrite: (path) => path.replace(/^\/api/, ""),
				},
			},
		},
	};
});
