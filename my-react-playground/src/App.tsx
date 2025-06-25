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
      </Routes>
    </BrowserRouter>
  )
}

export default App
