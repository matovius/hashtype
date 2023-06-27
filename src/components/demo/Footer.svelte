<script lang="ts">
  import DocumentDuplicateIcon from "../icons/DocumentDuplicateIcon.svelte";
  import FolderIcon from "../icons/FolderIcon.svelte";
  import PencilSquareIcon from "../icons/PencilSquareIcon.svelte";
  import TrashIcon from "../icons/TrashIcon.svelte";

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

<footer
  class="fixed bottom-0 sm:hidden w-full flex justify-center items-center border-t-2 border-slate-300 dark:border-slate-600 bg-slate-100 dark:bg-slate-800"
>
  <nav class="w-full p-4">
    <ul class="w-full flex justify-between items-center gap-2">
      {#each navItems as navItem}
        <li class="flex justify-center items-center">
          <a
            href={navItem.route}
            class="transition p-2 flex justify-center items-center border-2 border-slate-500 bg-slate-100 hover:bg-slate-300 dark:bg-slate-900 dark:hover:bg-slate-700 rounded-lg relative"
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
</footer>
