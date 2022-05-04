import "../../../api";
import api from "../../../api";

export function fetchWaiters() {
  return api.get("waiters");
}

export function fetchWaiter(id) {
  return api.get("waiters?id=" + id);
}

export function postWaiter(name) {
  return api.post("waiters", {
    name,
  });
}

export function apiDelWaiter(id) {
  return api.delete("waiters/" + id)
}

export function apiUpdateWaiter(id, name){
  return api.put("waiters/" + id, {
    name,
  })
}
