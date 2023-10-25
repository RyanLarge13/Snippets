import { currentUser } from "@clerk/nextjs";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const Profile = async () => {
  const user = await currentUser();
  const getUserSnippets = async () => {
    "use server";
    const snippets = await prisma.snippet.findMany({
      where: { userId: user.id },
    });
    console.log("Fetched SNipz: ", snippets)
    return snippets;
  };

  const userSnippets = await getUserSnippets();

  return (
    <div>
      <h1>Profile</h1>
      <h2>{user.firstName}</h2>
      <div>
        {userSnippets.map((snip) => (
          <div>
            <p>{snip.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
