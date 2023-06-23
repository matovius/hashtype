<script lang="ts">
  import type { SvelteComponent } from "svelte";
  import Text from "../typography/Text.svelte";

  export let icon: any = null;
  export let textLabel: string | null = null;
</script>

<button
  class="
  flex
  justify-between
  items-center
  gap-2
  p-3
  rounded-lg
  border-2
  border-sky-100
  hover:border-sky-300
  "
>
  {#if textLabel !== null}
    <Text as="span">
      {textLabel}
    </Text>
  {/if}
  <svelte:component this={icon} />
</button>
