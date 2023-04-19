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
</script>


<Table regionBody="bg-surface-900"
       regionHeadCell="bg-surface-900"
       regionFootCell="bg-surface-900"
       source={tableSimple} />

