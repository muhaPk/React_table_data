import React, {useEffect} from "react";
import style from "./users.module.scss";
import {User} from "../User/User";
import {useDispatch, useSelector} from "react-redux";
import {getPosts} from "../../redux/actions/data";
import {sortCurrentPostsById} from "../../redux/reducers/dataReducer"
import arrow from "../../../src/assets/icons/arrow.png"

export const Users = () => {

    const { loading, currentPosts } = useSelector(state => state.data)

    const dispatch = useDispatch()

    useEffect(() => {
        if (!loading) { dispatch(getPosts()); }
    }, [loading, dispatch]);

    if (!loading) {
        return (<div className={style.container}><p className={style.loading}>Loading...</p></div>);
    }

    const sort = () => dispatch(sortCurrentPostsById())

  return (
      <div className={style.container}>


          <div className={style.itemData}>
              <div onClick={sort}>ID <img src={arrow} width='12' height='7' alt="arrow" /></div>
              <div onClick={sort}>Заголовок <img src={arrow} width='12' height='7' alt="arrow" /></div>
              <div onClick={sort}>Описание <img src={arrow} width='12' height='7' alt="arrow" /></div>
          </div>

          {
              !currentPosts.length ? <div className={style.itemNoData}>not found..</div>

              : currentPosts.map(({id, title, body}, i) => {

                  return <User key={i} id={id} title={title} body={body} />
              })
          }
      </div>
  );
}
