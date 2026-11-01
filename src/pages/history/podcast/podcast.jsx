import { UseFetch } from '../../fetch/fetch'
import { Link } from 'react-router-dom';

export default function Podcast4(){
       const [books,error] = UseFetch("history","podcast")
        const result = books.filter((book) =>
    book.category === "history" 
)
const podcast = result.filter((item)=>item.subcategory === "podcast")
if (error) {return <p>{error}</p>}

    return(
        <div className='body'>
            <div className='introduction'> 
                <h1>پادکست ها</h1>
                <p>پادکست یک رسانه‌ی صوتی تازه است که در دو دهه‌ی اخیر بسیار محبوب شده است. واژه‌ی پادکست از ترکیب واژه‌های آی‌پاد (iPod)  و پخش گسترده (broadcasting) به وجود آمده ‌است. پادکست مجموعه یا مجموعه‌ای از فایل‌های صوتی دیجیتال است که برای دانلود و یا شنیدن آن باید سراغ اینترنت بروید. تفاوت پادکست با رادیو هم در این موضوع است که پادکست در بستر اینترنت منتشر می‌شود. اما امروزه به آن رادیو اینترنتی هم می‌گویند. پادکست با گسترش آی‌پادهای اپل همه‌گیر شد. در این یادداشت تعدادی از بهترین پادکست‌های فارسی درباره تاریخ ایران و جهان را معرفی کنیم و در کنار هر پادکست تاریخی به کتاب‌هایی برای مطالعه بیشتر در همان زمینه اشاره می‌کنیم.</p>
                
                
            </div>
            <div className='middlePersian'>
                <aside>
                <ul>
                    <li><Link to='../history/iran'>تاریخ ایران</Link></li>
                    <li><Link to='../history/world'>تاریخ جهان</Link></li>
                    <li><Link to='../history/islam'>تاریخ اسلام</Link></li>
                    <li id='select'><Link to='../history/podcast'>پادکست</Link></li>
                </ul>
                </aside>
                <div className='between'>
                <h1>پادکست ها</h1>
                <div className='persianBooks'>
                    {podcast.map((item)=>{return <div className='item' key={item.id}>
                    <img src={item.image}/>
                    <h4 className='title'>{item.title}</h4>
                    <h4>گوینده : {item.speaker}</h4>
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