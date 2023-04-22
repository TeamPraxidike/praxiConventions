
<script lang="ts">
    import {MetaSnippet} from "../../typescript/classes/MetaSnippet";
    export let meta:MetaSnippet = new MetaSnippet("praxiConventions", "Generate community health files with ease", "website");

    let title = meta.title === "" ? "praxiConventions" : meta.title + " | praxiConventions";
</script>

<svelte:head>
    <!--  Newer  -->
    <title>{title}</title>
    <meta name="description" content={ meta.metaDescription }>

    <!--  Open graph  -->
    <meta property="og:description"         content={ meta.metaDescription } >
    <meta property="og:title"               content={ meta.title + " | praxiConventions"} />
    <meta property="og:type"                content={ meta.type } />
</svelte:head>