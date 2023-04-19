<script lang="ts">
    import {Stepper, Step, SlideToggle} from '@skeletonlabs/skeleton';
    import { RadioGroup, RadioItem } from '@skeletonlabs/skeleton';


    import {payload} from "../../../stores/store";
    import StepperConv from "../reusable/StepperConv.svelte";
    import StepperExample from "../reusable/StepperExample.svelte";
    import StepperBranchTable from "../reusable/StepperBranchTable.svelte";

    let innerWidth:number = 0
    let innerHeight:number = 0
</script>

<!--TODO Check if there is a better way to make the RadioGroups responsive-->
<svelte:window bind:innerWidth bind:innerHeight />

<div class="w-full bg-surface-800 p-8">
    <Stepper class="text-sm sm:text-base">
        <Step>
            <svelte:fragment slot="header">Commits</svelte:fragment>
            <span>Choose a naming convention for the commits. Examples will be shown below:</span> <br>

            {#if innerWidth < 640}
                <RadioGroup display="flex-col" active="variant-filled-primary" hover="hover:variant-glass-primary" background="bg-surface-700" border="none">
                    <RadioItem bind:group={$payload.commitValue} name="justify" value={0}>Conventional Commits</RadioItem>
                    <RadioItem bind:group={$payload.commitValue} name="justify" value={1}>Praxidike Commits</RadioItem>
                </RadioGroup>
                {:else}
                <RadioGroup active="variant-filled-primary" hover="hover:variant-glass-primary" background="bg-surface-700" border="none">
                    <RadioItem bind:group={$payload.commitValue} name="justify" value={0}>Conventional Commits</RadioItem>
                    <RadioItem bind:group={$payload.commitValue} name="justify" value={1}>Praxidike Commits</RadioItem>
                </RadioGroup>
            {/if}

            <div class="py-4 px-2 gap-5 flex flex-col">
                <StepperConv example={$payload.commitValue} type="commit" />
                <StepperExample example={$payload.commitValue} type="commit" />
                <div class="flex gap-3">
                    <SlideToggle name="slide" active="bg-primary-500" bind:checked={$payload.strictCommits} size="sm">Strict Commit</SlideToggle>
                    <i class="text-surface-300">commits must be focused and isolated</i>
                </div>
            </div>
        </Step>
        <Step>
            <svelte:fragment slot="header">Branches</svelte:fragment>
            <span>Choose a naming convention and rules for the branches.</span> <br>


            {#if innerWidth < 640}
                <RadioGroup display="flex-col" active="variant-filled-primary" hover="hover:variant-glass-primary" background="bg-surface-700" border="none">
                    <RadioItem bind:group={$payload.branchValue} name="justify" value={0}>Common Branch Conventions</RadioItem>
                    <RadioItem bind:group={$payload.branchValue} name="justify" value={1}>GL</RadioItem>
                </RadioGroup>
                {:else}
                <RadioGroup active="variant-filled-primary" hover="hover:variant-glass-primary" background="bg-surface-700" border="none">
                    <RadioItem bind:group={$payload.branchValue} name="justify" value={0}>Common Branch Conventions</RadioItem>
                    <RadioItem bind:group={$payload.branchValue} name="justify" value={1}>GL</RadioItem>
                </RadioGroup>
            {/if}

            <div class="py-4 px-2 gap-5 flex flex-col">
                <StepperBranchTable />
                <StepperConv example={$payload.branchValue} type="branch" />
                <StepperExample example={$payload.branchValue} type="branch" />
            </div>
        </Step>
        <Step>
            <svelte:fragment slot="header">Development rules</svelte:fragment>
            WIP
        </Step>
        <Step>
            <svelte:fragment slot="header">Issues</svelte:fragment>
            <span>Choose a structure convention and rules for the issues.</span>


            {#if innerWidth < 640}
                <RadioGroup display="flex-col" active="variant-filled-primary" hover="hover:variant-glass-primary" background="bg-surface-700" border="none">
                    <RadioItem bind:group={$payload.issuesValue} name="justify" value={0}>Common Issues Conventions</RadioItem>
                    <RadioItem bind:group={$payload.issuesValue} name="justify" value={1}>Praxidike Conventions</RadioItem>
                </RadioGroup>
                {:else}
                <RadioGroup active="variant-filled-primary" hover="hover:variant-glass-primary" background="bg-surface-700" border="none">
                    <RadioItem bind:group={$payload.issuesValue} name="justify" value={0}>Common Issues Conventions</RadioItem>
                    <RadioItem bind:group={$payload.issuesValue} name="justify" value={1}>Praxidike Conventions</RadioItem>
                </RadioGroup>
            {/if}

            <div class="py-4 px-2 gap-5 flex flex-col">
                <StepperConv example={$payload.issuesValue} type="issues" />
                <StepperExample example={$payload.issuesValue} type="issues" />
            </div>
        </Step>
    </Stepper>
</div>
