import request from 'supertest';
import { app } from '../../app';

it('should fail when email that does not exist is supplied', async () => {
    await request(app)
    .post('/api/users/signin')
    .send({
        email: 'test@test.com',
        password: 'password'
    })
    .expect(400)
})

it('should fail if password is correct', async () => {
    await request(app)
    .post('/api/users/signin')
    .send({
        email: 'test@test.com',
        password: 'password'
    })
    .expect(201)


await request(app)
.post('/api/users/signin')
.send({
    email: 'test@test.com',
    password: 'password1234'
})
.expect(400)
});

it('should pass if email and password are correct', async () => {
    await request(app)
    .post('/api/users/signin')
    .send({
        email: 'test@test.com',
        password: 'password'
    })
    .expect(201)


await request(app)
.post('/api/users/signin')
.send({
    email: 'test@test.com',
    password: 'password1234'
})
.expect(200)
});