import { useEffect, useState } from "react";
import { apiDelItemMenu, fetchMenu, postMenu } from "../services/menuService";


export default function useMenu() {
    const [menuList, setMenuList] = useState([]);

    useEffect(() => {
        fetchMenu().then(({data}) => setMenuList(data))
    }, []);

    function addMenu (name, price){
        postMenu(name, price).then(({data}) => {
            const newMenu = [...menuList, data];
            setMenuList(newMenu)
        })
    }

    function deleteItemMenu(id) {
        apiDelItemMenu(id).then(({data}) => {
            const newMenuList = menuList.filter((item) => item.id !== id)
            setMenuList(newMenuList)
        })
    }
    

    return {
        menuList,
        addMenu,
        deleteItemMenu
    }
}