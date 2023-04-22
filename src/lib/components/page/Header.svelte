<script lang="ts">

import {AppBar} from "@skeletonlabs/skeleton";
import IconifyIcon from "@iconify/svelte";
</script>

<header class="bg-surface-900 text-tertiary-200">
    <AppBar background="bg-surface-900" gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
        <svelte:fragment slot="lead"><a aria-label="GitHub account" href="https://github.com/TeamPraxidike" target="_blank"><IconifyIcon icon="fa6-brands:github" style="font-size: 1.5rem" /></a></svelte:fragment>
        <a href="/" class="pointer">Praxi Conventions</a>
    </AppBar>
</header>
