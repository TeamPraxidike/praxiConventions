
<script lang="ts">
    export let metaDescription:string;
    export let title:string;
    export let type:string;
</script>

<svelte:head>
    <!--  Newer  -->
    <title>{title + " | praxiConventions"}</title>
    <meta charset="utf-8">
    <meta name="author" content="">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="lang" content="en">
    <link rel="canonical" href="https://conventions.praxidike.org/">
    <meta name="theme-color" content="#D1063C">

    <!--  Open graph  -->
    <meta property="og:url"                 content="https://conventions.praxidike.org/" />
    <meta property="og:title"               content="praxiConventions" />
    <meta property="og:description"         content={metaDescription} >
    <meta property="og:site_name"           content="praxiConventions" />
    <meta property="og:image"               content="https://conventions.praxidike.org/meta.png">
    <meta property="og:image:width"         content="1200">
    <meta property="og:image:height"        content="630">
    <meta property="og:image:alt" content="Logo of praxiConventions">
    <meta property="og:type"                content={type} />
    <meta property="og:locale"              content="en_US" />

    <!--  Twitter  -->
    <meta name="twitter:card" content="summary_large_image">

    <!--  Favicons  -->
    <link rel="icon" href="favicons/favicon-16.png" sizes="16x16" type="image/png">
    <link rel="icon" href="favicons/favicon-32.png" sizes="32x32" type="image/png">
    <link rel="icon" href="favicons/favicon-48.png" sizes="48x48" type="image/png">
    <link rel="icon" href="favicons/favicon-62.png" sizes="62x62" type="image/png">
</svelte:head>