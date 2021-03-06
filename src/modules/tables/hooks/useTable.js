import { useEffect, useState } from "react";
import { fetchAllTables } from "../services/tablesService";

export default function useTable() {
    const [tableList, setTableList] = useState([]);

    useEffect(() => {
        fetchAllTables().then(({ data }) => setTableList(data));
      }, []);

      return {
          tableList
      }
}