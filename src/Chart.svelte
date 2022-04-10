<script>
    import {createEventDispatcher } from "svelte";
    import BaseChart from "./BaseChart.svelte";

    export let chart;
    export let card;
    export let footer;


    let dispatch = createEventDispatcher();
    function openModal() {
        dispatch("modal", {
            chart: chart,
        });
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
                    <button on:click={openModal}>
                        <div >
                            <i class="fas fa-expand-arrows-alt"></i>
                          </div>
                    </button>
                </div>
            {/if}
        </div>
    {:else}
        <BaseChart {chart} />
    {/if}
{/if}


