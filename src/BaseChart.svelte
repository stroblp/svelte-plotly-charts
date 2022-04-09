<script>
    import { onMount } from "svelte";

    export let data = [];
    export let layout = {};
    export let config = {};
    export let plotID = "";

    onMount(() => {
        Plotly.newPlot(document.getElementById(plotID), data, layout, config);
    });
</script>


<div class="plot-div" id={plotID} />


