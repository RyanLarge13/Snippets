import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const POST = async (req) => {
    const { userId, title, summary, code, language } = await req.json();
    const mySnip = {
        userId,
        title,
        summary,
        language,
        code
    }
  try {
    const newSnip = await prisma.snippet.create({
        data: mySnip
    });
    return new Response(JSON.stringify(newSnip), { status: 201 });
  } catch (err) {
    console.log(err);
    return new Response("Failed to create a new snippet", { status: 500 });
  }
};