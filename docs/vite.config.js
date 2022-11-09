import { SearchPlugin } from "vitepress-plugin-search";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [SearchPlugin({
    boost: (words, str, int) => {
      console.log(words, str, int)
    }
  })],
});
