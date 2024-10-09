<script lang="ts">
	import { onMount } from 'svelte';
	import Highcharts from 'highcharts/highstock';
	import * as Select from './ui/select';
	import LineChartIcon from './icons/LineChartIcon.svelte';
	import ChartIcon from './icons/ChartIcon.svelte';

	let chartContainer;
	let ohlc;
	let volume;
	let closedPoints;
	let dataLength;
	let flags;
	let chart;

	let rangeIndex = 0;

	const orange = '#E38A34';
	const gray = '#5F5F5F';

	const rangeOptions = ['1 month', '3 months', '6 months', '1 year', 'YTD', 'All'];

	onMount(async () => {
		// Load the dataset
		const data = await fetch('https://demo-live-data.highcharts.com/aapl-ohlcv.json').then(
			(response) => response.json()
		);

		ohlc = [];
		volume = [];
		closedPoints = [];
		dataLength = data.length;

		// Split the data set into OHLC and volume

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
		flags = [
			{
				x: Date.UTC(2023, 8, 28),
				title: '1'
			},
			{
				x: Date.UTC(2023, 9, 29),
				title: '2'
			},
			{
				x: Date.UTC(2023, 11, 30),
				title: '3'
			},
			{
				x: Date.UTC(2022, 12, 12),
				title: '4'
			}
		];

		// Initialize the Highcharts stock chart with black text and transparent background
		chart = Highcharts.stockChart(chartContainer, getChartProps(1));

		return () => {
			chart.destroy(); // Cleanup on component destroy
		};
	});

	$: {
		if (chart) {
			chart = Highcharts.stockChart(chartContainer, getChartProps(rangeIndex));
		}
	}

	const getChartProps = (selectedRangeIndex): Highcharts.Options => {
		return {
			chart: {
				backgroundColor: 'transparent',
				style: {
					fontFamily: 'sans-serif',
					color: '#000000' // Black text color
				},
				events: {
					load: function () {
						setTimeout(function () {
							chart.reflow();
						}, 0); // Ensures the chart resizes properly on initial load
					}
				},
				zoomType: 'x'
				// spacing: 0 // Enable zooming on the x-axis
			},
			plotOptions: {
				bar: {
					dataLabels: {
						enabled: true
					}
				},
				series: {
					groupPadding: 0,
					pointPadding: 0.05
				}
			},
			xAxis: {
				labels: {
					style: {
						color: '#000000' // Black text for x-axis dates
					}
				},
				dateTimeLabelFormats: {
					millisecond: '%H:%M:%S.%L',
					second: '%H:%M:%S',
					minute: '%H:%M',
					hour: '%H:%M',
					day: '%e. %b',
					week: '%e. %b',
					month: "%b '%y",
					year: '%Y'
				},
				lineWidth: 0,
				tickWidth: 0,

				// breaks: 0,
				gridLineColor: 'rgba(209, 213, 219, 0.8)', // Light gray dashed
				gridLineDashStyle: 'Dash'
			},
			yAxis: [
				{
					labels: {
						align: 'left',
						style: { color: '#000000' } // Black labels
					},
					height: '75%',
					resize: {
						enabled: true
					},
					gridLineColor: 'rgba(209, 213, 219, 0.8)', // Light gray dashed
					gridLineDashStyle: 'Dash'
				},
				{
					labels: {
						align: 'right',
						style: { color: '#000000' } // Black labels for volume axis
					},
					top: '60%',
					height: '40%',
					opposite: false,
					// offset: 0,
					gridLineColor: 'rgba(209, 213, 219, 0.8)', // Light gray dashed
					gridLineDashStyle: 'Dash'
				}
			],
			tooltip: {
				shape: 'square',
				headerShape: 'callout',
				borderWidth: 0,
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
					upColor: orange, // Light green for up days
					upLineColor: orange,
					upFillColor: orange,
					color: gray, // Light red for down days
					lineColor: gray,
					fillColor: orange
				},
				{
					type: 'flags',
					id: 'flags',
					name: 'Tweets',
					data: flags,
					onSeries: 'aapl-ohlc',
					shape: 'circlepin',
					width: 16,
					height: 16,
					y: -80,
					label: {
						enabled: false
					},
					color: 'white',
					fillColor: orange,
					// borderColor: 'red',
					style: {
						color: 'white' // Black text for flags
					},
					states: {
						hover: {
							fillColor: '#fb923c',
							color: '#000000'
						}
					}
				},
				{
					type: 'column',
					id: 'aapl-volume',
					name: 'ETH Volume',
					data: volume,
					borderRadius: 0,
					yAxis: 1,
					color: orange, // Lighter orange for volume (Tailwind's orange-400),
					upcolor: gray
				}
			],
			responsive: {
				rules: [
					{
						condition: {
							// maxWidth: 800
						},
						chartOptions: {
							// rangeSelector: {
							// 	inputEnabled: false
							// }
						}
					}
				]
			},
			rangeSelector: {
				enabled: true,

				dropdown: 'always',
				selected: selectedRangeIndex,
				buttonPosition: {
					align: 'right'
				},
				inputBoxHeight: 0,
				buttonTheme: {
					fill: 'transparent',
					stroke: 'transparent',
					style: {
						color: 'transparent'
					}
				},
				x: 1000,

				inputEnabled: false
			},
			navigator: {
				enabled: false // Enable the navigator (scrollbar)
			}
		};
	};

	let selectedView: 'line' | 'bar' = 'line';
	const setView = (view: 'line' | 'bar') => {
		selectedView = view;
	};
</script>

<div class="border rounded-lg p-4 2xl:h-full max-h-full flex flex-col">
	<div class="flex justify-between">
		<div class="flex gap-1 flex-col">
			<h3 class="text-xs">Current Value</h3>
			<h1 class="text-[2rem]">$ 30,142.56</h1>
		</div>
		<div class="flex flex-row gap-8">
			<div class="flex flex-row items-center gap-2">
				<button
					on:click={() => setView('line')}
					class="flex justify-center items-center rounded-full h-10 w-10 p-2.5 {selectedView ===
					'line'
						? 'bg-primary text-white'
						: 'bg-transparent'} transition-all"
				>
					<LineChartIcon />
				</button>
				<button
					on:click={() => setView('bar')}
					class="flex justify-center items-center rounded-full h-10 w-10 p-2.5 {selectedView ===
					'bar'
						? 'bg-primary text-white'
						: 'bg-transparent'} transition-all"
				>
					<ChartIcon />
				</button>
			</div>
			<div class="flex flex-row items-center gap-3">
				<h3 class="text-xs">Range</h3>

				<Select.Root
					portal={null}
					selected={{
						label: rangeOptions[rangeIndex],
						value: rangeIndex
					}}
					onSelectedChange={(v) => {
						rangeIndex = v.value;
						console.log(rangeIndex);
					}}
				>
					<Select.Trigger class="w-[150px]">
						<Select.Value placeholder="Select a fruit" />
					</Select.Trigger>
					<Select.Content>
						<Select.Group>
							<Select.Label>Range</Select.Label>
							{#each rangeOptions as rangeOption, index}
								<Select.Item value={index} label={rangeOption}>{rangeOption}</Select.Item>
							{/each}
						</Select.Group>
					</Select.Content>
					<Select.Input name="favoriteFruit" />
				</Select.Root>
			</div>
		</div>
	</div>

	<!-- Tailwind Styled Chart Container for Responsiveness -->
	<div bind:this={chartContainer} class="w-full rounded-xl max-h-full h-full p-0"></div>
</div>
