import request from 'supertest';
import app from '../src/server';

describe('Example Endpoints', () => {
  it('this is a example of integration test', async () => {
    const res = await request(app).get('/');

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('hello');
  });
});

afterAll(() => app.close());