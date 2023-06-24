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
      title="App icon goes here"
    />
  </div>
  <div class="p-2 flex justify-center items-center gap-4">
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
      class="transition px-2 py-1 border-2 flex justify-center items-center gap-2 no-underline text-slate-600 border-slate-300 rounded-lg bg-slate-100 hover:text-slate-100 hover:border-slate-500 hover:bg-slate-500"
    >
      <Text as="span">Start Demo</Text>
    </a>
  </div>
</header>
<main class="w-full bg-slate-50 flex justify-center p-8">
  <div class="w-full max-w-5xl flex flex-col justify-center items-center">
    <div
      class="min-h-[400px] flex flex-col md:flex-row justify-center items-center gap-12 bg-slate-800 rounded-3xl p-12 text-slate-100 relative"
    >
      <div class="w-full h-full flex flex-col gap-8 md:pb-24">
        <Text as="h1">A minimal experience for greater productivity!</Text>
        <Text as="p"
          >Have fewer distractions in this minimalist-style text editor.</Text
        >
      </div>
      <div
        class="w-full aspect-video bg-slate-700 rounded-xl"
        title="Hero image goes here"
      />
      <a
        href="/demo"
        class="absolute bottom-14 left-14 shadow-xl shadow-sky-700 transition px-8 py-4 flex justify-center items-center gap-2 no-underline text-sky-100 rounded-lg bg-sky-500 hover:bg-sky-400"
      >
        <Text as="span">Start Demo</Text>
      </a>
    </div>
  </div>
</main>
<footer />
