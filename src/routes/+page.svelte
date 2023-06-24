<script lang="ts">
  import Header from "../components/landing-page/Header.svelte";

  import Link from "../components/navigation/Link.svelte";
  import Text from "../components/typography/Text.svelte";
</script>

<Header />
<main class="w-full bg-slate-50 flex flex-col justify-center">
  <section
    id="hero-section"
    class="text-slate-100 w-full h-full p-6 bg-slate-800 flex flex-col justify-start items-center gap-10 relative"
  >
    <div class="w-full max-w-5xl flex flex-col items-center gap-8 pt-20">
      <div
        class="w-full min-w-[320px] max-w-lg flex flex-col items-center gap-8 text-center"
      >
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
        class="w-full min-w-[320px] max-w-lg aspect-video bg-slate-700 rounded-xl"
        title="Hero image goes here"
      />
    </div>
    <div
      class="p-2 rounded-lg absolute bottom-6 right-6 border-2 border-slate-500 bg-slate-500/50 flex justify-center items-center gap-2"
    >
      <Text as="p">Scroll down</Text>
    </div>
  </section>
  <section
    id="features"
    class="text-slate-900 w-full h-screen p-6 flex justify-center items-center"
  >
    <div class="w-full h-full max-w-5xl">
      <Text as="h2">Features</Text>
    </div>
  </section>
</main>
<footer />
