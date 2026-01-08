const axios = require('axios');

async function requestURLWithHeadersAndParams(postId) {
	return axios.get('https://jsonplaceholder.typicode.com/comments', {
		headers: {
			Authorization: 'Bearer test-token'
		},
		params: {
			postId: postId,
		},
	});
}

module.exports = { requestURLWithHeadersAndParams };
