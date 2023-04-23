<script>
    import '@skeletonlabs/skeleton/themes/theme-crimson.css';
    import '@skeletonlabs/skeleton/styles/all.css';
    import '../app.css';


    import {Header, Footer} from "$lib/components/page";

    import hljs from 'highlight.js';
    import 'highlight.js/styles/github-dark.css';
    import { storeHighlightJs } from '@skeletonlabs/skeleton';

    storeHighlightJs.set(hljs);
</script>

<svelte:head>
    <meta charset="utf-8">
    <meta name="author" content="Praxidike">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="lang" content="en">
    <link rel="canonical" href="https://conventions.praxidike.org/">
    <meta name="theme-color" content="#D1063C">

    <!--  Open Graph  -->
    <meta property="og:url"                 content="https://conventions.praxidike.org/">
    <meta property="og:site_name"           content="praxiConventions">
    <meta property="og:image"               content="https://conventions.praxidike.org/ogmeta.png">
    <meta property="og:image:alt"           content="Open Graph meta image of praxiConventions">
    <meta property="og:image:width"         content="1200">
    <meta property="og:image:height"        content="630">
    <meta property="og:locale"              content="en_US">

    <!--  Twitter  -->
    <meta name="twitter:card" content="summary_large_image">

    <!--  Favicons  -->
    <link rel="icon" href="favicons/favicon-128.png" sizes="128x128" type="image/png">
    <link rel="icon" href="favicons/favicon-64.png" sizes="64x64" type="image/png">
    <link rel="icon" href="favicons/favicon-48.png" sizes="48x48" type="image/png">
    <link rel="icon" href="favicons/favicon-32.png" sizes="32x32" type="image/png">
    <link rel="icon" href="favicons/favicon-16.png" sizes="16x16" type="image/png">
</svelte:head>

<Header />

<main class="bg-gradient-to-b from-surface-800 to-surface-900 min-h-screen h-full w-full text-tertiary-200">
    <slot />
</main>

<Footer />
