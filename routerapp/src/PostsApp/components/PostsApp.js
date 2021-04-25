import React, {useEffect, useState} from 'react';
import {Container, Button} from "react-bootstrap";
import {getData} from "../service/apiservice";
import './bootstrap.min.css'
import './Posts.scss';
import Loader from "react-loader-spinner";
import Post from "./Post";

const PostsApp = () => {
    const [posts, setPosts] = useState([])
    const [authors, setAuthors] = useState([])
    const [postsLimit, setPostsLimit] = useState(5)

    useEffect(() => {
        getData('posts').then(setPosts);
        getData('users').then(setAuthors);
    }, [])

    const setNewPostsLimits = () => {
        setPostsLimit(postsLimit => postsLimit + 5)
    }

    return (
        <div className="posts-wrapper">
            {posts.length && authors.length > 0 ?
                <div className='posts-container'>
                <Container className="posts-container">
                    {posts.map((post) =>
                        <Post key={post.id}
                              title={post.title}
                              content={post.body}
                              {...authors[post.userId - 1]}
                        />
                    ).slice(0, postsLimit)
                    }
                </Container>
                <Button variant="outline-success"
                        className="btn btn-outline-success"
                        onClick={setNewPostsLimits}
                        size='lg'
                >Show</Button>
                </div>
                :
                <Loader
                    className="posts-loader"
                type="Puff"
                color="#238C47"
                height={150}
                width={150}
                />
            }
        </div>
    )
}

export default PostsApp;