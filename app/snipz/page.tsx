import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
// import { PrismaClient } from '@prisma/client/edge'
// const prisma = new PrismaClient()

const Snipz = async () => {
  const getAllSnippets = async () => {
  	"use server"
    const snippets = await prisma.snippet.findMany();
    return snippets;
  };
  
  const allSnippets = await getAllSnippets()
  
  return (
    <div>
      <p>snipz</p>
      {allSnippets.map((snip) => (
        <div><p>{snip.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Snipz;
