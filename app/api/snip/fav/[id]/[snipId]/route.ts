import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const POST = async (req, { params }) => {
  console.log("In server");
  const { id, snipId } = params;
  const newLike = {
    userId: id,
    snippetId: snipId,
  };
  const update = await prisma.favorite.create({ data: newLike });
  try {
    return new Response(JSON.stringify(update), { status: 201 });
  } catch (err) {
    console.log(err);
    return new Response("Failed to create a new prompt", { status: 500 });
  }
};
