<script>
    import { onMount } from "svelte";

    export let chart;

    onMount(() => {
        Plotly.newPlot(
            document.getElementById(chart.id),
            chart.data,
            chart.layout,
            chart.config
        );
    });
</script>

<div id={chart.id} />
