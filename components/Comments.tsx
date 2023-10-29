import { clerkClient } from "@clerk/nextjs";

type Comments = {
  comments: {
    id: string;
    userId: string;
    snippetId: string;
    comment: string;
  }[];
};

const Comments = ({ comments }: Comments) => {
  const getUser = async (id: string) => {
    "use sserver";
    const users = await clerkClient.users.getUserList();
    const user = users.filter((theUser) => theUser.id === id);
    return {
      name: `${user[0].firstName} ${user[0].lastName}`,
      image: user[0].imageUrl,
      id: user[0].id,
    };
  };

  return (
    <>
      {comments.length > 0 && (
        <div className="mt-3 rounded-sm p-5 bg-black max-h-[400px] overflow-auto">
          {comments.map(async (comment) => {
            const user = await getUser(comment.userId);
            return (
              <div
                key={comment.id}
                className="flex justify-between items-center bg-slate-900 rounded-sm shadow-lg py-3 px-5"
              >
                <div>
                  <a href={`/user/${user.id}`}>
                    <img
                      src={user.image}
                      alt="user"
                      className="w-[30px] h-[30px] rounded-full shadow-lg"
                    />
                  </a>

                  <p>{user.name}</p>
                </div>
                <p>{comment.comment}</p>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Comments;
