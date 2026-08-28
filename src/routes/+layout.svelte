<script lang="ts">
import { page } from "$app/stores";
import { base } from "$app/paths";
import { onMount } from "svelte";
import "@corvaui/tokens/css";
import "../styles.css";
import { corvaProps } from "$lib/corva";

let isDark = false;

const navItems = [
  { id: "home", label: "Home", href: `${base}/`, route: "/" },
  { id: "dashboard", label: "Metrics", href: `${base}/dashboard`, route: "/dashboard", badge: "Live" },
  { id: "work-orders", label: "Work orders", href: `${base}/work-orders`, route: "/work-orders" },
  { id: "customers", label: "Customers", href: `${base}/customers`, route: "/customers" },
  { id: "data-table", label: "Data table", href: `${base}/data-table`, route: "/data-table" },
  { id: "settings", label: "Settings", href: `${base}/settings`, route: "/settings" },
  { id: "about", label: "Package proof", href: `${base}/about`, route: "/about" }
];

const bottomNavItems = [
  { id: "home", label: "Home" },
  { id: "dashboard", label: "Metrics" },
  { id: "work-orders", label: "Orders" },
  { id: "customers", label: "Customers" },
  { id: "data-table", label: "Data" },
  { id: "settings", label: "Settings" }
];

$: theme = isDark ? "mint-dark" : "mint-light";
$: themeLabel = isDark ? "Mint dark" : "Mint light";
$: activeId = navItems.find((item) => item.route === $page.route.id)?.id ?? "home";
$: breadcrumbs = [
  { label: "CorvaUI", href: `${base}/` },
  { label: navItems.find((item) => item.id === activeId)?.label ?? "Home", current: true }
];

onMount(() => {
  isDark = localStorage.getItem("northstar-theme") === "mint-dark";
});

const setTheme = (event: CustomEvent<{ checked: boolean }>) => {
  isDark = event.detail.checked;
  localStorage.setItem("northstar-theme", isDark ? "mint-dark" : "mint-light");
};
</script>

<svelte:head>
  <meta
    name="description"
    content="CorvaUI Field Services demo built with SvelteKit routing and CorvaUI web components."
  />
</svelte:head>

<main class="site-shell" data-corva-theme={theme}>
  <corva-app-bar heading="CorvaUI Field Services">
    <nav class="top-nav" aria-label="Primary">
      {#each navItems as item}
        <corva-link href={item.href} variant="standalone">{item.label}</corva-link>
      {/each}
    </nav>
    <corva-tooltip label={themeLabel}>
      <corva-switch
        label="Dark"
        description="Toggle token theme"
        checked={isDark}
        on:corvaChange={setTheme}
      ></corva-switch>
    </corva-tooltip>
  </corva-app-bar>

  <div class="site-layout">
    <aside class="site-sidebar">
      <corva-sidebar
        heading="Workspace"
        label="CorvaUI navigation"
        active-id={activeId}
        use:corvaProps={{ items: navItems }}
      ></corva-sidebar>
      <corva-alert tone="info" heading="Mint theme">
        Demo defaults to mint-light and keeps CorvaUI tokens as visual source of truth.
      </corva-alert>
    </aside>

    <section class="site-main" aria-label="CorvaUI page content">
      <corva-breadcrumbs label="Page trail" use:corvaProps={{ items: breadcrumbs }}></corva-breadcrumbs>
      <slot />
    </section>
  </div>

  <div class="mobile-nav">
    <corva-bottom-navigation
      label="Mobile navigation"
      active-id={activeId}
      use:corvaProps={{ items: bottomNavItems }}
    ></corva-bottom-navigation>
  </div>
</main>
