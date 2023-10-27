import {
  AiOutlineExpandAlt,
  AiOutlineShareAlt,
  AiFillLike,
  AiFillStar,
  AiOutlineStar,
} from "react-icons/ai";
import { FaComments } from "react-icons/fa";
import Highlighter from "./Highlighter";
import CopyToClipboard from "./CopyToClipboard";

type SnippetProps = {
  text: string;
  language: string;
  user: string;
};

const Snippet = ({ text, language, user }: SnippetProps) => {
  return (
    <div className="mt-10 bg-gray-900 rounded-md shadow-lg">
      <div className="flex justify-between items-center px-3 py-1">
        <p className="text-green-400">{`~$${user} _`} </p>
        <div className="flex gap-x-2">
          <CopyToClipboard text={text} />
          <button>
            <AiOutlineExpandAlt />
          </button>
          <button>
            <AiOutlineStar />
          </button>
        </div>
      </div>
      <Highlighter code={text} language={language} />
      <div className="px-3 py-2 flex justify-between items-center">
        <div className="flex gap-x-2 font-semibold justify-center items-center">
          <p>246</p>
          <FaComments />
        </div>
        <div className="flex gap-x-2 font-semibold justify-center items-center">
          <p>1.2k</p>
          <AiFillLike />
        </div>
      </div>
    </div>
  );
};

export default Snippet;
