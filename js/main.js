let objDiv = {};
let jsonData = null;
fetch("https://data.covid19india.org/data.json")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
    jsonData = data;
    document.body.id = "mainbody";
    // document.body.classList = " row";
    displayData();
  });
class Structure {
  divParent = (ele, target, data, eleid, eleclass) => {
    let _target = target ? target : "body";
    objDiv[ele] = document.createElement("div");
    objDiv[ele].innerHTML = data;
    objDiv[ele].id = eleid;
    objDiv[ele].className = eleclass;
    document[_target].appendChild(objDiv[ele]);
  };
  buttonStructure = (ele, target, data, eleid, eleclass) => {
    let _target = target ? target : "body";
    objDiv[ele] = document.createElement("button");
    objDiv[ele].innerHTML = data;
    objDiv[ele].id = eleid;
    objDiv[ele].className = eleclass;
    objDiv[_target].appendChild(objDiv[ele]);
  };
}
let structure = new Structure();
displayData = () => {
  lastele = jsonData.tested;
  var firstdose = [];
  lastele.forEach((element) => {
    firstdose.push(element.years1stdose);
  });
  var seconddose = [];
  lastele.forEach((element) => {
    seconddose.push(element.years2nddose);
  });
  var totalSampleTested = [];
  lastele.forEach((element) => {
    totalSampleTested.push(element.totalsamplestested);
  });

  document.getElementById("1stdose").innerHTML = `1st Dose Vaccinated : ${firstdose.pop()}`;
  document.getElementById("2nddose").innerHTML = `2nd Dose Vaccinated : ${seconddose.pop()}`;
  document.getElementById("totalsample").innerHTML = `Total sample tested : ${totalSampleTested.pop()}`;

  document.getElementById("contact-btn").onclick = () => {
    location.href = "./contactdetails.html";
  };
};
