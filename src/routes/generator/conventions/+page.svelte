<script lang="ts">
    import ResultPanel from "$lib/components/reusable/ResultPanel.svelte";
    import ConventionsPicker from "$lib/components/editors/ConventionsPicker.svelte";
</script>

<div class="flex flex-col-reverse xl:flex-row gap-10 lg:gap-0 p-10">
    <div class="left w-full xl:w-6/12">
        <ResultPanel />
    </div>
    <div class="right w-full xl:w-6/12 flex flex-col items-center">
        <h3 class="mb-4">Create your CONVENTIONS.md</h3>
        <div class="w-full flex justify-center lg:px-10">
            <ConventionsPicker/>
        </div>
    </div>
</div>