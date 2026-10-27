<script lang="ts">
    import "./layout.css";
    import favicon from "#lib/assets/favicon.svg";
    import type { LayoutProps } from "./$types";
    import Header from "#lib/components/header/Header.svelte";

    let { children }: LayoutProps = $props();
</script>

<svelte:head>
    <link rel="icon" href={favicon} />
    <title>Next Record • Find your next record</title>
</svelte:head>

<Header />
{@render children()}
