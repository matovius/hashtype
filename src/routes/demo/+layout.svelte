<script lang="ts">
  import Bars2Icon from "../../components/icons/Bars2Icon.svelte";
  import DocumentDuplicateIcon from "../../components/icons/DocumentDuplicateIcon.svelte";
  import FolderIcon from "../../components/icons/FolderIcon.svelte";
  import PencilIcon from "../../components/icons/PencilIcon.svelte";
  import PencilSquareIcon from "../../components/icons/PencilSquareIcon.svelte";
  import TrashIcon from "../../components/icons/TrashIcon.svelte";
  import SunIcon from "../../components/icons/SunIcon.svelte";
  import MoonIcon from "../../components/icons/MoonIcon.svelte";

  let isDarkMode: boolean = false;
  let themeLabel: "Toggle Dark Mode" | "Toggle Light Mode";
  isDarkMode
    ? (themeLabel = "Toggle Light Mode")
    : (themeLabel = "Toggle Dark Mode");

  function setTheme() {
    const root: HTMLElement = document.documentElement;
    root.classList.toggle("dark");
  }

  function toggleTheme() {
    isDarkMode = !isDarkMode;
    isDarkMode
      ? (themeLabel = "Toggle Light Mode")
      : (themeLabel = "Toggle Dark Mode");
    setTheme();
  }

  interface NavItem {
    name: string;
    icon: any;
    route: string;
  }

  const navItems: NavItem[] = [
    {
      name: "All Notes",
      icon: DocumentDuplicateIcon,
      route: "/notes",
    },
    {
      name: "Notepad",
      icon: PencilSquareIcon,
      route: "/notepad",
    },
    {
      name: "Folders",
      icon: FolderIcon,
      route: "/folders",
    },
    {
      name: "Trash",
      icon: TrashIcon,
      route: "/trash",
    },
  ];
</script>

<div class="app">
  <aside
    class="w-20 h-full border-r-2 border-slate-300 dark:border-slate-600 flex flex-col justify-between items-center bg-slate-100 dark:bg-slate-900"
  >
    <header class="w-full p-2 flex justify-center items-center">
      <button
        class="transition p-2 flex justify-center items-center border-2 border-slate-300 hover:border-slate-500 dark:border-slate-700 dark:hover:border-slate-500 bg-slate-100 hover:bg-slate-300 dark:bg-slate-900 dark:hover:bg-slate-700 rounded-lg"
        title="Open Navigation"
      >
        <Bars2Icon />
      </button>
      <div />
    </header>
    <main class="w-full h-full">
      <div class="w-full p-2 flex justify-center items-center">
        <button
          class="transition p-4 text-sky-500 hover:text-sky-100 border-2 border-sky-300 hover:border-sky-500 dark:border-sky-700 dark:hover:border-sky-500 bg-sky-100 hover:bg-sky-500 dark:bg-sky-900 dark:hover:bg-sky-500 rounded-2xl"
          title="Create New Note"
        >
          <PencilIcon />
        </button>
      </div>
      <nav class="w-full p-2">
        <ul class="flex flex-col justify-center items-center gap-2">
          {#each navItems as navItem}
            <li class="flex justify-center items-center">
              <a
                href={navItem.route}
                class="transition no-underline p-2 flex justify-center items-center border-2 border-slate-300 hover:border-slate-500 dark:border-slate-700 dark:hover:border-slate-500 bg-slate-100 hover:bg-slate-300 dark:bg-slate-900 dark:hover:bg-slate-700 rounded-lg"
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
      <button
        class="transition p-2 flex justify-center items-center border-2 border-slate-300 hover:border-slate-500 dark:border-slate-700 dark:hover:border-slate-500 bg-slate-100 hover:bg-slate-300 dark:bg-slate-900 dark:hover:bg-slate-700 rounded-lg"
        on:click={toggleTheme}
        title={themeLabel}
      >
        {#if isDarkMode}
          <SunIcon />
        {:else}
          <MoonIcon />
        {/if}
      </button>
    </footer>
  </aside>
</div>

<style>
  .app {
    width: 100vw;
    height: 100vh;
  }
</style>
