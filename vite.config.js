import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  base: '/lab10/', // <-- to jest kluczowe!
  plugins: [
    tailwindcss(),
  ],
})