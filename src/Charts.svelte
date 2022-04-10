<script>
    import Chart from "./Chart.svelte";
    export let charts;
    let chartInModal = undefined;
    let modalVisible = false;

    function openModal(e) {
        modalVisible = true;
        let modal = new bootstrap.Modal(
            document.getElementById("chart-modal"),
            {}
        );
        chartInModal = e.detail.chart;
        chartInModal.id="modal-plot"
        modal.show();
    }
</script>

<div class="container-fluid gutter">
    <div class="row row-cols-1 row-cols-md-2 g-2">
        {#each charts as chart}
            <div class="col">
                <Chart on:modal={openModal} {chart} card footer />
            </div>
        {/each}
    </div>
</div>

<div
    id="chart-modal"
    class="modal fade "
    class:show={modalVisible}
    tabindex="-1"
>
    <div class="modal-dialog modal-xl">
        <div class="modal-content">
            <div class="modal-body">
               <Chart  chart={chartInModal} card />
            </div>
        </div>
    </div>
</div>

<style>

    #chart-modal.show {
        display: block;
    }    
</style>
