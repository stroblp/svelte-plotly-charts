<script>
import { onMount } from "svelte";

    import Chart from "./Chart.svelte";
    export let chart;
    export let card;

    onMount(()=>{
        let modal = new bootstrap.Modal(
            document.getElementById("chart-modal"),
            {}
        );
        modal.show();
    })


</script>


<div
    id="chart-modal"
    class="modal fade "
    class:show={true}
    tabindex="-1"
>
    <div class="modal-dialog modal-xl">
        <div class="modal-content">
            <div class="modal-body">
                    <Chart chart={chart} {card} />
            </div>
        </div>
    </div>
</div>

<style>
    #chart-modal
    {
        display: none;
    }    
    #chart-modal.show {
        display: block;
    }
</style>