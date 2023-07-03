<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import FolderIcon from "../icons/FolderIcon.svelte";
  import PencilSquareIcon from "../icons/PencilSquareIcon.svelte";
  import TrashIcon from "../icons/TrashIcon.svelte";
  import Text from "../typography/Text.svelte";
  import HashtypeLogo from "../icons/HashtypeLogo.svelte";
  import DocumentPlusIcon from "../icons/DocumentPlusIcon.svelte";
  import XMarkIcon from "../icons/XMarkIcon.svelte";
  import IconButton from "../buttons/IconButton.svelte";
  import Button from "../buttons/Button.svelte";
  import ThemeSwitcher from "../buttons/ThemeSwitcher.svelte";

  let dispatch = createEventDispatcher();
</script>

<div
  class="w-full h-full flex flex-col justify-between items-center gap-4 border-r-2 border-slate-500 bg-slate-100 dark:bg-slate-900"
>
  <header class="w-full p-4 flex justify-between items-center">
    <div class="text-sky-500 dark:text-slate-300 w-8 aspect-square">
      <HashtypeLogo />
    </div>
    <div>
      <IconButton
        icon={XMarkIcon}
        tooltip="Close Nav Drawer"
        on:click={() => {
          dispatch("close");
        }}
      />
    </div>
  </header>
  <main class="w-full h-full">
    <nav class="w-full p-2">
      <ul class="flex flex-col gap-2">
        <li class="w-full flex justify-center items-center">
          <Button
            startIcon={DocumentPlusIcon}
            textLabel="New Note"
            size="large"
            variant="primary"
            width="container"
            on:click={() => {
              dispatch("newnote");
            }}
            align="start"
          />
        </li>
        <li class="w-full flex justify-center items-center">
          <Button
            startIcon={PencilSquareIcon}
            textLabel="Notepad"
            size="large"
            variant="secondary"
            width="container"
            align="start"
          />
        </li>
        <li class="w-full flex justify-center items-center">
          <Button
            startIcon={FolderIcon}
            textLabel="Folders"
            size="large"
            variant="secondary"
            width="container"
            align="start"
          />
        </li>
        <li class="w-full flex justify-center items-center">
          <Button
            startIcon={TrashIcon}
            textLabel="Trash"
            size="large"
            variant="error"
            width="container"
            align="start"
          />
        </li>
      </ul>
      <ul />
    </nav>
    <div />
  </main>
  <footer class="w-full p-4 flex flex-col justify-center items-center gap-4">
    <ThemeSwitcher />
  </footer>
</div>
