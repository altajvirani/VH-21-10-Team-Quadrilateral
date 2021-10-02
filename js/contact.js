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
  let loc = document.querySelector(".locationn");
  jsonData.data.contacts.regional.forEach((element) => {
    console.log(element.number);
    let div = document.createElement("div");
    div.innerHTML = element.loc;
    loc.appendChild(div);
  });
  let num = document.querySelector(".num");
  jsonData.data.contacts.regional.forEach((element) => {
    let div = document.createElement("div");
    div.innerHTML = element.number;
    num.appendChild(div);
  });
};
