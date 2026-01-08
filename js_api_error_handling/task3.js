const axios = require('axios');

async function fetchUser(userId) {
	try {
		const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
		return response.data;
	} catch (error) {
		throw new Error('Failed to fetch user');
	}
}

module.exports = { fetchUser };
