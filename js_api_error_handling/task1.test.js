const { requestWrongURL } = require('./task1');

describe('Fetch Incorrect URL', () => {
	test('should throw an error with correct message when request fails', async () => {
		await expect(requestWrongURL()).rejects.toThrow('Failed to fetch data');
	});
});
