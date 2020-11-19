/* 
	[BETA][BETA][BETA][BETA][BETA][BETA][BETA][BETA][BETA]
						Charts design
	[BETA][BETA][BETA][BETA][BETA][BETA][BETA][BETA][BETA]

	drawSmallLineChart([ElementID], [Data], [Options])
*/

drawSmallLineChart('total-api-chart', aSmallLineChart, aData);
drawSmallLineChart('auth-api-chart', aSmallLineChart, aData);
drawSmallLineChart('characters-api-chart', aSmallLineChart, aData);
drawSmallLineChart('world-api-chart', aSmallLineChart, aData);

function drawSmallLineChart(ElementID, aOptions, aData){
	var oChart = document.getElementById(ElementID).getContext('2d');

	var cDraw = new Chart(oChart, {
		// The type of chart we want to create
		type: 'line',
	
		// The data for our dataset
		data: aData,
	
		// Configuration options go here
		options: aOptions,
	});
}