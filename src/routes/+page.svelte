<script lang="ts">
    import { Button } from "#lib/components/ui/button/index.ts";
    import Upload from "@lucide/svelte/icons/upload";
    import Plug from "@lucide/svelte/icons/plug";
</script>

<section class="content-width flex flex-col py-section-padding">
    <span class="display-text">Follow the music.</span>
    <span class="display-text text-muted-foreground">
        Find your Next Record.
    </span>
</section>

<section class="page-grid content-width py-section-padding">
    <div class="col-span-full">
        <h2
            class="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight"
        >
            Import Your Collection
        </h2>
    </div>
    <article
        class="col-span-full md:col-span-4 lg:col-span-6 bg-muted rounded-lg p-section-padding flex flex-col gap-[calc(var(--grid-gap)*2)]"
    >
        <div class="space-y-3 flex-1">
            <h3
                class="text-xl sm:text-2xl md:text-3xl font-medium tracking-tight"
            >
                Import from Discogs
            </h3>
            <p class="max-w-prose leading-snug text-muted-foreground">
                You can opt to import your collection from Discogs. The only
                data stored from your Discogs collection is the releases; no
                personal data relating to your account.
            </p>
        </div>

        <Button size="lg" class="rounded-full w-fit">
            <Plug />
            Import from Discogs
        </Button>
    </article>
    <article
        class="col-span-full md:col-span-4 md:col-start-5 lg:col-span-6 lg:col-start-7 bg-muted rounded-lg p-section-padding flex flex-col gap-[calc(var(--grid-gap)*2)]"
    >
        <div class="space-y-3 flex-1">
            <h3
                class="text-xl sm:text-2xl md:text-3xl font-medium tracking-tight"
            >
                Upload a file
            </h3>
            <p class="max-w-prose leading-snug text-muted-foreground">
                If you don't have a Discogs account, or don't want us to store
                your collection from there, you can choose to upload your
                collection via a CSV or JSON file. You will need to manage your
                collection directly in Next Record.
            </p>
        </div>

        <Button size="lg" class="rounded-full w-fit">
            <Upload />
            Import from Files
        </Button>
    </article>
</section>

<style>
    @reference "./layout.css";

    .display-text {
        @apply text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.03em];
    }
</style>
