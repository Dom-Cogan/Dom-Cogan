import { component$ } from "@builder.io/qwik";
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";

import "./global.css";

export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Don't remove the `<head>` and `<body>` elements.
   */

  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <link rel="manifest" href="/manifest.json" />
        <RouterHead />
      </head>
      <body lang="en">
        <RouterOutlet />
        <ServiceWorkerRegister />
        <script
          async
          crossOrigin="anonymous"
          data-clerk-publishable-key="pk_test_YmlnLWhvcm5ldC0xMC5jbGVyay5hY2NvdW50cy5kZXYk"
          src="https://big-hornet-10.clerk.accounts.dev/npm/@clerk/clerk-js@4/dist/clerk.browser.js"
          type="text/javascript"
        ></script>
      </body>
    </QwikCityProvider>
  );
});
