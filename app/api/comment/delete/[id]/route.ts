import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const DELETE = async (req, { params }) => {
  const { id } = params;
  try {
    const deletedComment = await prisma.comment.delete({
      where: {
        id: id,
      },
    });
    if (deletedComment) {
      return new Response(JSON.stringify(deletedComment), { status: 201 });
    } else {
      return new Response("Failed to delete comment", { status: 500 });
    }
  } catch (err) {
    return new Response("Failed to delte comment", { status: 500 });
  }
};
