let state = {

    dialogsPage: {
        contacts: [
            {id: 1, name: 'Dmitry'},
            {id: 2, name: 'Sasha'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Valera'},
            {id: 5, name: 'Viktor'}
        ],
        message: [
            {id: 1, message: 'Lorem ipsum dolor sit amet.'},
            {id: 2, message: 'Lorem ipsum dolor sit amet, consectetur adipisicing.'},
            {id: 3, message: 'Lo ipsum dolor sit amet, consectetur adipisicing elit. Nemo, rem!'}
        ],
    },
    profilePage: {
        posts: [
            {id: 1, postText: 'It is my first post', likeCounter: '10'},
            {id: 2, postText: 'It is my two post', likeCounter: '5'},
        ]
    }
}

export default state;