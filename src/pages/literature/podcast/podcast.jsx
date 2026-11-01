import { UseFetch } from '../../fetch/fetch'
import './podcast.css'
import { Link } from 'react-router-dom';

export default function Podcast(){
       const [books,error] = UseFetch("literature","podcast")
        const result = books.filter((book) =>
    book.category === "literature" 
)
const podcast = result.filter((item)=>item.subcategory === "podcast")
if (error) {return <p>{error}</p>}

    return(
        <div className='body'>
            <div className='introduction'> 
                <h1>پادکست</h1>
                <p>پادکست (به انگلیسی: Podcast)، پادپخش یا وِب‌آوا، محتوایی صوتی‌ست که از وب دریافتنی است. پادکست، انتشار مجموعه‌ای از پرونده‌های رسانهٔ دیجیتال است که توزیع آن در اینترنت با استفاده از آراس‌اس یا پلتفرم‌های صوتی صورت می‌گیرد، و معمولاً روزنامه‌نگاران آن‌ها را بر روی یک پخش‌کنندهٔ موسیقی دیجیتال و بارگیری‌پذیر قرار می‌دهند. این روش ارائهٔ محتوا در سال ۲۰۰۴ محبوبیت پیدا کرد و گسترش یافت و گاهی به آن رادیوی اینترنتی گفته می‌شود. از پادکست با عناوین «وب‌نوشت‌پخش» و «وب‌نوشت صدا» نیز نام برده می‌شود.</p>
                <p>برای دریافت آن، معمولاً از برنامه‌های خبرخوان که از خدمات وب استفاده می‌کنند استفاده می‌شود و بر روی رایانه‌های خانگی یا پخش‌کننده‌های موسیقی دیجیتال یا گوشی موبایل می‌تواند بارگیری شود. قابل ذکر است که عمل دریافت پادکست را پادکست‌گیری (به انگلیسی: Podcatch) می‌گویند.</p>
                <p>در سال ۲۰۰۴ گسترش و محبوبیت این پدیده به حدی بوده است که حتی کاخ سفید هم تعدادی از سخنرانی‌های جرج دبلیو بوش را به صورت پادکست آماده کرده و بر روی وبگاه رئیس‌جمهور ایالات متحده آمریکا قرار داده است.</p>
                
            </div>
            <div className='middlePersian'>
                <aside>
                <ul>
                    <li><Link to='../literature/persian'>ادبیات فارسی</Link></li>
                    <li><Link to='../literature/world'>ادبیات جهان</Link></li>
                    <li><Link to='../literature/biography'>زندگی نامه</Link></li>
                    <li id='select'><Link to='../literature/podcast'>پادکست</Link></li>
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