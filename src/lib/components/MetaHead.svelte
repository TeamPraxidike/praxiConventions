
<script lang="ts">
    export let metaDescription:string;
    export let title:string;
    export let type:string;
</script>

<svelte:head>
    <!--  Newer  -->
    <title>{title + " | praxiConventions"}</title>

    <!--  Open graph  -->
    <meta property="og:description"         content={metaDescription} >
    <meta property="og:title"               content={title + " | praxiConventions"} />
    <meta property="og:type"                content={type} />
</svelte:head>