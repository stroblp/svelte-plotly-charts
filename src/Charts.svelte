<script>
    import Chart from "./Chart.svelte";
    import ModalChart from "./ModalChart.svelte";
    export let charts;
    export let card=true;
    export let footer =true;
    let chartInModal = undefined;
    let modalVisible = false;

    function openModal(e) {
        chartInModal = e.detail.chart;
        chartInModal.id = "modal-" + chartInModal.id;
    }
</script>

<div class="container-fluid gutter">
    <div class="row row-cols-1 row-cols-md-2 g-2">
        {#each charts as chart}
            <div class="col">
                <Chart on:modal={openModal} {chart} {card} {footer} />
            </div>
        {/each}
    </div>
</div>

{#if chartInModal}
    {#key chartInModal}
        <ModalChart chart={chartInModal} {card} />
    {/key}
{/if}
