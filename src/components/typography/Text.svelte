<script lang="ts">
  export let as:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "p"
    | "span"
    | "legend";
</script>

{#if as === "h1"}
  <h1 class="font-bold font-display text-5xl text-inherit">
    <slot />
  </h1>
{:else if as === "h2"}
  <h2 class="font-bold font-display text-4xl text-inherit">
    <slot />
  </h2>
{:else if as === "h3"}
  <h3 class="font-semibold font-display text-3xl text-inherit">
    <slot />
  </h3>
{:else if as === "h4"}
  <h4 class="font-semibold font-display text-2xl text-inherit">
    <slot />
  </h4>
{:else if as === "h5"}
  <h5 class="font-bold font-display text-xl text-inherit">
    <slot />
  </h5>
{:else if as === "h6"}
  <h6 class="font-bold font-display text-lg text-inherit">
    <slot />
  </h6>
{:else if as === "p"}
  <p class="font-regular font-body text-md text-inherit">
    <slot />
  </p>
{:else if as === "span"}
  <span class="font-bold font-body text-sm text-inherit">
    <slot />
  </span>
{:else if as === "legend"}
  <legend class="font-bold font-body text-xs text-inherit">
    <slot />
  </legend>
{/if}
