import { BrowserRouter as Router, Route, NavLink, BrowserRouter, Routes, Link } from 'react-router-dom'
import './App.css'
import Home from './pages/home/home'
import About from './pages/about/about'
import { useState } from 'react'
import Literature from './pages/literature/literature'
import Biography from './pages/literature/biography/biography'
import Persian from './pages/literature/persian/persian'
import Podcast from './pages/literature/podcast/podcast'
import World from './pages/literature/world/world'
import bale from './bale.png'
import github from './github.png'
import linkedin from './linkedin.png'
import eita from './eita.png'
import telegram from './telegram.svg'
import whatsapp from './whatsapp.png'
import Novel from './pages/novel/novel'
import Article from './article/article'
import Iranian from './pages/novel/iranian/iranian'
import Foriegn from './pages/novel/foriegn/foriegn'
import Podcast2 from './pages/novel/podcast/podcast'
import Economy from './pages/economy/economy'
import Marketing from './pages/economy/marketing/marketing'
import Management from './pages/economy/management/management'
import Podcast3 from './pages/economy/podcast/podcast'
import History from './pages/history/history'
import Iran from './pages/history/iran/iran'
import World2 from './pages/history/world/world'
import Islam from './pages/history/islam/islam'
import Podcast4 from './pages/history/podcast/podcast'
import SearchResults from './pages/search/search'
import Login from './pages/sign/login'
import Sign from './pages/sign/signin'
export default function App(){
  const[catshow,setCatshow]=useState(null)
  return(
    <div>
      <BrowserRouter basename="/books">
        <nav>
          <div className='sign'><NavLink to='./sign/login'>ثبت نام / ورود</NavLink></div>
          <h1>کتابخانه</h1>
          <div className='pages'>
            <NavLink to='/'>صفحه اصلی</NavLink>
            <NavLink className="category" onMouseEnter={()=>{setCatshow(true)}} onMouseLeave={()=>{setCatshow(false)}} to=''>دسته بندی</NavLink>
            <NavLink to='/about'>درباره ی سایت</NavLink>
          </div>
        </nav>
          <div onMouseEnter={()=>{setCatshow(true)}} onMouseLeave={()=>{setCatshow(false)}} className={catshow ? "categoryList" : "categoryclose"} >
              <div className='literature'>
                  <NavLink to='/literature' className='title'>ادبیات</NavLink>
                  <NavLink to='./literature/persian' id='subcategory'>ادبیات فارسی</NavLink>
                  <NavLink to='./literature/world' id='subcategory'>ادبیات جهان</NavLink>
                  <NavLink to='./literature/biography' id='subcategory'>زندگی نامه</NavLink>
                  <NavLink to='./literature/podcast' id='subcategory'>پادکست</NavLink>
              </div>
              <div className='novel'>
                  <NavLink to='./novel' className='title'>رمان</NavLink>
                  <NavLink to='./novel/iranian' id='subcategory'>ایرانی</NavLink>
                  <NavLink to='./novel/foriegn' id='subcategory'>خارجی</NavLink>
                  <NavLink to='./novel/podcast' id='subcategory'>پادکست</NavLink>
              </div>
              <div className='economy'>
                  <NavLink to='./economy' className='title'>اقتصاد و مدیریت</NavLink>
                  <NavLink to='./economy/marketing' id='subcategory'>بازاریابی و فروش</NavLink>
                  <NavLink to='./economy/management' id='subcategory'>مدیریت</NavLink>
                  <NavLink to='./economy/podcast' id='subcategory'>پادکست</NavLink>
              </div>
              <div className='history'>
                  <NavLink to='./history' className='title'>تاریخ</NavLink>
                  <NavLink to='./history/iran' id='subcategory'>ایران</NavLink>
                  <NavLink to='./history/world' id='subcategory'>جهان</NavLink>
                  <NavLink to='./history/islam' id='subcategory'>اسلام</NavLink>
                  <NavLink to='./history/podcast' id='subcategory'>پادکست</NavLink>
              </div>
          </div>
          
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/literature' element={<Literature/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/literature/biography' element={<Biography/>}/>
          <Route path='/literature/persian' element={<Persian/>}/>
          <Route path='/literature/podcast' element={<Podcast/>}/>
          <Route path='/literature/world' element={<World/>}/>
          <Route path='/novel' element={<Novel/>}/>
          <Route path='/article/:id' element={<Article/>}/>
          <Route path='/novel/iranian' element={<Iranian/>}/>
          <Route path='/novel/foriegn' element={<Foriegn/>}/>
          <Route path='/novel/podcast' element={<Podcast2/>}/>
          <Route path='/economy' element={<Economy/>}/>
          <Route path='/economy/marketing' element={<Marketing/>}/>
          <Route path='/economy/management' element={<Management/>}/>
          <Route path='/economy/podcast' element={<Podcast3/>}/>
          <Route path='/history' element={<History/>}/>
          <Route path='/history/iran' element={<Iran/>}/>
          <Route path='/history/world' element={<World2/>}/>
          <Route path='/history/islam' element={<Islam/>}/>
          <Route path='/history/podcast' element={<Podcast4/>}/>
          <Route path='/search/' element={<SearchResults/>}/>
          <Route path='/sign/login' element={<Login/>}/>
          <Route path='/sign/signin' element={<Sign/>}/>
          </Routes>
        <footer>
              <div className='links'>
                <NavLink to='./literature'>ادبیات</NavLink>
                <NavLink to='./novel'>رمان</NavLink>
                <NavLink to='./economy'>اقتصاد و مدیریت</NavLink>
                <NavLink to='./history'>تاریخ</NavLink>
              </div>
            <div className='contact'>
              <div className='contactText'><p>ارتباط با من:</p></div>
              <div className='contactLinks'>
              <a href='https://ble.ir/Erfan_kashanian'><img src={bale}/></a>
              <a href='https://github.com/Erfan-kashanian'><img src={github}/></a>
              <a href='https://www.linkedin.com/in/erfan-kashanian-0008b2438/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BLKqE0yzDTJWJsV2O%2BiTMbw%3D%3D'><img src={linkedin}/></a>
              <a href='https://eitaa.com/Erfan_kashanian'><img src={eita}/></a>
              <a href='https://t.me/Bme_kashanian'><img src={telegram}/></a>
              <a href='https://wa.me/qr/VAOTCLP4GGXBM1'><img src={whatsapp}/></a>
              </div>
            </div>
          </footer>
      </BrowserRouter>
    </div>
  )
}