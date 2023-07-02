<script lang="ts">
  import Text from "../components/typography/Text.svelte";
  import LinkButton from "../components/buttons/LinkButton.svelte";

  export let cardID: string;
  export let variant: "primary" | "secondary" = "primary";
  export let heading: string = "Hello World";
  export let pricePoint: string = "No Price";
  export let description: string = "I dont see a description";
  export let detailsList: Array<string> = ["There", "Are", "No", "Details"];
  export let ctaText: string = "Hello World";
  export let ctaLink: string = "/";
  export let ctaVariant: "primary" | "secondary" = "primary";

  let cardVariant: string;
  let cardHeader: string;
  let cardFooter: string;

  if (variant === "primary") {
    cardVariant = "border-sky-500";
    cardHeader = "border-sky-500 bg-sky-500/60 text-slate-100";
    cardFooter = "border-sky-500";
  } else if (variant === "secondary") {
    cardVariant = "border-slate-500";
    cardHeader = "border-slate-500 bg-slate-500/50";
    cardFooter = "border-slate-500";
  }
</script>

<div
  id={cardID}
  class={`transition w-80 aspect-square rounded-2xl flex flex-col border-2 overflow-hidden ${cardVariant} bg-slate-100 dark:bg-slate-900`}
>
  <div class={`py-4 border-b-2 flex justify-center items-center ${cardHeader}`}>
    <Text as="h5">{heading}</Text>
  </div>
  <div class="p-4 h-full flex flex-col justify-center items-center gap-4">
    <span class="text-5xl uppercase font-bold font-display">{pricePoint}</span>
    <span class="text-sm font-semibold font-body text-slate-500"
      >{description}</span
    >
  </div>
  <div class={`p-4 border-t-2 ${cardFooter} flex justify-center items-center`}>
    <LinkButton
      link={ctaLink}
      textLabel={ctaText}
      width="container"
      size="medium"
      variant={ctaVariant}
    />
  </div>
</div>
