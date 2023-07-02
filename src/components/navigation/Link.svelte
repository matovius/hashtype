<script lang="ts">
  import Text from "../typography/Text.svelte";

  export let route: string;
  export let label: string;
  export let variant:
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "error" = "secondary";

  let linkVariant: string;

  if (variant === "primary") {
    linkVariant = "text-sky-500 hover:text-sky-700 focus:text-sky-700";
  } else if (variant === "secondary") {
    linkVariant = "text-slate-500 hover:text-slate-700 focus:text-slate-700";
  } else if (variant === "success") {
    linkVariant =
      "text-emerald-500 hover:text-emerald-700 focus:text-emerald-700";
  } else if (variant === "warning") {
    linkVariant = "text-yellow-500 hover:text-yellow-700 focus:text-yellow-700";
  } else if (variant === "error") {
    linkVariant = "text-rose-500 hover:text-rose-700 focus:text-rose-700";
  }
</script>

<a
  href={route}
  class={`transition outline-none underline underline-offset-2 decoration-2 ${linkVariant}`}
>
  <Text as="span">{label}</Text>
</a>
