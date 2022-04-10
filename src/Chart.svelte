<script>
    import {createEventDispatcher } from "svelte";
    import BaseChart from "./BaseChart.svelte";

    export let chart;
    export let card;
    export let footer;
    console.log(chart);


    let dispatch = createEventDispatcher();
    function openModal() {
        dispatch("modal", {
            chart: chart,
        });
    }
    function settings(e){
        let template =Plotly.makeTemaplate
        console.log(chart);
    }
</script>

{#if chart}
    {#if card}
        <div class="card text-center  border-secondary">
            <div class="card-header">
                {chart.title}
            </div>
            <div class="card-body">
                <BaseChart {chart} />
            </div>
            {#if footer}
                <div class="card-footer">
                    <div class="footer">
                        <button on:click={openModal}>
                            <div >
                                <i class="fas fa-expand-arrows-alt"></i>
                              </div>
                        </button>
                        <!-- <button on:click={settings}>
                            <div >
                                <i class="fas fa-cog"></i>
                              </div>
                        </button> -->
                    </div>

                </div>
            {/if}
        </div>
    {:else}
        <BaseChart {chart} />
    {/if}
{/if}

<style>
    .footer{
        display: flex;
        justify-content: flex-end;
    }
</style>


