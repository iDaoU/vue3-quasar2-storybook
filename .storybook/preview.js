// Setup context for Storybook here
import "@quasar/extras/roboto-font/roboto-font.css";
import "@quasar/extras/material-icons/material-icons.css";
import "@quasar/extras/animate/fadeInUp.css";
import "@quasar/extras/animate/fadeOutDown.css";
import "@quasar/extras/animate/fadeInRight.css";
import "@quasar/extras/animate/fadeOutRight.css";

import "quasar/dist/quasar.sass";

import { app } from "@storybook/vue3";
import { Quasar } from "quasar";
import quasarUserOptions from "../src/quasar-user-options";

app.use(Quasar, quasarUserOptions);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}