<script>
    import Chart from "./Chart.svelte";
    import ModalChart from "./ModalChart.svelte";
    export let charts;
    export let containerClass = "container-fluid gutter";
    export let rowClass = "row row-cols-1 row-cols-md-2 g-2";
    export let card = true;
    export let footer = true;
    let chartInModal = undefined;

    function openModal(e) {
        chartInModal = e.detail.chart;
        chartInModal.id = "modal-" + chartInModal.id;
    }
    console.log(charts);
</script>

<div class={containerClass}>
    <div class={rowClass}>
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
