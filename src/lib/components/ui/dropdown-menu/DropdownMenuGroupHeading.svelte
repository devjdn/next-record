<script lang="ts">
    import { DropdownMenu as DropdownMenuPrimitive } from "bits-ui";
    import { cn } from "#lib/utils.js";
    // import type { ComponentProps } from "svelte";

    let {
        ref = $bindable(null),
        class: className,
        ...restProps
    }: DropdownMenuPrimitive.GroupHeadingProps = $props();
</script>

<DropdownMenuPrimitive.GroupHeading
    bind:ref
    data-slot="dropdown-menu-group-heading"
    class={cn("px-3 py-1.5 text-sm font-medium tracking-tight", className)}
    {...restProps}
/>
