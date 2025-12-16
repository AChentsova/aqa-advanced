function getTodo() {
    return fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .catch(error => console.error('Error fetching todo:', error));
}

function getUser() {
    return fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(response => response.json())
        .catch(error => console.error('Error fetching user:', error));
}

const promises = [getTodo(), getUser()];

const promiseAll = Promise.all(promises);
const promiseRace = Promise.race(promises);

promiseAll.then(([fetchedTodo, fetchedUser]) => {
    console.log('Promise.all result:');
    console.log('Todo:', fetchedTodo);
    console.log('User:', fetchedUser);
});

promiseRace.then(firstResolved => {
    console.log('Promise.race result:');
    console.log(firstResolved);
});