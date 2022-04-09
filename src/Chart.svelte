<script>
    import BaseChart from "./BaseChart.svelte";

    export let data = [];
    export let layout = {};
    export let config = {};
    export let plotID = "";
    export let border;
    console.log(border);
</script>

{#if border}
    <div class="card text-center  border-secondary">
        <div class="card-header">
            {plotID}
        </div>
        <div class="card-body">
            <BaseChart {data} {layout} {config} {plotID} />
        </div>
    </div>
{:else}
    <BaseChart {data} {layout} {config} {plotID} />
{/if}
