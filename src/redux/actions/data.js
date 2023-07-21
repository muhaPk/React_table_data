import axios from "axios"
import {setPosts, setCurrentPosts} from "../reducers/dataReducer"

export const getPosts = () => {
    return async (dispatch) => {
        try {
            axios.get('https://jsonplaceholder.typicode.com/posts')
                .then(({data}) => {
                    dispatch(setPosts(data))
                    dispatch(setCurrentPosts(data?.slice(0, 10)))
                })
        }
        catch (error) {
            console.log('getPosts', error)
        }
    }

}
