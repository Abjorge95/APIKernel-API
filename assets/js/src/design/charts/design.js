/* 
	CHARTS SETTINGS
*/

var aSmallLineChart = {
	animation: {
		duration: 1000,
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

/*
	DRAW CHARTS CALLS

		drawSmallLineChart([ElementID Name], [Chart Options], [Chart Data retrieved by function])
*/

drawChart('total-api-chart', aSmallLineChart, getAPIData(), 'line');
drawChart('auth-api-chart', aSmallLineChart, getAPIData(), 'line');
drawChart('characters-api-chart', aSmallLineChart, getAPIData(), 'line');
drawChart('world-api-chart', aSmallLineChart, getAPIData(), 'line');
drawChart('reqByDay-api-chart', aSmallLineChart, getAPIDataBigGraphs(), 'line');

/*
	RETREAVE DATA FUNCTIONS
*/

function getAPIData() {	// TO CHANGE NAME
	var aData = {
		labels: ['W', 'T', 'F', 'S', 'S', 'M', 'T'],
		datasets: [{
			borderWidth: 1,
			borderColor: 'rgb(155,184,234)',
			backgroundColor: 'rgb(255,255,255)',
			data: [2, 4, 1, 6, 12, 5, 6]
		}]
	};

	return aData;
}

function getAPIDataBigGraphs() {	// TO CHANGE NAME
	var aData = {
		labels: ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24'],
		datasets: [{
			borderWidth: 1,
			borderColor: 'rgb(155,184,234)',
			backgroundColor: 'rgb(255,255,255)',
			data: [2, 4, 1, 6, 12, 5, 2, 4, 1, 6, 12, 5, 2, 4, 1, 6, 12, 5, 2, 4, 1, 6, 12, 5, 2]
		}]
	};

	return aData;
}

/*
	DRAW CHART FUNCTION
*/

function drawChart(ElementID, aOptions, aData, sType){
	var oChart = document.getElementById(ElementID).getContext('2d');

	var cDraw = new Chart(oChart, {
		type: sType,
		data: aData,
		options: aOptions,
	});
}