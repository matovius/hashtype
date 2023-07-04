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

  let sidebarModal: HTMLDialogElement;
  let newNoteModal: HTMLDialogElement;
  let moreOptionsDialog: HTMLDialogElement;

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

  function openMoreOptionsPopover() {
    moreOptionsDialog.showModal();
  }

  function closeMoreOptionsPopover() {
    moreOptionsDialog.close();
  }
</script>

<div class="min-h-screen">
  <header
    class="sticky top-0 w-full flex justify-between items-center bg-gradient-to-b from-slate-50 via-slate-50/90 to-transparent dark:from-slate-950 dark:via-slate-950/90 dark:to-transparent"
  >
    <nav class="w-full p-4 flex justify-between items-center gap-2">
      <ul class="flex justify-center items-center gap-2">
        <li class="hidden md:inline-block">
          <Button
            startIcon="add"
            textLabel="New Note"
            size="medium"
            variant="primary"
          />
        </li>
        <li class="inline-block md:hidden">
          <IconButton
            icon="add"
            tooltip="New Note"
            size="medium"
            variant="primary"
          />
        </li>
        <li class="inline-block lg:hidden">
          <LinkIconButton
            link="/demo/notepad"
            icon="draw"
            tooltip="Notepad"
            size="medium"
            variant="secondary"
          />
        </li>
        <li class="inline-block lg:hidden">
          <LinkIconButton
            link="/demo/trash"
            icon="delete_outline"
            tooltip="Trash"
            size="medium"
            variant="error"
          />
        </li>
        <li class="hidden lg:inline-block">
          <LinkButton
            link="/demo/notepad"
            startIcon="draw"
            textLabel="Notepad"
            size="medium"
            variant="secondary"
          />
        </li>
        <li class="hidden lg:inline-block">
          <LinkButton
            link="/demo/trash"
            startIcon="delete_outline"
            textLabel="Trash"
            size="medium"
            variant="error"
          />
        </li>
      </ul>
      <div class="relative">
        <IconButton
          icon="account_circle"
          tooltip="Demo Account"
          size="medium"
          variant="secondary"
        />
      </div>
    </nav>
  </header>
  <slot />
</div>
