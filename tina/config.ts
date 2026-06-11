import { defineConfig } from "tinacms";

const branch =
process.env.GITHUB_BRANCH ||
process.env.VERCEL_GIT_COMMIT_REF ||
process.env.HEAD ||
"main";

export default defineConfig({
  branch,

  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "src/content/notizie/assets",
      publicFolder: "",
    },
  },

  schema: {
    collections: [
      {
        name: "notizie",
        label: "Notizie",
        path: "src/content/notizie",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Titolo",
            isTitle: true,
            required: true,
          },
          {
            type: "datetime",
            name: "date",
            label: "Data",
            ui: {
              dateFormat: 'YYYY-MM-DD',
            },
            required: true,
          },
          {
            type: "string",
            name: "author",
            label: "Autore",
            required: false,
          },
          {
            type: "image",
            name: "image",
            label: "Immagine",
            required: false,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Testo",
            isBody: true,
          },
        ],
      },
    ],
  },
});
