<script lang="ts">
    import {payload} from "../../stores/store";

    export let markdown:string;

    import { clipboard } from '@skeletonlabs/skeleton';
    export let exampleData:string = '';

</script>

<div class="w-full h-full px-10">
    <div class="result py-14 px-12 rounded-xl hover flex flex-col items-center w-full">
        <h2 class="text-center mb-14">Result</h2>
        <div class="w-full">
            <p class="mb-2 italic">You can see your markdown result here:</p>
            <div class="bg-surface-800 p-16 rounded-md w-full">
                <p bind:this={markdown}>{$payload.commitValue}</p>
            </div>
        </div>
        <button class="btn variant-filled-primary mt-4" use:clipboard={exampleData}>Copy</button>
    </div>
</div>

<style lang="scss">
    .result {
      box-shadow: hsl(0, 10%, 6%) -10px 19px 20px;
      border-bottom: black 1px solid;
      border-left: black 1px solid;
      border-right: #1c1c1c 1px solid;
      border-top: #1c1c1c 1px solid;
      border-radius: 16px;
      backdrop-filter: blur(11.2px);
      -webkit-backdrop-filter: blur(11.2px);
      transform: rotateY(9deg) rotateX(3deg);
    }

    .hover {
        animation: hover 6s ease-in-out infinite;
    }

    @keyframes hover {
      0% {
        transform: translatey(0px);
      }
      50% {
        transform: translatey(10px);
      }
      100% {
        transform: translatey(0px);
      }
    }
</style>