import "../../../api";
import api from "../../../api";

export function fetchAllTables() {
  return api.get("tables");
}