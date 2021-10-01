let jsonData = null;
let objDiv = {};
fetch("https://api.rootnet.in/covid19-in/contacts")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    document.body.id = "mainbody";
    console.log(data);
    jsonData = data;

    displayData();
  });
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
displayData = () => {
  divParent("wrapper", "body", "", "main-wrapper", "d-flex justify-content-around");
  divChild("locationdiv", "wrapper", "", "location", "location1");
  divChild("location", "locationdiv", "Locations", "location", "location");

  divChild("numberdiv", "wrapper", "", "number", "number1");
  divChild("contact", "numberdiv", "numbers", "number", "number");

  jsonData.data.contacts.regional.forEach((element) => {
    console.log(element.number);
    divChild("loc", "locationdiv", element.loc, "loc", "loc row");
  });
  jsonData.data.contacts.regional.forEach((element) => {
    divChild("num", "numberdiv", element.number, "num", "num row");
  });
};
