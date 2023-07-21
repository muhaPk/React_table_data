import React, { useMemo} from "react";
import ReactPaginate from 'react-paginate';
import style from './pagination.module.scss';
import { useSelector, useDispatch } from "react-redux";
import {setCurrentPosts, setCurrentPage} from "../../redux/reducers/dataReducer"
import { useNavigate } from "react-router-dom"

export const Pagination = () => {

    const navigate = useNavigate();

    const dispatch = useDispatch()

    const { posts, currentPage } = useSelector(state => state.data)

    const itemsPerPage = 10

    const pageCount = useMemo(() => {
        return Math.ceil(posts?.length / itemsPerPage);
    }, [posts, itemsPerPage]);


    const handlePageClick = (event) => {
        const itemOffset = (event.selected * itemsPerPage) % posts?.length;

        const endOffset = itemOffset + itemsPerPage;
        const currentItems = posts?.slice(itemOffset, endOffset);

        dispatch(setCurrentPage(event.selected))
        dispatch(setCurrentPosts(currentItems))

        navigate(`/${++event.selected}`)
    };

    return (
        <ReactPaginate
            forcePage={currentPage}
            breakLabel="..."
            nextLabel="Далее"
            onPageChange={handlePageClick}
            pageRangeDisplayed={10}
            pageCount={pageCount}
            previousLabel="Назад"
            renderOnZeroPageCount={null}
            className={style.pagination}
        />
    )
}
