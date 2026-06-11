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
      mediaRoot: "src/content/uploads",
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
      {
        label: "Rapporti",
        name: "reports",
        path: "src/content/reports",
        format: "json",
        fields: [
          {
            type: "string",
            name: "year",
            label: "Anno (YYYY)",
            isTitle: true,
            required: true,
            ui: {
              validate: (value) => {
                if (!/^\d{4}$/.test(value ?? "")) {
                  return "Inserisci un anno nel formato YYYY (es. 2024)";
                }
              },
            },
          },
          {
            type: "image",
            name: "filename",
            label: "File PDF",
            required: true,
          },
        ],
      },
    ],
  },
});
