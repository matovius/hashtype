<script lang="ts">
  export let route: string;
  export let label: string;
</script>

<a
  href={route}
  class="transition font-medium font-body text-base text-sky-500 hover:text-sky-700 dark:hover:text-sky-300 underline underline-offset-2 decoration-2 decoration-sky-200 dark:decoration-sky-800 hover:decoration-sky-500 dark:hover:decoration-sky-500"
>
  {label}
</a>
