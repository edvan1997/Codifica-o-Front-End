var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
	// The type of chart we want to create
	type: 'line', // also try bar or other graph types

	// The data for our dataset
	data: {
		labels: ['1','2','3','4','5','6','7','8','9'],
		// Information about the dataset
    datasets: [{
			label: "Rainfall",
			backgroundColor: 'lightblue',
			borderColor: 'royalblue',
			data: [10,25,15,70,50,20,35,40,40],
		}]
	},

	// Configuration options
	options: {
    layout: {
      padding: 10,
    },
		legend: {
			position: 'bottom',
		},
		title: {
			display: false,
			text: 'Precipitation in Toronto'
		},
		scales: {
			yAxes: [{
				scaleLabel: {
					display: false,
					labelString: 'Precipitation in mm'
				}
			}],
			xAxes: [{
				scaleLabel: {
					display: false,
					labelString: 'Month of the Year'
				}
			}]
		}
	}
});
