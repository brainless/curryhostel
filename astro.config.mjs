import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Curry Hostel",
      social: {
        instagram: "https://instagram.com/curryhostel",
      },
      sidebar: [
        {
          label: "Basics",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Idea and space", link: "/guides/example/" },
          ],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
      customCss: [
        // Relative path to your custom CSS file
        "./src/styles/custom.css",
      ],
    }),
  ],
});
