import './App.css';
import { Routes,BrowserRouter,Route } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About';
import ArticlesListPage from './pages/ArticlesListpage';
import ArticlePage from './pages/ArticlePage';
import Navbar from './Components/Navbar';
import Botnet from './Components/Botnet';

function App() {
  return (
<BrowserRouter>
<Navbar/>

<Botnet/>
<Routes>

<Route path='/' element={<Home/>} />
<Route path='/about' element={<About/>} />
<Route path="/articles" element={<ArticlesListPage />} />
 <Route path="/articles/:articleId" element={<ArticlePage />} />
</Routes>
</BrowserRouter>
  );
}

export default App;