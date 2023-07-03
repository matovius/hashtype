<script lang="ts">
  import Text from "../typography/Text.svelte";
  import LinkButton from "../buttons/LinkButton.svelte";
  import Button from "../buttons/Button.svelte";
  import IconButton from "../buttons/IconButton.svelte";
  import XMarkIcon from "../icons/XMarkIcon.svelte";

  export let cardID: string;
  export let variant: "primary" | "secondary" = "primary";
  export let heading: string = "Hello World";
  export let pricePoint: string = "No Price";
  export let description: string = "I dont see a description";
  export let hasDetails: boolean = false;
  export let detailsList: Array<string> = ["There", "Are", "No", "Details"];
  export let ctaText: string = "Hello World";
  export let ctaLink: string = "/";
  export let ctaVariant: "primary" | "secondary" = "primary";
  export let isInert: boolean = false;

  let cardVariant: string;
  let cardHeader: string;
  let cardFooter: string;
  let inertBlur: string;
  let detailsModalState: boolean = false;

  if (variant === "primary") {
    cardVariant = "border-sky-500";
    cardHeader = "border-sky-500 bg-sky-500/60 text-slate-100";
    cardFooter = "border-sky-500";
  } else if (variant === "secondary") {
    cardVariant = "border-slate-500";
    cardHeader = "border-slate-500 bg-slate-500/50";
    cardFooter = "border-slate-500";
  }

  if (isInert) {
    inertBlur = "blur-md";
  } else {
    inertBlur = "blur-0";
  }

  function openDetailsModal() {
    detailsModalState = true;
  }

  function closeDetailsModal() {
    detailsModalState = false;
  }
</script>

<div />
<div
  id={cardID}
  class={`relative ${inertBlur} transition w-80 aspect-square rounded-2xl flex flex-col border-2 overflow-hidden ${cardVariant} bg-slate-100 dark:bg-slate-900`}
  inert={isInert}
>
  <div
    class={`relative py-4 border-b-2 flex justify-center items-center ${cardHeader}`}
  >
    <Text as="h5">{heading}</Text>
  </div>
  <div class="p-4 h-full flex flex-col justify-center items-center gap-4">
    <span class="text-5xl uppercase font-bold font-display">{pricePoint}</span>
    <span class="text-sm font-semibold font-body text-slate-500"
      >{description}</span
    >
    {#if hasDetails}
      <div>
        <Button
          textLabel="See Details"
          size="medium"
          on:click={openDetailsModal}
        />
      </div>
    {/if}
  </div>
  <div class={`p-4 border-t-2 ${cardFooter} flex justify-center items-center`}>
    <LinkButton
      link={ctaLink}
      textLabel={ctaText}
      width="container"
      size="medium"
      variant={ctaVariant}
    />
    {#if detailsModalState}
      <div
        class="absolute inset-0 p-4 bg-slate-100/90 dark:bg-slate-900/90 flex justify-center items-center"
      >
        <div
          class="relative w-full h-full p-4 rounded-xl border-2 border-slate-500 bg-slate-100 dark:bg-slate-900"
        >
          <div class="absolute top-2 right-2">
            <IconButton icon={XMarkIcon} on:click={closeDetailsModal} />
          </div>
          <div>
            <Text as="h6">Details</Text>
          </div>
          <ul class="list-disc pt-4 pl-4 max-w-full">
            {#each detailsList as detail}
              <li>{detail}</li>
            {/each}
          </ul>
        </div>
      </div>
    {/if}
  </div>
</div>
