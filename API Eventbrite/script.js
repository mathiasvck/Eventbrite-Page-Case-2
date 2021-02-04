/* API Data */ 
var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer J4SWWDP56WQ5RCWEBMPY");
myHeaders.append("Content-Type", "application/json");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

let allCategories = [], mainObj = {};

let showObj = function() {
  for (let prop in mainObj) {
    console.log(prop);
    console.log(mainObj[prop]);
  };
}

fetch("https://www.eventbriteapi.com/v3/categories/", requestOptions)
  .then(function(response) {
    return response.json();
  })
  .then(categories => showCategories(categories.categories))
  .catch(error => console.log('error', error));
  
showCategories = categories => {
 const categoriesDiv = document.querySelector('#response');

 categories.forEach(category => {
  const categoryElement = document.createElement('p');
  categoryElement.innerText = `${category.name}`;
  categoriesDiv.append(categoryElement);
  categoryElement.className = "grow";  
 });
}

/* Searchbar NOK */
function searchBar() {
    var input, filter, div, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("response");
    for (i = 0; i < div.length; i++) {
        a = div[i].getElementsByTagName("p")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            div[i].style.display = "";
        } else {
            div[i].style.display = "none";
        }
    }
  }

/* Filter Buttons !NOK! */
/*
filterSelection("all")
function filterSelection(filterName) {
    var x, i;
    x = document.getElementsByClassName("filterDiv");
    if (filterName == "all") filterName = "";
    for (i = 0; i < x.length; i++) {
        removeClass(x[i], "show");
        if (x[i].className.indexOf(filterName) > -1) addClass(x[i], "show");
    }
}

function addClass (element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i=0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
    }
}

function removeClass (element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i=0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1)
        }
    }
    element.className = arr1.join(" ");
}
*/
