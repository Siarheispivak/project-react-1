import React from 'react';
import s from './Profile.module.css';

const Profile = () => {
    return <div className={s.content}>
        <div>
            <img src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg'></img>
        </div>
        <div>
            ava + description
            {/* <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYtfZRhbGQtq2BapB2MXJfWIO2QriO5Wx3qQ&usqp=CAU'></img> */}
        </div>
        <div>
            My posts
            <div>
                new posts
            </div>
            <div className={s.posts}>
                <div className={s.item}>
                    post 1
                </div>
                <div className="item">
                    post 2
                </div>
            </div>

        </div>
    </div>
}

export default Profile;