<script lang="ts">
    import {Stepper, Step, SlideToggle} from '@skeletonlabs/skeleton';
    import { RadioGroup, RadioItem } from '@skeletonlabs/skeleton';
    import StepperExample from "./StepperExample.svelte";
    import StepperConv from "$lib/components/StepperConv.svelte";
    import StepperBranchTable from "$lib/components/StepperBranchTable.svelte";

    let commitValue: number = 0;
    let branchValue: number = 0;

    let strictCommits: boolean = false;
</script>

<div class="w-9/12 mt-10 bg-surface-800 p-8">
    <Stepper>
        <Step>
            <svelte:fragment slot="header">Commits</svelte:fragment>
            <span>Choose a naming convention for the commits. Examples will be shown below:</span>
            <RadioGroup active="variant-filled-primary" hover="hover:variant-glass-primary" background="bg-surface-700" border="none">
                <RadioItem bind:group={commitValue} name="justify" value={0}>Conventional Commits</RadioItem>
                <RadioItem bind:group={commitValue} name="justify" value={1}>Praxidike Commits</RadioItem>
            </RadioGroup>

            <div class="py-4 px-2 gap-5 flex flex-col">
                <StepperConv example={commitValue} type="commit" />
                <StepperExample example={commitValue} type="commit" />
                <div class="flex gap-3">
                    <SlideToggle name="slide" active="bg-primary-500" bind:checked={strictCommits} size="sm">Strict Commit</SlideToggle>
                    <i class="text-surface-300">commits must be focused and isolated</i>
                </div>
            </div>
        </Step>
        <Step>
            <svelte:fragment slot="header">Branches</svelte:fragment>
            <span>Choose a naming convention and rules for the branches.</span>
            <RadioGroup active="variant-filled-primary" hover="hover:variant-glass-primary" background="bg-surface-700" border="none">
                <RadioItem bind:group={branchValue} name="justify" value={0}>Common Branch Conventions</RadioItem>
                <RadioItem bind:group={branchValue} name="justify" value={1}>GL</RadioItem>
            </RadioGroup>

            <div class="py-4 px-2 gap-5 flex flex-col">
                <StepperBranchTable />
                <StepperConv example={branchValue} type="branch" />
                <StepperExample example={branchValue} type="branch" />
            </div>
        </Step>
        <Step>
            <svelte:fragment slot="header">Development rules</svelte:fragment>
        </Step>
        <Step>
            <svelte:fragment slot="header">Issues</svelte:fragment>
            (content)
        </Step>
    </Stepper>
</div>
