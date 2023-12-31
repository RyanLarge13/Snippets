import Snippet from "@/components/Snippet";
import { PrismaClient } from "@prisma/client";
import { clerkClient } from "@clerk/nextjs";
import Link from "next/link";
import UserPlaceHolder from "../../assets/images/userPlaceholder.jpg";
import Comments from "@/components/Comments";
import Image from "next/image";
const prisma = new PrismaClient();
// import { PrismaClient } from '@prisma/client/edge'
// const prisma = new PrismaClient()

const Snipz = async () => {
  const getAllSnippets = async () => {
    "use server";
    const users = await clerkClient.users.getUserList();
    const getUser = (id: string) => {
      const user = users.filter((theUser) => theUser.id === id)[0];
      console.log(user);
      return {
        name: `${user?.firstName || "NULL"} ${user?.lastName || ""}`,
        image: user?.imageUrl,
      };
    };
    const snippets = await prisma.snippet.findMany({
      include: { comments: true, likes: true, favorites: true },
    });
    const snipsWithUsers = snippets.map((snip) => ({
      ...snip,
      user: getUser(snip.userId),
    }));
    return snipsWithUsers;
  };

  const allSnippets = await getAllSnippets();

  return (
    <div className="px-3 lg:px-40">
      {allSnippets.map((snip) => (
        <div className="p-3 rounded-md shadow-lg my-10 bg-black bg-opacity-20 backdrop-blur-sm">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-2xl font-semibold text-purple-100">
              {snip.title}
            </h2>
            <Link href={`/user/${snip.userId}`}>
              <img
                src={snip.user?.image}
                alt="user"
                className="w-[30px] h-[30px] rounded-full shadow-lg"
              />
            </Link>
          </div>
          <p className="mt-1 max-w-[400px] p-3 bg-slate-900 rounded-sm shadow-lg">
            {snip.summary}
          </p>
          <Snippet
            snipId={snip.id}
            text={snip.code}
            language={snip.language}
            user={snip.user.name.split(" ").join("")}
            comments={snip.comments}
            likes={snip.likes}
            favs={snip.favorites}
          />
          <Comments comments={snip.comments} snipId={snip.id} />
        </div>
      ))}
    </div>
  );
};

export default Snipz;
