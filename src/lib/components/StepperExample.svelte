<script lang="ts">
    import {exCommits, exBranches, exIssues} from "../../enums/enums";

    export let type:string;
    export let example = 0;
</script>

<div class="text-sm sm:text-base">
    <span class="mb-2">Examples:</span>
    <div class="bg-surface-900 p-4">
        {#if type === "commit"}
            {#if example === exCommits.CONV_COMMITS}
                <span>
                    feat: reactive background colours <br>
                    fix: bug with screen resizing <br>
                    perf(client): optimize load time
                </span>
            {:else if example === exCommits.PRAX_COMMITS}
                <span>
                    feat(client): change background <br>
                    fix(server): fix updating issues on websockets <br>
                    refactor(header): make updates use foreach instead of for loop
                </span>
            {/if}
        {:else if type === "branch"}
            {#if example === exBranches.CONV_BRANCHES}
                <span>
                    69-feature-about-us-page <br>
                    420-fix-visual-glitch-in-header
                </span>
            {:else if example === exBranches.GL}
                <span>
                    69-about-us-page <br>
                    420-visual-glitch-in-header
                </span>
            {/if}
        {:else if type === "issues"}
            {#if example === exIssues.CONV_STANDARD}
                <span>
                    FEAT: Alert modal in header <br>
                    FIX: Poor responsiveness
                </span>
            {:else if example === exIssues.PRAX_ISSUES}
                <span>
                    [FEATURE] Alert modal in header <br>
                    [FIX] Poor responsiveness
                </span>
            {/if}
        {/if}
    </div>
</div>



