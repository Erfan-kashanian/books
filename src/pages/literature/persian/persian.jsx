import { UseFetch } from '../../fetch/fetch'
import './persian.css'
import { Link } from 'react-router-dom';

export default function Persian(){
       const [books,error] = UseFetch("literature","persian")
        const result = books.filter((book) =>
    book.category === "literature" 
)
const persian = result.filter((item)=>item.subcategory === "persian")
if (error) {return <p>{error}</p>}

    return(
        <div className='body'>
            <div className='introduction'> 
                <h1>ادبیات فارسی</h1>
                <p>ادبیات فارسی یا ‌ادبیات پارسی به ادبیاتی گفته می‌شود که به زبان فارسی نوشته یا بیان شده باشد. ادبیات فارسی تاریخی هزاران ساله و ریشه در تاریخ شاعران و نویسندگان دارد. شعر فارسی و نثر فارسی دو گونه اصلی در ادب فارسی هستند. برخی کتاب‌های کُهن در موضوعات غیرادبی مانند تاریخ، مناجات و علوم گوناگون نیز دارای ارزش ادبی هستند و با گذشت زمان در دسته آثار کلاسیک ادبیات فارسی قرار گرفته‌اند.</p>
                <p>ادبیات فارسی ریشه در ادبیات باستانی ایران دارد که تحت تأثیر متون اوستایی در دوران ساسانی به زبان‌های پارسی میانه و پهلوی اشکانی پدید آمد. ادبیات فارسی نو نیز پس از اسلام و با الگوبرداری از ادبیات عربی در نظم و ریشه‌های دبیری و نویسندگی دوران ساسانی که ادبیات منثور عربی را ایجاد کرده بود در زمینه نثر متولد شد. ادبیات شفاهی فارسی نیز به همان سبک باستانی خود ادامه یافت.</p>
                <p>ادبیات فارسی موضوعاتی مانند حماسه و روایات و اساطیر ایرانی و غیر ایرانی، مذهب و عرفان، روایت‌های عاشقانه، فلسفه و اخلاق و نظایر آن را در برمی‌گیرد. برپایه موضوع مورد کاربرد در یک آفریده ادبی فارسی آن را در گستره ادبیات حماسی، غنایی، تعلیمی یا نمایشی قرار می‌دهند.</p>
                <p>ادبیات فارسی چهره‌های بین‌المللی شناخته شده‌ای دارد که بیشتر آن‌ها شاعران سده‌های میانه هستند. از این میان می‌توان به رودکی، فردوسی، نظامی گنجه‌ای، خیام، سعدی، مولانا و حافظ اشاره کرد. گوته بر این باور است ادبیات فارسی، یکی از چهار ارکان ادبیات بشر است.</p>
            </div>
            <div className='middlePersian'>
                <aside>
                <ul>
                    <li id='select'><Link to='../literature/persian'>ادبیات فارسی</Link></li>
                    <li><Link to='../literature/world'>ادبیات جهان</Link></li>
                    <li><Link to='../literature/biography'>زندگی نامه</Link></li>
                    <li><Link to='../literature/podcast'>پادکست</Link></li>
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