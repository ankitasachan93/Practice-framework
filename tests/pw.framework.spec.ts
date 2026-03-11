import {test, expect} from '@playwright/test'
import {ApiHelper} from '../helpers/api.helpers'
import {UserData} from '../data/todos.data'






// -tests--------------------------------------------------------

test.describe('Todo API', () => {

    let api: ApiHelper

    test.beforeEach(async({request}) => {
        api = new ApiHelper(request)

    })

    test ('Get Todo List', async () => {
    
    const response = await api.getRequest(UserData.urls.todos)
    const body = await response.json()

    expect(response.status()).toBe(200)
    expect(body).toHaveLength(200)
    console.log(body)
})

    test(`Get the details`, async() => {
    
    const response = await api.getRequest(UserData.urls.todoById(1))
    const body = await response.json()
    
    expect(response.status()).toBe(200)
    expect(body).toHaveProperty('id')
    expect(body).toHaveProperty( 'userId')
    expect(body).toHaveProperty( 'title')
    expect(body).toHaveProperty( 'completed')
    expect(body.id).toBe(UserData.EXPECTED_TODO.id)
    expect(body.userId).toBe(UserData.EXPECTED_TODO.userId)
    expect(body.completed).toBe(UserData.EXPECTED_TODO.completed)
    expect (typeof body.title).toBe('string')
    console.log(body)
    
})

test('Post/todos', async() => {
    
    const response = await api.postRequest(UserData.urls.todos, UserData.NEW_TODO)

    const body = await response.json()
    expect(response.status()).toBe(201)    
    expect(body).toHaveProperty('id')
    expect(body.title).toEqual(UserData.NEW_TODO.title)
    expect(body.completed).toEqual(UserData.NEW_TODO.completed)
    console.log(body)

})

test('Fully update a todo', async() => {
    
    const response = await api.putRequest(UserData.urls.todoById(1), UserData.UPDATED_TODO)

    const body = await response.json()
    expect(response.status()).toBe(200)
    expect(body.title).toEqual(UserData.UPDATED_TODO.title)
    expect(body.completed).toBe(UserData.UPDATED_TODO.completed)
    expect(body.id).toEqual(UserData.UPDATED_TODO.id)
    console.log(body)

})

test('Patch title', async() => {

    
    const response = await api.patchRequest(UserData.urls.todoById(1), UserData.PATCHED_TODO)

    const body = await response.json()
    expect(response.status()).toBe(200)
    expect(body.title).toEqual(UserData.PATCHED_TODO.title)
    console.log(body)

})

test('Delete', async() => {
    
    const response = await api.deleteRequest(UserData.urls.todoById(1))

    
    const body = await response.json()
    expect(response.status()).toBe(200)
    expect(body).toEqual({})

})


})




