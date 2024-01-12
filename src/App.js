import {BrowserRouter, Route} from 'react-router-dom'
import Home from './component/Home/index'
import Editor from './component/Editor/index'
import './App.css'

const App = () => (
  <BrowserRouter>
    <Route exact path="/" component={Home} />
    <Route exact path="/editor" component={Editor} />
  </BrowserRouter>
)

export default App
