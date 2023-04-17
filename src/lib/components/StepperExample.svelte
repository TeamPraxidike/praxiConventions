<script lang="ts">
    import {exCommits, exBranches} from "../../enums/enums";
    import {CodeBlock} from "@skeletonlabs/skeleton";

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
        {/if}
    </div>
</div>



