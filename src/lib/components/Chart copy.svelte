<script>
    import { onMount } from 'svelte';
    import Highcharts from 'highcharts/highstock';
  
    // Load the Highcharts modules required for flags
  
    let chartContainer;
  
    onMount(async () => {
      // Sample OHLCV data (adjusted for brevity)
      const data = [
        [1664199000000, 149.66, 153.77, 149.64, 150.77, 93339400],
        [1664285400000, 152.74, 154.72, 149.95, 151.76, 84442700],
        [1664371800000, 147.64, 150.64, 144.84, 149.84, 146691400],
        [1664458200000, 146.1, 146.72, 140.68, 142.48, 128138200],
        [1664285400000, 152.74, 154.72, 149.95, 151.76, 84442700],
        [1664371800000, 147.64, 150.64, 144.84, 149.84, 146691400],
        [1664458200000, 146.1, 146.72, 140.68, 142.48, 128138200],
        [1664285400000, 152.74, 154.72, 149.95, 151.76, 84442700],
        [1664371800000, 147.64, 150.64, 144.84, 149.84, 146691400],
        [1664458200000, 146.1, 146.72, 140.68, 142.48, 128138200],
        [1664285400000, 152.74, 154.72, 149.95, 151.76, 84442700],
        [1664371800000, 147.64, 150.64, 144.84, 149.84, 146691400],
        [1664458200000, 146.1, 146.72, 140.68, 142.48, 128138200],                        
        // ... more data points
      ];
  
      // Sample tweet events
      const tweetEvents = [
        {
          x: 1664199000000,
          title: 'T',
          text: 'Tweet by @user1: "Bitcoin hits new high!"',
        },
        {
          x: 1664371800000,
          title: 'T',
          text: 'Tweet by @user2: "Market correction incoming?"',
        },
        // ... more tweet events
      ];
  
      // Split the data set into OHLC and volume
      const ohlc = [];
      const volume = [];
      const dataLength = data.length;
  
      for (let i = 0; i < dataLength; i++) {
        ohlc.push([
          data[i][0], // the date
          data[i][1], // open
          data[i][2], // high
          data[i][3], // low
          data[i][4], // close
        ]);
  
        volume.push([
          data[i][0], // the date
          data[i][5], // the volume
        ]);
      }
  
      // Initialize the Highcharts stock chart
      const chart = Highcharts.stockChart(chartContainer, {
        chart: {
          backgroundColor: '#f9f9f9', // Light background
          style: {
            fontFamily: 'sans-serif',
            color: '#333', // Dark text color
          },
        },
        rangeSelector: {
          selected: 1,
          inputEnabled: false,
          labelStyle: {
            color: '#333',
          },
          buttonTheme: {
            fill: '#f9f9f9',
            stroke: '#333',
            style: {
              color: '#333',
            },
            states: {
              hover: {
                fill: '#ffdaba',
                style: {
                  color: '#333',
                },
              },
              select: {
                fill: '#ffdaba',
                style: {
                  color: '#333',
                },
              },
            },
          },
        },
        xAxis: {
          gridLineColor: '#333',
          labels: {
            style: {
              color: '#333',
            },
          },
        },
        yAxis: [
          {
            labels: {
              align: 'left',
              style: { color: '#333' },
            },
            height: '70%',
            resize: {
              enabled: true,
            },
            gridLineColor: '#333',
          },
          {
            labels: {
              align: 'left',
              style: { color: '#333' },
            },
            top: '70%',
            height: '30%',
            offset: 0,
            gridLineColor: '#333',
          },
        ],
        tooltip: {
          split: true,
          backgroundColor: '#f9f9f9',
          style: {
            color: '#333',
          },
        },
        legend: {
          enabled: true,
          itemStyle: {
            color: '#333',
          },
        },
        series: [
          {
            type: 'candlestick',
            name: 'Token Price',
            data: ohlc,
            color: '#333', // Bearish color
            upColor: '#666', // Bullish color
          },
          {
            type: 'column',
            name: 'Volume',
            data: volume,
            yAxis: 1,
            color: '#666',
          },
          {
            type: 'flags',
            data: tweetEvents,
            onSeries: 'dataseries',
            shape: 'circlepin',
            width: 16,
            color: '#333',
            fillColor: '#666',
            style: {
              color: '#333',
            },
            states: {
              hover: {
                fillColor: '#666',
                color: '#333',
              },
            },
          },
        ],
      });
  
      return () => {
        chart.destroy();
      };
    });
  </script>
  
  <!-- Chart Container -->
  <div bind:this={chartContainer} class="w-full h-full"></div>
  
  <style>
    div {
      min-height: 400px; /* Increased height for better visibility */
    }
  </style>
