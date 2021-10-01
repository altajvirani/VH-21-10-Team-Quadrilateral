let objDiv = {};
let jsonData = null;
fetch("https://data.covid19india.org/data.json")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
    jsonData = data;
    document.body.id = "main body";
    displayData();
  });
class Structure {
  divParent = (ele, target, data, eleid) => {
    let _target = target ? target : "body";
    objDiv[ele] = document.createElement("div");
    objDiv[ele].innerHTML = data;
    objDiv[ele].id = eleid;
    document[_target].appendChild(objDiv[ele]);
  };
  cardBody = (ele, target, data, eleclass, eleid) => {
    let _target = target ? target : "body";
    objDiv[ele] = document.createElement("div");
    objDiv[ele].innerHTML = data;
    objDiv[ele].className = eleclass;
    objDiv[ele].id = eleid;
    objDiv[ele].style = "background-color:lightcyan";
    document[_target].appendChild(objDiv[ele]);
  };
  tabs = (ele, target, data, eleid) => {};
}
let structure = new Structure();
displayData = () => {
  structure.divParent("nav", "body", "darshan", "dk");
  lastele = jsonData.tested.years1stdose.pop();
  console.log(lastele);
  structure.cardBody("card", "body", "", "card-body", "cardbody");
};
