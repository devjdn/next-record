<script lang="ts">
    import { navLinks } from "#lib/constants.ts";
    import * as DropdownMenu from "../ui/dropdown-menu/index";
    import * as Avatar from "../ui/avatar/index";
    import Cog from "@lucide/svelte/icons/cog";
    import LogOut from "@lucide/svelte/icons/log-out";
    import UserRound from "@lucide/svelte/icons/user-round";
    import Unplug from "@lucide/svelte/icons/unplug";
</script>

<header class="content-width page-grid h-16 items-center">
    <a href="/" aria-label="Go to home" class="size-8">
        <svg
            width="32"
            height="32"
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M196 0C198.209 0 200 1.79086 200 4V20C155.817 20 120 55.8173 120 100C120 143.837 154.294 179.446 198 180H200V196C200 198.209 198.209 200 196 200H4C1.79086 200 0 198.209 0 196V4C0 1.79086 1.79086 0 4 0H196Z"
                fill="currentColor"
            />
            <path
                d="M200 133.684L199.131 133.673C180.929 133.212 166.315 118.313 166.315 99.9999C166.315 81.3966 181.397 66.3153 200 66.3153V133.684Z"
                fill="currentColor"
            />
        </svg>
    </a>
    <nav class="hidden md:flex gap-grid-gap col-start-2 col-span-4">
        {#each navLinks as link, i (i)}
            <a
                href={link.href}
                aria-label="Go to {link.name}"
                class="inline-block text-trim text-sm text-muted-foreground hover:text-foreground duration-200 transition-colors w-fit"
            >
                {link.name}
            </a>
        {/each}
    </nav>

    <DropdownMenu.Root>
        <DropdownMenu.Trigger
            class="-col-start-2 justify-self-end cursor-pointer"
        >
            {#snippet child({ props })}
                <Avatar.Root {...props}>
                    <!-- <Avatar.Image></Avatar.Image> -->
                    <Avatar.Fallback>JP</Avatar.Fallback>
                </Avatar.Root>
            {/snippet}
        </DropdownMenu.Trigger>

        <DropdownMenu.Content side="bottom" align="end" sideOffset={12}>
            <DropdownMenu.Group>
                <DropdownMenu.GroupHeading>
                    My Account
                </DropdownMenu.GroupHeading>
                <DropdownMenu.Separator />
                <DropdownMenu.Item>
                    <UserRound />
                    Profile
                </DropdownMenu.Item>
                <DropdownMenu.Item>
                    <Unplug />
                    Disconnect Discogs
                </DropdownMenu.Item>
                <DropdownMenu.Item>
                    <Cog />
                    Settings
                </DropdownMenu.Item>
                <DropdownMenu.Separator />
                <DropdownMenu.Item variant="destructive">
                    <LogOut />
                    Sign out
                </DropdownMenu.Item>
            </DropdownMenu.Group>
        </DropdownMenu.Content>
    </DropdownMenu.Root>
</header>
