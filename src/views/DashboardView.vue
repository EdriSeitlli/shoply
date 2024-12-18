<template>
    <div class="main-container">
        <div class="widget-container horizontal">
            <div class="widget">
                <apexchart type="area" :options="lineChartOptions" :series="lineChartSeries" />
            </div>
            <div class="widget-container vertical">
                <div class="widget overall-stats-container">
                    <img src="@/assets/google_ads_logo_icon_171064.png" alt="google ads logo">
                    <div class="overall-stats">
                        <span class="name">Ads Products</span>
                        <span class="value">482</span>
                    </div>
                </div>
                <div class="widget overall-stats-container">
                    <img src="@/assets/google-merchant-center.png" alt="google merchant logo">
                    <div class="overall-stats">
                        <span class="name">Merchant Products</span>
                        <span class="value">413</span>
                    </div>
                </div>
                <div class="widget overall-stats-container">
                    <img src="@/assets/google_analytics_image_logo_icon_168152.png" alt="google analytics logo">
                    <div class="overall-stats">
                        <span class="name">Analytics Products</span>
                        <span class="value">488</span>
                    </div>
                </div>
            </div>
            <div class="widget segmentation-container">
                <h2>Segments Analysis</h2>
                <div class="segment-button-container">
                    <span class="segment-button" :class="{ active: activeSegment === 'current' }"
                        @click="setActiveSegment('current')">
                        Current Products
                    </span>
                    <span class="segment-button" :class="{ active: activeSegment === 'all' }"
                        @click="setActiveSegment('all')">
                        All Products
                    </span>
                </div>
                <div class="segmentation-stats-container">
                    <div class="budget-allocation-container">
                        <apexchart type="donut" :options="doughnutChartOptions" :series="doughnutChartSeries" />
                    </div>
                    <div class="unique-count-container"></div>
                </div>
            </div>

        </div>
        <div class="widget-container horizontal">
            <div class="widget overall-stats">
                <span class="name">Clicks</span>
                <span class="value">2,710</span>
            </div>
            <div class="widget overall-stats">
                <span class="name">Cost</span>
                <span class="value">€693</span>
            </div>
            <div class="widget overall-stats">
                <span class="name">Conversions</span>
                <span class="value">32</span>
            </div>
            <div class="widget overall-stats">
                <span class="name">Conv. Value</span>
                <span class="value">€2,410</span>
            </div>
            <div class="widget overall-stats">
                <span class="name">ROAS</span>
                <span class="value">347%</span>
            </div>
            <div class="widget overall-stats">
                <span class="name">Impressions</span>
                <span class="value">1,007,131</span>
            </div>
        </div>
        <div class="widget-container horizontal">
            <div class="widget"></div>
            <div class="widget"></div>
        </div>
    </div>
</template>

<script>
import VueApexCharts from "vue3-apexcharts";

