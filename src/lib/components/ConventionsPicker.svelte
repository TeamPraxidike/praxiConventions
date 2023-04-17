<script lang="ts">
    import { Stepper, Step } from '@skeletonlabs/skeleton';
    import { RadioGroup, RadioItem } from '@skeletonlabs/skeleton';
    import StepperExample from "./StepperExample.svelte";

    import {exCommits} from "../../enums/enums";
    import StepperConv from "$lib/components/StepperConv.svelte";
    let commitValue: number = 0;
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
            </div>
        </Step>
        <Step>
            <svelte:fragment slot="header">Branches</svelte:fragment>
            (content)
        </Step>
        <Step>
            <svelte:fragment slot="header">Development rules</svelte:fragment>
            (content)
        </Step>
        <Step>
            <svelte:fragment slot="header">Issues</svelte:fragment>
            (content)
        </Step>
    </Stepper>
</div>
