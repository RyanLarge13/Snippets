import { AiOutlineExpandAlt } from "react-icons/ai";
import { currentUser } from "@clerk/nextjs";
import { FaComments } from "react-icons/fa";
import Highlighter from "./Highlighter";
import CopyToClipboard from "./CopyToClipboard";
import LikeSnippet from "./LikeSnippet";
import UnLikeSnippet from "./UnlikeSnip";
import UnFavoriteSnip from "./UnFavoriteSnip";
import FavoriteSnip from "./FavoriteSnip";
import Comments from "./Comments";

type SnippetProps = {
  snipId: string | Boolean;
  text: string;
  language: string;
  user: string;
  comments:
    | { id: string; userId: string; comment: string; snippetId: string }[]
    | number;
  likes: { id: string; userId: string; snippetId: string }[] | number;
  favs: { id: string; userId: string; snippetId: string }[];
};

const Snippet = async ({
  snipId = false,
  text,
  language,
  user,
  comments,
  likes,
  favs,
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
          {favs.some((fav) => fav.userId === id) ? (
            <UnFavoriteSnip
              favId={favs.filter((fav) => fav.userId === id)[0].id}
            />
          ) : (
            <FavoriteSnip userId={id} snipId={snipId ? snipId : false} />
          )}
        </div>
      </div>
      <Highlighter code={text} language={language} />
      <div className="px-3 py-2 flex justify-between items-center">
        <div className="flex gap-x-2 font-semibold justify-center items-center">
          {Array.isArray(comments) ? (
            <p>{comments.length}</p>
          ) : (
            <p>{comments}</p>
          )}
          <FaComments />
        </div>
        <div className="flex gap-x-2 font-semibold justify-center items-center">
          {Array.isArray(likes) ? <p>{likes.length}</p> : <p>{likes}</p>}
          {Array.isArray(likes) && likes.some((like) => like.userId === id) ? (
            <UnLikeSnippet
              likeId={likes.filter((like) => like.userId === id)[0].id}
            />
          ) : (
            <LikeSnippet userId={id} snipId={snipId ? snipId : false} />
          )}
        </div>
      </div>
      {/* {Array.isArray(comments) && <Comments comments={comments} />} */}
    </div>
  );
};

export default Snippet;
