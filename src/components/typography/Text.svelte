<script lang="ts">
  export let alignment: "left" | "center" | "right" | "justify" | "inherit" =
    "inherit";
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
  export let breakWord: boolean = false;
  export let color: "gray" | "sky" = "gray";
  export let fontWeight: "regular" | "medium" | "semibold" | "bold" | null =
    null;
</script>

{#if as === "h1"}
  <h1 class="font-bold text-5xl">
    <slot />
  </h1>
{:else if as === "h2"}
  <h2 class="font-bold text-4xl">
    <slot />
  </h2>
{:else if as === "h3"}
  <h3 class="font-semibold text-3xl">
    <slot />
  </h3>
{:else if as === "h4"}
  <h4 class="font-semibold text-2xl">
    <slot />
  </h4>
{:else if as === "h5"}
  <h5 class="font-bold text-xl">
    <slot />
  </h5>
{:else if as === "h6"}
  <h6 class="font-bold text-lg">
    <slot />
  </h6>
{:else if as === "p"}
  <p class="font-regular text-md">
    <slot />
  </p>
{:else if as === "span"}
  <span class="font-regular text-sm">
    <slot />
  </span>
{:else if as === "legend"}
  <legend class="font-bold text-xs">
    <slot />
  </legend>
{/if}
