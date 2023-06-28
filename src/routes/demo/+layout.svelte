<script lang="ts">
  import { browser } from "$app/environment";
  import { onMount } from "svelte";
  import Bars2Icon from "../../components/icons/Bars2Icon.svelte";

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

  let sidebarModal: HTMLDialogElement;

  onMount(() => {
    sidebarModal.showModal();
  });
</script>

<div class="app text-slate-800 dark:text-slate-200">
  <header class="w-full bg-slate-800 flex justify-between items-center">
    <div class="p-4">
      <button
        class="transition outline-none p-2 flex justify-center items-center rounded-lg bg-transparent hover:bg-slate-300 dark:hover:bg-slate-700 focus:bg-slate-300 dark:focus:bg-slate-700"
      >
        <Bars2Icon />
      </button>
      <dialog bind:this={sidebarModal} class="border-0 bg-transparent relative">
        <div class="fixed inset-0 bg-slate-800/50 backdrop-blur-[8px]" />
        <div class="fixed top-0 right-0 bottom-0 w-4/5 sm:w-80">
          <div />
        </div>
      </dialog>
    </div>
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
