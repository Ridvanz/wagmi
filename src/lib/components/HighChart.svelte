<script>
    import { onMount } from 'svelte';
    import Highcharts from 'highcharts/highstock';
  
    export let ohlc = [];
    export let volume = [];
  
    const groupingUnits = [
      ['week', [1]], 
      ['month', [1, 2, 3, 4, 6]]
    ];
  
    let chartContainer;
    let chartInstance;  // To hold the chart instance for cleanup
  
    onMount(async () => {
      // Create the stock chart and store the instance
      chartInstance = Highcharts.stockChart(chartContainer, {
        rangeSelector: {
          selected: 4
        },
        title: {
          text: 'AAPL Historical'
        },
        yAxis: [
          {
            labels: {
              align: 'right',
              x: -3
            },
            title: {
              text: 'OHLC'
            },
            height: '60%',
            lineWidth: 2,
            lineColor: 'rgba(204, 204, 204, 0.2)', // Light gray dashed line
            lineDashStyle: 'Dash',
            resize: {
              enabled: true
            }
          },
          {
            labels: {
              align: 'right',
              x: -3
            },
            title: {
              text: 'Volume'
            },
            top: '65%',
            height: '35%',
            offset: 0,
            lineWidth: 2,
            lineColor: 'rgba(204, 204, 204, 0.2)', // Light gray dashed line
            lineDashStyle: 'Dash'
          }
        ],
        tooltip: {
          split: true
        },
        series: [
          {
            type: 'candlestick',
            name: 'AAPL',
            data: ohlc,
            dataGrouping: {
              units: groupingUnits
            }
          },
          {
            type: 'column',
            name: 'Volume',
            data: volume,
            yAxis: 1,
            dataGrouping: {
              units: groupingUnits
            }
          }
        ]
      });
  
      // Return a cleanup function to destroy the chart instance when the component is destroyed
      return () => {
        if (chartInstance) {
          chartInstance.destroy();
        }
      };
    });
  </script>
  
  <div bind:this={chartContainer}></div>
  
