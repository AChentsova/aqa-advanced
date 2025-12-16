class TodoService {
    async getTodo() {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching todo:', error);
            throw error;
        }
    }
}

class UserService {
    async getUser() {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching User:', error);
            throw error;
        }
    }
}

const todoService = new TodoService();
const userService = new UserService();

const promises = [todoService.getTodo(), userService.getUser()];

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