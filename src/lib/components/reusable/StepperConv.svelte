<script lang="ts">
    import {exBranches, exCommits, exIssues} from "$lib/typescript/enums/enums";

    export let type:string;
    export let example:number;
</script>

<div class="text-sm sm:text-base">
    <span class="mb-2">Structure:</span>
    <div class="bg-surface-900 p-4">
        {#if type === "commit"}
            {#if example === exCommits.CONV_COMMITS}
                <span>type[optional scope]: description</span>
            {:else if example === exCommits.PRAX_COMMITS}
                <span>type(scope): description</span>
            {/if}
        {:else if type === "branch"}
            {#if example === exBranches.CONV_BRANCHES}
                <span>
                    [issue number]-feature-[name] <br>
                    [issue number]-fix-[name]
                </span>
            {:else if example === exBranches.GL}
                <span>
                    [issue number]-[name] <br>
                    [issue number]-[name]
                </span>
            {/if}
        {:else if type === "issues"}
            {#if example === exIssues.CONV_STANDARD}
                <span>
                    &lt;TYPE&gt;: &lt;Title&gt;
                </span>
            {:else if example === exIssues.PRAX_ISSUES}
                <span>
                    [&lt;TYPE&gt;] &lt;Title&gt;
                </span>
            {/if}
        {/if}
    </div>
</div>

<style lang="scss">

</style>