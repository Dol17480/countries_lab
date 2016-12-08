window.onload = function() {
  var url = 'https://restcountries.eu/rest/v1';
  makeRequest(url, requestComplete);
}

var makeRequest = function(url, callback) {
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.onload = callback;
  request.send();
}

var requestComplete = function() {
  if(this.status !== 200) return;
  var jsonString = this.responseText;
  var countries = JSON.parse(jsonString); 
  populateChart(countries);
  populateAnotherChart(countries)
}

var populateChart = function(countries) {
  var population = []
  var name = []

  countries.forEach( function (country) {
    if (country.population <= 100000) {
      name.push(country.name);
      population.push(country.population);
    } else {
      return;
    }

    var columnChartData = {
      title: "Countries With Population Less Than 100,000",
      seriesName: "Country",
      seriesData: population,
      xAxisCategories: name  
    }

    new ColumnChart(columnChartData);
  })
}

// var populateAnotherChart = function(countries) {
//   var region = [];
//   var countAfrica = 0;
//   var countAmericas = 0;
//   var countAsia = 0;
//   var countEurope = 0;
//   var countOceania = 0; 

//   countries.forEach(function(country) {
//     region.push(country.region);
//   })
  
//   region.sort()

//   for( r of region ) {
//     if (r == "Africa") countAfrica ++;
//     if (r == "Americas") countAmericas ++;
//     if (r == "Asia") countAsia ++;
//     if (r == "Europe") countEurope ++;
//     if (r == "Oceania") countOceania ++;
//   }

//   var pieChartData = {
//     title: "Countries by Region",
//     seriesName: "Region",
//     dataName: region,
//     dataY: [countAfrica, countAmericas, countAsia, countEurope, countOceania],
//   }

//   new PieChart(pieChartData)
// }


