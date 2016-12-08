var PieChart = function(params) {
  var container = document.getElementById('pie-chart');
  var chart = new Highcharts.Chart({
    chart: {
      type: 'pie',
      renderTo: container
    },
    title: {
      text: params.titleText
    },
    series: [{
      name: params.seriesName,
      data: [{
          name: params.dataName,
          y: params.dataY,
          color: params.dataColor,
          sliced: params.dataSliced
        }]
    }]

  });
}