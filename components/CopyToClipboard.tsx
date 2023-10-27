"use client"

import { BiSolidCopyAlt } from "react-icons/bi"
import copyToClipboard from "@/utils/copyToClipboard"

type Text = {
    text: string
}

const CopyToClipboard = ({text}: Text) => {
  return (
           <button onClick={() => copyToClipboard(text)}>
            <BiSolidCopyAlt />
          </button>
  )
}

export default CopyToClipboard