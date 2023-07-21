import React from 'react';
import {Users} from '../../Components/Users/Users'
import {Pagination} from "../../Components/Pagination/Pagination";
import {Search} from "../../Components/Search/Search";
import style from "./home.module.scss"

export const Home = () => {

    return (
        <div className={style.container}>
            <Search />
            <Users />
            <Pagination />
        </div>

    );
}
