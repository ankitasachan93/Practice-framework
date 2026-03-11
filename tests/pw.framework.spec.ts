import {test, expect} from '@playwright/test'
import {ApiHelper} from '../helpers/api.helpers'
import {UserData} from '../data/todos.data'


// -tests--------------------------------------------------------

test.describe('Todo API', () => {

    test ('Get Todo List', async ({request}) => {
    const api = new  ApiHelper(request)
    const response = await api.getRequest(UserData.urls.todos)
    const body = await response.json()

    expect(response.status()).toBe(200)
    expect(body).toHaveLength(200)
    console.log(body)
})

    test(`Get the details`, async({request}) => {
    const api = new ApiHelper(request)
    const response = await api.getRequest(UserData.urls.todoById(1))
    const body = await response.json()
    
    expect(response.status()).toBe(200)
    expect(body).toHaveProperty('id')
    expect(body).toHaveProperty( 'userId')
    expect(body).toHaveProperty( 'title')
    expect(body).toHaveProperty( 'completed')
    expect(body.id).toBe(1)
    expect(body.userId).toBe(1)
    expect(body.completed).toBe(false)
    expect (typeof body.title).toBe('string')
    console.log(body)
    
})

test('Post/todos', async({request}) => {
    const api = new ApiHelper(request)
    const response = await api.postRequest(UserData.urls.todos, UserData.NEW_TODO)

    const body = await response.json()
    expect(response.status()).toBe(201)    
    expect(body).toHaveProperty('id')
    expect(body.title).toEqual('My first todo')
    expect(body.completed).toEqual(false)
    console.log(body)

})

test('Fully update a todo', async({request}) => {
    const api = new ApiHelper(request)
    const response = await api.putRequest(UserData.urls.todoById(1), UserData.UPDATED_TODO)

    const body = await response.json()
    expect(response.status()).toBe(200)
    expect(body.title).toEqual("Updated todo title")
    expect(body.completed).toBe(true)
    expect(body.id).toEqual(1)
    console.log(body)

})

test('Patch title', async({request}) => {

    const api = new ApiHelper(request)
    const response = await api.patchRequest(UserData.urls.todoById(1), UserData.PATCHED_TODO)

    const body = await response.json()
    expect(response.status()).toBe(200)
    expect(body.title).toEqual("Patched todo title")
    console.log(body)

})

test('Delete', async({request}) => {
    const api = new ApiHelper(request)
    const response = await api.deleteRequest(UserData.urls.todoById(1))

    
    const body = await response.json()
    expect(response.status()).toBe(200)
    expect(body).toEqual({})

})


})




