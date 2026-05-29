/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface Window {
  __wsmScroll: {
    activeSection: string | null;
    progress: number;
  };
}
