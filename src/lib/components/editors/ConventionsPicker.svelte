<script lang="ts">
    import {RadioGroup, RadioItem, SlideToggle, Step, Stepper} from '@skeletonlabs/skeleton';


    import {conventionsPayload} from "$lib/stores/store";
    import StepperConv from "../reusable/StepperConv.svelte";
    import StepperExample from "../reusable/StepperExample.svelte";
    import StepperBranchTable from "../reusable/StepperBranchTable.svelte";
    import {exBranches, exCommits, exIssues, exWorkflows} from "$lib/typescript/enums/enums";

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
                <SlideToggle name="slide" active="bg-primary-500" bind:checked={$conventionsPayload.includeLinkToCoC} size="sm">Code of Conduct</SlideToggle>
                <i class="text-surface-300">include a link to your Code of Conduct</i>
            </div>
            {#if $conventionsPayload.includeLinkToCoC}
                <input type="text" bind:value={$conventionsPayload.linkToCoC} id="first_name" class="bg-surface-900 border border-surface-700 text-gray-100 text-sm rounded-lg block w-full p-2.5" placeholder="CODE_OF_CONDUCT.md" required>
            {/if}
            <div class="flex flex-col sm:flex-row gap-3">
                <SlideToggle name="slide" active="bg-primary-500" bind:checked={$conventionsPayload.includeCredit} size="sm">Credit us</SlideToggle>
                <i class="text-surface-300">include credits to us on top of the document</i>
            </div>
        </Step>
        <Step>
            <svelte:fragment slot="header">Development rules</svelte:fragment>

            <span>Choose a code contribution workflow.</span> <br>
            {#if innerWidth < 640}
                <RadioGroup display="flex-col" active="variant-filled-primary" hover="hover:variant-glass-primary" background="bg-surface-700" border="none">
                    <RadioItem bind:group={$conventionsPayload.workflowsValue} name="justify" value={exWorkflows.CONV_WORKFLOW}>Conventional workflow</RadioItem>
                    <RadioItem bind:group={$conventionsPayload.workflowsValue} name="justify" value={exWorkflows.PRAX_WORKFLOW}>Praxidike Conventions</RadioItem>
                </RadioGroup>
            {:else}
                <RadioGroup active="variant-filled-primary" hover="hover:variant-glass-primary" background="bg-surface-700" border="none">
                    <RadioItem bind:group={$conventionsPayload.workflowsValue} name="justify" value={exWorkflows.CONV_WORKFLOW}>Conventional workflow</RadioItem>
                    <RadioItem bind:group={$conventionsPayload.workflowsValue} name="justify" value={exWorkflows.PRAX_WORKFLOW}>Praxidike Conventions</RadioItem>
                </RadioGroup>
            {/if}

            <div class="flex flex-col sm:flex-row gap-3">
                <SlideToggle name="slide" active="bg-primary-500" bind:checked={$conventionsPayload.includeGHProj} size="sm">GitHub Projects</SlideToggle>
                <i class="text-surface-300">include paragraph that mandates use of GitHub Projects.</i>
            </div>
        </Step>
        <Step>
            <svelte:fragment slot="header">Issues</svelte:fragment>
            <span>Choose a structure convention and rules for the issues.</span> <br>

            {#if innerWidth < 640}
                <RadioGroup display="flex-col" active="variant-filled-primary" hover="hover:variant-glass-primary" background="bg-surface-700" border="none">
                    <RadioItem bind:group={$conventionsPayload.issuesValue} name="justify" value={exIssues.CONV_STANDARD}>Common Issues Conventions</RadioItem>
                    <RadioItem bind:group={$conventionsPayload.issuesValue} name="justify" value={exIssues.PRAX_ISSUES}>Praxidike Conventions</RadioItem>
                </RadioGroup>
            {:else}
                <RadioGroup active="variant-filled-primary" hover="hover:variant-glass-primary" background="bg-surface-700" border="none">
                    <RadioItem bind:group={$conventionsPayload.issuesValue} name="justify" value={exIssues.CONV_STANDARD}>Common Issues Conventions</RadioItem>
                    <RadioItem bind:group={$conventionsPayload.issuesValue} name="justify" value={exIssues.PRAX_ISSUES}>Praxidike Conventions</RadioItem>
                </RadioGroup>
            {/if}
            <div class="py-4 px-2 gap-5 flex flex-col">
                <StepperConv example={$conventionsPayload.issuesValue} type="issues" />
                <StepperExample example={$conventionsPayload.issuesValue} type="issues" />
            </div>
            <div class="flex flex-col sm:flex-row gap-3">
                <SlideToggle name="slide" active="bg-primary-500" bind:checked={$conventionsPayload.includeAssignees} size="sm">Require Assignees</SlideToggle>
                <i class="text-surface-300">issues must be assigned to members upon creation</i>
            </div>
            <div class="flex flex-col sm:flex-row gap-3">
                <SlideToggle name="slide" active="bg-primary-500" bind:checked={$conventionsPayload.includeLabels} size="sm">Require Labels</SlideToggle>
                <i class="text-surface-300">issues must be labeled upon creation</i>
            </div>
            <div class="flex flex-col sm:flex-row gap-3">
                <SlideToggle name="slide" active="bg-primary-500" bind:checked={$conventionsPayload.includeSpamPrev} size="sm">Spam Prevention</SlideToggle>
                <i class="text-surface-300">spamming issues will result in a ban or other penalty</i>
            </div>
        </Step>
        <Step>
            <svelte:fragment slot="header">Branches</svelte:fragment>
            <span>Choose a naming convention and rules for the branches.</span> <br>


            {#if innerWidth < 640}
                <RadioGroup display="flex-col" active="variant-filled-primary" hover="hover:variant-glass-primary" background="bg-surface-700" border="none">
                    <RadioItem bind:group={$conventionsPayload.branchValue} name="justify" value={exBranches.CONV_BRANCHES}>Common Branch Conventions</RadioItem>
                    <RadioItem bind:group={$conventionsPayload.branchValue} name="justify" value={exBranches.GL}>GL</RadioItem>
                </RadioGroup>
                {:else}
                <RadioGroup active="variant-filled-primary" hover="hover:variant-glass-primary" background="bg-surface-700" border="none">
                    <RadioItem bind:group={$conventionsPayload.branchValue} name="justify" value={exBranches.CONV_BRANCHES}>Common Branch Conventions</RadioItem>
                    <RadioItem bind:group={$conventionsPayload.branchValue} name="justify" value={exBranches.GL}>GL</RadioItem>
                </RadioGroup>
            {/if}

            <div class="px-0 py-4 sm:px-2 w-full gap-5 flex flex-col">
                <StepperBranchTable />
                <StepperConv example={$conventionsPayload.branchValue} type="branch" />
                <StepperExample example={$conventionsPayload.branchValue} type="branch" />
            </div>
            <div class="flex flex-col sm:flex-row gap-3">
                <SlideToggle name="slide" active="bg-primary-500" bind:checked={$conventionsPayload.stableTagged} size="sm">Tagged stable</SlideToggle>
                <i class="text-surface-300">the stable branch should be tagged</i>
            </div>
        </Step>
        <Step>
            <svelte:fragment slot="header">Commits</svelte:fragment>
            <span>Choose a naming convention for the commits. Examples will be shown below:</span> <br>

            {#if innerWidth < 640}
                <RadioGroup display="flex-col" active="variant-filled-primary" hover="hover:variant-glass-primary" background="bg-surface-700" border="none">
                    <RadioItem bind:group={$conventionsPayload.commitValue} name="justify" value={exCommits.CONV_COMMITS}>Conventional Commits</RadioItem>
                    <RadioItem bind:group={$conventionsPayload.commitValue} name="justify" value={exCommits.PRAX_COMMITS}>Praxidike Commits</RadioItem>
                </RadioGroup>
            {:else}
                <RadioGroup active="variant-filled-primary" hover="hover:variant-glass-primary" background="bg-surface-700" border="none">
                    <RadioItem bind:group={$conventionsPayload.commitValue} name="justify" value={exCommits.CONV_COMMITS}>Conventional Commits</RadioItem>
                    <RadioItem bind:group={$conventionsPayload.commitValue} name="justify" value={exCommits.PRAX_COMMITS}>Praxidike Commits</RadioItem>
                </RadioGroup>
            {/if}

            <div class="py-4 px-2 gap-5 flex flex-col">
                <StepperConv example={$conventionsPayload.commitValue} type="commit" />
                <StepperExample example={$conventionsPayload.commitValue} type="commit" />
                <div class="flex flex-col sm:flex-row gap-3">
                    <SlideToggle name="slide" active="bg-primary-500" bind:checked={$conventionsPayload.strictCommits} size="sm">Strict Commit</SlideToggle>
                    <i class="text-surface-300">commits must be focused and isolated</i>
                </div>
            </div>
        </Step>
    </Stepper>
</div>
