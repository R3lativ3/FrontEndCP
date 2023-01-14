import ReactApexChart from "react-apexcharts";
import { Row, Col, Typography } from "antd";

function GraficaCobroSemanal({ title, data, labels }) {

    const { Title, Paragraph } = Typography;
    const getChartData = (data, name, categories) => {
        return {
            series: [
                {
                    name,
                    data,
                    color: "#fff",
                }
            ],
            options: {
                chart: {
                    type: "bar",
                    width: "100%",
                    height: "auto",
                    toolbar: {
                        show: false,
                    }
                },
                plotOptions: {
                    bar: {
                        horizontal: false,
                        columnWidth: "55%",
                        borderRadius: 5,
                    },
                },
                dataLabels: {
                    enabled: false,
                },
                stroke: {
                    show: true,
                    width: 1,
                    colors: ["transparent"],
                },
                grid: {
                    show: true,
                    borderColor: "#ccc",
                    strokeDashArray: 2,
                },
                xaxis: {
                    categories,
                    labels: {
                        show: true,
                        align: "right",
                        minWidth: 0,
                        maxWidth: 160,
                        style: {
                            colors: [
                                "#fff",
                                "#fff",
                                "#fff",
                                "#fff",
                                "#fff",
                                "#fff",
                                "#fff",
                                "#fff",
                                "#fff",
                                "#fff",
                            ],
                        },
                    },
                },
                yaxis: {
                    labels: {
                        show: true,
                        align: "right",
                        minWidth: 0,
                        maxWidth: 160,
                        style: {
                            colors: [
                                "#fff",
                                "#fff",
                                "#fff",
                                "#fff",
                                "#fff",
                                "#fff",
                                "#fff",
                                "#fff",
                                "#fff",
                                "#fff",
                            ],
                        },
                    },
                },
                tooltip: {
                    y: {
                        formatter: function (val) { return "Q " + val; },
                    },
                },
            }
        }
    }

    const items = [
        {
            Title: "3,6K",
            user: "Users",
        },
        {
            Title: "2m",
            user: "Clicks",
        },
        {
            Title: "$772",
            user: "Sales",
        },
        {
            Title: "82",
            user: "Items",
        },
    ];

    return (
        <>
            <div id="chart">
                <ReactApexChart
                    className="bar-chart"
                    options={getChartData(data, title, labels).options}
                    series={getChartData(data, title, labels).series}
                    type="bar"
                    height={220}
                />
            </div>
            <div className="chart-vistior">
                <Title level={5}>Avance Semanal</Title>
                <Paragraph className="lastweek">
                    <span className="bnb2">+30%</span> Mas que la semana pasada
                </Paragraph>
                <Row gutter>
                    {items.map((v, index) => (
                        <Col xs={6} xl={6} sm={6} md={6} key={index}>
                            <div className="chart-visitor-count">
                                <Title level={4}>{v.Title}</Title>
                                <span>{v.user}</span>
                            </div>
                        </Col>
                    ))}
                </Row>
            </div>
        </>
    );
}

export default GraficaCobroSemanal;
