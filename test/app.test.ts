import request from 'supertest';
import { describe, expect, it } from 'vitest';
import app from '../src/app';

describe('listen port 3000', () => {
	it('should respond with status 200', async () => {
		const response = await request(app).get('/');
		expect(response.status).toBe(200);
	});
});
