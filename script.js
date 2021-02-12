function displayBreakfast() {
    let request = new XMLHttpRequest();
    request.open('GET', 'http://172.24.49.229:8080/breakfast', true);
    let breakfast;
    request.onload = () => {
        breakfast = JSON.parse(request.response);
        console.log(breakfast);
    }
}

displayBreakfast()