import React from 'react';
import s from './MyPosts.module.css';
import Post from './postt/Post';

const MyPosts = (props) => {
    return <div>
        My posts
        <div>
            <textarea></textarea>
            <button>Add post</button>

        </div>
        <div className={s.posts}>
            <Post message='How are you?' likeCounts='11' />
            <Post message="It ' s my first post" likeCounts='22' />

        </div>

    </div >

}

export default MyPosts;