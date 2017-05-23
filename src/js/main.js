require("./lib/social"); //Do not delete


var bars = document.getElementById('bars');

var dropDown = document.getElementById('select-station');
dropDown.addEventListener('change', function(d) {
  console.log(dropDown.value);
  bars.innerHTML = '';

  var html_summary = "<div class='stat'>Escalator(s) had: ";
  for (var i = 0; i < bartData.length; i++) {

    if (bartData[i].Station == dropDown.value) {
      bars.insertAdjacentHTML("beforeend","<div class='bar active-bar' style='height: calc(130px*" + bartData[i].TotalDowntimeDays/342.5 + ")'></div>");

      html_summary += "<div><span class='bold-text'> " + bartData[i].TotalDowntimeDays + "</span> downtime days</div>";

      // bars.insertAdjacentHTML("beforeend","<span id='ranking'>Your neighborhood ranked <span class='bold-text'>" + bartData[i].TotalDowntimeDays + "</span> for most Airbnb listings.</span>");
    }
    else {
      bars.insertAdjacentHTML("beforeend","<div class='bar black-bar' style='height: calc(130px*" + bartData[i].TotalDowntimeDays/342.5 + ")'></div>");
    }
  }
  html_summary += ".</div>"
  var aboutyourarea = document.getElementById('aboutyourarea');
  aboutyourarea.innerHTML = html_summary;
});


var qsa = s => Array.prototype.slice.call(document.querySelectorAll(s));
qsa(".station").forEach(function(group,index) {
  group.addEventListener("click", function(e) {
    console.log(group);
    bars.innerHTML = '';

    var html_summary = "<div class='stat'>Escalator(s) had: ";
    for (var i = 0; i < bartData.length; i++) {

      if (bartData[i].Station == group.id) {
        bars.insertAdjacentHTML("beforeend","<div class='bar active-bar' style='height: calc(130px*" + bartData[i].TotalDowntimeDays/342.5 + ")'></div>");

        html_summary += "<div><span class='bold-text'> " + bartData[i].TotalDowntimeDays + "</span> downtime days</div>";

        // bars.insertAdjacentHTML("beforeend","<span id='ranking'>Your neighborhood ranked <span class='bold-text'>" + bartData[i].TotalDowntimeDays + "</span> for most Airbnb listings.</span>");
      }
      else {
        bars.insertAdjacentHTML("beforeend","<div class='bar black-bar' style='height: calc(130px*" + bartData[i].TotalDowntimeDays/342.5 + ")'></div>");
      }
    }
    html_summary += ".</div>"
    var aboutyourarea = document.getElementById('aboutyourarea');
    aboutyourarea.innerHTML = html_summary;
  });
});
