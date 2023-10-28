import { AiOutlineExpandAlt, AiFillLike, AiOutlineStar } from "react-icons/ai";
import { currentUser } from "@clerk/nextjs";
import { FaComments } from "react-icons/fa";
import Highlighter from "./Highlighter";
import CopyToClipboard from "./CopyToClipboard";
import LikeSnippet from "./LikeSnippet";

type SnippetProps = {
  snipId: string;
  text: string;
  language: string;
  user: string;
  comments: { id: string; userId: string; snippetId: string }[];
  likes: { id: string; userId: string; snippetId: string }[];
};

const Snippet = async ({
  snipId,
  text,
  language,
  user,
  comments,
  likes,
}: SnippetProps) => {
  const { id } = await currentUser();

  return (
    <div className="mt-10 bg-gray-900 rounded-md shadow-lg">
      <div className="flex justify-between items-center px-3 py-1">
        <p className="text-green-400">{`~$${user} _`} </p>
        <div className="flex gap-x-2">
          <CopyToClipboard text={text} />
          <button>
            <AiOutlineExpandAlt />
          </button>
          {likes.length > 0 && likes.some((like) => like.id === id) ? (
            <LikeSnippet userId={id} snipId={snipId} />
          ) : (
            <button>
              <AiOutlineStar />
            </button>
          )}
        </div>
      </div>
      <Highlighter code={text} language={language} />
      <div className="px-3 py-2 flex justify-between items-center">
        <div className="flex gap-x-2 font-semibold justify-center items-center">
          <p>{comments.length}</p>
          <FaComments />
        </div>
        <div className="flex gap-x-2 font-semibold justify-center items-center">
          <p>{likes.length}</p>
          <AiFillLike />
        </div>
      </div>
    </div>
  );
};

export default Snippet;
