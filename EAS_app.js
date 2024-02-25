const dataRecord = [];

function fetchData(postType, postId) {
    /* For postType, choose from 'posts', 'comments', 'albums', 'photos', 'todos' or 'users'.
    For postId, choose any number; if there is no corresponding ID, it will return an error. */

    fetch(`https://jsonplaceholder.typicode.com/${postType}/${postId}`)
        .then(response => response.json())
        .then(data => {
        console.log(data);
       
        const newUser = data.userId;
        const newId = data.id;
        const newTitle = data.title;
        const newText = data.body;

        dataRecord.push({
            userId: newUser,
            postId: newId,
            postTitle: newTitle,
            postText: newText
        });
        })
        .catch(error => {
        console.error('Error fetching data:', error);
        });
}

const sortedData = dataRecord;
// Defining copy of dataRecord to be sorted

function sortByUser() {    
    return sortedData.sort((a, b) => {
        if (a.userId < b.userId) {
            return -1;
        }
        if (a.userId > b.userId) {
            return 1;
        }
        return 0;
        });
}

const queryUsers = [];
// Defining empty array for keyword search results

function userSearch(userParams) {
    const dataSet = 'https://jsonplaceholder.typicode.com/users';
    const queryParams = new URLSearchParams(userParams).toString();
    const queryURL = `${dataSet}?${queryParams}`;

    fetch(queryURL)
        .then(response => response.json())
        .then(data => {
        queryUsers.push(data)
        console.log(queryUsers);
        })
        .catch(error => {
        console.error('Error fetching data:', error);
        });
}