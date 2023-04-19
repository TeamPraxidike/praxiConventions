<script lang="ts">
    import {Stepper, Step, SlideToggle} from '@skeletonlabs/skeleton';
    import { RadioGroup, RadioItem } from '@skeletonlabs/skeleton';
    import StepperExample from "./StepperExample.svelte";
    import StepperConv from "$lib/components/StepperConv.svelte";
    import StepperBranchTable from "$lib/components/StepperBranchTable.svelte";

    import {payload} from "../../stores/store";
</script>

<div class="w-9/12 mt-10 bg-surface-800 p-8">
    <Stepper>
        <Step>
            <svelte:fragment slot="header">Commits</svelte:fragment>
            <span>Choose a naming convention for the commits. Examples will be shown below:</span>
            <RadioGroup active="variant-filled-primary" hover="hover:variant-glass-primary" background="bg-surface-700" border="none">
                <RadioItem bind:group={$payload.commitValue} name="justify" value={0}>Conventional Commits</RadioItem>
                <RadioItem bind:group={$payload.commitValue} name="justify" value={1}>Praxidike Commits</RadioItem>
            </RadioGroup>

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
            <span>Choose a naming convention and rules for the branches.</span>
            <RadioGroup active="variant-filled-primary" hover="hover:variant-glass-primary" background="bg-surface-700" border="none">
                <RadioItem bind:group={$payload.branchValue} name="justify" value={0}>Common Branch Conventions</RadioItem>
                <RadioItem bind:group={$payload.branchValue} name="justify" value={1}>GL</RadioItem>
            </RadioGroup>

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
            <RadioGroup active="variant-filled-primary" hover="hover:variant-glass-primary" background="bg-surface-700" border="none">
                <RadioItem bind:group={$payload.issuesValue} name="justify" value={0}>Common Issues Conventions</RadioItem>
                <RadioItem bind:group={$payload.issuesValue} name="justify" value={1}>Praxidike Conventions</RadioItem>
            </RadioGroup>

            <div class="py-4 px-2 gap-5 flex flex-col">
                <StepperConv example={$payload.issuesValue} type="issues" />
                <StepperExample example={$payload.issuesValue} type="issues" />
            </div>
        </Step>
    </Stepper>
</div>
