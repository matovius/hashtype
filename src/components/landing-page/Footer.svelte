<script lang="ts">
  import SunIcon from "../icons/SunIcon.svelte";
  import MoonIcon from "../icons/MoonIcon.svelte";
  import Text from "../typography/Text.svelte";
  import HashtypeLogo from "../icons/HashtypeLogo.svelte";

  let isDarkMode: boolean = false;
  let themeLabel: "Toggle Dark Mode" | "Toggle Light Mode";
  isDarkMode
    ? (themeLabel = "Toggle Light Mode")
    : (themeLabel = "Toggle Dark Mode");

  function setTheme() {
    const root: HTMLElement = document.documentElement;
    root.classList.toggle("dark");
  }

  function toggleTheme() {
    isDarkMode = !isDarkMode;
    isDarkMode
      ? (themeLabel = "Toggle Light Mode")
      : (themeLabel = "Toggle Dark Mode");
    setTheme();
  }

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
  class="w-full bg-slate-800 text-slate-100 flex flex-col justify-center items-center"
>
  <div class="w-full max-w-5xl px-4 py-10 flex flex-col gap-12 sm:flex-row">
    <div
      class="w-full flex flex-col justify-between sm:justify-center items-center gap-6 sm:gap-2"
    >
      <div class="w-12 aspect-square text-sky-100" title="App icon goes here">
        <HashtypeLogo />
      </div>
      <button
        class="transition w-full max-w-sm p-4 rounded-lg border-2 border-slate-500 hover:border-slate-300 flex justify-between items-center bg-slate-700 hover:bg-slate-600"
        on:click={toggleTheme}
      >
        <Text as="span">{themeLabel}</Text>
        {#if isDarkMode}
          <SunIcon />
        {:else}
          <MoonIcon />
        {/if}
      </button>
    </div>
    <div class="w-full flex justify-between align-center">
      <div class="w-full">
        <ul
          class="list-none p-0 m-0 flex flex-col justify-center items-center gap-4"
        >
          {#each appLinks as appLink}
            <li>
              <a
                href={appLink.route}
                class="transition font-bold underline underline-offset-2 decoration-2 decoration-slate-500 hover:decoration-slate-300"
              >
                <Text as="p">{appLink.label}</Text>
              </a>
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
              <a
                href={externalLink.link}
                target="_blank"
                rel="noopener noreferrer"
                class="transition font-bold underline underline-offset-2 decoration-2 decoration-slate-500 hover:decoration-slate-300"
              >
                <Text as="p">{externalLink.label}</Text>
              </a>
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
      <Text as="span">Copyright 2023, Hashtype. All Rights Reserved</Text>
      <Text as="span">Made with passion, and SvelteKit</Text>
    </div>
  </div>
</footer>
