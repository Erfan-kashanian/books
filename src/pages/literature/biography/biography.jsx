import './biography.css'
import { UseFetch } from '../../fetch/fetch'
import { Link } from 'react-router-dom';
export default function Biography(){
    const [books,error] = UseFetch("literature","biography")
        const result = books.filter((book) =>
    book.category === "literature" 
)
const biography = result.filter((item)=>item.subcategory === "biography")
if (error) {return <p>{error}</p>}
   return(
        <div className='body'>
            <div className='introduction'> 
                <h1>زندگی نامه</h1>
                <p>زندگی نامه یا بیوگرافی، روایت دقیق و مستندی از زندگی یک شخص است که معمولاً فردی دیگر آن را می‌نویسد. این روایت دربردارندۀ اطلاعاتی مختلفی از زندگی این فرد است، از زندگی شخصی و خصوصی او تا فعالیت‌های حرفه‌ای، دستاوردها و چالش‌های شخصی و کاری‌اش. هدف کلی این است که پرتره‌ای از فرد و تجارب شخصی او در زندگی به تصویر کشیده شود.</p>
                <p>خیلی از زندگی نامه‌ها، مخصوصاً بیوگرافی‌های کلاسیک و تاریخی، به صورت خطی نوشته می‌شوند؛ یعنی از تولد فرد آغاز شده و تا زمان مرگ او (یا درصورتی‌که فرد زنده است، تا زمان حال) ادامه می‌یابند. برخی دیگر از آثار این ژانر اما فرم متفاوت‌تری را پیش می‌گیرند و به صورت موضوعی پیش می‌روند و روی جنبه‌های خاصی از زندگی فرد، مثل دستاوردهای شغلی یا تأثیرات اجتماعی او، تمرکز کنند. بسیاری از بیوگرافی‌های مدرن و امروزی ترجیح می‌دهند به این صورت سوژه بپردازند و آن را به تصویر درآورند.

</p>
                <p>به طور کلی تمام آثار زندگی نامه‌ای شامل سه ویژگی‌ مشترک‌اند: مبتنی بر حوادث واقعی و اسناد و مدارک و مصاحبه‌های معتبرند، به نقاط مهم و عطف زندگی سوژه می‌پردازند و جزئیات غیرمرتبط را کنار می‌گذارند، و این‌که نویسندۀ دیگری غیر از خود فرد این اثر را می‌نویسد (راوی سوم‌شخص است). در حالتی که شخصیت اصلی خود زندگی نامه‌اش را بنویسد (راوی اول‌شخص)، اثر او به عنوان خودزندگی نامه یا اتوبیوگرافی شناخته می‌شود.</p>
                <p>نکتۀ قابل‌توجه این است زندگی نامه در دستۀ ناداستان قرار دارد ولی گاهی آثاری داستانی منتشر می شوند که فرم زندگی نامه‌ای دارند. تفاوت این‌جاست که داستان‌های زندگی نامه‌ای کاملاً واقعی نیستند و حتماً با عنصر تخیل آمیخته‌اند. حتی اگر شخصیت اصلی داستان هم واقعی باشد، زندگی نامۀ او تماماً مبتنی بر حقیقت نیست و نویسنده تجربیات او را دراماتیزه و داستانی کرده، در وقایع دست برده و واقعیت برساختۀ خود را خلق کرده است.</p>
            </div>
            <div className='middlePersian'>
                <aside>
                <ul>
                    <li><Link to='../literature/persian'>ادبیات فارسی</Link></li>
                    <li><Link to='../literature/world'>ادبیات جهان</Link></li>
                    <li id='select'><Link to='../literature/biography'>زندگی نامه</Link></li>
                    <li><Link to='../literature/podcast'>پادکست</Link></li>
                </ul>
                </aside>
                <div className='between'>
                <h1>کتاب ها</h1>
                <div className='persianBooks'>
                    {biography.map((item)=>{return <div className='item' key={item.id}>
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