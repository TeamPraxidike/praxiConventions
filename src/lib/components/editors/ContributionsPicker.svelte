<script lang="ts">
    import {SlideToggle, Step, Stepper} from '@skeletonlabs/skeleton';


    import {contributionsPayload} from "../../../stores/store";

    let innerWidth:number = 0
    let innerHeight:number = 0
</script>

<!--TODO Check if there is a better way to make the RadioGroups responsive-->
<svelte:window bind:innerWidth bind:innerHeight />

<div class="w-full w-full bg-surface-800 p-8">
    <Stepper class="text-sm  w-full sm:text-base">
        <Step>
            <svelte:fragment slot="header">General options</svelte:fragment>
            <div class="flex flex-col sm:flex-row gap-3">
                <SlideToggle name="slide" active="bg-primary-500" bind:checked={$contributionsPayload.includeCoC} size="sm">Code of Conduct</SlideToggle>
                <i class="text-surface-300">include a link to your Code of Conduct</i>
            </div>
            {#if $contributionsPayload.includeCoC}
                <input type="text" bind:value={$contributionsPayload.linkToCoC} id="first_name" class="bg-surface-900 border border-surface-700 text-gray-100 text-sm rounded-lg block w-full p-2.5" placeholder="CODE_OF_CONDUCT.md" required>
            {/if}
            <div class="flex flex-col sm:flex-row gap-3">
                <SlideToggle name="slide" active="bg-primary-500" bind:checked={$contributionsPayload.includeCredit} size="sm">Credit us</SlideToggle>
                <i class="text-surface-300">include credits to us on top of the document</i>
            </div>
            <div class="flex flex-col sm:flex-row gap-3">
                <SlideToggle name="slide" active="bg-primary-500" bind:checked={$contributionsPayload.includeNC} size="sm">Guide for newcomers</SlideToggle>
                <i class="text-surface-300">include guides for newer contributors</i>
            </div>
        </Step>
    </Stepper>
</div>
