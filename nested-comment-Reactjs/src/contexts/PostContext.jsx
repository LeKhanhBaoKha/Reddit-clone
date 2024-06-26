import React, { useContext, useMemo } from "react";
import { useAsync } from "../hooks/useAsync";
import { getPost } from "../services/posts";
import { useParams } from "react-router-dom";
const Context = React.createContext();

export function usePost() {
  return useContext(Context);
}

export function PostProvider({ children }) {
  const { id } = useParams();
  const { loading, error, value: post } = useAsync(() => getPost(id), [id]);
  const commentsByParentId = useMemo(() => {
    if (post?.comments == null) return [];
    const group = {};
    post.comments.forEach((comment) => {
      group[comment.parent_id] ||= [];
      group[comment.parent_id].push(comment);
    });
    return group;
  }, [post?.comments]);

  function getReplies(parentId) {
    return commentsByParentId[parentId];
  }

  return (
    <Context.Provider
      value={{
        post: { id, ...post },
        rootComments: commentsByParentId[null],
        getReplies,
      }}
    >
      {children}
    </Context.Provider>
  );
}
