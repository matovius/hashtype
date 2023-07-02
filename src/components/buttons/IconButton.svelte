<script lang="ts">
  export let icon: any;
  export let size: "small" | "medium" | "large" = "small";
  export let variant:
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "error" = "secondary";
  export let tooltip: string;

  let buttonPadding: string;
  let buttonVariant: string;

  if (size === "small") {
    buttonPadding = "rounded-md p-1";
  } else if (size === "medium") {
    buttonPadding = "rounded-lg p-2";
  } else if (size === "large") {
    buttonPadding = "rounded-xl p-4";
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
</script>

<button
  class={`transition outline-none ease-in flex justify-center items-center border-2 ${buttonPadding} ${buttonVariant}`}
  title={tooltip}
  on:click
>
  <svelte:component this={icon} />
</button>
