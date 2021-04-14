import React, {useEffect, useState} from 'react';
import {Container, Button} from "react-bootstrap";
import {getData} from "../service/api-service";
import 'bootswatch/dist/sketchy/bootstrap.min.css';
import './App.scss';
import Post from "./Post";

const App = () => {
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
            >
                Show
            </Button>
        </div>
    )
}

export default App;