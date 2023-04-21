<script lang="ts">
    import {SlideToggle, Step, Stepper} from '@skeletonlabs/skeleton';

    import {contributionsPayload} from "../../../stores/store";
    import {conWorkflows} from "../../../typescript/enums/enums";
    import {RadioGroup, RadioItem} from "@skeletonlabs/skeleton";

    let innerWidth:number = 0
    let innerHeight:number = 0
</script>

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
                <input type="text" bind:value={$contributionsPayload.linkToCoC} class="bg-surface-900 border border-surface-700 text-gray-100 text-sm rounded-lg block w-full p-2.5" placeholder="CODE_OF_CONDUCT.md" required>
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
        <Step>
            <svelte:fragment slot="header">Development rules</svelte:fragment>

            <span>Choose a code contribution workflow.</span> <br>
            {#if innerWidth < 640}
                <RadioGroup display="flex-col" active="variant-filled-primary" hover="hover:variant-glass-primary" background="bg-surface-700" border="none">
                    <RadioItem bind:group={$contributionsPayload.workflow} name="justify" value={conWorkflows.GITHUB_WORKFLOW}>Conventional workflow</RadioItem>
                    <RadioItem bind:group={$contributionsPayload.workflow} name="justify" value={conWorkflows.PRAX_WORKFLOW}>Praxidike workflow</RadioItem>
                </RadioGroup>
            {:else}
                <RadioGroup active="variant-filled-primary" hover="hover:variant-glass-primary" background="bg-surface-700" border="none">
                    <RadioItem bind:group={$contributionsPayload.workflow} name="justify" value={conWorkflows.GITHUB_WORKFLOW}>Conventional workflow</RadioItem>
                    <RadioItem bind:group={$contributionsPayload.workflow} name="justify" value={conWorkflows.PRAX_WORKFLOW}>Praxidike workflow</RadioItem>
                </RadioGroup>
            {/if}

            {#if $contributionsPayload.workflow === conWorkflows.GITHUB_WORKFLOW}
                <div class="flex flex-col sm:flex-row gap-3">
                    <SlideToggle name="slide" active="bg-primary-500" bind:checked={$contributionsPayload.includeCV} size="sm">CONVENTIONS.md</SlideToggle>
                    <i class="text-surface-300">Include link to conventions document.</i>
                </div>
                {#if $contributionsPayload.includeCV}
                    <input type="text" bind:value={$contributionsPayload.linkToCV} class="bg-surface-900 border border-surface-700 text-gray-100 text-sm rounded-lg block w-full p-2.5" placeholder="CONVENTIONS.md" required>
                {/if}
            {:else if $contributionsPayload.workflow === conWorkflows.PRAX_WORKFLOW}
                <div class="flex flex-col sm:flex-row gap-3">
                    <SlideToggle name="slide" active="bg-primary-500" bind:checked={$contributionsPayload.includeCV} size="sm">CONVENTIONS.md</SlideToggle>
                    <i class="text-surface-300">Include link to conventions document.</i>
                </div>
                {#if $contributionsPayload.includeCV}
                    <input type="text" bind:value={$contributionsPayload.linkToCV} class="bg-surface-900 border border-surface-700 text-gray-100 text-sm rounded-lg block w-full p-2.5" placeholder="CONVENTIONS.md" required>
                {/if}
                <div class="flex flex-col sm:flex-row gap-3">
                    <SlideToggle name="slide" active="bg-primary-500" bind:checked={$contributionsPayload.emojis} size="sm">Emojis</SlideToggle>
                    <i class="text-surface-300">sprinkle emojis across your CONTRIBUTING.md</i>
                </div>
            {/if}

            <div class="flex flex-col sm:flex-row gap-3">
                <SlideToggle name="slide" active="bg-primary-500" bind:checked={$contributionsPayload.ghProj} size="sm">GitHub Projects</SlideToggle>
                <i class="text-surface-300">include paragraph that mandates use of GitHub Projects.</i>
            </div>
        </Step>
    </Stepper>
</div>
