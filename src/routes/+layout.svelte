<script>
    import '@skeletonlabs/skeleton/themes/theme-crimson.css';
    import '@skeletonlabs/skeleton/styles/all.css';
    import '../app.css';


    import hljs from 'highlight.js';
    import 'highlight.js/styles/github-dark.css';
    import { storeHighlightJs } from '@skeletonlabs/skeleton';
    storeHighlightJs.set(hljs);
</script>
<slot />