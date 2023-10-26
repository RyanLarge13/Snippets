import Snippet from "@/components/Snippet";
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
    <div className="px-3 lg:px-40">
      {allSnippets.map((snip) => (
        <div className="p-3 rounded-md shadow-lg my-10 bg-black bg-opacity-20 backdrop-blur-sm">
          <h2 className="text-2xl font-semibold text-purple-100">{snip.title}</h2>
          <p className="mt-1 max-w-[400px] p-3 bg-slate-900 rounded-sm shadow-lg">{snip.summary}</p>
          <Snippet text={snip.code} language={snip.language} user="RyanLarge" />
        </div>
      ))}
    </div>
  );
};

export default Snipz;
