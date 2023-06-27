<script lang="ts">
  import DocumentPlusIcon from "../../components/icons/DocumentPlusIcon.svelte";
  import FolderPlusIcon from "../../components/icons/FolderPlusIcon.svelte";
  import HashtypeLogo from "../../components/icons/HashtypeLogo.svelte";
  import PencilSquareIcon from "../../components/icons/PencilSquareIcon.svelte";
  import Text from "../../components/typography/Text.svelte";

  interface StartingAction {
    icon: any;
    title: string;
    description: string;
  }

  const startingActions: StartingAction[] = [
    {
      icon: DocumentPlusIcon,
      title: "Note",
      description: "Create a new note",
    },
    {
      icon: FolderPlusIcon,
      title: "Folder",
      description: "Create a new folder",
    },
    {
      icon: PencilSquareIcon,
      title: "Notepad",
      description: "Quickly jot something down",
    },
  ];
</script>

<svelte:head>
  <title>Hashtype Demo App</title>
</svelte:head>

<main class="w-full h-full flex justify-center items-center overflow-y-scroll">
  <div class="flex flex-col gap-12 p-4">
    <div
      class="text-sky-500 dark:text-slate-300 flex justify-center items-center gap-4 sm:gap-6 md:gap-8"
    >
      <div class="w-8 sm:w-12 md:w-16 aspect-square">
        <HashtypeLogo />
      </div>
    </div>
    <div class="flex flex-col justify-center items-center gap-6">
      <Text as="h1">Get Started</Text>
      <div class="flex justify-center items-center gap-4 flex-wrap">
        {#each startingActions as startingAction}
          <button
            class="transition hover:scale-110 focus:scale-110 outline-none text-left w-full max-w-xs p-4 flex flex-col gap-4 rounded-xl border-2 border-slate-300 hover:border-slate-500 focus:border-slate-500 dark:border-slate-700 dark:hover:border-slate-500 dark:focus:border-slate-500 bg-slate-100 hover:bg-slate-300 focus:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 dark:focus:bg-slate-700"
          >
            <div class="flex gap-2">
              <svelte:component this={startingAction.icon} />
              <Text as="h5">{startingAction.title}</Text>
            </div>
            <Text as="p">{startingAction.description}</Text>
          </button>
        {/each}
      </div>
    </div>
  </div>
  <div />
</main>
