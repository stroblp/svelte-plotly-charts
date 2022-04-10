<script>
    import Charts from "./Charts.svelte";

    const charts = [];
    let dataReady = false;

    const structure = {
        date: "date",
        // areaName: "areaName",
        // areaCode: "areaCode",
        newCasesByPublishDate: "newCasesByPublishDate",
        cumCasesByPublishDate: "cumCasesByPublishDate",
        newDeaths28DaysByPublishDate: "newDeaths28DaysByPublishDate",
        cumDeaths28DaysByPublishDate: "cumDeaths28DaysByPublishDate",
    };

    const endpoint = `https://api.coronavirus.data.gov.uk/v1/data?filters=areaType=nation;areaName=england&structure=${JSON.stringify(
        structure
    )}`;
    console.log(endpoint);

    const getData = async (url) => {
        let resp = await fetch(url);
        let data = await resp.json();
        return data;
    }; // getData

    const main = async () => {
        const result = await getData(endpoint);
        console.log(result);

        const keys = Object.keys(result.data[0]);
        console.log(keys);
        let date = result.data.map((a) => a.date);
        console.log(date);
        keys.forEach((key) => {
            if (key !== "date") {
                charts.push({
                    id: key,
                    title: key,
                    data: [
                        {
                            name: key,
                            x: date,
                            y: result.data.map((a) => a[key]),
                            mode: "lines",
                            type: "scatter",
                        },

                        // {
                        //     name: "trace B",
                        //     x: [1, 2, 3, 4, 5],
                        //     y: [4, 0, 4, 6, 8],
                        //     mode: "lines+markers",
                        //     type: "scatter",
                        // },
                    ],
                    layout: {
                        autosize: true,
                        showlegend: true,
                        margin: {
                            l: 40,
                            r: 40,
                            b: 30,
                            t: 10,
                        },
                        legend: {
                            orientation: "h",
                            yanchor: "bottom",
                            y: 1.05,
                            xanchor: "right",
                            x: 1,
                        },
                    },
                    config: { responsive: true, displayModeBar: false },
                });
            }
        });
        dataReady = true;
    };

    main();
</script>

<h1>UK Covid Data</h1>
{#if dataReady}
    <Charts {charts} />
{/if}

<style>
    h1 {
        display: flex;
        justify-content: center;
    }
</style>
