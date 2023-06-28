<script lang="ts">
  import { browser } from "$app/environment";
  import FolderIcon from "../icons/FolderIcon.svelte";
  import PencilSquareIcon from "../icons/PencilSquareIcon.svelte";
  import TrashIcon from "../icons/TrashIcon.svelte";
  import SunIcon from "../icons/SunIcon.svelte";
  import MoonIcon from "../icons/MoonIcon.svelte";
  import ComputerDesktopIcon from "../icons/ComputerDesktopIcon.svelte";
  import Text from "../typography/Text.svelte";
  import HashtypeLogo from "../icons/HashtypeLogo.svelte";
  import DocumentPlusIcon from "../icons/DocumentPlusIcon.svelte";
  import XMarkIcon from "../icons/XMarkIcon.svelte";

  let isDarkMode: boolean = false;
  let themeLabel: "Toggle Dark Mode" | "Toggle Light Mode";

  function setDarkTheme() {
    const root: HTMLElement = document.documentElement;
    themeLabel = "Toggle Light Mode";
    root.classList.add("dark");
  }

  function setLightTheme() {
    const root: HTMLElement = document.documentElement;
    themeLabel = "Toggle Dark Mode";
    root.classList.remove("dark");
  }

  function toggleDarkTheme() {
    isDarkMode = true;
    setDarkTheme();
  }

  function toggleLightTheme() {
    isDarkMode = false;
    setLightTheme();
  }

  function togglePreferredTheme() {
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
  }
</script>

<div
  class="w-80 h-full flex flex-col justify-between items-center gap-4 border-r-2 border-slate-300 dark:border-slate-600 bg-slate-100 dark:bg-slate-800"
>
  <header class="w-full p-4 flex justify-between items-center">
    <div class="text-sky-500 dark:text-slate-300 w-8 aspect-square">
      <HashtypeLogo />
    </div>
    <div>
      <button
        class="transition p-2 flex justify-center items-center rounded-lg bg-transparent hover:bg-slate-300 dark:hover:bg-slate-700"
      >
        <XMarkIcon />
      </button>
    </div>
  </header>
  <main class="w-full h-full">
    <nav class="w-full p-2">
      <ul class="flex flex-col">
        <li class="w-full flex justify-center items-center">
          <button
            class={`transition text-sky-500 hover:text-sky-100 w-full p-4 flex justify-start items-center gap-4 rounded-lg border-sky-500 bg-transparent hover:bg-sky-500`}
            title="Create a new note"
          >
            <DocumentPlusIcon />
            <Text as="span">New Note</Text>
          </button>
        </li>
        <li class="w-full flex justify-center items-center">
          <button
            class={`transition w-full p-4 flex justify-start items-center gap-4 rounded-lg border-slate-300 hover:border-slate-500 dark:border-slate-700 dark:hover:border-slate-500 bg-transparent hover:bg-slate-300 dark:hover:bg-slate-700`}
            title="Open Notepad"
          >
            <PencilSquareIcon />
            <Text as="span">Notepad</Text>
          </button>
        </li>
        <li class="w-full flex justify-center items-center">
          <button
            class={`transition w-full p-4 flex justify-start items-center gap-4 rounded-lg border-slate-300 hover:border-slate-500 dark:border-slate-700 dark:hover:border-slate-500 bg-transparent hover:bg-slate-300 dark:hover:bg-slate-700`}
            title="Open Folders"
          >
            <FolderIcon />
            <Text as="span">Folders</Text>
          </button>
        </li>
        <li class="w-full flex justify-center items-center">
          <button
            class={`transition text-rose-500 hover:text-rose-100 w-full p-4 flex justify-start items-center gap-4 rounded-lg border-rose-300 hover:border-rose-500 dark:border-rose-700 dark:hover:border-rose-500 bg-transparent hover:bg-rose-300 dark:hover:bg-rose-700`}
            title="Open Trash"
          >
            <TrashIcon />
            <Text as="span">Trash</Text>
          </button>
        </li>
      </ul>
      <ul />
    </nav>
    <div />
  </main>
  <footer class="w-full p-2 flex flex-col justify-center items-center gap-4">
    <div class="flex flex-row justify-center items-center">
      <button
        class="transition group flex justify-center items-center p-4 rounded-lg bg-transparent hover:bg-slate-300 dark:hover:bg-slate-700"
        on:click={toggleLightTheme}
        title="Toggle Light Theme"
      >
        <SunIcon />
      </button>
      <button
        class="transition group flex justify-center items-center p-4 rounded-lg bg-transparent hover:bg-slate-300 dark:hover:bg-slate-700"
        on:click={toggleDarkTheme}
        title="Toggle Dark Theme"
      >
        <MoonIcon />
      </button>
      <button
        class="transition group flex justify-center items-center p-4 rounded-lg bg-transparent hover:bg-slate-300 dark:hover:bg-slate-700"
        on:click={togglePreferredTheme}
        title="Toggle System Default"
      >
        <ComputerDesktopIcon />
      </button>
    </div>
  </footer>
</div>
