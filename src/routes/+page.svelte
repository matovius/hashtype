<script lang="ts">
  import PricingCard from "./PricingCard.svelte";

  import Header from "../components/landing-page/Header.svelte";
  import Footer from "../components/landing-page/Footer.svelte";

  import Link from "../components/navigation/Link.svelte";
  import Text from "../components/typography/Text.svelte";
  import LinkButton from "../components/buttons/LinkButton.svelte";
  import ArrowLeftIcon from "../components/icons/ArrowLeftIcon.svelte";

  interface Feature {
    name: string;
    description: string;
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
</script>

<svelte:head>
  <title>Hashtype: A Markdown Text Editor Made With Svelte</title>
</svelte:head>

<div>
  <Header />
  <main class="flex flex-col justify-center">
    <section
      id="hero-section"
      class="text-slate-100 w-full h-full p-20 bg-slate-900 flex flex-col justify-start items-center gap-10 relative"
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
          <LinkButton
            link="/demo"
            textLabel="Start Demo"
            endIcon={ArrowLeftIcon}
            variant="primary"
            size="large"
          />
        </div>
        <div
          class="transition w-full min-w-[320px] max-w-xl aspect-video border-2 border-slate-500 bg-slate-500/20 rounded-2xl overflow-hidden hover:scale-110"
          title="Hero image goes here"
        />
      </div>
    </section>
    <section
      id="features"
      class="w-full px-6 py-24 flex justify-center items-center"
    >
      <div class="w-full h-full max-w-5xl flex flex-col gap-6">
        <div class="text-center">
          <Text as="h2">Features</Text>
        </div>

        <div
          class="w-full flex gap-6 flex-wrap py-6 justify-center items-center"
        >
          {#each features as feature}
            <article
              class="transition w-80 h-40 p-4 flex flex-col gap-4 rounded-2xl border-2 border-slate-500 bg-slate-100 dark:bg-slate-900 hover:scale-110"
            >
              <Text as="h5">{feature.name}</Text>
              <Text as="p">{feature.description}</Text>
            </article>
          {/each}
        </div>
      </div>
    </section>
    <section
      id="pricing"
      class="w-full px-6 py-24 flex justify-center items-center"
    >
      <div class="w-full h-full max-w-5xl flex flex-col gap-6">
        <div class="text-center">
          <Text as="h2">Pricing</Text>
        </div>

        <div
          class="w-full flex gap-6 flex-wrap py-6 justify-center items-center"
        >
          <PricingCard
            cardID="demo-pricing-card"
            variant="secondary"
            heading="Demo"
            pricePoint="Free"
            description="No account creation needed"
            ctaText="Start"
            ctaLink="/demo"
            ctaVariant="secondary"
          />
          <PricingCard
            cardID="basic-pricing-card"
            variant="primary"
            heading="Basic"
            pricePoint="Soon"
            description="This tier s coming soon"
            ctaText="Coming Soon"
            isInert
          />
        </div>
      </div>
    </section>
  </main>
  <Footer />
</div>
