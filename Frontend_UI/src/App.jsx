import { Route, Routes } from 'react-router'
import DeleteConformModal from './components/DeleteConformModal'
import BookHistory from './pages/BookHistory'
import AddBook from './pages/AddBook'
import EditBook from './pages/EditBook'
import ErrorMsgModal from './components/ErrorMsgModal'

function App() {

  return (
    <>
      <DeleteConformModal />
      <ErrorMsgModal />
      <Routes>
        <Route path='/' element={<BookHistory />}></Route>
        <Route path='/add' element={<AddBook />}></Route>
        <Route path='/edit/:id' element={<EditBook />}></Route>
      </Routes>
    </>
  )
}

export default App;
