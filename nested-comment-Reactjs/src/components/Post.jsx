import { usePost } from "../contexts/PostContext";
import { useAsyncFn } from "../hooks/useAsync";
import { createComment } from "../services/comments";
import { CommentForm } from "./CommentForm";
import { CommentList } from "./CommentList";

export function Post() {
  const { post, rootComments } = usePost();
  const {
    loading,
    error,
    execute: createCommentFn,
  } = useAsyncFn(createComment);

  function onCommentCreate(message) {
    return createCommentFn({ post_id: post.id, message, parent_id: null }).then(
      (comment) => {
        console.log(comment);
      }
    );
  }

  console.log("post in post", post);
  console.log("rootComments", rootComments);

  return (
    <>
      <h1>{post.title}</h1>
      <article>{post.body}</article>
      <h3>Comments</h3>
      <section>
        <CommentForm
          loading={loading}
          error={error}
          onSubmit={onCommentCreate}
        />
        {rootComments != null && rootComments.length > 0 && (
          <div className="mt-4">
            <CommentList comments={rootComments}></CommentList>
          </div>
        )}
      </section>
    </>
  );
}
