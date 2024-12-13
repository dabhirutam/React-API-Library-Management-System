import { ApiBaseURL } from "../helper/ApiBaseURL";

export const ViewBookSuc = (data) => {
    return{
        type: 'view_book_suc',
        payload: data
    }
} 

export const BookRej = (msg) => {
    return{
        type: 'book_rej',
        payload: msg
    }
} 

export const AddBookSuc = (data) => {
    return{
        type: 'add_book_suc',
        payload: data
    }
} 

export const SingleBookSuc = (data) => {
    return{
        type: 'single_book_suc',
        payload: data
    }
} 

export const UpadateBookSuc = () => {
    return{
        type: "upadate_book_suc",
    }
}

export const DeleteBookConform = (id) => {
    return{
        type: "delete_book_conform",
        payload: id
    }
}

export const DeleteBookSuc = () => {
    return{
        type: "delete_book_suc",
    }
}

export const ViewLoading = () => {
    return{
        type: "view_loading",
    }
}

export const ViewBookAsync = () => {
    return disptch => {
        disptch(ViewLoading());

        ApiBaseURL.get('/books').then(res => {
            disptch(ViewBookSuc(res.data));
        }).catch(err => {
            disptch(BookRej(err.message));
        })
    } 
}

export const AddBookAsync = (data) => {
    return disptch => {
        ApiBaseURL.post('/books', data).then(res => {
            disptch(AddBookSuc(res.data));
        }).catch(err => {
            disptch(BookRej(err.message));
        })
    } 
}

export const SingleBookAsync = (id) => {
    return disptch => {
        ApiBaseURL.get(`/books/${id}`).then(res => {
            disptch(SingleBookSuc(res.data));
        }).catch(err => {
            disptch(BookRej(err.message));
        })
    } 
}

export const UpadateBookAsync = (data) => {
    return disptch => {
        // eslint-disable-next-line no-unused-vars
        ApiBaseURL.put(`/books/${data.id}`, data).then(res => {
            disptch(UpadateBookSuc());
        }).catch(err => {
            disptch(BookRej(err.message));
        })
    } 
}

export const DeleteBookAsync = (id) => {
    return disptch => {
        // eslint-disable-next-line no-unused-vars
        ApiBaseURL.delete(`/books/${id}`).then(res => {
            disptch(ViewBookAsync());
            disptch(DeleteBookSuc());
        }).catch(err => {
            disptch(BookRej(err.message));
        })
    } 
}