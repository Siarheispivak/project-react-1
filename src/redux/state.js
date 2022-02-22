import {rerenderEntireTree} from "../render";

let state = {

sideBar:{
    wallContacts : [
        {id: 1,name: "Sasha", icon:'https://cdn1.vectorstock.com/i/1000x1000/23/70/man-avatar-icon-flat-vector-19152370.jpg'},
        {id: 2,name: "Masha",icon:'https://cdn5.vectorstock.com/i/1000x1000/01/69/businesswoman-character-avatar-icon-vector-12800169.jpg'},
        {id: 3,name: "Denis",icon:'https://cdn1.vectorstock.com/i/1000x1000/23/70/man-avatar-icon-flat-vector-19152370.jpg'}
    ]
},


    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 12},
            {id: 2, message: 'Its my first post', likesCount: 11},
            {id: 3, message: 'blablabala', likesCount: 11},
            {id: 4, message: 'Dada', likesCount: 11}
        ]
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Siarhei', icon:'https://e7.pngegg.com/pngimages/7/618/png-clipart-man-illustration-avatar-icon-fashion-men-avatar-face-fashion-girl.png'},
            {id: 2, name: 'Viktor', icon:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS85aAO1QcnQRHY8wNzDCHAVEXdF1KkFLuxzjl_gLD3_PTGhDlHWsBpuUNgoFLi2PUh0RQ&usqp=CAU'},
            {id: 3, name: 'Alex', icon:'https://image.shutterstock.com/image-vector/water-drop-logo-design-inspiration-260nw-1171557724.jpg'},
            {id: 4, name: 'Dasha', icon:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdo4boBsY_57RC2unPmiDjW95jqA__hBL1VqouVhGHBCUlDpKVpDjI4yyFtZWb4k62Hlk&usqp=CAU'},
            {id: 5, name: 'Katya', icon:'https://thumbs.dreamstime.com/b/woman-sign-icon-transparent-style-female-avatar-vector-illustration-isolated-background-girl-face-business-concept-148686784.jpg'},
            {id: 6, name: 'Lena', icon:'https://thumbs.dreamstime.com/b/woman-avatar-profile-icon-simple-style-illustration-vector-web-83525955.jpg'}
        ],
        messages: [
            {id: 1, message: 'Hi',iconMessage:'http://surl.li/bkndf'},
            {id: 2, message: 'How',iconMessage:'http://surl.li/bkndf'},
            {id: 3, message: 'Yo',iconMessage:'http://surl.li/bkndf'},
            {id: 4, message: 'Y01',iconMessage:'http://surl.li/bkndf'},
            {id: 5, message: 'Yo2',iconMessage:'http://surl.li/bkndf'},
            {id: 6, message: 'Yo3',iconMessage:'http://surl.li/bkndf'},
        ],
        messagesRight: [
            {id: 1, message: 'Hello my friend!',iconMessage:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Eo_circle_yellow_number-1.svg/1024px-Eo_circle_yellow_number-1.svg.png'},
            {id: 2, message: 'Fine,and you?',iconMessage:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Eo_circle_yellow_number-1.svg/1024px-Eo_circle_yellow_number-1.svg.png'},
            {id: 3, message: 'Whats up?',iconMessage:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Eo_circle_yellow_number-1.svg/1024px-Eo_circle_yellow_number-1.svg.png'},
            {id: 4, message: 'Yep1',iconMessage:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Eo_circle_yellow_number-1.svg/1024px-Eo_circle_yellow_number-1.svg.png'},
            {id: 5, message: 'Yep2',iconMessage:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Eo_circle_yellow_number-1.svg/1024px-Eo_circle_yellow_number-1.svg.png'},
            {id: 6, message: 'yep3',iconMessage:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Eo_circle_yellow_number-1.svg/1024px-Eo_circle_yellow_number-1.svg.png'},
        ]}
}

export let addPost = (postMessage) => {

    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0
    };

    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
}


export default state;