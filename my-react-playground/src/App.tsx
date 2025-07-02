import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

//Components
import Counter from './pages/index/components/counter/Counter'
import Calculater from './pages/index/components/calculater/Calculater'

//Pages
import MainPage from './pages/index/index'
import BookmarkPage from './pages/bookmark/index'

function App() {
   return (
      <BrowserRouter>
         <Toaster
            position="top-center"
            toastOptions={{
               style: {
                  background: '#222',   // 검은색 배경
                  color: '#fff',        // 흰색 글씨
               },
               duration: 1500,        // 1.5초 후에 사라짐
            }}
         />
         <Routes>
            <Route index element={<MainPage />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/calculater" element={<Calculater />} />
            {/* nav.json 기반 라우트 */}
            <Route path="/search/:id" element={<MainPage />} />
            <Route path="/bookmark" element={<BookmarkPage />} />
         </Routes>
      </BrowserRouter>
   )
}

export default App
