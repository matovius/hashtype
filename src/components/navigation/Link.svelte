<script lang="ts">
  import Text from "../typography/Text.svelte";

  export let route: string;
  export let label: string;
  export let variant:
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "error"
    | "neutral" = "neutral";

  let linkVariant: string;

  if (variant === "neutral") {
    linkVariant = "link-neutral";
  } else if (variant === "primary") {
    linkVariant = "link-primary";
  } else if (variant === "secondary") {
    linkVariant = "link-secondary";
  } else if (variant === "success") {
    linkVariant = "link-success";
  } else if (variant === "warning") {
    linkVariant = "link-warning";
  } else if (variant === "error") {
    linkVariant = "link-error";
  }
</script>

<a href={route} class={`link ${linkVariant}`}>
  <Text as="span">{label}</Text>
</a>
