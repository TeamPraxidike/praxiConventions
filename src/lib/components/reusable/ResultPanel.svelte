<script lang="ts">
    import {payload} from "../../../stores/store";
    import { CodeBlock } from "@skeletonlabs/skeleton";
</script>

<div class="w-full h-full lg:px-10">
    <div class="result py-10 lg:py-14 px-6 lg:px-12 rounded-xl hover flex flex-col items-center w-full">
        <h2 class="text-center mb-14">Result</h2>
        <div class="w-full">
            <p class="mb-2 italic">You can see your markdown result here:</p>
            <CodeBlock language="md" code={$payload.generate()} text="text-xs"></CodeBlock>
        </div>
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
  }
</style>