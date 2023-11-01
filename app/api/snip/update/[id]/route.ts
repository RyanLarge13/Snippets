import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const POST = async (req, { params }) => {
  const { id } = params;
  const request = await req.json();
  const { title, summary, language, code } = request;
  const update = await prisma.snippet.update({
    where: { id: id },
    data: {
      title: title,
      summary: summary,
      language: language,
      code: code,
    },
  });
  try {
    return new Response(JSON.stringify(update), { status: 201 });
  } catch (err) {
    console.log(err);
    return new Response("Failed to create a new prompt", { status: 500 });
  }
};
