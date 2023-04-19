<script lang="ts">
    import ResultPanel from "../lib/components/reusable/ResultPanel.svelte";
    import ConventionsPicker from "../lib/components/page-specific/ConventionsPicker.svelte";
</script>
<main class="bg-surface-900 text-secondary-500 min-h-screen h-full w-full text-tertiary-200">
    <h1 class="text-center pt-16 pb-5">Praxi Conventions</h1>
    <p class="text-center"> Developed by <a class="unstyled text-primary-400 underline" href="https://github.com/Zakrok09">ecstasy</a> - member of <a class="unstyled text-primary-400 underline" href="https://github.com/TeamPraxidike">Praxidike</a></p>
    <p class="text-center">Credit: <a class="unstyled text-primary-400 underline" href="https://github.com/paulmis">paulmis</a></p>
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
</main>