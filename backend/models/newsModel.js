const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

function getAllNews() {
    return prisma.news.findMany({ orderBy: { date: 'desc' } });
}

function createNews(title, content) {
    return prisma.news.create({ data: { title, content } });
}

function deleteNews(id) {
    return prisma.news.delete({ where: { id: Number(id) } });
}

module.exports = { getAllNews, createNews, deleteNews };