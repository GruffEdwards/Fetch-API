const dataRecord = [];
// Defining empty array for data results

function fetchData() {
    let postType = document.querySelector("#dropdown").value;
    let postId = document.querySelector("#postId").value;

    fetch(`https://jsonplaceholder.typicode.com/${postType}/${postId}`)
        .then(response => response.json())
        .then(data => {
            let newData = {
                userId: data.userId,
                id: data.id,
                title: data.title,
                name: data.name,
                email: data.email,
                body: data.body,
                url: data.url,
                thumbnailUrl: data.thumbnailUrl,
                completed: data.completed,
            };
            dataRecord.push(newData);
        document.getElementById("function1Text").innerHTML = "Here is the data you requested:";
        document.getElementById("function1Result").innerHTML = JSON.stringify(dataRecord);
        })
        .catch(error => {
        console.error('Error fetching data:', error);
        });
}

function sortById() {    
    dataRecord.sort((a, b) => parseFloat(a.id) - parseFloat(b.id));
    const sortedData = JSON.stringify(dataRecord);
    document.getElementById("function2Text").innerHTML = "Here is the data you requested, sorted by it's ID.";
    document.getElementById("function2Result").innerHTML = sortedData;
}

const queryUsers = [];
// Defining empty array for user search results

function userSearch() {
    let userNo = document.querySelector("#userNo").value;
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userNo}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById("function3Text").innerHTML = "Posts by user: " + userNo + ".";
            document.getElementById("function3Result").innerHTML = JSON.stringify(data);
        })
        .catch(error => {
        console.error('Error fetching data:', error);
        });
}