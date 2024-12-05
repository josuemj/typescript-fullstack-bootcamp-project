import request from 'supertest';

describe('GET /api/products', () => {
  it('should return a list of products', async () => {
    const response = await request('http://localhost:5001')
      .get('/api/products/')
      .expect(200); // Expect a 200 status code

    // Ensure response is an array
    expect(Array.isArray(response.body)).toBe(true);

    // Optionally check the first product (if the array isn't empty)
    if (response.body.length > 0) {
      expect(response.body[0]).toHaveProperty('id');
      expect(response.body[0]).toHaveProperty('name');
      expect(response.body[0]).toHaveProperty('price');
    }
  });
});
