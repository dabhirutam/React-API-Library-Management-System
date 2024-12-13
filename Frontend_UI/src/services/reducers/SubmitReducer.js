
const intialState = {
    books: [],
    book: null,
    isCreated: false,
    isUpadated: false,
    isDelete: false,
    deleteId: null,
    isLoading: false,
    errMsg: null,
    isError: false
}

const SubmitReducer = (state = intialState, action) => {
    switch (action.type) {

        case "view_book_suc":
                return{
                    ...state,
                    books: action.payload,
                    isCreated: false,
                    isUpadated: false,
                    isDelete: false,
                    isLoading: false,
                    isError: false,
                    deleteId: null,
                    book: null,
                    errMsg: null
                }

        case "book_rej":
            return{
                ...state,
                errMsg: action.payload,
                isError: true,
                isLoading: false
            }

        case "add_book_suc":
            return{
                ...state,
                isCreated: true
            }

        case "single_book_suc":
            return{
                ...state,
                book: action.payload
            }

        case "upadate_book_suc":
            return{
                ...state,
                isUpadated: true
            }

        case "delete_book_conform":
            return{
                ...state,
                isDelete: true,
                deleteId: action.payload
            }

        case "delete_book_suc":
            return{
                ...state,
                isDelete: false,
                deleteId: null
            }

        case "view_loading":
            return{
                ...state,
                isLoading: true
            }

        default:
            return state;
    }
}

export default SubmitReducer;