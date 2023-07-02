<script lang="ts">
  import Text from "../typography/Text.svelte";

  export let size: "small" | "medium" | "large" = "small";
  export let variant:
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "error" = "secondary";
  export let startIcon: any = null;
  export let endIcon: any = null;
  export let width: "content" | "container" = "content";
  export let textLabel: string;
  export let align: "start" | "center" | "end" = "start";

  let buttonSize: string;
  let buttonVariant: string;
  let buttonWidth: string;
  let textAlign: string;

  if (size === "small") {
    buttonSize = "gap-2 rounded-md px-2 py-1";
  } else if (size === "medium") {
    buttonSize = "gap-4 rounded-lg px-4 py-2";
  } else if (size === "large") {
    buttonSize = "gap-6 rounded-xl px-8 py-4";
  }

  if (variant === "primary") {
    buttonVariant =
      "text-sky-500 hover:text-sky-100 focus:text-sky-100 border-sky-500 bg-sky-500/20 hover:bg-sky-500 focus:bg-sky-500";
  } else if (variant === "secondary") {
    buttonVariant =
      "text-slate-500 hover:text-slate-100 focus:text-slate-100 border-slate-500 bg-slate-500/20 hover:bg-slate-500 focus:bg-slate-500";
  } else if (variant === "success") {
    buttonVariant =
      "text-emerald-500 hover:text-emerald-100 focus:text-emerald-100 border-emerald-500 bg-emerald-500/20 hover:bg-emerald-500 focus:bg-emerald-500";
  } else if (variant === "warning") {
    buttonVariant =
      "text-yellow-500 hover:text-yellow-100 focus:text-yellow-100 border-yellow-500 bg-yellow-500/20 hover:bg-yellow-500 focus:bg-yellow-500";
  } else if (variant === "error") {
    buttonVariant =
      "text-rose-500 hover:text-rose-100 focus:text-rose-100 border-rose-500 bg-rose-500/20 hover:bg-rose-500 focus:bg-rose-500";
  }

  if (width === "container") {
    buttonWidth = "w-full";
  } else if (width === "content") {
    buttonWidth = "w-fit";
  }

  if (align === "start") {
    textAlign = "text-start";
  } else if (align === "center") {
    textAlign = "text-center";
  } else if (align === "end") {
    textAlign = "text-end";
  }
</script>

<button
  class={`transition outline-none ease-in flex justify-center items-center border-2 ${buttonWidth} ${buttonSize} ${buttonVariant}`}
  on:click
>
  {#if startIcon !== null}
    <svelte:component this={startIcon} />
  {/if}
  <div class={`${textAlign}`}>
    <Text as="span">{textLabel}</Text>
  </div>
  {#if endIcon !== null}
    <svelte:component this={endIcon} />
  {/if}
</button>
