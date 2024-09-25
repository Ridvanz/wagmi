  <script>
    import { onMount } from 'svelte';
    import Highcharts from 'highcharts/highstock';
  
    let chartContainer;
  
    onMount(async () => {
      // Load the dataset
      const data = await fetch('https://demo-live-data.highcharts.com/aapl-ohlcv.json')
        .then(response => response.json());
  
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
          data[i][4]  // close
        ]);
  
        volume.push([
          data[i][0], // the date
          data[i][5]  // the volume
        ]);
  
        closedPoints.push([data[i][0], data[i][4]]); // Close points
      }
  
      // Define the flags data
      const flags = [
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
        }
      ];
  
      // Initialize the Highcharts stock chart with white text and dark background
      const chart = Highcharts.stockChart(chartContainer, {
        chart: {
          backgroundColor: '', 
          style: {
            fontFamily: 'sans-serif',
            color: '#ffffff' // White text color
          },
          events: {
            load: function () {
              setTimeout(function () {
                chart.reflow();
              }, 0); // Ensures the chart resizes properly on initial load
            }
          },
          zoomType: 'x' // Enable zooming on the x-axis
        },
        xAxis: {
          labels: {
            style: {
              color: 'white' // White text for x-axis dates
            }
          }
        },
        yAxis: [
          {
            labels: {
              align: 'left',
              style: { color: 'white' } // Black labels
            },
            height: '80%',
            resize: {
              enabled: true
            },
            gridLineColor: '#374151' // Tailwind's gray-700 equivalent
          },
          {
            labels: {
              align: 'left',
              style: { color: 'white' } // Black labels for volume axis
            },
            top: '80%',
            height: '20%',
            offset: 0,
            gridLineColor: '#374151'
          }
        ],
        tooltip: {
          shape: 'square',
          headerShape: 'callout',
          borderWidth: 0,
          shadow: false,
          backgroundColor: '#111827', // Dark tooltip background (Tailwind's gray-900)
          style: {
            color: '#ffffff' // White text in tooltips
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
        //   {
        //     type: 'line',
        //     id: 'closed-line',
        //     name: 'Closed',
        //     data: closedPoints,
        //     color: 'black' // Lighter orange for closed line (Tailwind's orange-400)
        //   },
          {
            type: 'candlestick',
            id: 'aapl-ohlc',
            name: 'ETH Stock Price',
            data: ohlc,
            upColor: 'orange', // Light green for up days
            upLineColor: 'orange',
            upFillColor: 'orange',
            color: '#ee7003', // Light red for down days
            lineColor: 'violet',
            fillColor: 'violet'
          },
          {
            type: 'flags',
            id: 'flags',
            name: 'Tweets',
            data: flags,
            onSeries: 'aapl-ohlc',
            shape: 'circlepin',
            width: 24,
            height: 24,
            y: -75,
            color: 'white', // Lighter orange for flags (Tailwind's orange-400)
            fillColor: '#ee7003',
            borderColor: 'red',
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
            yAxis: 1,
            color: 'violet' // Lighter orange for volume (Tailwind's orange-400)
          }
        ],
        responsive: {
          rules: [
            {
              condition: {
                // maxWidth: 800
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
              color: 'white' // White text for navigator
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
          trackBackgroundColor: '#f7d2c4', // Light orange scrollbar track
          trackBorderWidth: 1,
          trackBorderRadius: 5,
          labels: {
            style: {
              color: 'white' // White text for scrollbar
            }
          }
        }
      });
  
      return () => {
        chart.destroy(); // Cleanup on component destroy
      };
    });
  </script>
  
  <!-- Tailwind Styled Chart Container for Responsiveness -->
  <div bind:this={chartContainer} class="w-full h-full rounded-lg p-0"></div>

