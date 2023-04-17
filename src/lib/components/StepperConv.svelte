<script lang="ts">
    import {exCommits} from "../../enums/enums";

    export let type:string;
    export let example:number;
</script>

<div>
    <p class="mb-2">Structure:</p>
    <div class="bg-surface-900 p-4">
        {#if type === "commit"}
            {#if example === exCommits.CONV_COMMITS}
                <p>type[optional scope]: description</p>
            {:else if example === exCommits.PRAX_COMMITS}
                <p>type(scope): description</p>
            {/if}
        {/if}
    </div>
</div>

<style lang="scss">

</style>