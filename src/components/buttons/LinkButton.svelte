<script lang="ts">
  export let link: string = "/";
  export let size: "small" | "medium" | "large" = "small";
  export let variant:
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "error"
    | "neutral" = "neutral";
  export let startIcon: string | null = null;
  export let endIcon: string | null = null;
  export let fullWidth: boolean = false;
  export let textLabel: string;
  export let align: "start" | "center" | "end" = "start";

  let buttonSize: string;
  let buttonVariant: string;
  let textAlign: string;

  if (size === "small") {
    buttonSize = "btn-sm";
  } else if (size === "medium") {
    buttonSize = "btn-md";
  } else if (size === "large") {
    buttonSize = "btn-lg";
  }

  if (variant === "neutral") {
    buttonVariant = "btn-neutral";
  } else if (variant === "primary") {
    buttonVariant = "btn-primary";
  } else if (variant === "secondary") {
    buttonVariant = "btn-secondary";
  } else if (variant === "success") {
    buttonVariant = "btn-success";
  } else if (variant === "warning") {
    buttonVariant = "btn-warning";
  } else if (variant === "error") {
    buttonVariant = "btn-error";
  }

  if (align === "start") {
    textAlign = "text-start";
  } else if (align === "center") {
    textAlign = "text-center";
  } else if (align === "end") {
    textAlign = "text-end";
  }
</script>

<a
  href={link}
  class={`btn ${buttonSize} ${buttonVariant} ${fullWidth ? "btn-block" : null}`}
>
  {#if startIcon !== null}
    <span class="material-icons-rounded">{startIcon}</span>
  {/if}
  <div class={`${textAlign}`}>
    <span>{textLabel}</span>
  </div>
  {#if endIcon !== null}
    <span class="material-icons-rounded">{endIcon}</span>
  {/if}
</a>
