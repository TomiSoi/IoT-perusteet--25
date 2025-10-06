const url = "https://api.thingspeak.com/channels/3077397/feeds.json?api_key=7G08G4HADC15YFCV";

google.charts.load('current', { packages: ['corechart'] });
google.charts.setOnLoadCallback(fetchAndDraw);

const REFRESH_INTERVAL = 60000; // 60 Sekunttia

function startAutoRefresh() {
  fetchAndDraw();
  setInterval(fetchAndDraw, REFRESH_INTERVAL); // Lataa uutta dataa
}

function fetchAndDraw() {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const feeds = data.feeds;
      const chartData = [['Time', 'Temperature']];
      feeds.forEach(feed => {
        const time = new Date(feed.created_at);
        const temp = parseFloat(feed.field1);
        if (!isNaN(temp)) {
          chartData.push([time, temp]);
        }
      });
      drawChart(chartData);
    })
    .catch(error => {
      console.error("Error fetching data:", error);
      document.getElementById("curve_chart").textContent = "Error loading data.";
    });
}

function drawChart(chartData) {
  const data = google.visualization.arrayToDataTable(chartData);
  const options = {
    title: 'Temperature Over Time',
    curveType: 'function',
    legend: { position: 'bottom' },
    hAxis: { title: 'Time', format: 'HH:mm:ss' },
    vAxis: { title: 'Temperature (°C)' }
  };

  const chart = new google.visualization.LineChart(document.getElementById('curve_chart'));
  chart.draw(data, options);
}
