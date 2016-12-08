var ColumnChart = function(params) {
  var container = document.getElementById('column-chart');
  var chart = new Highcharts.Chart({
    chart: {
      type: 'column',
      renderTo: container
    },
    title: {
      text: params.title
    }, 
    series: [{
      name: params.seriesName,
      data: params.seriesData
    }],
    xAxis: {
      categories: params.xAxisCategories
    }
  });
};
