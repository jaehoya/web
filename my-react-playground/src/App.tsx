import { BrowserRouter, Routes, Route } from 'react-router-dom'

//Components
import Counter from './pages/index/components/counter/Counter'
import Calculater from './pages/index/components/calculater/Calculater'

//Pages
import MainPage from './pages/index/index'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/calculater" element={<Calculater />} />
        {/* nav.json 기반 라우트 */}
        <Route path="/search/edit" element={<MainPage />} />
        <Route path="/search/following" element={<MainPage />} />
        <Route path="/search/photoPlus" element={<MainPage />} />
        <Route path="/search/oneColor" element={<MainPage />} />
        <Route path="/search/3dRender" element={<MainPage />} />
        <Route path="/search/nature" element={<MainPage />} />
        <Route path="/search/texture" element={<MainPage />} />
        <Route path="/search/interior" element={<MainPage />} />
        <Route path="/search/film" element={<MainPage />} />
        <Route path="/search/experimental" element={<MainPage />} />
        <Route path="/search/travel" element={<MainPage />} />
        <Route path="/search/sports" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
