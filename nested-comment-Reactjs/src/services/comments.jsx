import { makerequest } from "./makeRequest";

export function createComment({ post_id, message, parent_id }) {
  const user_id = 1;
  return makerequest(`api/Createcomment`, {
    method: "POST",
    data: { message, parent_id, post_id, user_id },
  });
}
