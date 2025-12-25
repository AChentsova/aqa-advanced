const axios = require('axios');

const BASE_URL = 'https://jsonplaceholder.typicode.com';

describe('JSONPlaceholder API Tests - Get data', () => {
    test('Get all posts', async () => {
        const response = await axios.get(`${BASE_URL}/posts`);
        expect(response.status).toBe(200);
        expect(Array.isArray(response.data)).toBe(true);
        expect(response.data.length).toBe(100);
        expect(response.data[0]).toHaveProperty('id');
        expect(response.data[0]).toHaveProperty('userId');
        expect(response.data[0]).toHaveProperty('title');
        expect(response.data[0]).toHaveProperty('body');
    });

    test('Get a single post by ID', async () => {
        const response = await axios.get(`${BASE_URL}/posts/1`);
        expect(response.status).toBe(200);
        expect(response.data.id).toBe(1);
        expect(response.data.userId).toBe(1);
        expect(response.data).toHaveProperty('title');
        expect(response.data).toHaveProperty('body');
    });

    test('Get comments for a specific post', async () => {
        const response = await axios.get(`${BASE_URL}/posts/1/comments`);
        expect(response.status).toBe(200);
        expect(Array.isArray(response.data)).toBe(true);
        expect(response.data.length).toBe(5);
        expect(response.data[1]).toHaveProperty('postId', 1);
        expect(response.data[1]).toHaveProperty('id', 2);
    });
});

describe('JSONPlaceholder API Tests - Create data', () => {
    test('Create a new post', async () => {
        const newPost = {
            title: 'test title',
            body: 'test body',
            userId: 1
        };
        const response = await axios.post(`${BASE_URL}/posts`, newPost);
        expect(response.status).toBe(201);
        expect(response.data).toHaveProperty('id');
        expect(response.data.title).toBe(newPost.title);
        expect(response.data.body).toBe(newPost.body);
        expect(response.data).toMatchObject(newPost);
    })

    test('Create a new album', async () => {
        const newAlbum = {
            title: 'test album',
            userId: 1
        };
        const response = await axios.post(`${BASE_URL}/albums`, newAlbum);
        expect(response.status).toBe(201);
        expect(response.data).toHaveProperty('id');
        expect(response.data.title).toBe(newAlbum.title);
        expect(response.data.userId).toBe(newAlbum.userId);
        expect(response.data).toMatchObject(newAlbum);
    });
});