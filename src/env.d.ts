/// <reference types="astro/client" />

type AdvancedRuntime = import('@astrojs/cloudflare').AdvancedRuntime;

declare namespace App {
  interface Locals extends AdvancedRuntime {
    // runtime: {
    //   env: {
    //     KV: string;
    //   };
    // };
  }
}
