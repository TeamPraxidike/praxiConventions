<script lang="ts">
    import {ResultPanel} from "$lib/components/reusable";
    import {ConventionsPicker} from "$lib/components/editors";
    import MetaHead from "$lib/components/MetaHead.svelte";


    import {generators} from "$lib/typescript/enums/enums";
    import {MetaSnippet} from "$lib/typescript/classes/MetaSnippet";

    let meta = new MetaSnippet("Conventions Generator", "Generate descriptive CONVENTIONS.md with ease, using the generator tool.", "webapp");
</script>

<MetaHead meta={meta} />

<h1 class="text-center pt-16 pb-5">CONVENTIONS.md Generator</h1>
<p class="text-center"> Developed by <a class="unstyled text-primary-400 underline" href="https://github.com/Zakrok09">ecstasy</a> - member of <a class="unstyled text-primary-400 underline" href="https://github.com/TeamPraxidike">Praxidike</a></p>
<p class="text-center">Credit: <a class="unstyled text-primary-400 underline" href="https://github.com/paulmis">paulmis</a></p>
<div class="flex flex-col-reverse pt-14 xl:flex-row gap-10 lg:gap-0 p-10">
    <div class="left w-full xl:w-6/12">
        <ResultPanel generator={generators.CONVENTION}/>
    </div>
    <div class="right w-full xl:w-6/12 flex flex-col items-center">
        <h3 class="mb-4">Create your CONVENTIONS.md</h3>
        <div class="w-full flex justify-center lg:px-10">
            <ConventionsPicker/>
        </div>
    </div>
</div>