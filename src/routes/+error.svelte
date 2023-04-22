<script lang="ts">
    import { page } from '$app/stores';
    import {MetaSnippet} from "../typescript/classes/MetaSnippet";
    import MetaHead from "$lib/components/MetaHead.svelte";


    let meta = new MetaSnippet("", `An error occurred! ${$page.status}. Return back to the home page.`, "website");
</script>

<MetaHead meta={meta} />

<div class="w-full h-screen flex flex-col justify-center items-center">
    <h1><span class="text-primary-400">{$page.status}</span>: {$page.error.message}</h1>
    <p>Something totalle went wrong.</p>
</div>

<style lang="scss">

</style>
