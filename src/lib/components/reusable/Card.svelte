<script lang="ts">
    import {CardClass} from "../../../typescript/classes/CardClass";

    export let card:CardClass = new CardClass("Title", "Desc");
</script>

<div class="card bg-surface-700 w-80 text-center">
    <div class="flex justify-center w-full bg-surface-800 p-4 rounded-t-3xl">
        <slot></slot>
    </div>
    <div class="px-6 pt-2 pb-4">
        <h3 class="unstyled text-2xl lg:text-3xl card-header mb-5">{card.title}</h3>
        <span class="text-surface-200 text-sm md:text-base">{card.desc}</span>
    </div>
</div>