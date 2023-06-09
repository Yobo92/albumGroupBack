import request from 'supertest';
import { app } from '../../app';

it('returns 201 on successful signup', async () => {
    return request(app)
    .post('/api/users/signup')
    .send({
        email: 'test@test.com',
        password: 'password'
    })
    .expect(201)
})


it('returns a 400 with invalid email', async() => {
    return request(app)
    .post('/api/users/signup')
    .send({
        email: 'fdada',
        password: 'password'
    })
    .expect(400)
})

it('returns a 400 with invalid password', async() => {
    return request(app)
    .post('/api/users/signup')
    .send({
        email: 'test@test.com',
        password: 'a'
    })
    .expect(400)
})

it('returns a 400 with no email or password', async() => {
   await request(app)
    .post('/api/users/signup')
    .send({
        email: 'fdada'
    })
    .expect(400)

    await request(app)
    .post('/api/users/signup')
    .send({
        password: 'password'
    })
    .expect(201);
})

it('Disallows duplicate emails', async () => {
    await request(app)
    .post('/api/users/signup')
    .send({
        email: 'test@test.com',
        password: 'password'
    })
    .expect(400)
})