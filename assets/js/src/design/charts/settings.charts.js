var aSmallLineChart 	= {
                            animation: {
                                duration: 0
                            },
                            title: {
                                display: false
                            },
                            scales: {
                                xAxes: [{
                                    display: true,
                                    ticks: {
                                        fontColor: "rgb(124,135,165)"
                                    },
                                    gridLines : {
                                        display : false,
                                        drawBorder: false,
                                    }
                                }],
                                yAxes: [{
                                    display: false
                                }]
                            },
                            legend: {
                                display: false,
                            },
                            elements: {
                                point:{
                                    radius: 0
                                }
                            },
                            layout: {
                                padding: {
                                    top: 10,
                                    bottom: 10
                                }
                            }
                        };

var aData = {
                labels: ['W', 'T', 'F', 'S', 'S', 'M', 'T'],
                datasets: [{
                    borderWidth: 1,
                    borderColor: 'rgb(155,184,234)',
                    backgroundColor: 'rgb(255,255,255)',
                    data: [2, 4, 1, 6, 12, 5, 6]
                }]
            };