const axios = require('axios');
const { requestURLWithHeadersAndParams } = require('./task2');

jest.mock('axios');

describe('Fetch URL with Headers and Params', () => {
	test('should send request with correct headers and params', async () => {
		axios.get.mockResolvedValue({ data: {} });

		await requestURLWithHeadersAndParams(1);

		expect(axios.get).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/comments', {
			headers: {
				Authorization: 'Bearer test-token',
			},
			params: {
				postId: 1,
			},
		});
	});
});
