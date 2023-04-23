<script lang="ts">
    import {generators} from "$lib/typescript/enums/enums";

    export let generator:generators;


</script>

<div class="card pb-10 bt-primary-500 bg-gradient-to-b from-surface-700 to-surface-900 w-9/12 lg:w-auto max-w-lg text-center">
    <!--  TODO Restructure this  -->
    {#if generator === generators.CONVENTION}
        <div class="bg-surface-800 pb-4 rounded-t-2xl">
            <h3 class="card-header">Conventions generator</h3>
        </div>
        <div class="p-8 gap-4 flex flex-col items-center gap-7">
            <img src="/images/generator-1.png" class="w-10/12" alt="Image depicting how a conventions generator looks">
            <a href="/generator/conventions" class="btn variant-filled-primary text-md">Use Generator</a>
        </div>
    {:else if generator === generators.CONTRIBUTION}
        <div class="bg-surface-800 pb-4 rounded-t-2xl">
            <h3 class="card-header">Contributions generator</h3>
        </div>
        <div class="p-8 gap-4 flex flex-col items-center gap-7">
            <img src="/images/generator-1.png" class="w-10/12" alt="Image depicting how a contributions generator looks">
            <a href="/generator/contributions" class="btn variant-filled-primary text-md">Use Generator</a>
        </div>
    {:else if generator === generators.ISSUE}
        <div class="bg-surface-800 pb-4 rounded-t-2xl">
            <h3 class="card-header">Issue Template generator</h3>
        </div>
        <div class="p-8 gap-4 flex flex-col items-center gap-7">
            <img src="/images/generator-3.png" class="w-10/12" alt="Image depicting how a pull-requests-template generator looks">
            <a href="/generator/pull-requests" class="btn variant-filled-primary text-md">Use Generator</a>
        </div>
    {/if}
</div>