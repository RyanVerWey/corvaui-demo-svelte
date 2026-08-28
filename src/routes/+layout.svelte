<script lang="ts">
  import { page } from "$app/stores";
  import { base } from "$app/paths";
  import { onMount } from "svelte";
  import "@corvaui/tokens/css";
  import "../styles.css";
  import { routes } from "$lib/content";

  let isDark = false;
  $: theme = isDark ? "amber-dark" : "amber-light";
  $: activePath = $page.route.id ?? "/";

  onMount(async () => {
    await import("$lib/corva");
    isDark = localStorage.getItem("common-ground-theme") === "amber-dark";
  });

  const setTheme = (event: CustomEvent<{ checked: boolean }>) => {
    isDark = event.detail.checked;
    localStorage.setItem("common-ground-theme", isDark ? "amber-dark" : "amber-light");
  };
</script>

<svelte:head>
  <meta name="description" content="Common Ground Energy, a community microgrid showcase built with SvelteKit and CorvaUI." />
</svelte:head>

<div class="site-shell" data-corva-theme={theme}>
  <a class="skip-link" href="#main-content">Skip to content</a>
  <corva-app-bar heading="Common Ground Energy">
    <nav class="primary-nav" slot="navigation" aria-label="Primary navigation">
      {#each routes as route}
        <a href={`${base}${route.href === "/" ? "/" : route.href}`} aria-current={activePath === route.href ? "page" : undefined}>{route.label}</a>
      {/each}
    </nav>
    <corva-switch slot="actions" label="Dark mode" checked={isDark} on:corvaChange={setTheme}></corva-switch>
  </corva-app-bar>
  <details class="mobile-menu">
    <summary>Menu</summary>
    <nav aria-label="Mobile navigation">
      {#each routes as route}
        <a href={`${base}${route.href === "/" ? "/" : route.href}`} aria-current={activePath === route.href ? "page" : undefined}>{route.label}</a>
      {/each}
    </nav>
  </details>

  <main id="main-content" tabindex="-1"><slot /></main>

  <footer>
    <span>Power shaped with neighbors.</span>
    <span>SvelteKit + CorvaUI</span>
    <a href="https://www.corvaui.com/">Design system documentation</a>
  </footer>
</div>
