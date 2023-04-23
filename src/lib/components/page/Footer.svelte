<script lang="ts">

import IconifyIcon from "@iconify/svelte";
</script>

<footer class="flex flex-col justify-center items-center p-12 text-surface-100 gap-6">
    <div class="flex flex-row gap-6 flex-wrap">
        <p>Written in: </p>
        <div class="flex gap-4">
            <IconifyIcon style="font-size: 2em" icon="logos:svelte-icon" />
            <IconifyIcon style="font-size: 2em" icon="logos:tailwindcss-icon" />
            <IconifyIcon style="font-size: 2em" icon="logos:typescript-icon" />
            <IconifyIcon style="font-size: 2em" icon="logos:vitejs" />
            <IconifyIcon style="font-size: 2em" icon="logos:sass" />
        </div>
    </div>
    <p>Made By Praxidike. This project is open-source. You can see the source code <a class="unstyled underline text-primary-400" href="https://github.com/TeamPraxidike/praxiConventions">here</a></p>
</footer>

<style lang="scss">
    footer {
      background-color: hsl(228, 18%, 8%);
    }
</style>