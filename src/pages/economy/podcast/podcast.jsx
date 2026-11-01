import { UseFetch } from '../../fetch/fetch'
import { Link } from 'react-router-dom';

export default function Podcast3(){
       const [books,error] = UseFetch("economy_management","podcast")
        const result = books.filter((book) =>
    book.category === "economy_management" 
)
const podcasat = result.filter((item)=>item.subcategory === "podcast")
if (error) {return <p>{error}</p>}

    return(
        <div className='body'>
            <div className='introduction'> 
                <h1>پادکست های مدیریت</h1>
                <p>در این مقاله سعی بر جمع‌آوری بهترین پادکست های مدیریتی کردیم. از آنجایی که خود نگارنده مدیر یک بیزینس کوچک با ده نفر همکار است، قبل از نوشتن این مقاله مدت‌ها به جستجوی بهترین پادکست های مدیریتی بوده و در آرشیو خود تعدادی از ارزشمند‌ترین‌های آنها را جمع‌آوری کرده است.</p>
                <p>پادکست‌هایی که در این صفحه و در داخل مقالات می‌شنوید، حاصل سالها تجربه اجرایی بنده در زمینه مشاوره و مدیریت کسب‌وکار و منابع انسانی است که در راستای مسئولیت اجتماعی ما، به صورت کاملا رایگان در اختیار شما قرار گرفت. امیدواریم با شنیدن نکات و اجرای آنها در محیط کارتان، شاهد رشد و توسعه هر چه بهتر کسب و کارها باشیم.</p>
            </div>
            <div className='middlePersian'>
                <aside>
                <ul>
                    <li id='market'><Link to='../economy/marketing'> بازاریابی و فروش</Link></li>
                    <li><Link to='../economy/management'> مدیریت</Link></li>
                    <li id='select'><Link to='../economy/podcast'>پادکست</Link></li>
                </ul>
                </aside>
                <div className='between'>
                <h1>پادکست ها</h1>
                <div className='persianBooks'>
                    {podcasat.map((item)=>{return <div className='item' key={item.id}>
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