import { makerequest } from "./makeRequest";

export function getPosts() {
  return makerequest("api/posts");
}

export function getPost(id) {
  return makerequest(`api/posts/${id}`);
}
