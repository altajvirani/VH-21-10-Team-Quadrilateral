function selected() {
  var d = document.getElementById("selectstate");
  var display = d.options[d.selectedIndex].value;
  var statetext = d.options[d.selectedIndex].text;

  if (statetext == "Andhra Pradesh") {
    //fetch data if andreradesh selected
    fetch(display).then((res) => {
      res.json().then((data) => {
        if (data.length > 0) {
          var temp = "";

          // start for loop
          data.forEach((u) => {
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
            temp += "</tr>";
          });
          //-close for loop
          document.getElementById("data").innerHTML = temp;
        }
      });
    });
  } else if (statetext == "Bihar") {
    fetch(display).then((res) => {
      res.json().then((data) => {
        console.log(data);
        if (data.length > 0) {
          var temp = "";
          // start for loop
          data.forEach((u) => {
            temp += "<tr>";
            temp += "<td>" + u.STEIN_ID + "</td>";
            temp += "<td>" + u.DISTRICT + "</td>";
            temp += "<td>" + u.FACILITY_NAME + "</td>"; //available general beds
            temp += "<td>" + u.ICU_BEDS_VACANT + "</td>";
            temp += `<td>--</td>`;

            temp += "<td>" + u.VACANT + "</td>";
            temp += "<td>" + "--" + "</td>";
            temp += "<td>" + "--" + "</td>";
          });
          //-close for loop
          document.getElementById("data").innerHTML = temp;
        }
      });
    });
  } else if (statetext == "Tamilnadu") {
    fetch(display).then((res) => {
      res.json().then((data) => {
        console.log(data);
        if (data.length > 0) {
          var temp = "";

          // start for loop
          data.forEach((u) => {
            //var locati=u.LOCATION;
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
            temp += "</tr>";
          });
          //-close for loop
          document.getElementById("data").innerHTML = temp;
        }
      });
    });
  } else if (statetext == "Uttrakhand") {
    fetch(display).then((res) => {
      res.json().then((data) => {
        console.log(data);
        if (data.length > 0) {
          var temp = "";

          // start for loop
          data.forEach((u) => {
            temp += "<tr>";
            temp += "<td>" + u.STEIN_ID + "</td>";
            temp += "<td>" + u.DISTRICT + "</td>";
            temp += "<td>" + u.HOSPITAL_NAME + "</td>";
            temp += "<td>" + u.ICU_BEDS_AVAILABLE + "</td>";
            temp += "<td>" + u.BEDS_WITH_OXYGEN_AVAILABLE + "</td>";
            temp += "<td>" + u.BEDS_WITHOUT_OXYGEN_TOTAL + "</td>";
            temp += "<td>" + "--" + "</td>";

            if (u.LOCATION == null) {
              temp += "<td>" + "-" + "</td>";
            } else {
              temp += `<td><a href="${u.LOCATION}" target="_blank"> click here  </a></td>`;
            }
            temp += "</tr>";
          });
          //-close for loop
          document.getElementById("data").innerHTML = temp;
        }
      });
    });
  } else if (statetext == "utterpradesh") {
    fetch(display).then((res) => {
      res.json().then((data) => {
        console.log(data);
        if (data.length > 0) {
          var temp = "";

          // start for loop
          data.forEach((u) => {
            temp += "<tr>";
            temp += "<td>" + u.STEIN_ID + "</td>";
            temp += "<td>" + u.DISTRICT + "</td>";
            temp += "<td>" + u.HOSPITAL_NAME + "</td>";
            temp += "<td>" + "--" + "</td>";

            temp += "<td>" + u.TOTAL + "</td>";
            temp += "<td>" + u.VACANT + "</td>";
            temp += "<td>" + "--" + "</td>";
            temp += "<td>" + "--" + "</td>";
            temp += "</tr>";
          });
          //-close for loop
          document.getElementById("data").innerHTML = temp;
        }
      });
    });
  } else if (statetext == "westbengal") {
    fetch(display).then((res) => {
      res.json().then((data) => {
        console.log(data);
        if (data.length > 0) {
          var temp = "";

          // start for loop
          data.forEach((u) => {
            if (u.COVID_BEDS_REGULAR_VACANT > 10) {
              temp += "<tr>";
              temp += "<td>" + u.STEIN_ID + "</td>";
              temp += "<td>" + u.DISTRICT + "</td>";
              temp += "<td>" + u.HOSPITAL_NAME + "</td>"; //available general beds
              temp += "<td>" + "--" + "</td>";
              temp += "<td>" + "--" + "</td>";

              temp += "<td>" + u.COVID_BEDS_REGULAR_VACANT + "</td>";

              temp += "<td>" + u.CCU_BEDS_WITH_VENTILATOR_VACANT + "</td>";

              if (u.LOCATION == null) {
                temp += "<td>" + "-" + "</td>";
              } else {
                temp += `<td><a href="${u.LOCATION}" target="_blank"> click here  </a></td>`;
              }
              temp += "</tr>";
            }
          });
          //-close for loop
          document.getElementById("data").innerHTML = temp;
        }
      });
    });
  } else {
  }
}