export default {
    name: "DashboardView",
    components: {
        apexchart: VueApexCharts, // Register the ApexChart component
    },
    data() {
        return {
            activeSegment: "current",
            // Line chart data
            lineChartSeries: [
                {
                    name: "ROAS",
                    data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6],
                },
                {
                    name: "Cost",
                    data: [20, 29, 37, 36, 44, 45, 50, 58],
                },
            ],
            lineChartOptions: {
                chart: {
                    type: "area",
                    height: "100%",
                    toolbar: {
                        show: false, // Hide the toolbar
                    },
                },
                stroke: {
                    curve: "smooth",
                    width: 2,
                },
                colors: ["#00e296", "#0FB8ED"],
                xaxis: {
                    type: "datetime",
                    categories: [
                        "2009",
                        "2010",
                        "2011",
                        "2012",
                        "2013",
                        "2014",
                        "2015",
                        "2016",
                    ],
                    tickAmount: 5,
                    labels: {
                        style: {
                            fontSize: "16px",
                            fontWeight: "500",
                            fontFamily: "Open Sans, sans-serif",
                            colors: ["#15223C"],
                        },
                    },
                },
                fill: {
                    type: "gradient",
                    gradient: {
                        shadeIntensity: 1,
                        inverseColors: false,
                        opacityFrom: 0.6,
                        opacityTo: 0.2,
                        stops: [75, 100],
                    },
                },
                dataLabels: {
                    enabled: false,
                },
                yaxis: [
                    {
                        labels: {
                            formatter: (value) => value.toLocaleString(),
                            style: {
                                fontSize: "16px",
                                fontWeight: "500",
                                fontFamily: "Open Sans, sans-serif",
                                colors: ["#15223C"],
                            },
                        },
                        min: 0,
                        tickAmount: 5,
                    },
                    {
                        opposite: true,
                        labels: {
                            formatter: (value) => value.toLocaleString(),
                            style: {
                                fontSize: "16px",
                                fontWeight: "500",
                                fontFamily: "Open Sans, sans-serif",
                                colors: ["#15223C"],
                            },
                        },
                        min: 0,
                        tickAmount: 5,
                    },
                ],
                legend: {
                    position: "top",
                },
                grid: {
                    borderColor: "#e7e7e7",
                    strokeDashArray: 12,
                    xaxis: {
                        lines: {
                            show: true,
                        },
                    },
                    yaxis: {
                        lines: {
                            show: false,
                        },
                    },
                },
                tooltip: {
                    y: {
                        formatter: (value) => value.toFixed(2),
                    },
                },
            },
            // Doughnut chart data
            doughnutChartSeries: [12, 19, 3, 5, 2, 5, 5, 2, 3], // Add segment values
            doughnutChartOptions: {
                chart: {
                    type: "donut",
                    width: "100%",
                    height: "300px", // Adjust as needed
                },
                labels: [
                    "High",
                    "Medium",
                    "Low",
                    "Smart",
                    "Limited +",
                    "Limited -",
                    "Limited",
                    "Zero +",
                    "Zero -",
                ], // Segment labels
                colors: [
                    "#81CF34",
                    "#FFDD00",
                    "#FF8800",
                    "#ff5e00",
                    "#A0E060",
                    "#FFAA66",
                    "#AFAFAF",
                    "#9BCC6A",
                    "#FF9966",
                ], // Segment colors
                legend: {
                    show: false,
                },
                plotOptions: {
                    pie: {
                        donut: {
                            size: "75%",
                            labels: {
                                show: true,
                                total: {
                                    show: true,
                                    showAlways: true,
                                    label: "Cost per",
                                    fontSize: "20px",
                                    fontFamily: "Open Sans, Arial, sans-serif",
                                    fontWeight: 400,
                                    color: "#15223C",
                                    offsetY: -100,
                                    formatter: function () {
                                        return "Segment"; // Customize the total label inside the donut
                                    },
                                },
                            },
                        },
                    },
                },
                tooltip: {
                    y: {
                        formatter: function (value) {
                            return value.toFixed(2); // Format tooltip values
                        },
                    },
                },
                dataLabels: {
                    enabled: false, // Disable data labels inside the chart
                },
            },
        };
    },
    methods: {
        setActiveSegment(segment) {
            this.activeSegment = segment; // Update the active segment
        },
    },
};
</script>

<style scoped>
.segmentation-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.segmentation-container h2 {
    font-weight: 500;
    color: #15223C;
    margin: 0;
}

.segment-button-container {
    display: flex;
    gap: 15px;
}

.segment-button {
    text-align: center;
    border-radius: 0.25rem;
    color: #0FB8ED;
    background-color: white;
    padding: 3px 12px;
    font-size: 15px;
    font-weight: 400;
    cursor: pointer;
    box-shadow: 0px 0px 2px 1px #00000026;
    transition: background-color 0.3s ease, color 0.3s ease;
}

.segment-button.active {
    background-color: #0FB8ED;
    color: white;
}

.widget.overall-stats {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-left-color: #0FB8ED;
    border-left-width: 7px;
}

.overall-stats {
    display: flex;
    flex-direction: column;
}

.overall-stats-container {
    display: flex;
    align-items: center;
    gap: 15px;
}

.overall-stats-container img {
    height: 50px;
}

.overall-stats .name {
    color: #AFAFAF;
}

.overall-stats .value {
    color: #15223C;
    font-weight: 600;
}
</style>