<script>
import Charts from "./Charts.svelte";
    const charts = [];
    for (let i = 0; i < 1; i++) {
        charts.push({
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

<Charts {charts}></Charts>
