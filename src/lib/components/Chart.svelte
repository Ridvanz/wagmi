<script>
	import { onMount } from 'svelte';
	import Highcharts from 'highcharts/highstock';
	import { hoveredIndex } from '$lib/stores/hoverStore';
  import { tweetsData } from '$lib/data/TweetsData';

	let chartContainer;
	let chartInstance;

	onMount(async () => {
		// Load the dataset
		const data = await fetch('https://demo-live-data.highcharts.com/aapl-ohlcv.json').then(
			(response) => response.json()
		);

		// Split the data set into OHLC and volume
		const ohlc = [];
		const volume = [];
		const closedPoints = [];
		const dataLength = data.length;

		for (let i = 0; i < dataLength; i++) {
			ohlc.push([
				data[i][0], // the date
				data[i][1], // open
				data[i][2], // high
				data[i][3], // low
				data[i][4] // close
			]);

			volume.push([
				data[i][0], // the date
				data[i][5] // the volume
			]);

			closedPoints.push([data[i][0], data[i][4]]); // Close points
		}

		// Define the flags data
		// const flags = [
		// 	{ x: Date.UTC(2023, 8, 28), title: '', id: 1 },
		// 	{ x: Date.UTC(2023, 9, 29), title: '', id: 2 },
		// 	{ x: Date.UTC(2023, 11, 30), title: '', id: 3 },
		// 	{ x: Date.UTC(2022, 12, 12), title: '', id: 4 }
		// ];

    const flags = tweetsData;

		// Initialize the Highcharts stock chart with black text and transparent background
		chartInstance = Highcharts.stockChart(chartContainer, {
			chart: {
				backgroundColor: 'transparent',
				style: {
					fontFamily: 'sans-serif',
					color: '#000000' // Black text color
				},
				events: {
					load: function () {
						setTimeout(function () {
							chartInstance.reflow();
						}, 0); // Ensures the chart resizes properly on initial load
					}
				},
				zoomType: 'x' // Enable zooming on the x-axis
			},
			xAxis: {
				labels: {
					style: {
						color: '#000000' // Black text for x-axis dates
					}
				},
				gridLineColor: 'rgba(209, 213, 219, 0.8)', // Light gray dashed
				gridLineDashStyle: 'Dash'
			},
			yAxis: [
				{
					labels: {
						align: 'left',
						style: { color: '#000000' } // Black labels
					},
					height: '80%',
					resize: {
						enabled: true
					},
					gridLineColor: 'rgba(209, 213, 219, 0.8)', // Light gray dashed
					gridLineDashStyle: 'Dash'
				},
				{
					labels: {
						align: 'left',
						style: { color: '#000000' } // Black labels for volume axis
					},
					top: '80%',
					height: '20%',
					offset: 0,
					gridLineColor: 'rgba(209, 213, 219, 0.8)', // Light gray dashed
					gridLineDashStyle: 'Dash'
				}
			],
			tooltip: {
				shape: 'square',
				headerShape: 'callout',
				borderWidth: 1,
				shadow: false,
				style: {
					color: '#000000' // Black text in tooltips
				},
				positioner: function (width, height, point) {
					const chart = this.chart;
					let position;

					if (point.isHeader) {
						position = {
							x: Math.max(
								chart.plotLeft,
								Math.min(
									point.plotX + chart.plotLeft - width / 2,
									chart.chartWidth - width - chart.marginRight
								)
							),
							y: point.plotY
						};
					} else {
						position = {
							x: point.series.chart.plotLeft,
							y: point.series.yAxis.top - chart.plotTop
						};
					}

					return position;
				}
			},
			series: [
				{
					type: 'candlestick',
					id: 'aapl-ohlc',
					name: 'ETH Stock Price',
					data: ohlc,
					upColor: 'orange', //
					upLineColor: 'ee7003',
					upFillColor: 'ee7003',
					color: '#ee7003', // Light red for down days
					lineColor: '#ee7003',
					fillColor: '#ee7003'
				},
				{
					type: 'flags',
					id: 'flags',
					name: 'Tweets',
					data: flags,
					onSeries: 'aapl-ohlc',
					shape: 'circlepin',
					width: 12,
					height: 12,
					y: -50,
					color: '#000000',
					fillColor: 'orange',
					borderColor: 'red',
					style: {
						color: '#000000' // Black text for flags
					},
					states: {
						hover: {
							fillColor: 'red',  // Change fill color to red on hover
							color: '#fff',     // Change text color to white
							width: 24,         // Increase circle size
							height: 24,        // Increase circle size
							borderColor: 'white', // Border color change to red
							animation: {
								duration: 200 // Animation duration for the hover effect
							}
            }
					}
				},

				{
					type: 'column',
					id: 'aapl-volume',
					name: 'ETH Volume',
					data: volume,
					yAxis: 1,
					color: '#ee7003' // Lighter orange for volume (Tailwind's orange-400)
				}
			],
			responsive: {
				rules: [
					{
						condition: {
							// maxWidth: 800km
						},
						chartOptions: {
							rangeSelector: {
								inputEnabled: false
							}
						}
					}
				]
			},
			navigator: {
				enabled: true, // Enable the navigator (scrollbar)
				outlineColor: 'gray', // Light orange border for navigator
				outlineWidth: 1,
				maskFill: 'rgba(247, 210, 196, 0.2)', // Light orange background with 30% opacity
				handles: {
					backgroundColor: 'gray', // Light orange handles
					borderColor: 'gray' // Light orange handles border
				},
				labels: {
					style: {
						color: '#000000' // Black text for navigator
					}
				}
			},
			scrollbar: {
				enabled: true, // Enable the scrollbar
				barBackgroundColor: 'gray', // Light orange scrollbar
				barBorderRadius: 5,
				barBorderWidth: 1,
				buttonArrowColor: '#f7d2c4', // Light orange scrollbar buttons
				buttonBackgroundColor: '#f7d2c4', // Light orange scrollbar buttons background
				buttonBorderWidth: 1,
				buttonBorderRadius: 5,
				trackBackgroundColor: 'rgba(247, 210, 196, 0)', // Transparent scrollbar track
				trackBorderWidth: 1,
				trackBorderRadius: 5,
				labels: {
					style: {
						color: '#000000' // Black text for scrollbar
					}
				}
			}
		});
		// Subscribe to the hoveredIndex store
		const unsubscribe = hoveredIndex.subscribe((tweetId) => {
			if (tweetId !== null) {
				highlightFlag(tweetId);
			} else {
				resetFlagState();
			}
		});

		function highlightFlag(tweetId) {
			const flagSeries = chartInstance.get('flags');
			flagSeries.points.forEach((point) => {
				if (point.options.id === tweetId) {
					point.setState('hover');
				} else {
					point.setState(''); // Reset state for other points
				}
			});
		}

		function resetFlagState() {
			const flagSeries = chartInstance.get('flags');
			flagSeries.points.forEach((point) => {
				point.setState(''); // Reset all points to normal state
			});
			chartInstance.tooltip.hide(); // Hide tooltip when no tweet is hovered
		}

		return () => {
			// Unsubscribe from the store and clean up chart instance
			unsubscribe();
			chartInstance.destroy();
		};
	});
</script>

<!-- Tailwind Styled Chart Container for Responsiveness -->
<div bind:this={chartContainer} class="w-full h-full rounded-lg p-0"></div>
