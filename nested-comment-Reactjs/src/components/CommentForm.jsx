import { useState } from "react";

export function CommentForm({
  loading,
  error,
  onSubmit,
  autoFocus = false,
  initialValue = "",
}) {
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(message).then(() => setMessage(""));
  }
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="flex flex-col gap-3">
        <input
          autoFocus={autoFocus}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="What are your thoughts?"
          className=" border-[1px] border-zinc-400 p-4 w-3/4 rounded-full"
        ></input>{" "}
        <button
          className="border-[1px] rounded-full border-zinc-400 w-[150px]"
          type="submit"
          disabled={loading}
          // onClick={() => createcComment()}
        >
          {loading ? "Loading" : "Post"}
        </button>
      </div>
      <div className="text-red-500">{error}</div>
    </form>
  );
}
