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
    console.log(data);
  });

displayData = () => {
  var dist = "Anantapur";
  divParent("wrapper", "body", "", "wrapper", "wrapper row");
  jsonData.forEach((ele) => {
    console.log(ele.DISTRICT);
    divChild("card", "wrapper", ``, "cardetails", "carddetails col-sm-4");
    divChild("cardbody", "card", "", "cardbody", "card-body");
    divChild("cardtitle", "cardbody", `${ele.DISTRICT}`, "", "card-title");
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
{
  /* <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div> */
}
