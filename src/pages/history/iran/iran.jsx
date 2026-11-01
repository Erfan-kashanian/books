import { UseFetch } from '../../fetch/fetch'
import { Link } from 'react-router-dom';

export default function Iran(){
       const [books,error] = UseFetch("history","iran")
        const result = books.filter((book) =>
    book.category === "history" 
)
const iran = result.filter((item)=>item.subcategory === "iran")
if (error) {return <p>{error}</p>}

    return(
        <div className='body'>
            <div className='introduction'> 
                <h1>تاریخ ایران</h1>
                <p>تاریخ ایران همواره جایگاه ویژه‌ای داشته است. کتاب‌هایی مانند تاریخ طبری و تاریخ بلعمی از منابع ارزشمند این حوزه‌اند. این آثار معمولاً به سفارش فرمان‌روایان نوشته می‌شدند تا جانشینانشان از آن‌ها برای شناخت گذشته و بهبود حکمرانی بهره ببرند. تاریخ بلعمی بیشتر بر ایران تمرکز دارد، درحالی‌که تاریخ طبری رویکردی کلی‌تر دارد.</p>
                <p>در این یادداشت از بلاگ طاقچه، قصد داریم مجموعه‌ای از بهترین کتاب‌های تاریخی ایران را معرفی کنیم؛ آثاری که هر کدام پنجره‌ای متفاوت به گذشته می‌گشایند و از دوران باستان تا معاصر، روایتی جذاب، مستند و درعین‌حال ادبی ارائه می‌دهند. با خواندن این کتاب‌ها، سفری پرهیجان به دل قرن‌ها خواهید داشت؛ سفری که به ما یادآوری می‌کند این سرزمین، همواره میان ویرانی و شکوه، راهی به بقا یافته است. ایرانیان، ققنوس‌وار از دل خاکستر شکست‌ها و تهاجم‌ها برخاسته‌اند و با همه‌ی شوربختی‌ها، بار دیگر روشنایی را جست‌و‌جو کرده‌اند.</p>
                
            </div>
            <div className='middlePersian'>
                <aside>
                <ul>
                    <li id='select'><Link to='../history/iran'>تاریخ ایران</Link></li>
                    <li><Link to='../history/world'>تاریخ جهان</Link></li>
                    <li><Link to='../history/islam'>تاریخ اسلام</Link></li>
                    <li><Link to='../history/podcast'>پادکست</Link></li>
                </ul>
                </aside>
                <div className='between'>
                <h1>کتاب ها</h1>
                <div className='persianBooks'>
                    {iran.map((item)=>{return <div className='item' key={item.id}>
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