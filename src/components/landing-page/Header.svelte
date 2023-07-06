<script lang="ts">
  import Text from "../typography/Text.svelte";
  import HashtypeLogo from "../icons/HashtypeLogo.svelte";
  import LinkButton from "../buttons/LinkButton.svelte";
</script>

<header
  class="
    p-4
    flex
    justify-center
    items-center
    z-10"
>
  <div class="w-full max-w-5xl flex justify-between items-center">
    <div class="flex justify-center items-center gap-2">
      <div class="w-6 aspect-square text-sky-500 dark:text-slate-200">
        <HashtypeLogo />
      </div>
      <div class="hidden sm:inline text-slate-800 dark:text-slate-200">
        <Text as="h6">Hashtype</Text>
      </div>
    </div>
    <div class="flex justify-center items-center gap-4">
      <nav class="flex justify-center items-center gap-4">
        <LinkButton
          link="/demo"
          textLabel="Start Demo"
          size="small"
          variant="primary"
        />
      </nav>
    </div>
  </div>
</header>
