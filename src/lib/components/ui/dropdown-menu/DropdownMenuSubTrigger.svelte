<script lang="ts">
    import { DropdownMenu as DropdownMenuPrimitive } from "bits-ui";
    import ChevronRight from "@lucide/svelte/icons/chevron-right";
    import { cn } from "#lib/utils.js";

    let {
        ref = $bindable(null),
        class: className,
        inset,
        children,
        ...restProps
    }: DropdownMenuPrimitive.SubTriggerProps & {
        inset?: boolean;
    } = $props();
</script>

<DropdownMenuPrimitive.SubTrigger
    bind:ref
    data-slot="dropdown-menu-sub-trigger"
    data-inset={inset}
    class={cn(
        "flex min-h-7 cursor-default items-center gap-2 rounded-lg px-3 py-1.5 text-sm outline-hidden select-none focus:bg-popover-secondary focus:text-popover-secondary-foreground not-data-[variant=destructive]:focus:**:text-popover-secondary-foreground data-inset:pl-8 data-open:bg-popover-secondary data-open:text-popover-secondary-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className,
    )}
    {...restProps}
>
    {@render children?.()}
    <ChevronRight class="ml-auto" />
</DropdownMenuPrimitive.SubTrigger>
