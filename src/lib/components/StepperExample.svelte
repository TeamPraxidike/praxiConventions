<script lang="ts">
    import {exCommits, exBranches} from "../../enums/enums";

    export let type:string;
    export let example = 0;
</script>

<div>
    <p class="mb-2">Examples:</p>
    <div class="bg-surface-900 p-4">
        {#if type === "commit"}
            {#if example === exCommits.CONV_COMMITS}
                <p>
                    feat: reactive background colours <br>
                    fix: bug with screen resizing <br>
                    perf(client): optimize load time
                </p>
            {:else if example === exCommits.PRAX_COMMITS}
                <p>
                    feat(client): change background <br>
                    fix(server): fix updating issues on websockets <br>
                    refactor(header): make updates use foreach instead of for loop
                </p>
            {/if}
        {:else if type === "branch"}
            {#if example === exBranches.CONV_BRANCHES}
                <p>
                    69-feature-about-us-page <br>
                    420-fix-visual-glitch-in-header
                </p>
            {:else if example === exBranches.GL}
                <p>
                    69-about-us-page <br>
                    420-visual-glitch-in-header
                </p>
            {/if}
        {/if}
    </div>
</div>



