<script lang="ts">
  import "../app.css";
  import logo from "$lib/images/hashtype-logo.png";
</script>

<svelte:head>
  <title>Hashtype: A Basic Text Editor Made With Svelte</title>
  <link rel="icon" href={logo} type="image/png" />
</svelte:head>

<div class="bg-slate-50 dark:bg-slate-900">
  <slot />
</div>
