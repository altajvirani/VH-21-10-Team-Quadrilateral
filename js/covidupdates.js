let objDiv = {};
let jsonData = null;
fetch("https://api.apify.com/v2/key-value-stores/toDWvRj1JpTXiM8FF/records/LATEST?disableRedirect=true")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(`data`, data);
    jsonData = data;
    displayData();
  });

displayData = () => {
  let arr;
  divParent("main-wrapper", "body", "", "wrapper", "wrapper");
  divChild("nav", "main-wrapper", "", "nav", "nav");
  arr = JSON.stringify(jsonData.lastUpdatedAtApify);
  console.log(arr);
  document.querySelector(".date").innerHTML = ` ${"Updated Date: " + arr.slice(1, 11) + " Updated Time: " + arr.slice(12, 17)}`;
  document.querySelector(".recovered").innerHTML = `${jsonData.recovered + " (+" + jsonData.recoveredNew + ")↑"} `;
  document.querySelector(".tests").innerHTML = `${jsonData.previousDayTests}`;
  let newcases = JSON.stringify(jsonData.activeCasesNew);
  newcases = newcases.slice(0, 1);
  console.log(`newcases`, newcases);
  document.querySelector(".cases").innerHTML = `${
    newcases == "-"
      ? +jsonData.activeCases + "" + " (" + jsonData.activeCasesNew + ")" + "↓"
      : +jsonData.activeCases + "" + " (" + jsonData.activeCasesNew + ")" + "↑"
  }`;
  document.querySelector(".totalcases").innerHTML = `${jsonData.totalCases}`;
  document.querySelector(".deaths").innerHTML = `Total deaths: ${jsonData.deaths + " (+" + jsonData.deathsNew + ")↑"} `;
  divChild("card-wrapper", "main-wrapper", "", "card-wrapper", "card-wrapper");
  colors = ["primary", "secondary", "sucess", "warning"];
  function randomColor(colors) {
    return colors[Math.floor(Math.random() * colors.length)];
  }
  jsonData.regionData.forEach((element) => {
    divCard(
      "card",
      "card-wrapper",
      element.region,
      "",
      "card",
      `card border-${randomColor(colors)} mb-3 contentcard`,
      element.activeCases,
      element.deceased,
      element.totalInfected,
      element.recovered
    );
  });
};
divParent = (ele, target, data, eleid, eleclass) => {
  let _target = target ? target : "body";
  objDiv[ele] = document.createElement("div");
  objDiv[ele].innerHTML = data;
  objDiv[ele].id = eleid;
  objDiv[ele].className = eleclass;
  document[_target].appendChild(objDiv[ele]);
};

divChild = (ele, target, data, eleid, eleclass) => {
  let _target = target ? target : "body";
  objDiv[ele] = document.createElement("div");
  objDiv[ele].innerHTML = data;
  objDiv[ele].id = eleid;
  objDiv[ele].className = eleclass;
  objDiv[_target].appendChild(objDiv[ele]);
};
divCard = (ele, target, header, data, eleid, eleclass, activecases, deceased, totalInfected, recovered) => {
  let _target = target ? target : "body";
  objDiv[ele] = document.createElement("div");
  objDiv[ele].innerHTML = `
  <div class="row">
  <div class="col-sm">
  <div class="card-header" style="font-weight:bolder;">${header}</div>
    <div class=card-body text-primary>
    <p class="card-text text-warning" style="font-weight:bold;">Active Cases: ${activecases}</p>
    <p class="card-text text-danger" style="font-weight:bold;">Deceased: ${deceased}</p>
    <p class="card-text text-primary" style="font-weight:bold;">Recovered: ${recovered}</p>
    <p class="card-text text-danger" style="font-weight:bold;">Total Infected: ${totalInfected}</p>
  </div>
  </div>
  </div>`;
  objDiv[ele].id = eleid;
  objDiv[ele].className = eleclass;
  objDiv[_target].appendChild(objDiv[ele]);
};
