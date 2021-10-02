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
    div.innerHTML = `<a href='tel:${element.number}' >${element.number}</a>`;
    num.appendChild(div);
  });
};
