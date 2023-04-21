<script lang="ts">
    // TODO, Define proper types

    import {Table, tableMapperValues} from '@skeletonlabs/skeleton';
    import type { TableSource } from '@skeletonlabs/skeleton';

    const sourceData = [
        { position: 1, instance: 'Stable', branch: 'stable', branches: '-', accepts: "Working & Hotfixes"},
        { position: 2, instance: 'Working', branch: 'main', branches: '-', accepts: "Features/Issues & Hotfixes"},
        { position: 3, instance: 'Features/Issues', branch: 'topic-*', branches: 'main', accepts: "-"},
        { position: 4, instance: 'Hotfixes', branch: 'hotfix-*', branches: 'stable', accepts: "-"},
    ];

    const tableSimple: TableSource = {
        // A list of heading labels.
        head: ['Instance', 'Branch', 'Branch from', 'Accepts from'],
        // The data visibly shown in your table body UI.
        body: tableMapperValues(sourceData, ['instance', 'branch', 'branches', 'accepts']),
    };

    const sourceDataSmall = [
        { position: 1, branch: 'stable', branches: '-', accepts: "main $ hotfix"},
        { position: 2, branch: 'main', branches: '-', accepts: "topic-* & hotfix"},
        { position: 3, branch: 'topic-*', branches: 'main', accepts: "-"},
        { position: 4,  branch: 'hotfix-*', branches: 'stable', accepts: "-"},
    ];

    const tableSimpleSmall: TableSource = {
        // A list of heading labels.
        head: ['Branch', 'Branch from', 'Accepts from'],
        // The data visibly shown in your table body UI.
        body: tableMapperValues(sourceDataSmall, ['branch', 'branches', 'accepts']),
    };

    let innerWidth:number = 0
    let innerHeight:number = 0
</script>

<svelte:window bind:innerWidth bind:innerHeight />
{#if innerWidth > 720}
    <div class="w-full">
        <Table regionBody="bg-surface-900"
               regionHeadCell="bg-surface-900"
               regionFootCell="bg-surface-900"
               source={tableSimple} />
    </div>
{:else}
    <div class="w-full">
        <Table regionBody="bg-surface-900"
               regionHeadCell="bg-surface-900"
               regionFootCell="bg-surface-900"
               text="text-xs"
               source={tableSimpleSmall} />
    </div>
{/if}

<style lang="scss">

</style>