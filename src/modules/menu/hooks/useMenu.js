import { useEffect, useState } from "react";
import { apiDelItemMenu, fetchMenu, apiPostMenu, apiUpdateItemMenu } from "../services/menuService";


export default function useMenu() {
    const [menuList, setMenuList] = useState([]);

    useEffect(() => {
        fetchMenu().then(({data}) => setMenuList(data))
    }, []);

    function addMenu (name, price){
        apiPostMenu(name, price).then(({data}) => {
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
    
    function updateItemMenu(id) {
        apiUpdateItemMenu(id).then(({data}) => {
            console.log(data)
        })
    }

    return {
        menuList,
        addMenu,
        deleteItemMenu,
        updateItemMenu
    }
}