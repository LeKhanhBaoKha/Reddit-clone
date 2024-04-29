import { makerequest } from "./makeRequest";

export function getPosts() {
  return makerequest("/posts");
}
