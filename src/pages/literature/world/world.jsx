import { UseFetch } from '../../fetch/fetch'
import './world.css'
import { Link } from 'react-router-dom';

export default function World(){
       const [books,error] = UseFetch("literature","world")
        const result = books.filter((book) =>
    book.category === "literature" 
)
const world = result.filter((item)=>item.subcategory === "world")
if (error) {return <p>{error}</p>}

    return(
        <div className='body'>
            <div className='introduction'> 
                <h1>ادبیات جهان</h1>
                <p>ادبیات جهانی اشاره به مجموع ادبیات ملی جهان و گردش آثار در جهان گسترده‌تر و فراتر از کشور مبدأ آنها دارد. در گذشته، عمدتاً ادبیات جهان به شاهکارهای ادبیات اروپای غربی اشاره می‌کرد. با این حال، ادبیات جهان امروز به‌طور فزاینده ای در زمینه بین‌المللی دیده می‌شود. اکنون خوانندگان به طیف وسیعی از آثار جهانی در ترجمه‌های مختلف دسترسی دارند.</p>
                <p>بسیاری از محققان معتقدند که آنچه باعث می‌شود یک اثر به‌عنوان ادبیات جهان شناخته شود، انتشار آن در خارج از کشور مبدأ آن است. برای مثال، دامروش می‌گوید: «یک اثر با فرآیندی دوگانه وارد ادبیات جهان می‌شود: اول، با خواندن به‌عنوان ادبیات؛ دوم، با گسترش (پخش) در دنیای گسترده‌تری فراتر از مبدأ زبانی و فرهنگی‌اش». به همین ترتیب «مانی»، پژوهشگر ادبیات جهان، معتقد است که «جهان» ادبیات با «انتقال اطلاعات» به وجود آمده‌است که عمدتاً توسط تحولات فرهنگ چاپ ایجاد شده‌است. به دلیل ظهور این کتابخانه، «ناشران و کتابفروشانی که کتاب‌های مقرون به صرفه را چاپ و به فروش می‌رسانند، شهروندان باسوادی که این کتاب‌ها را به دست می‌آورند و کتابخانه‌های عمومی که این کتاب‌ها را در دسترس کسانی قرار می‌دهند که توانایی مالی خرید آنها را ندارند، نقش بسیار مهمی در «ساخت» ادبیات جهان دارند».</p>
                <p>ادبیات جهان آینه‌ای از تاریخ و اندیشه بشر است؛ از روایت‌های کهن گرفته تا برجسته‌ترین نمونه‌های ادبیات مدرن. در این میان، رمان انگلیسی جایگاهی ویژه دارد و بسیاری از مشهورترین نویسندگان تاریخ با خلق آثاری ماندگار توانسته‌اند بر جریان ادبیات جهان تأثیر بگذارند. در این مقاله قصد داریم شما را با مجموعه‌ای از شاهکارهای ادبی جهان آشنا کنیم. آثاری که هر یک نمونه‌ای درخشان از توانایی ادبیات در بازتاب زندگی، جامعه و روان انسان هستند و تا امروز در فهرست بهترین رمان‌های جهان می‌درخشند.</p>
            </div>
            <div className='middlePersian'>
                <aside>
                <ul>
                    <li><Link to='../literature/persian'>ادبیات فارسی</Link></li>
                    <li id='select'><Link to='../literature/world'>ادبیات جهان</Link></li>
                    <li><Link to='../literature/biography'>زندگی نامه</Link></li>
                    <li><Link to='../literature/podcast'>پادکست</Link></li>
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