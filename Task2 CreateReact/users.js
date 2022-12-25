let but = document.getElementById("butt");
let container = document.getElementById("usersContainer");


function appendFunction(each) {
    let localContainer = document.createElement("div");
    localContainer.classList.add("col-6");
    container.appendChild(localContainer);
    let imageEle = document.createElement("img");
    imageEle.src = each.avatar;
    localContainer.appendChild(imageEle);
    let paraName = document.createElement("p");
    paraName.textContent = "Name : " + each.first_name + " " + each.last_name;
    paraName.classList.add("para-name");
    localContainer.appendChild(paraName);
    let paraNo = document.createElement("p");
    paraNo.textContent = "Email : " + each.email;
    paraNo.classList.add("para-no");
    localContainer.appendChild(paraNo);
    localContainer.classList.add("container-align");
}

but.onclick = function() {

    let url = "https://reqres.in/api/users?page=1";
    let options = {
        method: "GET"
    };

    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            for (let each of jsonData.data) {
                appendFunction(each);
                console.log(each);
            }
        });

}