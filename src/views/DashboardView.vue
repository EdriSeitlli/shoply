<template>
    <div class="main-container">
        <div class="widget-container">
            <div class="widget line-chart-container">
                <apexchart type="area" :options="lineChartOptions" :series="lineChartSeries" />
            </div>
            <div class="widget-container" style="flex-direction: column; flex: 1;">
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
                        <span v-if="isLoading" class="value" aria-live="polite">Loading...</span>
                        <span v-else-if="Array.isArray(data) && data.length > 0" class="value">{{ data.length }}</span>
                        <span v-else-if="Array.isArray(data)" class="value">No items found</span>
                        <span v-else class="value">No data available</span>
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
            <div class="widget segmentation-container" style="flex: 1 1 25%;">
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
                        <h3>Budget Allocation</h3>
                        <apexchart type="donut" :options="doughnutChartOptions" :series="doughnutChartSeries" />
                    </div>
                    <div class="unique-count-container">
                        <h3>Unique Count</h3>
                        <div class="segments-container">
                            <div class="segment-container">
                                <div class="segment">
                                    <span class="color high"></span>
                                    <span class="name">High</span>
                                    <span class="count">(18)</span>
                                </div>
                                <div class="percentage">4.36%</div>
                            </div>
                            <div class="segment-container">
                                <div class="segment">
                                    <span class="color medium"></span>
                                    <span class="name">Medium</span>
                                    <span class="count">(18)</span>
                                </div>
                                <div class="percentage">4.36%</div>
                            </div>
                            <div class="segment-container">
                                <div class="segment">
                                    <span class="color low"></span>
                                    <span class="name">Low</span>
                                    <span class="count">(18)</span>
                                </div>
                                <div class="percentage">4.36%</div>
                            </div>
                            <div class="segment-container">
                                <div class="segment">
                                    <span class="color smart"></span>
                                    <span class="name">Smart</span>
                                    <span class="count">(18)</span>
                                </div>
                                <div class="percentage">4.36%</div>
                            </div>
                            <div class="segment-container">
                                <div class="segment">
                                    <span class="color limited-high"></span>
                                    <span class="name">Limited +</span>
                                    <span class="count">(18)</span>
                                </div>
                                <div class="percentage">4.36%</div>
                            </div>
                            <div class="segment-container">
                                <div class="segment">
                                    <span class="color limited-low"></span>
                                    <span class="name">Limited -</span>
                                    <span class="count">(18)</span>
                                </div>
                                <div class="percentage">4.36%</div>
                            </div>
                            <div class="segment-container">
                                <div class="segment">
                                    <span class="color limited"></span>
                                    <span class="name">Lmited</span>
                                    <span class="count">(18)</span>
                                </div>
                                <div class="percentage">4.36%</div>
                            </div>
                            <div class="segment-container">
                                <div class="segment">
                                    <span class="color zero-high"></span>
                                    <span class="name">Zero +</span>
                                    <span class="count">(18)</span>
                                </div>
                                <div class="percentage">4.36%</div>
                            </div>
                            <div class="segment-container">
                                <div class="segment">
                                    <span class="color zero-low"></span>
                                    <span class="name">Zero -</span>
                                    <span class="count">(18)</span>
                                </div>
                                <div class="percentage">4.36%</div>
                            </div>
                            <div class="segment-container">
                                <div class="segment">
                                    <span class="color zero"></span>
                                    <span class="name">Zero</span>
                                    <span class="count">(18)</span>
                                </div>
                                <div class="percentage">4.36%</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div class="widget-container">
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
        <div class="widget-container">
            <div class="widget">
                <PreviewTable title="User Information" :data="jsonData1" />
            </div>
            <div class="widget">
                <PreviewTable title="Product Inventory" :data="jsonData2" />
            </div>
        </div>
    </div>
</template>

<script>
import VueApexCharts from "vue3-apexcharts";
import PreviewTable from "@/components/PreviewTable.vue";

