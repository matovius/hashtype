<script lang="ts">
  export let icon: string;
  export let link: string = "/";
  export let size: "small" | "medium" | "large" = "small";
  export let variant:
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "error"
    | "neutral" = "neutral";
  export let tooltip: string;

  let buttonSize: string;
  let buttonVariant: string;

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
</script>

<a
  href={link}
  class={`btn btn-circle ${buttonSize} ${buttonVariant}`}
  title={tooltip}
>
  <span class="material-icons-rounded">{icon}</span>
</a>
