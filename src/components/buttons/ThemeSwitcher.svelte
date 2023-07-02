<script lang="ts">
  import { browser } from "$app/environment";
  import SunIcon from "../icons/SunIcon.svelte";
  import MoonIcon from "../icons/MoonIcon.svelte";
  import ComputerDesktopIcon from "../icons/ComputerDesktopIcon.svelte";
  import IconButton from "./IconButton.svelte";

  export let size: "small" | "medium" | "large" = "small";

  let isDarkMode: boolean = false;
  let themeLabel: "Toggle Dark Mode" | "Toggle Light Mode";

  isDarkMode
    ? (themeLabel = "Toggle Light Mode")
    : (themeLabel = "Toggle Dark Mode");

  function setDarkTheme() {
    const root: HTMLElement = document.documentElement;
    themeLabel = "Toggle Light Mode";
    root.classList.add("dark");
  }

  function setLightTheme() {
    const root: HTMLElement = document.documentElement;
    themeLabel = "Toggle Dark Mode";
    root.classList.remove("dark");
  }

  function toggleDarkTheme() {
    if (isDarkMode === false) {
      isDarkMode = true;
      setDarkTheme();
    }
  }

  function toggleLightTheme() {
    if (isDarkMode === true) {
      isDarkMode = false;
      setLightTheme();
    }
  }

  function togglePreferredTheme() {
    if (browser) {
      const root: HTMLElement = document.documentElement;
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        root.classList.add("dark");
        isDarkMode = true;
      } else {
        root.classList.remove("dark");
        isDarkMode = false;
      }
      isDarkMode
        ? (themeLabel = "Toggle Light Mode")
        : (themeLabel = "Toggle Dark Mode");
    }
  }

  if (browser) {
    const root: HTMLElement = document.documentElement;
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      root.classList.add("dark");
      isDarkMode = true;
    } else {
      root.classList.remove("dark");
      isDarkMode = false;
    }
    isDarkMode
      ? (themeLabel = "Toggle Light Mode")
      : (themeLabel = "Toggle Dark Mode");
  }
</script>

<div class="flex justify-center items-center gap-2">
  <IconButton icon={SunIcon} {size} on:click={toggleLightTheme} />
  <IconButton icon={MoonIcon} {size} on:click={toggleDarkTheme} />
  <IconButton
    icon={ComputerDesktopIcon}
    {size}
    on:click={togglePreferredTheme}
  />
</div>
