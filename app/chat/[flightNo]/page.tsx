import prisma from "@/prisma/prisma"

async function getChatData(flightNo: string) {
    const chat = await prisma.chat.findFirst({
        where: {
            flightNo
        },
        orderBy: {
            createdAt: 'desc'
        }
    });
    if(chat) return chat;
    return await prisma.chat.create({
        data: {
            flightNo,
        }
    })
}

export default async function Chat({ params } : { params: { flightNo: string } }) {
    const chatData = await getChatData(params.flightNo);
    return (
        <>
            <h1>
                Still in development!
            </h1>
        </>
    )
}