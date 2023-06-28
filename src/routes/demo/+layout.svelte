<script lang="ts">
  import { browser } from "$app/environment";
  import { onMount } from "svelte";
  import Bars2Icon from "../../components/icons/Bars2Icon.svelte";
  import Sidebar from "../../components/demo/Sidebar.svelte";
  import Text from "../../components/typography/Text.svelte";
  import XMarkIcon from "../../components/icons/XMarkIcon.svelte";

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
  let newNoteModal: HTMLDialogElement;

  function openSidebarModal() {
    sidebarModal.showModal();
  }

  function closeSidebarModal() {
    sidebarModal.close();
  }

  function openNewNoteModal() {
    newNoteModal.showModal();
  }

  function closeNewNoteModal() {
    newNoteModal.close();
  }

  function createNoteFromSidebar() {
    closeSidebarModal();
    setTimeout(openNewNoteModal, 100);
  }
</script>

<div class="app text-slate-800 dark:text-slate-200">
  <header
    class="w-full flex justify-between items-center border-b-2 border-slate-300 dark:border-slate-700 bg-slate-200 dark:bg-slate-800"
  >
    <div class="p-4">
      <button
        on:click={openSidebarModal}
        class="transition outline-none p-2 flex justify-center items-center rounded-lg bg-transparent hover:bg-slate-300 dark:hover:bg-slate-700 focus:bg-slate-300 dark:focus:bg-slate-700"
      >
        <Bars2Icon />
      </button>
      <dialog bind:this={sidebarModal} class="border-0 bg-transparent relative">
        <div
          class="fixed inset-0 bg-slate-800/50 backdrop-blur-[8px]"
          on:click={closeSidebarModal}
        />
        <div class="fixed top-0 left-0 bottom-0 w-4/5 sm:w-80">
          <Sidebar
            on:close={closeSidebarModal}
            on:newnote={createNoteFromSidebar}
          />
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
  <dialog
    bind:this={newNoteModal}
    class="w-full max-w-sm text-slate-900 dark:text-slate-100 p-0 rounded-3xl border-2 border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 backdrop-blur-[8px] backdrop:bg-slate-900/70"
  >
    <header
      class="w-full p-4 flex justify-between items-center border-b-2 border-slate-300 dark:border-slate-700"
    >
      <div>
        <Text as="h5">Create a new note</Text>
      </div>
      <button
        on:click={closeNewNoteModal}
        class="transition outline-none p-2 flex justify-center items-center rounded-lg bg-transparent hover:bg-slate-300 dark:hover:bg-slate-700 focus:bg-slate-300 dark:focus:bg-slate-700"
      >
        <XMarkIcon />
      </button>
    </header>
    <main class="w-full p-4 flex flex-col gap-4">
      <div class="w-full flex flex-col">
        <label for="name" class="pl-2 pb-1">
          <Text as="span">Name</Text>
        </label>
        <input
          type="text"
          id="name"
          class="transition outline-none font-body w-full px-4 py-2 rounded-lg border-2 border-slate-300 hover:border-slate-500 focus:border-slate-500 dark:border-slate-700 bg-transparent hover:bg-slate-100 focus:bg-slate-100 dark:hover:bg-slate-900 dark:focus:bg-slate-900"
        />
      </div>
      <div class="w-full flex flex-col">
        <label for="name" class="pl-2 pb-1">
          <Text as="span">Folder</Text>
        </label>
        <input
          type="text"
          id="name"
          class="transition outline-none font-body w-full px-4 py-2 rounded-lg border-2 border-slate-300 hover:border-slate-500 focus:border-slate-500 dark:border-slate-700 bg-transparent hover:bg-slate-100 focus:bg-slate-100 dark:hover:bg-slate-900 dark:focus:bg-slate-900"
        />
      </div>
    </main>
    <footer
      class="w-full p-4 flex flex-row gap-2 border-t-2 border-slate-300 dark:border-slate-700"
    >
      <button
        on:click={closeNewNoteModal}
        class="transition outline-none text-rose-500 w-full p-2 flex justify-center items-center gap-4 rounded-lg bg-transparent hover:bg-rose-500/20 focus:bg-rose-500/20"
      >
        <Text as="span">Cancel</Text>
      </button>
      <button
        class="transition outline-none text-sky-50 w-full p-4 flex justify-center items-center gap-4 rounded-lg bg-sky-500 hover:bg-sky-600 focus:bg-sky-600 dark:hover:bg-sky-600 dark:focus:bg-sky-600"
      >
        <Text as="span">Create</Text>
      </button>
    </footer>
  </dialog>
</div>

<style>
  .app {
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-rows: auto 1fr auto;
  }
</style>
