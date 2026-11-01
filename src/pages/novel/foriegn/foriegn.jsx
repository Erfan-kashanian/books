import { UseFetch } from '../../fetch/fetch'
import { Link } from 'react-router-dom';

export default function Foriegn(){
       const [books,error] = UseFetch("novel","foreign")
        const result = books.filter((book) =>
    book.category === "novel" 
)
const persian = result.filter((item)=>item.subcategory === "foreign")
if (error) {return <p>{error}</p>}

    return(
        <div className='body'>
            <div className='introduction'> 
                <h1>رمان خارجی</h1>
                <p>یکی از سوالاتی که برای خیلی افراد پیش می‌آید این است که آثار کلاسیک بهتر هستند یا رمان‌های مدرن؟ خب، پاسخ به این سوال کاملا سلیقه‌ای است. در واقع از زمان پیدایش رمان تا به امروز آثار قابل تاملی در هر دوره نوشته شده‌اند. اما اینکه آیا رمان‌های کلاسیک بهتر از رمان‌های مدرن هستند یا خیر، پاسخ مشخصی ندارد! برای همین هم ما در فهرست معرفی بهترین رمان های جهان سعی کردیم هم آثار کلاسیک را قرار دهیم و هم رمان‌های مدرن را.</p>
                <p>مطالعه داستان و رمان خارجی به ذهن و تخیل شما اجازه می‌دهد پرواز کند تا به‌جای افرادی که تا به‌حال آنها را ندیده‌اید زندگی کنید. البته تنها مزیت خواندن داستان‌هایی از کشورهای دیگر، آشنایی با سبک‌های زندگی و فرهنگ‌های متفاوت نیست، بلکه با مطالعه داستان و رمان خارجی شما می‌توانید درس‌ها و نکات زیادی هم بیاموزید.</p>
            </div>
            <div className='middlePersian'>
                <aside>
                <ul>
                    <li><Link to='../novel/iranian'>ایرانی</Link></li>
                    <li id='select'><Link to='../novel/foriegn'>خارجی</Link></li>
                    <li><Link to='../novel/podcast'>پادکست</Link></li>
                </ul>
                </aside>
                <div className='between'>
                <h1>کتاب ها</h1>
                <div className='persianBooks'>
                    {persian.map((item)=>{return <div className='item' key={item.id}>
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