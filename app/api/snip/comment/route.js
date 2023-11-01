import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const POST = async (req) => {
  const request = await req.json();
  const { comment, userId, snippetId } = request;
  const newComment = {
    comment,
    userId,
    snippetId,
  };
  try {
    const commentPosted = await prisma.comment.create({ data: newComment });
    if (commentPosted) {
      return new Response(JSON.stringify(update), { status: 201 });
    }
    if (!commentPosted) {
      return new Response("Failed to create a new prompt, prisma error", {
        status: 500,
      });
    }
  } catch (err) {
    return new Response("Failed to create a new prompt", { status: 500 });
  }
};
