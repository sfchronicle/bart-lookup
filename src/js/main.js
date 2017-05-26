require("./lib/social"); //Do not delete


var bars = document.getElementById('bars');
var bottomAxis = document.getElementById('bottom-axis');
var leftAxis = document.getElementById('left-axis');
var barsTitle = document.getElementById('bars-title');

function getridership(data,station) {
  return data.filter(
      function(data){ return data.Stations == station }
  );
}

var dropDown = document.getElementById('select-station');
dropDown.addEventListener('change', function(d) {
  bars.innerHTML = '';

  var html_summary = "<div class='stat'><div class='title-span'>The individual escalator(s) at this station had this many days out of service: </div>";
  var probability_list = [];
  for (var i = 0; i < bartData.length; i++) {

    if (bartData[i].Station == dropDown.value) {
      bars.insertAdjacentHTML("beforeend","<div class='bar active-bar' style='height: calc(130px*" + bartData[i].TotalDowntimeDays/342.5 + ")'></div>");

      html_summary += "<div><span class='bold-text'> " + bartData[i].TotalDowntimeDays + "</span> downtime days, <span class='bold-text'>"+bartData[i].Rank+"</span> most in the system </div>";
      probability_list.push(1-bartData[i].TotalDowntimeDays/750);
      // bars.insertAdjacentHTML("beforeend","<span id='ranking'>Your neighborhood ranked <span class='bold-text'>" + bartData[i].TotalDowntimeDays + "</span> for most Airbnb listings.</span>");
    }
    else {
      bars.insertAdjacentHTML("beforeend","<div class='bar black-bar' style='height: calc(130px*" + bartData[i].TotalDowntimeDays/342.5 + ")'></div>");
    }
  }
  html_summary += "</div>"
  var aboutyourarea = document.getElementById('aboutyourarea');
  aboutyourarea.innerHTML = html_summary;
  bottomAxis.innerHTML = "All BART escalators, ordered by downtime days";
  leftAxis.innerHTML = "Total downtime (days)";
  var probability_product = 1;
  for (var ii=0; ii<probability_list.length; ii++) {
    probability_product = probability_product*probability_list[ii];
  }
  var probability = 1-probability_product;
  var nice_probability = Math.round(probability*100*10)/10;

  var info = getridership(stationData,dropDown.value);
  var ridership = info[0]["Ridership"];

  barsTitle.innerHTML = "On a random day, you have a <span class='bold-text'>"+nice_probability+"%</span> chance of encountering at least one nonfunctioning escalator at "+info[0]["StationName"]+" Station, where there are a total of <span class='bold-text'>"+probability_list.length+"</span> escalators(s) and <span class='bold-text'>"+ridership+"</span> riders daily.";

});
