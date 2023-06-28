<script lang="ts">
  import { browser } from "$app/environment";
  import DocumentDuplicateIcon from "../icons/DocumentDuplicateIcon.svelte";
  import FolderIcon from "../icons/FolderIcon.svelte";
  import PencilSquareIcon from "../icons/PencilSquareIcon.svelte";
  import TrashIcon from "../icons/TrashIcon.svelte";
  import SunIcon from "../icons/SunIcon.svelte";
  import MoonIcon from "../icons/MoonIcon.svelte";
  import ComputerDesktopIcon from "../icons/ComputerDesktopIcon.svelte";
  import Text from "../typography/Text.svelte";
  import HashtypeLogo from "../icons/HashtypeLogo.svelte";

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

  interface NavItem {
    name: string;
    icon: any;
    route: string;
  }

  const navItems: NavItem[] = [
    {
      name: "Notes",
      icon: DocumentDuplicateIcon,
      route: "/demo/notes",
    },
    {
      name: "Notepad",
      icon: PencilSquareIcon,
      route: "/demo/notepad",
    },
    {
      name: "Folders",
      icon: FolderIcon,
      route: "/demo/folders",
    },
    {
      name: "Trash",
      icon: TrashIcon,
      route: "/demo/trash",
    },
  ];
</script>

<aside
  class="hidden w-20 h-full lg:flex flex-col justify-between items-center gap-4 border-r-2 border-slate-300 dark:border-slate-600 bg-slate-100 dark:bg-slate-800"
>
  <header class="w-full p-2 pt-4 flex justify-center items-center">
    <div class="text-sky-500 dark:text-slate-300 w-8 aspect-square">
      <HashtypeLogo />
    </div>
  </header>
  <main class="w-full h-full">
    <nav class="w-full p-2">
      <ul class="flex flex-col justify-center items-center gap-2">
        {#each navItems as navItem}
          <li class="flex justify-center items-center">
            <a
              href={navItem.route}
              class={`transition p-2 flex justify-center items-center rounded-lg border-2 border-slate-300 hover:border-slate-500 dark:border-slate-700 dark:hover:border-slate-500 bg-transparent hover:bg-slate-300 dark:hover:bg-slate-700`}
              title={navItem.name}
            >
              <svelte:component this={navItem.icon} />
            </a>
          </li>
        {/each}
      </ul>
      <ul />
    </nav>
    <div />
  </main>
  <footer class="w-full p-2 flex flex-col justify-center items-center gap-4">
    <div class="flex flex-col justify-center items-center">
      <button
        class="transition group flex justify-center items-center p-2 rounded-t-lg border-2 border-b-0 border-slate-500 bg-transparent hover:bg-slate-300 dark:hover:bg-slate-700"
        on:click={toggleLightTheme}
        title="Toggle Light Theme"
      >
        <SunIcon />
      </button>
      <button
        class="transition group flex justify-center items-center p-2 border-2 border-slate-500 bg-transparent hover:bg-slate-300 dark:hover:bg-slate-700"
        on:click={toggleDarkTheme}
        title="Toggle Dark Theme"
      >
        <MoonIcon />
      </button>
      <button
        class="transition group flex justify-center items-center p-2 rounded-b-lg border-2 border-t-0 border-slate-500 bg-transparent hover:bg-slate-300 dark:hover:bg-slate-700"
        on:click={togglePreferredTheme}
        title="Toggle System Default"
      >
        <ComputerDesktopIcon />
      </button>
    </div>
  </footer>
</aside>
