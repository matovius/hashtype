<script lang="ts">
  import "../app.css";
  import logo from "$lib/images/hashtype-logo.png";
</script>

<svelte:head>
  <link rel="icon" href={logo} type="image/png" />
</svelte:head>

<div
  class="w-full h-full bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200"
>
  <slot />
</div>