export default {
    name: "DashboardView",
    components: {
        apexchart: VueApexCharts, // Register the ApexChart component
        PreviewTable, // Register the PreviewTable component here
    },
    props: {
        data: {
            type: [Array, Object], // Accept both Array and Object
            default: () => ([]), // Default to an empty array
        },
        isLoading: {
            type: Boolean,
            default: false,
        },
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
                    width: '100%',
                    toolbar: {
                        show: false, // Hide the toolbar
                    },
                },
                responsive: [
                    {
                        breakpoint: 3500, // For large screens <= 1920px
                        options: {
                            chart: {
                                height: 450,
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
                                    title: {
                                        style: {
                                            color: "#15223C",
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
                                    title: {
                                        style: {
                                            color: "#15223C",
                                        },
                                    },
                                    min: 0,
                                    tickAmount: 5,
                                },
                            ],
                        },
                    },
                    {
                        breakpoint: 1024, // For medium screens <= 1024px
                        options: {
                            chart: {
                                height: 350,
                            },
                            legend: {
                                show: false,
                            },
                            yaxis: [
                                {
                                    labels: {
                                        formatter: (value) => value.toLocaleString(),
                                        style: {
                                            fontSize: "14px",
                                            fontWeight: "500",
                                            fontFamily: "Open Sans, sans-serif",
                                            colors: ["#15223C"],
                                        },
                                    },
                                    title: {
                                        style: {
                                            color: "#15223C",
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
                                            fontSize: "14px",
                                            fontWeight: "500",
                                            fontFamily: "Open Sans, sans-serif",
                                            colors: ["#15223C"],
                                        },
                                    },
                                    title: {
                                        style: {
                                            color: "#15223C",
                                        },
                                    },
                                    min: 0,
                                    tickAmount: 5,
                                },
                            ],
                        },
                    },
                    {
                        breakpoint: 768, // For small screens <= 768px
                        options: {
                            chart: {
                                height: 250,
                            },
                            legend: {
                                show: false,
                            },
                            yaxis: [
                                {
                                    labels: {
                                        formatter: (value) => value.toLocaleString(),
                                        style: {
                                            fontSize: "12px",
                                            fontWeight: "400",
                                            fontFamily: "Open Sans, sans-serif",
                                            colors: ["#15223C"],
                                        },
                                    },
                                    title: {
                                        style: {
                                            color: "#15223C",
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
                                            fontSize: "12px",
                                            fontWeight: "400",
                                            fontFamily: "Open Sans, sans-serif",
                                            colors: ["#15223C"],
                                        },
                                    },
                                    title: {
                                        style: {
                                            color: "#15223C",
                                        },
                                    },
                                    min: 0,
                                    tickAmount: 5,
                                },
                            ],
                        },
                    },
                    {
                        breakpoint: 450, // Applies when screen width is <= 450px
                        options: {
                            chart: {
                                height: 200, // Adjust chart height for very small screens
                            },
                            xaxis: {
                                labels: {
                                    show: false, // Hide x-axis labels for very small screens
                                },
                            },
                            yaxis: {
                                labels: {
                                    show: false, // Hide y-axis labels for very small screens
                                },
                            },
                        },
                    }
                ],
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
            jsonData1: [
                { Name: "Alice", Age: 25, Occupation: "Engineer" },
                { Name: "Bob", Age: 30, Occupation: "Designer" },
            ],
            jsonData2: [
                { Product: "Laptop", Price: 1200, Stock: 50 },
                { Product: "Phone", Price: 800, Stock: 100 },
            ],
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
.line-chart-container {
    flex: 1 1 40%;
}

@media screen and (max-width: 1600px) {
    .line-chart-container {
        flex: 1 1 100%;
    }
}

.segments-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1px;
}

.segment {
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 6px;
}

.segment-container {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    padding: 5px;
    border-radius: 5px;
}

.segment-container:hover {
    background-color: #f0f0f0;
}

.segment .color {
    display: block;
    width: 15px;
    height: 15px;
    border-radius: 50%;
}

.segment .color.high {
    background-color: #81CF34;
}

.segment .color.medium {
    background-color: #FFDD00;
}

.segment .color.low {
    background-color: #FF8800;
}

.segment .color.smart {
    background-color: #ff5e00;
}

.segment .color.limited-high {
    background-color: #A0E060;
}

.segment .color.limited-low {
    background-color: #FFAA66;
}

.segment .color.limited {
    background-color: #AFAFAF;
}

.segment .color.zero-high {
    background-color: #9BCC6A;
}

.segment .color.zero-low {
    background-color: #FF9966;
}

.segment .color.zero {
    background-color: #747474;
}

.segment .name {
    white-space: nowrap;
    font-weight: bold;
}

.unique-count-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.budget-allocation-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.segmentation-stats-container {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
}

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