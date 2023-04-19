<script>
    import '@skeletonlabs/skeleton/themes/theme-crimson.css';
    import '@skeletonlabs/skeleton/styles/all.css';
    import '../app.css';


    import hljs from 'highlight.js';
    import 'highlight.js/styles/github-dark.css';
    import { storeHighlightJs } from '@skeletonlabs/skeleton';
    storeHighlightJs.set(hljs);

    import Header from "$lib/components/page/Header.svelte";
</script>

<Header />

<main class="bg-surface-900 min-h-screen h-full w-full text-tertiary-200">
    <slot />
</main>
