import { currentUser } from "@clerk/nextjs";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import Snippet from "@/components/Snippet";
import { BsFillTrashFill } from "react-icons/bs";
import { BiSolidMessageSquareEdit } from "react-icons/bi";

const Profile = async () => {
  const user = await currentUser();
  const getUserSnippets = async () => {
    "use server";
    const snippets = await prisma.snippet.findMany({
      where: { userId: user.id },
      include: { likes: true, comments: true, favorites: true },
    });
    return snippets;
  };

  const userSnippets = await getUserSnippets();

  return (
    <div className="px-3 lg:px-40">
      <h2 className="text-3xl mt-3 font-semibold">{`${user.firstName} ${user.lastName}`}</h2>
      <div>
        {userSnippets.map((snip) => (
          <div className="p-3 rounded-md shadow-lg my-10 bg-black bg-opacity-20 backdrop-blur-sm">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-2xl font-semibold text-purple-100">
                {snip.title}
              </h2>
              <div className="flex justify-center items-center gap-x-3">
                <button>
                  <BiSolidMessageSquareEdit className="text-lg text-green-200" />
                </button>
                <button>
                  <BsFillTrashFill className="text-red-300" />
                </button>
              </div>
            </div>
            <p className="mt-1 max-w-[400px] p-3 bg-slate-900 rounded-sm shadow-lg">
              {snip.summary}
            </p>
            <Snippet
              snipId={snip.id}
              text={snip.code}
              language={snip.language}
              user={`${user.firstName}${user.lastName}`}
              comments={snip.comments}
              likes={snip.likes}
              favs={snip.favorites}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
