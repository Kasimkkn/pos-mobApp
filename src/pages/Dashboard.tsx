import { IonContent, IonHeader, IonPage, IonModal, IonButton, IonFooter, IonSearchbar, IonIcon, IonMenuButton, IonToolbar, IonTitle } from '@ionic/react'
import "chart.js";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from 'react'
import { chatbox, notifications } from 'ionicons/icons';
import img1 from "../img/1.png";
import img2 from "../img/02.png";
import img3 from "../img/03.png";
import ApexCharts from 'apexcharts';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Card: React.FC = () => {
    return (
        <div className="my-1">
            <div className="card p-4 text-black bg-white ">
                <div className="d-flex gap-3">
                    <div className="cardsImage">
                        <img src={img1} alt="1" className="bg-black p-3 rounded-1" style={{ maxHeight: "65px", }} />
                    </div>
                    <div className="d-flex flex-column">
                        <span className='fs-4  fw-bolder '>Total Sales</span>
                        <h4>31.40</h4>
                    </div>
                </div>
                <div className="progress">
                    <div className="progress-bar bg-black " role="progressbar" style={{ width: "75%" }}></div>
                </div>
            </div>
        </div>
    );
}
const Card1: React.FC = () => {
    return (
        <div className="col-12 m-1 bg-white text-black">
            <div className="card-body text-center d-flex justify-content-start align-items-center gap-2">
                <img src={img2} alt="" className="bg-dark p-2 rounded" style={{ maxWidth: "100px", height: "100px" }} />
                <div>
                    <h3 className='fw-bolder fs-2'>Rain Umbrella</h3>
                    <h6>468 items</h6>
                </div>
            </div>
        </div>
    )
}
const Card2: React.FC = () => {
    return (

        <div className="d-flex my-1 p-2 bg-white justify">
            <div className="bg-dark rounded-1 " >
                <img src={img3} alt="" className="" style={{ maxWidth: "100px", }} />
            </div>
            <div className="px-2 d-flex flex-column gap-2 text-black">
                <h4 className='fw-bolder fs-3 '>Coffee Beans</h4>
                <h6 className="mb-0 mt-1">Total Sell : 4869</h6>
                <h6 className="mb-0 mt-1">Total Earned : $45,60 M</h6>
            </div>
        </div>
    )
}
const Dashboard: React.FC = () => {


    useEffect(() => {

        function initializeApexChart(elementId: string, chartOptions: ApexCharts.ApexOptions): void {
            const element = document.querySelector<HTMLElement>(elementId);

            if (element) {
                const chart = new ApexCharts(element, chartOptions);
                chart.render();
            }
        }

        initializeApexChart("#overview", {
            series: [
                {
                    name: 'Sample Data',
                    data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
                },
            ],
            chart: {
                type: 'line',
                height: 350,
                animations: {
                    enabled: true,
                    easing: 'linear',
                    dynamicAnimation: {
                        speed: 200,
                    },
                },
            },
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
            },
        });

        // Initialize and render the "Revenue & Cost" chart
        initializeApexChart("#revenueCost", {
            series: [
                {
                    name: 'Revenue',
                    data: [400, 550, 480, 600, 580, 700, 750],
                },
                {
                    name: 'Cost',
                    data: [200, 250, 180, 300, 280, 350, 400],
                },
            ],
            chart: {
                type: 'bar',
                height: 350,
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '55%',
                    // endingShape: 'rounded',
                },
            },
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
            },
            legend: {
                position: 'top',
            },
        });


        initializeApexChart("#incomeChart", {
            series: [{
                name: "Desktops",
                data: [17, 23, 15, 28, 22, 32]
            }],
            colors: ['#6EDFF6'],
            chart: {
                height: 150,
                type: 'line',
                zoom: {
                    enabled: false
                },
                dropShadow: {
                    enabled: true,
                    color: '#000',
                    top: 12,
                    left: 1,
                    blur: 2,
                    opacity: 0.2
                },
                toolbar: {
                    show: false
                },
                sparkline: {
                    enabled: true,
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth',
                width: 3
            },
            title: {
                text: '',
                align: 'left'
            },
            grid: {
                row: {
                    colors: ['#75B798', 'transparent'],
                    opacity: 0.5
                },
            },
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            }
        });

        initializeApexChart("#orderSummaryChart", {
            series: [{
                name: 'Total Likes',
                data: [86, 80, 84, 95, 83, 75, 88, 76, 86, 93, 85, 65]
            }, {
                name: 'Total Share',
                data: [76, 72, 76, 85, 74, 69, 80, 68, 78, 85, 77, 55]
            }],
            chart: {
                type: 'bar',
                height: 300
            },
            colors: ['#75B798', '#6EDFF6'],
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '30%',
                    // endingShape: 'rounded'
                },
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                show: true,
                width: 3,
                colors: ['transparent']
            },
            xaxis: {
                categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                labels: {
                    // minWidth: 0,
                    // maxWidth: 0
                }
            },
            yaxis: {
                show: true,
                labels: {
                    minWidth: 20,
                    maxWidth: 20
                }
            },
            fill: {
                opacity: 2
            },
            tooltip: {
                y: {
                    formatter: function (val: Number) {
                        return "$ " + val + " thousands"
                    }
                }
            }
        });

        initializeApexChart("#expenseChart", {
            series: [{
                name: "Desktops",
                data: [17, 23, 15, 28, 22, 32]
            }],
            colors: ['#75B798'],
            chart: {
                height: 150,
                type: 'line',
                zoom: {
                    enabled: false
                },
                dropShadow: {
                    enabled: true,
                    color: '#000',
                    top: 12,
                    left: 1,
                    blur: 2,
                    opacity: 0.2
                },
                toolbar: {
                    show: false
                },
                sparkline: {
                    enabled: true,
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth',
                width: 3
            },
            title: {
                text: '',
                align: 'left'
            },
            grid: {
                row: {
                    colors: ['#6EDFF6', 'transparent'],
                    opacity: 0.5
                },
            },
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            }
        });
    })

    return (
        <IonPage>
            <IonHeader>
                <Header />
            </IonHeader>
            <IonContent>
                <div className="row mt-4 ">
                    <div className="col-12">
                        <h3 className="fw-semibold">Hi Admin,Good Morning</h3>
                        <p>Your dashboard gives you views of key performance or business process.</p>
                    </div>
                    <div className="col-12">
                        <Card />
                        <Card />
                        <Card />
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-lg-6">
                        <div className="card bg-black ">
                            <div className="card-header">
                                overview
                            </div>
                            <div className="card-body">
                                <div id="overview"></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="card bg-black text-white">
                            <div className="card-header">
                                Revenue & Cost
                            </div>
                            <div className="card-body">
                                <div id="revenueCost"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mt-4">
                    <div className="col-12 p-2">
                        <div className="card bg-black text-white  m-2">
                            <div className="card-header d-flex justify-content-between p-3">
                                <div>
                                    <h3>Top Products</h3>
                                </div>
                                <div>
                                    <div className='btn btn-dark '>check</div>
                                </div>
                            </div>
                            <div className="card-body p-4">
                                <div className="row">
                                    <Card1 />
                                    <Card1 />
                                    <Card1 />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 ">
                        <div className="m-2">
                            <div className="card-header  d-flex justify-content-between p-2 align-items-center ">
                                <h3>Best Item All Time</h3>
                                <button className="btn btn-dark">View All</button>
                            </div>
                            <Card2 />
                            <Card2 />
                        </div>
                    </div>
                </div>

                <div className="row mt-4">
                    <div className="col-12 ">
                        <div className="bg-dark m-2 ">
                            <div className="card-body">
                                <div className="d-flex align-items-top justify-content-between">
                                    <div className="m-2">
                                        <p className="mb-0 fs-3 fw-bolder">Income</p>
                                        <h5>$ 98,7800 K</h5>
                                    </div>
                                    <div className="card-header-toolbar d-flex align-items-center">
                                        <div className='btn btn-dark '>This Month</div>
                                    </div>
                                </div>
                                <div id="incomeChart" className="layout-chart-1"></div>
                            </div>
                        </div>
                        <div className="bg-dark m-2 ">
                            <div className="card-body">
                                <div className="d-flex align-items-top justify-content-between">
                                    <div className="m-2">
                                        <p className="mb-0 fs-3 fw-bolder">Expenses</p>
                                        <h5>$ 45,8956 K</h5>
                                    </div>
                                    <div className="card-header-toolbar d-flex align-items-center">
                                        <div className='btn btn-dark '>This Month</div>
                                    </div>
                                </div>
                                <div id="expenseChart" className="layout-chart-2"></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="card bg-dark text-white m-2 ">
                            <div className="card-header d-flex justify-content-between">
                                <div className="header-title">
                                    <h4 className="card-title">Order Summary</h4>
                                </div>
                                <div className="card-header-toolbar d-flex align-items-center">
                                    <div className='btn btn-dark '>This Month</div>
                                </div>
                            </div>
                            <div className="card-body pb-2">
                                <div className="d-flex flex-wrap align-items-center mt-2">
                                    <div className="d-flex align-items-center">
                                        <div className="progress-value ml-3 pr-5 border-right">
                                            <h5>$12,6598</h5>
                                            <p className="mb-0 mx-1">Average Orders</p>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center ml-5 ">

                                        <div className="progress-value ml-3">
                                            <h5>$59,8478</h5>
                                            <p className="mb-0 mx-1">Top Orders</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body pt-0">
                                <div id="orderSummaryChart" className='layout-chart-1'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </IonContent>
            <IonFooter >
                <Footer/>
            </IonFooter>
        </IonPage>
    )
}
export default Dashboard
