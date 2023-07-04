<script lang="ts">
  import NewNoteDialog from "../../components/demo/NewNoteDialog.svelte";

  import { browser } from "$app/environment";
  import { onMount } from "svelte";
  import Bars2Icon from "../../components/icons/Bars2Icon.svelte";
  import Sidebar from "../../components/demo/Sidebar.svelte";
  import Text from "../../components/typography/Text.svelte";
  import XMarkIcon from "../../components/icons/XMarkIcon.svelte";
  import Button from "../../components/buttons/Button.svelte";
  import HashtypeLogo from "../../components/icons/HashtypeLogo.svelte";
  import DocumentPlusIcon from "../../components/icons/DocumentPlusIcon.svelte";
  import FolderIcon from "../../components/icons/FolderIcon.svelte";
  import PencilSquareIcon from "../../components/icons/PencilSquareIcon.svelte";
  import TrashIcon from "../../components/icons/TrashIcon.svelte";
  import LinkButton from "../../components/buttons/LinkButton.svelte";
  import LinkIconButton from "../../components/buttons/LinkIconButton.svelte";
  import IconButton from "../../components/buttons/IconButton.svelte";
  import EllipsisVertical from "../../components/icons/EllipsisVertical.svelte";
  import ThemeSwitcher from "../../components/buttons/ThemeSwitcher.svelte";

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

  let navigationDialog: HTMLDialogElement;
  let newNoteModal: HTMLDialogElement;
  let moreOptionsDialog: HTMLDialogElement;

  function openNavigationDialog() {
    navigationDialog.showModal();
  }

  function closeNavigationDialog() {
    navigationDialog.close();
  }
</script>

<div class="min-h-screen">
  <header
    class="sticky top-0 w-full flex justify-between items-center bg-gradient-to-b from-slate-50 via-slate-50/90 to-transparent dark:from-slate-950 dark:via-slate-950/90 dark:to-transparent"
  >
    <nav class="w-full p-4 flex justify-between items-center gap-2">
      <IconButton
        icon="menu"
        tooltip="Navigation"
        size="medium"
        variant="secondary"
        on:click={openNavigationDialog}
      />
      <dialog class="border-none bg-transparent" bind:this={navigationDialog}>
        <div
          class="transition fixed inset-0 bg-gradient-to-b from-slate-50 via-slate-50/95 to-slate-50/80 dark:from-slate-950 dark:via-slate-950/95 dark:to-slate-950/80"
          role="navigation"
          on:click={closeNavigationDialog}
          on:keydown={closeNavigationDialog}
        />
        <div
          class="fixed top-0 left-0 p-4 flex justify-start items-start gap-4"
        >
          <IconButton
            icon="close"
            tooltip="Close"
            size="medium"
            variant="secondary"
            on:click={closeNavigationDialog}
          />
          <div class="flex flex-col sm:flex-row gap-x-4 gap-y-2">
            <ul class="flex flex-row gap-2">
              <li>
                <IconButton
                  icon="add"
                  tooltip="New Note"
                  size="medium"
                  variant="primary"
                />
              </li>
              <li>
                <IconButton
                  icon="edit"
                  tooltip="Notepad"
                  size="medium"
                  variant="primary"
                />
              </li>
              <li>
                <IconButton
                  icon="account_circle"
                  tooltip="Your Account"
                  size="medium"
                  variant="primary"
                />
              </li>
            </ul>
            <ThemeSwitcher size="medium" />
          </div>
        </div>
      </dialog>
      <div class="relative">
        <IconButton
          icon="more_vert"
          tooltip="Demo Account"
          size="medium"
          variant="secondary"
        />
      </div>
    </nav>
  </header>
  <slot />
</div>
