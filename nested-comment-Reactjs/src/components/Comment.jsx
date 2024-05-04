import { IconBtn } from "./IconBtn";
import Heart from "./../assets/heart.svg";
import Reply from "./../assets/reply.svg";
import Edit from "./../assets/edit.svg";
import Trash from "./../assets/trash.svg";
import { usePost } from "../contexts/PostContext";
import { CommentList } from "./CommentList";
import { useState } from "react";

const dateFormatter = new Intl.DateTimeFormat(undefined, {
  dateStyle: "medium",
  timeStyle: "short",
});
const color = "text-[#3498DB]";

export function Comment({ id, message, created_at, user }) {
  const { getReplies } = usePost();
  console.log("id", id);
  const childComments = getReplies(id);
  console.log("childComments", childComments);
  const [areChilrenHidden, setAreChildrenHidden] = useState(false);
  return (
    <>
      <div className="border border-gray-400 p-4 rounded-xl mb-3 ">
        {/* header */}
        <div className="flex justify-between	">
          <span>{user.name}</span>
          <span>{dateFormatter.format(Date.parse(created_at))}</span>
        </div>

        {/* message */}
        <div>{message}</div>

        {/* footer */}
        <div className="flex gap-2">
          <IconBtn className="flex" Icon={Heart} color={color}>
            2
          </IconBtn>
          <IconBtn className="flex" Icon={Reply}></IconBtn>
          <IconBtn className="flex" Icon={Edit}></IconBtn>
          <IconBtn className="flex" Icon={Trash}></IconBtn>
        </div>
      </div>

      {/* child comment */}
      {childComments?.length > 0 && (
        <>
          <button
            aria-label="Hide replies"
            className={`m-1 px-2 py-[2px] bg-blue-400 text-white rounded-xl ${
              areChilrenHidden ? "" : "hidden"
            }`}
            onClick={() => setAreChildrenHidden(false)}
          >
            Hide Replies
          </button>
          <div
            className={`${
              areChilrenHidden ? "" : "hidden"
            } pl-[30px] border-l border-l-gray-500`}
          >
            <div>
              <CommentList comments={childComments}></CommentList>
            </div>
          </div>
          <button
            aria-label="Hide replies"
            className={`m-1 px-2 py-[2px] bg-blue-400 text-white rounded-xl ${
              areChilrenHidden ? "hidden" : ""
            }`}
            onClick={() => setAreChildrenHidden(true)}
          >
            Show Replies
          </button>
        </>
      )}
    </>
  );
}
