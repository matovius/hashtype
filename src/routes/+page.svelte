<script lang="ts">
  import Header from "../components/landing-page/Header.svelte";
  import Footer from "../components/landing-page/Footer.svelte";

  import Link from "../components/navigation/Link.svelte";
  import Text from "../components/typography/Text.svelte";

  interface Feature {
    name: string;
    description: string;
  }

  interface AppLink {
    label: string;
    route: string;
  }

  interface ExternalLink {
    label: string;
    link: string;
  }

  const features: Feature[] = [
    {
      name: "Interface",
      description:
        "A minimal distraction-free user interface to maximize your productivity",
    },
    {
      name: "Themes",
      description:
        "Beautiful light and dark themes with matching syntax highlighting to boot",
    },
    {
      name: "Shortcuts",
      description:
        "Amazingly configurable keyboard shortcuts to have all your commands right at your fingertips",
    },
    {
      name: "Search",
      description:
        "Advanced searching capability with search filters and document tags",
    },
    {
      name: "Sync",
      description:
        "Google Drive, Dropbox, Microsoft OneDrive, and/or your favorite cloud storage service",
    },
  ];

  const appLinks: AppLink[] = [
    {
      label: "Releases",
      route: "/releases",
    },
    {
      label: "About",
      route: "/about",
    },
    {
      label: "Contact",
      route: "/contact",
    },
    {
      label: "Legal",
      route: "/legal",
    },
  ];

  const externalLinks: ExternalLink[] = [
    {
      label: "GitHub",
      link: "https://github.com/matovius",
    },
    {
      label: "Mastodon",
      link: "https://mastodon.social/@matovius",
    },
    {
      label: "Twitter",
      link: "https://twitter.com/@matovius_",
    },
    {
      label: "LinkedIn",
      link: "https://linkedin.com/", //TODO: Complete the link here
    },
  ];
</script>

<div>
  <Header />
  <main class="text-slate-900 dark:text-slate-100 flex flex-col justify-center">
    <section
      id="hero-section"
      class="text-slate-100 w-full h-full p-20 bg-slate-800 flex flex-col justify-start items-center gap-10 relative"
    >
      <div class="w-full max-w-5xl flex flex-col items-center gap-8 pt-20">
        <div
          class="w-full min-w-[320px] max-w-lg flex flex-col items-center gap-8 text-center"
        >
          <div class="flex flex-col gap-4">
            <Text as="h1">The Minimal Markdown Text Editor</Text>
            <Text as="p"
              >Have fewer distractions with this ultra-minimalist text editor
              for greater productivity
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
      class="w-full px-6 py-24 flex justify-center items-center"
    >
      <div class="w-full h-full max-w-5xl">
        <div class="text-center">
          <Text as="h2">Features</Text>
        </div>

        <div
          class="w-full flex gap-6 flex-wrap py-6 justify-center items-center"
        >
          {#each features as feature}
            <div
              class="transition delay-200 w-80 h-40 p-4 rounded-2xl border-2 bg-slate-100 dark:bg-slate-800 border-slate-300 dark:border-slate-600 hover:scale-110 hover:shadow-lg hover:shadow-slate-300 dark:hover:shadow-slate-950"
            >
              <Text as="h5">{feature.name}</Text>
              <Text as="p">{feature.description}</Text>
            </div>
          {/each}
        </div>
      </div>
    </section>
    <section
      id="pricing"
      class="w-full px-6 py-24 flex justify-center items-center"
    >
      <div class="w-full h-full max-w-5xl">
        <div class="text-center">
          <Text as="h2">Pricing</Text>
        </div>

        <div
          class="w-full flex gap-6 flex-wrap py-6 justify-center items-center"
        >
          <div
            id="basic-card"
            class="transition w-80 h-80 rounded-2xl flex flex-col border-2 border-slate-300 dark:border-slate-600 bg-slate-100 dark:bg-slate-800 overflow-hidden"
          >
            <div
              class="p-4 border-b-2 border-slate-300 dark:-border-slate-600 bg-slate-500 dark:bg-slate-300 text-slate-100 dark:text-slate-800 flex justify-center items-center"
            >
              <Text as="h5">Basic</Text>
            </div>
            <div
              class="p-4 h-full flex flex-col justify-center items-center gap-4"
            >
              <span class="text-6xl font-bold font-display">FREE</span>
              <span class="text-sm font-semibold font-body text-slate-500"
                >No account creation needed</span
              >
            </div>
            <div
              class="p-4 border-t-2 border-slate-300 dark:border-slate-600 flex justify-center items-center"
            >
              <a
                href="/"
                class="transition w-full px-8 py-4 flex justify-center items-center gap-2 no-underline text-sky-500 hover:text-sky-100 rounded-lg border-2 border-sky-500 bg-sky-100 hover:bg-sky-500 dark:bg-sky-900 dark:hover:bg-sky-500"
              >
                <Text as="span">Start Demo</Text>
              </a>
            </div>
          </div>
          <div
            id="premium-card"
            class="transition w-80 h-80 rounded-2xl flex flex-col border-2 border-slate-300 dark:border-slate-600 bg-slate-100 dark:bg-slate-800 overflow-hidden relative"
          >
            <div
              class="p-4 border-b-2 text-sky-100 border-slate-300 dark:border-slate-600 bg-sky-500 flex justify-center items-center"
            >
              <Text as="h5">Premium</Text>
            </div>
            <div
              class="p-4 h-full flex flex-col justify-center items-center gap-4"
            >
              <span class="text-6xl font-bold font-display">SOON</span>
              <div class="flex flex-col font-body">
                <span class="text-sm font-semibold text-slate-500"
                  >Sync across all your devices</span
                >
                <span class="text-sm font-semibold text-slate-500"
                  >Accont creation needed</span
                >
              </div>
            </div>
            <div
              class="p-4 border-t-2 border-slate-300 dark:border-slate-600 flex justify-center items-center"
            >
              <a
                href="/"
                class="transition w-full px-8 py-4 flex justify-center items-center gap-2 no-underline text-slate-100 rounded-lg bg-slate-500 hover:bg-slate-600"
              >
                <Text as="span">Coming Soon</Text>
              </a>
            </div>
            <div
              class="flex absolute inset-0 bg-slate-100/95 dark:bg-slate-900/95 justify-center items-center"
            >
              <div
                class="px-4 py-2 rounded-lg bg-slate-500 dark:bg-slate-800 border-2 border-slate-300 dark:border-slate-600 text-slate-200 dark:text-slate-400 flex justify-center items-center"
              >
                <Text as="span">Coming Soon</Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  <Footer />
</div>
