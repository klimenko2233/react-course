import {useEffect} from "react";
import {postSliceActions} from "../redux/slices/post-slice/postSlice.ts";
import {useAppSelector} from "../redux/hooks/useAppSelector.tsx";
import {useAppDispatch} from "../redux/hooks/useAppDispatch.tsx";

export const PostsPage = () => {
    const {posts} = useAppSelector(({postSlice}) => postSlice);
    const dispatch = useAppDispatch();
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => dispatch(postSliceActions.loadPosts(data)))
    }, []);
    return (
        <div>
            {
                posts.map(post => <div key={post.id}>{post.title}</div>)
            }
        </div>
    );
};