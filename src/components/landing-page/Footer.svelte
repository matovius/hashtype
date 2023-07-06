<script lang="ts">
  import Text from "../typography/Text.svelte";
  import HashtypeLogo from "../icons/HashtypeLogo.svelte";
  import ThemeSwitcher from "../buttons/ThemeSwitcher.svelte";
  import Link from "../navigation/Link.svelte";

  interface AppLink {
    label: string;
    route: string;
  }

  interface ExternalLink {
    label: string;
    link: string;
  }
  /**
   * TODO: Complete these links
   */

  const appLinks: AppLink[] = [
    {
      label: "Releases",
      route: "/",
    },
    {
      label: "About",
      route: "/",
    },
    {
      label: "Contact",
      route: "/",
    },
    {
      label: "Legal",
      route: "/",
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
      link: "https://linkedin.com/", // TODO: Complete this link
    },
  ];
</script>

<footer
  class="w-full bg-slate-900 text-slate-100 flex flex-col justify-center items-center"
>
  <div class="w-full max-w-5xl px-4 py-10 flex flex-col gap-12 sm:flex-row">
    <div
      class="w-full flex flex-col justify-between sm:justify-center items-center gap-6"
    >
      <div class="w-12 aspect-square text-sky-100" title="App icon goes here">
        <HashtypeLogo />
      </div>
      <ThemeSwitcher size="large" />
    </div>
    <div class="w-full flex justify-between align-center">
      <div class="w-full">
        <ul
          class="list-none p-0 m-0 flex flex-col justify-center items-center gap-4"
        >
          {#each appLinks as appLink}
            <li>
              <Link route={appLink.route} label={appLink.label} />
            </li>
          {/each}
        </ul>
      </div>
      <div class="w-full">
        <ul
          class="list-none p-0 m-0 flex flex-col justify-center items-center gap-4"
        >
          {#each externalLinks as externalLink}
            <li>
              <Link label={externalLink.label} route={externalLink.link} />
            </li>
          {/each}
        </ul>
      </div>
    </div>
  </div>
  <div
    class="w-full flex justify-center items-center border-t-2 border-slate-500"
  >
    <div
      class="w-full max-w-5xl p-4 flex flex-col gap-2 sm:flex-row sm:justify-between"
    >
      <Text as="legend"
        >&copy; Copyright 2023, Hashtype. All Rights Reserved</Text
      >
      <Text as="legend">Made with passion, SvelteKit, and DaisyUI</Text>
    </div>
  </div>
</footer>
