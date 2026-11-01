import { UseFetch } from '../../fetch/fetch'
import { Link } from 'react-router-dom';

export default function World2(){
       const [books,error] = UseFetch("history","world")
        const result = books.filter((book) =>
    book.category === "history" 
)
const world = result.filter((item)=>item.subcategory === "world")
if (error) {return <p>{error}</p>}

    return(
        <div className='body'>
            <div className='introduction'> 
                <h1>تاریخ جهان</h1>
                <p>کتاب های تاریخی خصوصا تاریخ جهان از آثار خواندنی و البته پرطرفدار محسوب می‌شوند. تاریخ جهان سرشار از وقایع و رویدادهای مختلفی است که هر یک از آن‌ها از ابعاد گوناگون قابل بررسی و موشکافی هستند. اگر شما هم به این زمینه علاقه‌مندید و به دنبال تهیه و خرید کتاب های تاریخ جهان هستید، در ادامه این مطلب قصد داریم بهترین آثار این حوزه را مورد معرفی و بررسی اجمالی قرار دهیم، پس با سایت کتابانه همراه باشید.</p>
                
                
            </div>
            <div className='middlePersian'>
                <aside>
                <ul>
                    <li><Link to='../history/iran'>تاریخ ایران</Link></li>
                    <li id='select'><Link to='../history/world'>تاریخ جهان</Link></li>
                    <li><Link to='../history/islam'>تاریخ اسلام</Link></li>
                    <li><Link to='../history/podcast'>پادکست</Link></li>
                </ul>
                </aside>
                <div className='between'>
                <h1>کتاب ها</h1>
                <div className='persianBooks'>
                    {world.map((item)=>{return <div className='item' key={item.id}>
                    <img src={item.image}/>
                    <h4 className='title'>{item.title}</h4>
                    <h4>نویسنده : {item.author}</h4>
                    <Link to={`/article/${item.id}`}>بیشتر</Link>
                    </div>})}
                </div>
                </div>
                <div className='leftAside'>
                <aside>
                    <h3>پیوند های مرتبط</h3>
                    <ul>
                        <li><a href='https://www.ketabnak.com/'>کتابناک</a></li>
                        <li><a href='https://taaghche.com/category/%DA%A9%D8%AA%D8%A7%D8%A8-%D8%B1%D8%A7%DB%8C%DA%AF%D8%A7%D9%86'>طاقچه</a></li>
                        <li><a href='https://fidibo.com/'>فیدیبو</a></li>
                        <li><a href='https://www.iranketab.ir/'>ایران کتاب</a></li>
                        <li><a href='https://ketabrah.com/'>کتابراه</a></li>
                        <li><a href='https://deybook.com/'>دی بوک</a></li>
                    </ul>
                </aside>
                </div>
            </div>
        </div>
    )
}