const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const UserData={

    urls: {
        todos:    `${BASE_URL}/todos`,
        todoById: (id: number) => `${BASE_URL}/todos/${id}`,
    },


     NEW_TODO : {
         userId: 1, 
         title: 'My first todo', 
         completed: false
        
        },

    UPDATED_TODO:{
                id: 1,
                userId:1,
                title: 'Updated todo title',
                completed: true
            },

    PATCHED_TODO : {
        title: 'Patched todo title'

    },

    EXPECTED_TODO: {
        id:        1,
        userId:    1,
        completed: false

    },

    VALID_TODO: [
        { userId: 1, title: 'Buy groceries',  completed: false },
        { userId: 2, title: 'Walk the dog',   completed: true  },
        { userId: 3, title: 'Read a book',    completed: false },
    ],

    


}



