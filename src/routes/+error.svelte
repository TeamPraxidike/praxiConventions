<script lang="ts">
    import { page } from '$app/stores';
</script>

<div class="w-full h-screen flex flex-col justify-center items-center">
    <h1><span class="text-primary-400">{$page.status}</span>: {$page.error.message}</h1>
    <p>Something totalle went wrong.</p>
</div>

<style lang="scss">

</style>
