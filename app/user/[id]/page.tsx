import { clerkClient } from "@clerk/nextjs";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

import Snippet from "@/components/Snippet";

const UserPage = async ({ params }) => {
  const user = await clerkClient.users.getUser(params.id);
  const snipz = await prisma.snippet.findMany({
    where: { userId: user.id },
    include: { comments: true, likes: true },
  });

  return (
    <section className="px-3 lg:px-40">
      <img
        src={user.imageUrl}
        alt="user"
        className="w-full rounded-sm shadow-lg md: max-w-[600px]"
      />
      <h1 className="text-3xl mt-2 text-green-300">{`~$${user.firstName}${user.lastName} _`}</h1>
      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-[-10px]">My Snippets</h2>
        <div>
          {snipz.map((snip) => (
            <div className="p-3 rounded-md shadow-lg my-10 bg-black bg-opacity-20 backdrop-blur-sm">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-2xl font-semibold text-purple-100">
                  {snip.title}
                </h2>
              </div>
              <p className="mt-1 max-w-[400px] p-3 bg-slate-900 rounded-sm shadow-lg">
                {snip.summary}
              </p>
              <Snippet
                snipId={snip.id}
                text={snip.code}
                language={snip.language}
                user={`${user.firstName + user.lastName}`}
                comments={snip.comments}
                likes={snip.likes}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UserPage;
