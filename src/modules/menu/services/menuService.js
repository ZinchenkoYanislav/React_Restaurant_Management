import "../../../api";
import api from "../../../api";

export function fetchMenu() {
  return api.get("menu");
}

export function fetchMenuItem(id) {
  return api.get("menu?id=" + id);
}


export function apiPostMenu(name, price) {
  return api.post("menu", {
    name,
    price,
  });
}

export function apiDelItemMenu(id) {
  return api.delete("menu/" + id);
}

export function apiUpdateItemMenu(id){
  return api.put("menu/" + id)
}

