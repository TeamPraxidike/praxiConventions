
<script lang="ts">
    import {MetaSnippet} from "../../typescript/classes/MetaSnippet";
    export let meta:MetaSnippet = new MetaSnippet("praxiConventions", "Generate community health files with ease", "website");
</script>

<svelte:head>
    <!--  Newer  -->
    <title> {meta.title + " | praxiConventions"} </title>
    <meta name="description" content={ meta.metaDescription }>

    <!--  Open graph  -->
    <meta property="og:description"         content={ meta.metaDescription } >
    <meta property="og:title"               content={ meta.title + " | praxiConventions"} />
    <meta property="og:type"                content={ meta.type } />
</svelte:head>