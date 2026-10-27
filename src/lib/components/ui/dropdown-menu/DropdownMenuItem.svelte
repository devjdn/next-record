<script lang="ts">
    import { cn } from "#lib/utils.js";
    import { DropdownMenu as DropdownMenuPrimitive } from "bits-ui";

    let {
        ref = $bindable(null),
        class: className,
        inset,
        variant = "default",
        ...restProps
    }: DropdownMenuPrimitive.ItemProps & {
        inset?: boolean;
        variant?: "default" | "destructive";
    } = $props();
</script>

<DropdownMenuPrimitive.Item
    bind:ref
    data-slot="dropdown-menu-item"
    data-inset={inset}
    data-variant={variant}
    class={cn(
        "group/dropdown-menu-item relative flex min-h-8 cursor-pointer items-center gap-2 rounded-md px-3 py-1.5 text-sm outline-hidden select-none focus:bg-popover-secondary focus:text-popover-secondary-foreground not-data-[variant=destructive]:focus:**:text-popover-secondary-foreground data-inset:pl-8 data-[variant=destructive]:text-popover-destructive-foreground data-[variant=destructive]:focus:bg-popover-destructive data-[variant=destructive]:focus:text-destructive dark:data-[variant=destructive]:focus:bg-destructive/20 data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:stroke-popover-muted-foreground [&_svg:not([class*='size-'])]:size-4 data-[variant=destructive]:[&_svg]:stroke-popover-destructive-foreground data-[variant=destructive]:focus:[&_svg]:stroke-destructive",
        className,
    )}
    {...restProps}
/>
