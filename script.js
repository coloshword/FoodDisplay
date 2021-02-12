var foods = {
    "Scrambled Eggs": {
        "Calories" : "50",
        "Protein" : "5g"
    },
    "Omelette" : {
        "Calories" : "150",
        "Protein" : "25g"
    },
    "Sausage" : {
        "Calories" : "450",
        "Protein" : "30g"
    },
    "Fruit Cup" : {
        "Calories" : "120",
        "Protein" : "0g"
    }
}
function displayFood(meal) {
    var addText = document.querySelector(".putFood");
    let h4 = document.createElement("h4");
    h4.setAttribute("style", "text-align: center; color: rgb(235, 155, 76)");
    h4.appendChild(document.createTextNode("<<" + meal + ">>"));
    addText.appendChild(h4);
    var foodContainer = document.createElement("div");
    foodContainer.classList = "itemBox";
    addText.appendChild(foodContainer);
    for(var key in foods) {
        item = foods[key];
        let displayBox = document.createElement("div");
        displayBox.classList = "displayBox"
        let ribbon = document.createElement("div");
        ribbon.classList = "topRibbon";
        let h6 = document.createElement("h6");
        h6.setAttribute("style", "text-align: center;")
        h6.appendChild(document.createTextNode(key + "\n" + item))
        displayBox.appendChild(ribbon);
        displayBox.appendChild(h6);
        foodContainer.appendChild(displayBox)
    }
}

displayFood("Breakfast");
