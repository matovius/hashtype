<script lang="ts">
  import NewNoteDialog from "../../components/demo/NewNoteDialog.svelte";

  import { browser } from "$app/environment";
  import { onMount } from "svelte";
  import Bars2Icon from "../../components/icons/Bars2Icon.svelte";
  import Sidebar from "../../components/demo/Sidebar.svelte";
  import Text from "../../components/typography/Text.svelte";
  import XMarkIcon from "../../components/icons/XMarkIcon.svelte";
  import IconButton from "../../components/buttons/IconButton.svelte";

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

<div class="app">
  <header
    class="w-full flex justify-between items-center border-b-2 border-slate-500 bg-slate-100 dark:bg-slate-900"
  >
    <div class="p-4">
      <IconButton
        icon={Bars2Icon}
        size="small"
        tooltip="Open Nav Drawer"
        on:click={openSidebarModal}
      />
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
  <NewNoteDialog />
</div>

<style>
  .app {
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-rows: auto 1fr auto;
  }
</style>
