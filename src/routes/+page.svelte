<script lang="ts">

import ResultPanel from "../lib/components/ResultPanel.svelte";
import ConventionsPicker from "$lib/components/ConventionsPicker.svelte";
</script>
<main class="bg-surface-900 text-secondary-500 min-h-screen h-full w-full text-tertiary-200">
    <h1 class="text-center pt-16 pb-5">Praxi Conventions</h1>
    <p class="text-center"> Developed by <a class="unstyled text-primary-400 underline" href="https://github.com/Zakrok09">ecstasy</a> - member of <a class="unstyled text-primary-400 underline" href="https://github.com/TeamPraxidike">Praxidike</a></p>
    <p class="text-center">Credit: <a class="unstyled text-primary-400 underline" href="https://github.com/paulmis">paulmis</a></p>
    <div class="flex flex-row gap-0 p-10">
        <div class="left w-6/12">
            <ResultPanel />
        </div>
        <div class="right w-6/12 flex flex-col items-center">
            <h3>Create your CONVENTIONS.md</h3>
            <div class="w-full flex justify-center">
                <ConventionsPicker/>
            </div>
        </div>
    </div>
</main>
