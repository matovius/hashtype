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
    w-full h-20 p-4
    border-b-2
    border-slate-300
    bg-slate-100
    flex
    justify-center
    items-center fixed top-0 z-10"
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
<main class="w-full bg-slate-50 flex flex-col justify-center">
  <section
    id="hero-section"
    class="text-slate-100 w-full min-h-screen px-6 pt-[104px] pb-6 bg-slate-800 flex flex-col justify-start items-center gap-10 relative"
  >
    <div class="w-full max-w-5xl flex flex-col items-center gap-8 pt-20">
      <div class="w-full max-w-lg flex flex-col items-center gap-8 text-center">
        <div class="flex flex-col gap-4">
          <Text as="h1">The Minimal Markdown Text Editor</Text>
          <Text as="p"
            >Have fewer distractions with this ultra-minimalist text editor for
            greater productivity
          </Text>
        </div>
        <a
          href="/demo"
          class="transition w-full sm:w-fit px-8 py-4 flex justify-center items-center gap-2 no-underline text-sky-100 rounded-lg bg-sky-500 shadow-md shadow-sky-900 hover:shadow-lg hover:shadow-sky-700 hover:bg-sky-400"
        >
          <Text as="span">Start Demo</Text>
        </a>
      </div>
      <div
        class="w-full max-w-lg aspect-video bg-slate-700 rounded-xl"
        title="Hero image goes here"
      />
    </div>
    <div
      class="p-2 rounded-lg absolute bottom-6 border-2 border-slate-500 bg-slate-500/50 flex justify-center items-center gap-2"
    >
      <Text as="p">Scroll down</Text>
    </div>
  </section>
  <div class="w-full max-w-5xl flex flex-col justify-center items-center">
    <div
      class="min-h-[400px] flex flex-col justify-center items-center gap-12 bg-slate-800 rounded-3xl p-12 text-slate-100 relative"
    >
      <div class="w-full h-full flex flex-col gap-8">
        <Text as="h1">A minimal experience for greater productivity!</Text>
        <Text as="p"
          >Have fewer distractions in this minimalist-style text editor.</Text
        >
        <a
          href="/demo"
          class="transition w-full md:w-fit px-8 py-4 flex justify-center items-center gap-2 no-underline text-sky-100 rounded-lg bg-sky-500 shadow-md shadow-sky-900 hover:shadow-lg hover:shadow-sky-700 hover:bg-sky-400"
        >
          <Text as="span">Start Demo</Text>
        </a>
      </div>
      <div
        class="w-full aspect-video bg-slate-700 rounded-xl"
        title="Hero image goes here"
      />
    </div>
  </div>
</main>
<footer />
