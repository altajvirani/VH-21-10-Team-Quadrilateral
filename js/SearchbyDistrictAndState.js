function selectedState() {
  var ud;
  var options = [];
  var d = document.getElementById("selectstate");
  var select2 = document.getElementById("selectNumber2");
  document.getElementById("selectNumber2").options.length = 0;
  var display = d.options[d.selectedIndex].value;
  var statetext = d.options[d.selectedIndex].text;

  fetch(display).then((res) => {
    res.json().then((data) => {
      if (data.length > 0) {
        var temp = "";

        data.forEach((u) => {
          options.push(u.DISTRICT);
        });
        ud = [...new Set(options)];
        document.getElementById("data").innerHTML = temp;
        for (var i = 0; i < ud.length; i++) {
          var opt = ud[i];
          //   console.log(opt);
          var el = document.createElement("option");
          el.textContent = opt;
          el.value = opt;
          //document.getElementById("selectNumber2").innerhtml=el;
          select2.appendChild(el);
        }
      }
    });
  });
}
function getdname() {
  var e = document.getElementById("selectNumber2");
  var seldist = e.options[e.selectedIndex].text;
  var e1 = document.getElementById("selectstate");
  var selstate = e1.options[e1.selectedIndex].text;
  var display1 = e1.options[e1.selectedIndex].value;

  fetch(display1).then((res) => {
    res.json().then((data) => {
      //   console.log(data);
      if (data.length > 0) {
        var temp = "";

        data.forEach((u) => {
          if (u.DISTRICT == seldist) {
            if (selstate == "Tamil Nadu") {
              temp += "<tr>";
              temp += "<td>" + u.STEIN_ID + "</td>";
              temp += "<td>" + u.DISTRICT + "</td>";
              temp += "<td>" + u.HOSPITAL_NAME + "</td>"; //available general beds
              temp += "<td>" + u.ICU_BEDS_VACANT + "</td>";
              temp += "<td>" + u.OXYGEN_SUPPORTED_BEDS_VACANT + "</td>";
              temp += "<td>" + u.BEDS_FOR_SUSPECTED_CASES_VACANT + "</td>";
              temp += "<td>" + u.VENTILATOR_VACANT + "</td>";
              if (u.LOCATION == null) {
                temp += "<td>" + "-" + "</td>";
              } else {
                temp += `<td><a href="${u.LOCATION}" target="_blank"> click here  </a></td>`;
              }
            } else if (selstate == "Andhra Pradesh") {
              temp += "<tr>";
              temp += "<td>" + u.STEIN_ID + "</td>";
              temp += "<td>" + u.DISTRICT + "</td>";
              temp += "<td>" + u.HOSPITAL_NAME + "</td>";

              temp += "<td>" + u.ICU_AVAILABLE + "</td>";

              temp += "<td>" + u.OXYGEN_GENERAL_AVAILABLE + "</td>";

              temp += "<td>" + u.GENERAL_AVAILABLE + "</td>";
              temp += "<td>" + u.VENTILATOR + "</td>";
              if (u.LOCATION == null) {
                temp += "<td>" + "-" + "</td>";
              } else {
                temp += `<td><a href="${u.LOCATION}" target="_blank"> click here  </a></td>`;
              }
            } else if (selstate == "Uttarakhand") {
              temp += "<tr>";
              temp += "<td>" + u.STEIN_ID + "</td>";
              temp += "<td>" + u.DISTRICT + "</td>";
              temp += "<td>" + u.HOSPITAL_NAME + "</td>";
              temp += "<td>" + u.ICU_BEDS_AVAILABLE + "</td>";

              temp += "<td>" + u.BEDS_WITH_OXYGEN_AVAILABLE + "</td>";

              temp += "<td>" + u.BEDS_WITHOUT_OXYGEN_AVAILABLE + "</td>";
              temp += "<td>" + "--" + "</td>";
              if (u.LOCATION == null) {
                temp += "<td>" + "-" + "</td>";
              } else {
                temp += `<td><a href="${u.LOCATION}" target="_blank"> click here  </a></td>`;
              }
            } else if (selstate == "Uttar Pradesh") {
              temp += "<tr>";
              temp += "<td>" + u.STEIN_ID + "</td>";
              temp += "<td>" + u.DISTRICT + "</td>";
              temp += "<td>" + u.HOSPITAL_NAME + "</td>";
              temp += "<td>" + "--" + "</td>";
              temp += "<td>" + "--" + "</td>";
              temp += "<td>" + u.TOTAL + "</td>";
              temp += "<td>" + u.VACANT + "</td>";
              if (u.LOCATION == null) {
                temp += "<td>" + "-" + "</td>";
              } else {
                temp += `<td><a href="${u.LOCATION}" target="_blank"> click here  </a></td>`;
              }
              temp += "</tr>";
            } else if (selstate == "West Bengal") {
              temp += "<tr>";
              temp += "<td>" + u.STEIN_ID + "</td>";
              temp += "<td>" + u.DISTRICT + "</td>";
              temp += "<td>" + u.HOSPITAL_NAME + "</td>"; //available general beds
              temp += "<td>--</td>";
              temp += "<td>" + u.CCU_BEDS_WITHOUT_VENTILATOR_VACANT + "</td>";

              temp += "<td>" + u.COVID_BEDS_REGULAR_VACANT + "</td>";

              temp += "<td>" + u.CCU_BEDS_WITH_VENTILATOR_VACANT + "</td>";
              if (u.LOCATION == null) {
                temp += "<td>" + "-" + "</td>";
              } else {
                temp += `<td><a href="${u.LOCATION}" target="_blank"> click here  </a></td>`;
              }
              temp += "</tr>";
            } else if (selstate == "Bihar") {
              temp += "<tr>";
              temp += "<td>" + u.STEIN_ID + "</td>";
              temp += "<td>" + u.DISTRICT + "</td>";
              temp += "<td>" + u.FACILITY_NAME + "</td>"; //available general beds
              temp += "<td>" + u.ICU_BEDS_VACANT + "</td>";
              temp += "<td>" + "--" + "</td>";
              temp += "<td>" + u.TOTAL_BEDS + "</td>";
              temp += "<td>" + u.VACANT + "</td>";
              temp += "<td>" + "--" + "</td>";
              temp += "</tr>";
            }
          }
        });
        document.getElementById("data").innerHTML = temp;
      }
    });
  });
}
