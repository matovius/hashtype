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
    fixed
    top-0
    left-0
    right-0
    h-20
    p-4
    border-b-2
    border-slate-300 dark:border-slate-600
    bg-slate-100 dark:bg-slate-900
    flex
    justify-center
    items-center
    z-10"
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
        class="transition px-4 py-2 border-2 flex justify-center items-center gap-2 no-underline text-sky-500 border-sky-500 rounded-lg bg-sky-100 hover:bg-sky-500 dark:bg-sky-900 dark:hover:bg-sky-500 hover:text-sky-100"
      >
        <Text as="span">Start Demo</Text>
      </a>
    </div>
  </div>
</header>
