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
  </section>
  <section
    id="features"
    class="text-slate-900 w-full p-6 flex justify-center items-center"
  >
    <div class="w-full h-full max-w-5xl">
      <Text as="h2">Features</Text>

      <div class="w-full flex gap-6 flex-wrap py-6 justify-center items-center">
        <div
          class="transition min-w-[320px] min-h-[200px] p-4 rounded-2xl border-2 bg-slate-100 border-slate-300 hover:scale-125 hover:shadow-lg hover:shadow-slate-300"
        />
        <div
          class="transition min-w-[320px] min-h-[200px] p-4 rounded-2xl border-2 bg-slate-100 border-slate-300 hover:scale-125 hover:shadow-lg hover:shadow-slate-300"
        />
        <div
          class="transition min-w-[320px] min-h-[200px] p-4 rounded-2xl border-2 bg-slate-100 border-slate-300 hover:scale-125 hover:shadow-lg hover:shadow-slate-300"
        />
        <div
          class="transition min-w-[320px] min-h-[200px] p-4 rounded-2xl border-2 bg-slate-100 border-slate-300 hover:scale-125 hover:shadow-lg hover:shadow-slate-300"
        />
        <div
          class="transition min-w-[320px] min-h-[200px] p-4 rounded-2xl border-2 bg-slate-100 border-slate-300 hover:scale-125 hover:shadow-lg hover:shadow-slate-300"
        />
      </div>
    </div>
  </section>
  <section
    id="pricing"
    class="text-slate-900 w-full flex justify-center items-center"
  >
    <div class="w-full h-full max-w-5xl">
      <Text as="h2">Pricing</Text>
    </div>
  </section>
</main>
<footer class="w-full bg-slate-800 text-slate-100" />
