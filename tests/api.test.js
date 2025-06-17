const axios = require('axios');

const API_URL = 'https://jsonplaceholder.typicode.com';

describe('JSONPlaceholder API tests using Axios', () => {
  test('GET /posts should return status 200 and an array of posts', async () => {
    const response = await axios.get(`${API_URL}/posts`);
    
    expect(response.status).toBe(200);
    expect(Array.isArray(response.data)).toBe(true);
    expect(response.data.length).toBeGreaterThan(0);
    expect(response.data[0]).toHaveProperty('id');
    expect(response.data[0]).toHaveProperty('title');
  });

  test('GET /users/1 should return a valid user', async () => {
    const response = await axios.get(`${API_URL}/users/1`);

    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('id', 1);
    expect(response.data).toHaveProperty('name');
    expect(response.data).toHaveProperty('email');
  });

  test('POST /posts should create a new post', async () => {
    const newPost = {
      title: 'Test Title',
      body: 'Test Body',
      userId: 1,
    };

    const response = await axios.post(`${API_URL}/posts`, newPost);

    expect(response.status).toBe(201);
    expect(response.data).toMatchObject(newPost);
    expect(response.data).toHaveProperty('id'); // JSONPlaceholder генерує ID
  });

  test('POST /comments should create a new comment', async () => {
    const newComment = {
      postId: 1,
      name: 'Test Name',
      email: 'test@example.com',
      body: 'Test Comment Body',
    };

    const response = await axios.post(`${API_URL}/comments`, newComment);

    expect(response.status).toBe(201);
    expect(response.data).toMatchObject(newComment);
    expect(response.data).toHaveProperty('id');
  });

  test('GET /comments?postId=1 should return comments for post 1', async () => {
    const response = await axios.get(`${API_URL}/comments`, {
      params: { postId: 1 },
    });

    expect(response.status).toBe(200);
    expect(Array.isArray(response.data)).toBe(true);
    expect(response.data[0]).toHaveProperty('postId', 1);
  });
});
