import React from 'react';
import s from './Post.module.css';

const Post = () => {
    return (
        <div className={s.item}>
            <img src="https://avatars.mds.yandex.net/get-zen_doc/1887828/pub_5d3f9b47c49f2900ad823712_5d4054a4c7e50c1d43bd340c/scale_1200" />
            post 1
            <div>
                <span>like</span>
            </div>

        </div>
    )

}

export default Post;