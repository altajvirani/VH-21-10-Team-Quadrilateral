let jsonData = null;
let objDiv = {};
fetch("https://api.rootnet.in/covid19-in/contacts")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
    jsonData = data;

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
}
let struct = new Structure();
let loc = document.querySelector(".location");
displayData = () => {
  jsonData.data.contacts.regional.forEach((element) => {
    console.log(element.number);
    struct.divParent("loc", "body", element.loc, "loc", "");
  });
  jsonData.data.contacts.regional.forEach((element) => {
    struct.divParent("num", "body", element.number, "num", "");
  });
};
