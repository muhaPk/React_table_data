import React, {useCallback} from "react";
import style from "./search.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {setCurrentPosts} from "../../redux/reducers/dataReducer"

export const Search = () => {

    const { posts, currentPage } = useSelector((state) => state.data)

    const dispatch = useDispatch()

    const searchFilter = useCallback(
        (value) => {

            const start = currentPage * 10
            const end = (currentPage + 1) * 10

            const filterData = posts.filter((el) =>
                el.title.includes(value.toLowerCase()) ||
                el.body.includes(value.toLowerCase())
            );

            dispatch(setCurrentPosts( value ? filterData.slice(0, 10) : filterData.slice(start, end)))
        },
        [posts, currentPage]
    );

  return (
    <div>
      <input
        onChange={(e) => searchFilter(e.target.value)}
        placeholder="Поиск"
        className={style.search}
        autoFocus
      />

    </div>
  );
}
