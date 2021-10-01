let objDiv = {};
let jsonData = null;
url = "https://api.covidbedsindia.in/v1/storages/608982e003eef31f34d05a71/Andhra%20Pradesh";
fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    jsonData = data;
    document.body.id = "body";

    displayData();
    console.log(jsonData);
  });

displayData = () => {
  var dist = "Anantapur";
  divParent("wrapper", "body", "", "wrapper", "wrapper row");
  var District = [];
  jsonData.forEach((ele) => {
    District.push(ele.DISTRICT);
  });
  let uniqueChars = [...new Set(District)];
  uniqueChars.forEach((ele) => {
    divChild("card", "wrapper", ``, "cardetails", "carddetails col-sm-4");
    divChild("cardbody", "card", "", "cardbody", "card-body");
    divChild("cardtitle", "cardbody", `${ele}`, "", "card-title");
    divChild("cardsubtitle", "cardbody", "", "cardsubtitle", "card-subtitle mb-2 text-muted");
    divChild("cardtext", "cardbody", "", "card-text", "card-text");
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
