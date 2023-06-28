<script lang="ts">
  import { browser } from "$app/environment";
  import DocumentDuplicateIcon from "../../components/icons/DocumentDuplicateIcon.svelte";
  import FolderIcon from "../../components/icons/FolderIcon.svelte";
  import PencilSquareIcon from "../../components/icons/PencilSquareIcon.svelte";
  import TrashIcon from "../../components/icons/TrashIcon.svelte";
  import Text from "../../components/typography/Text.svelte";

  let isDarkMode: boolean = false;
  let themeLabel: "Toggle Dark Mode" | "Toggle Light Mode";

  if (browser) {
    const root: HTMLElement = document.documentElement;
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      root.classList.add("dark");
      isDarkMode = true;
    } else {
      root.classList.remove("dark");
      isDarkMode = false;
    }
    isDarkMode
      ? (themeLabel = "Toggle Light Mode")
      : (themeLabel = "Toggle Dark Mode");
  }
</script>

<div class="app text-slate-800 dark:text-slate-200">
  <header class="w-full h-20 bg-slate-800">
    <div />
  </header>
  <slot />
  <footer class="w-full bg-slate-800">
    <div />
  </footer>
</div>

<style>
  .app {
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-rows: auto 1fr auto;
  }
</style>
