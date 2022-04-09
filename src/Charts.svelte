<script>
    import Chart from "./Chart.svelte";
    const dataSet = [];
    for (let i = 0; i < 10; i++) {
        dataSet.push({
            id: "chart" + i,
            data: [
                {
                    name: "trace 0",
                    x: [0, 1, 2, 3, 4],
                    y: [1, 5, 3, 7, 5],
                    mode: "lines",
                    type: "scatter",
                },

                {
                    name: "trace B",
                    x: [1, 2, 3, 4, 5],
                    y: [4, 0, 4, 6, 8],
                    mode: "lines+markers",
                    type: "scatter",
                },
            ],
            layout: {
                margin: { t: 10 },
            },
            config: { responsive: true, displayModeBar: false },
        });
    }
</script>

<div class="container-fluid gutter">
    <div class="row row-cols-1 row-cols-md-2 g-2">
        {#each dataSet as chartData}
            <div class="col">
                <Chart
                    data={chartData.data}
                    layout={chartData.layout}
                    config={chartData.config}
                    plotID={chartData.id}
                    border
                />
            </div>
        {/each}
    </div>
</div>
