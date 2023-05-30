import request from "./request";

const ENDPOINT = "api/book"

const getAll = async (params) => {
    const url = `${ENDPOINT}`
    return request.get(url, {params}).then((res)=>{
        return res;
    })
}

const searchBook = async (searchText) => {
    const url = `${ENDPOINT}/search?keyword=${searchText}`
    return request.get(url).then((res)=>{
        return res;
    })
}

const getById = async (id) => {
    const url = `${ENDPOINT}/byId?id=${id}`
    return request.get(url).then((res)=>{
        return res;
    })
}

const deleteBook = async (id) => {
    const url = `${ENDPOINT}?id=${id}`
    return request.delete(url).then((res)=>{
        return res;
    })
}

const bookService = {getAll,searchBook,getById,deleteBook}

export default bookService