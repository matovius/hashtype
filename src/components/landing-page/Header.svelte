<script lang="ts">
  import Link from "../navigation/Link.svelte";
  import Text from "../typography/Text.svelte";

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
    w-full h-20 p-4
    border-b-2
    border-slate-300
    bg-slate-100
    flex
    justify-center
    items-center sticky top-0 z-10"
>
  <div class="w-full max-w-5xl flex justify-between items-center">
    <div>
      <div
        class="w-8 aspect-square border-2 border-slate-300 bg-slate-200 rounded-lg"
        title="App icon goes here"
      />
    </div>
    <div class="flex justify-center items-center gap-4">
      <nav class="flex justify-center items-center">
        <ul class="flex justify-center items-center gap-4">
          {#each navItems as navItem}
            <li>
              <Link label={navItem.name} route={navItem.route} />
            </li>
          {/each}
        </ul>
      </nav>
      <a
        href="/demo"
        class="transition px-4 py-2 border-2 flex justify-center items-center gap-2 no-underline text-sky-600 border-sky-300 rounded-lg bg-sky-100 shadow-md shadow-slate-300 hover:shadow-lg hover:shadow-slate-400 hover:text-sky-100 hover:border-sky-500 hover:bg-sky-500"
      >
        <Text as="span">Start Demo</Text>
      </a>
    </div>
  </div>
</header>
