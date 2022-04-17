import "../../../api";
import api from "../../../api";

export function fetchWaiters() {
  return api.get("waiters");
}

export function fetchWaiter(id) {
  return api.get("waiters?id=" + id);
}

export function addWaiter(name) {
  return api.post("waiters" , {
    name
  })
}