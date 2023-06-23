<script lang="ts">
  export let route: string;
  export let label: string;
</script>

<a
  href={route}
  class="transition font-medium text-base text-sky-500 underline decoration-sky-100 decoration-2 hover:decoration-sky-300"
>
  {label}
</a>
