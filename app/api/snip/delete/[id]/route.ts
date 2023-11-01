import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const DELETE = async (req, { params }) => {
  const { id } = params;
  const update = await prisma.snippet.delete({ where: { id: id } });
  try {
    return new Response(JSON.stringify(update), { status: 201 });
  } catch (err) {
    console.log(err);
    return new Response("Failed to delete snippet", { status: 500 });
  }
};
