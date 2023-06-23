<script lang="ts">
  import Link from "../components/navigation/Link.svelte";
  import Text from "../components/typography/Text.svelte";

  interface NavLink {
    name: string;
    route: string;
  }
  const navItems: NavLink[] = [
    {
      name: "Features",
      route: "#features",
    },
    {
      name: "Pricing",
      route: "#pricing",
    },
  ];
</script>

<header
  class="
    w-full
    border-b-2
    border-slate-300
    bg-slate-100
    flex
    justify-between
    items-center"
>
  <div class="p-2">
    <div
      class="w-8 aspect-square border-2 border-slate-300 bg-slate-200 rounded-lg"
    />
  </div>
  <div class="p-2 flex justify-center items-center gap-2">
    <nav class="flex justify-center items-center">
      <ul class="flex justify-center items-center gap-2">
        {#each navItems as navItem}
          <li>
            <Link label={navItem.name} route={navItem.route} />
          </li>
        {/each}
      </ul>
    </nav>
    <a
      href="/demo"
      class="transition px-2 py-1 border-2 flex justify-center items-center gap-2 no-underline text-slate-600 border-slate-300 rounded-lg bg-slate-100 hover:text-slate-100 hover:border-slate-500 hover:bg-slate-500"
    >
      <Text as="span">Start Demo</Text>
    </a>
  </div>
</header>
<main />
<footer />
