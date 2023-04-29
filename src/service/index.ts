import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export type UserDto = {
    firstname: string
    lastname: string
    age: number
    email: string
    password: string
    status: string
    user_type: string
}

export async function findUserByEmail(email: string) {
    return prisma.users.findUnique({
        where: {
            email: email
        }
    })
}

export async function createUser(user: UserDto) {
    return prisma.users.create({
        data: {
                firstname: user.firstname,
                lastname: user.lastname,
                age: user.age,
                email: user.email,
                password: user.password,
                status: user.status,
                user_type: user.user_type
        }
    })
}


export async function deleteUser(id: number) {
    return prisma.users.delete({
        where: {
            id
        }
    })
}

export type chatDto = {
    user_one: string,
    user_two: string,
    date: Date,
    status: string
}


export async function findChatById(id: number) {
    return prisma.chat.findUnique({
        where: {
            id
        }
    })
}

export async function createChat(chat: chatDto) {
    return prisma.chat.create({
        data: {
            user_one: chat.user_one,
            user_two: chat.user_two,
            date: chat.date,
            status: chat.status,
        }
    })
}

export async function deleteChat(id: number) {
    return prisma.chat.delete({
        where: {
            id
        }
    })
}

export type MessageDto = {
        user_id: number,
        chat_id:number,
        message: string,
        date: Date,
        status: string
}


export async function findMessageById(id: number) {
    return prisma.message.findUnique({
        where: {
            id
        }
    })
}

export async function createMessage(message: MessageDto) {
    return prisma.message.create({
        data: {
            user_id: message.user_id,
            chat_id: message.chat_id,
            message: message.message,
            date: message.date,
            status: message.status,
        }
    })
}

export async function deleteMessage(id: number) {
    return prisma.message.delete({
        where: {
            id
        }
    })
}