import { UseFetch } from '../../fetch/fetch'
import { Link } from 'react-router-dom';

export default function Islam(){
       const [books,error] = UseFetch("history","islam")
        const result = books.filter((book) =>
    book.category === "history" 
)
const islam = result.filter((item)=>item.subcategory === "islam")
if (error) {return <p>{error}</p>}

    return(
        <div className='body'>
            <div className='introduction'> 
                <h1>تاریخ اسلام</h1>
                <p>کتاب‌های تاریخ اسلام تنوع بالایی دارند؛ چراکه نه‌تنها آثار تألیفی را شامل می‌شوند، بلکه آثار ترجمه‌شده نیز در این بین خودنمایی می‌کنند. همچنین زمانی که از تاریخ اسلام حرف می‌زنیم، نباید صرفاً به سیاست و تاریخ سیاسی رجوع کنیم، بلکه ادبیات اسلامی در هر کشوری مثلاً تاریخ ادبیات اسلامی در ایران، تاریخ ادبیات اسلامی در هند و... و همچنین تاریخ معماری اسلامی در ایران و تاریخ معماری اسلامی در اسپانیا، سوریه، عراق و امثالهم نیز در همین دسته‌بندی قرار می‌گیرند. از دیگر کتاب‌ها می‌توان به عرفان در اسلام، تاریخ طب اسلامی و البته زندگی‌نامه‌ی دانشمندان مسلمان و عرفا نیز اشاره داشت.</p>
                
                
            </div>
            <div className='middlePersian'>
                <aside>
                <ul>
                    <li><Link to='../history/iran'>تاریخ ایران</Link></li>
                    <li><Link to='../history/world'>تاریخ جهان</Link></li>
                    <li id='select'><Link to='../history/islam'>تاریخ اسلام</Link></li>
                    <li><Link to='../history/podcast'>پادکست</Link></li>
                </ul>
                </aside>
                <div className='between'>
                <h1>کتاب ها</h1>
                <div className='persianBooks'>
                    {islam.map((item)=>{return <div className='item' key={item.id}>
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