const axios = require('axios');
const { fetchUser } = require('./task3');

jest.mock('axios');

describe('Fetch User with Mock', () => {
	afterEach(() => {
		jest.clearAllMocks();
	});

	test('should return user data if request succeeds', async () => {
		const mockUser = { id: 1, name: 'John Doe' };
		axios.get.mockResolvedValue({ data: mockUser });

		const result = await fetchUser(1);

		expect(result).toEqual(mockUser);
		expect(axios.get).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/users/1');
	});

	test('should throw an error if request fails', async () => {
		axios.get.mockRejectedValue(new Error('Internal Server Error'));

		await expect(fetchUser(1)).rejects.toThrow('Failed to fetch user');
		expect(axios.get).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/users/1');
	});
});
