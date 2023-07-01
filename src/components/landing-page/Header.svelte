<script lang="ts">
  import Link from "../navigation/Link.svelte";
  import Text from "../typography/Text.svelte";
  import HashtypeLogo from "../icons/HashtypeLogo.svelte";
  import LinkButton from "../buttons/LinkButton.svelte";
  import ArrowLeftIcon from "../icons/ArrowLeftIcon.svelte";

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
    p-4
    border-b-2
    border-slate-300 dark:border-slate-700
    bg-slate-100 dark:bg-slate-900
    flex
    justify-center
    items-center
    z-10"
>
  <div class="w-full max-w-5xl flex justify-between items-center">
    <div class="flex justify-center items-center gap-2">
      <div class="w-6 aspect-square text-sky-500 dark:text-slate-200">
        <HashtypeLogo />
      </div>
      <div class="hidden sm:inline text-slate-800 dark:text-slate-200">
        <Text as="h6">Hashtype</Text>
      </div>
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
      <LinkButton
        link="/demo"
        textLabel="Start Demo"
        size="medium"
        variant="primary"
      />
    </div>
  </div>
</header>
