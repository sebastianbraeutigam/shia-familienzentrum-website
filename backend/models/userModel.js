const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

async function createUser(email, hashpassword) {
    return prisma.user.create({data: { email, password: hashpassword } });
}

async function findUserByEmail(email) {
    return prisma.user.findUnique({ where: { email } });
}

module.exports = { createUser, findUserByEmail };