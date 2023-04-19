<script lang="ts">
    import Card from "$lib/components/reusable/Card.svelte";
    import { CardClass } from "../typescript/classes/CardClass"
    import IconifyIcon from '@iconify/svelte';

    let card1:CardClass = new CardClass("Inspiration", "The inspiration behind this project stems from observing the absence of established rules and conventions in repositories managed by newer developers.")
    let card2:CardClass = new CardClass("Why use?", "Standardizing issues, commits, branches, rules, and workflows through conventions can significantly enhance repositories by making work more efficient and enjoyable.")
    let card3:CardClass = new CardClass("How to", "You can use the available editors to edit and create describing files for workflow, rules and conventions in repositories.")

</script>

<div>
    <div class="mb-10 xl:mb-16">
        <h1 class="text-center pt-16 pb-5">Praxi Conventions</h1>
        <p class="text-center"> Developed by <a class="unstyled text-primary-400 underline" href="https://github.com/Zakrok09">ecstasy</a> - member of <a class="unstyled text-primary-400 underline" href="https://github.com/TeamPraxidike">Praxidike</a></p>
        <p class="text-center">Credit: <a class="unstyled text-primary-400 underline" href="https://github.com/paulmis">paulmis</a></p>
    </div>
    <article class="flex justify-center items-center flex-col">
        <h2>About this project</h2>
        <div class="flex flex-col flex-wrap justify-center md:flex-row py-10 xl:py-20 gap-4">
            <Card card={card1}>
                <IconifyIcon class="text-6xl text-primary-400" icon="clarity:lightbulb-solid" />
            </Card>
            <Card card={card2}>
                <IconifyIcon class="text-6xl text-primary-400" icon="clarity:analytics-solid" />
            </Card>
            <Card card={card3}>
                <IconifyIcon class="text-6xl text-primary-400" icon="clarity:analytics-solid" />
            </Card>
        </div>
    </article>
</div>
