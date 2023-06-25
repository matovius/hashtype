<script lang="ts">
  export let route: string;
  export let label: string;
</script>

<a
  href={route}
  class="transition font-medium font-body text-base text-sky-500 underline decoration-sky-200 decoration-2 hover:text-sky-700 hover:decoration-sky-500"
>
  {label}
</a>
