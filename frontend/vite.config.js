import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    server: {
        proxy: {
            "/api": "http://221.121.4.43:8081",
            "/actuator": "221.121.4.43",
        },
    },
});
