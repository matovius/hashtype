<script lang="ts">
  import { browser } from "$app/environment";
  import "../app.css";
  import logo from "$lib/images/hashtype-logo.png";

  // TODO: Solve bug causing light mode to not work correctly
  let isDarkMode: boolean = false;

  if (browser) {
    const root: HTMLElement = document.documentElement;
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      root.classList.add("dark");
      isDarkMode = true;
    } else {
      root.classList.remove("dark");
      isDarkMode = false;
    }
    isDarkMode;
  }
</script>

<svelte:head>
  <link rel="icon" href={logo} type="image/png" />
</svelte:head>

<div
  class="w-full h-full bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200"
>
  <slot />
</div>
