<script lang="ts">
  import Button from "../../components/buttons/Button.svelte";
  import Text from "../../components/typography/Text.svelte";
</script>

<svelte:head>
  <title>Hashtype Demo App</title>
</svelte:head>

<main class="w-full h-full flex flex-col overflow-y-auto px-4">
  <div class="w-full py-4 flex justify-between items-center gap-4">
    <div>
      <Text as="h1">Demo</Text>
    </div>
    <div>
      <Button
        startIcon="add"
        textLabel="New Note"
        variant="primary"
        size="medium"
      />
    </div>
  </div>
  <div class="w-full py-4 flex justify-center items-center">
    <div
      class="w-full max-w-2xl min-h-fit flex flex-col justify-center items-center gap-4 p-4 rounded-3xl border-2 border-slate-500 bg-slate-500/20"
    >
      <span class="material-icons-rounded extra-large text-slate-500"
        >info_outline</span
      >
      <div class="text-center">
        <Text as="h2">You have no saved notes</Text>
      </div>
      <div class="text-center text-slate-500">
        <Text as="p"
          >Tap the New Note button or the
          <span class="material-icons-rounded small">add</span> icon to create one
          and get started</Text
        >
      </div>
    </div>
  </div>
</main>
