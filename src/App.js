import './App.css'
import Home from './components/Home'
import { CoffeeContextProvider } from './contexts/CoffeeContext'

function App() {
  return (
    <CoffeeContextProvider>
      <Home />
    </CoffeeContextProvider>
  )
}

export default App
