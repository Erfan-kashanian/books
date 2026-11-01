import './literature.css'
import {UseFetch} from '../fetch/fetch';
import { useState } from 'react';
import { Link } from 'react-router-dom';
export default function Literature(){
   const [books,error] = UseFetch("literature");
   const[more,setMore]=useState(null)
    const result = books.filter((book) =>
    book.category === "literature" 
)
    const persian = result.filter((item)=>item.subcategory === "persian")
    const world = result.filter((item)=>item.subcategory==="world")
    const biography = result.filter((item)=> item.subcategory === "biography")
    const podcast = result.filter((item)=>item.subcategory==="podcast")    

if (error) {return <p>{error}</p>}
    return (
        <div className='body'>
            <div className={more ? "introductionLess" : "introduction"}>
                <h1>ادبیات</h1>
                <h3>به هر اثر مکتوب، ادب یا ادبیات می‌گویند. از این واژه برای سخنی نیز استفاده می‌شود که از حدّ سخنان عادی برتر و والاتر و دارای واژگان زیباتر است و مردم آن سخنان را در میان خود ضبط و نقل کرده‌اند و از خواندن و شنیدنشان دگرگون می‌گردند و احساس غم، شادی یا لذّت می‌کنند. ادبیات مجموعه‌ای از آثار هنری و ذوقی و چکیده‌ای از غرایز معنوی ملت‌هاست، و تمدن هر ملت به‌نسبت عظمت و وسعت ادبیاتش شناخته می‌شود، و به‌طور کلی ادبیات تابع زمان و مکان و نمایندهٔ آداب‌ورسوم و تمدن مردم آن کشور است. ادبیات ابتدا از شعر آغاز شد و وقتی شعر و شاعری به اوج رسید، تازه نوشته‌های نثری آغاز شد. اشعار هومر یونانی و ویرژیل رومی بهترین نمونهٔ جهش‌های غریزهٔ شعریست؛ یونان و روم قدیم‌ترین مللی بودند که اساس ادبیات جهان را پایه‌گذاری کردند.
                   یکی از طبقه‌بندی‌های مشهور و رایج متن‌های ادبی، طبقه‌بندی دوگانه‌ایست که بر اساس آن متن‌ها به دو گونهٔ اصلی شعر و نثر تقسیم می‌شوند. این طبقه‌بندی سنت دیرینه‌ای در سخن‌شناسی، زبان فارسی و ادبیات جهان دارد. سخنوران و فیلسوفان از دیرباز در پی پررنگ کردن خط ظریف میان این دو گونه، تعریفی فراگیر و تمیزدهنده از شعر و نثر بوده‌اند؛ البته در نخستین دسته‌بندی ادبی انجام شده توسط ارسطو در تاریخ بشر، ادبیات یونان شامل گونه سومی به نام دراما یا همان هنر نمایشی باستان نیز بود که بعدها توسط رومیان توسعه یافت و در متون غربی تا به امروز این دسته‌بندی، برخلاف سنت ایرانی نظم و نثر، به نظم و نثر و دراما تقسیم می‌شود. شاید یکی از دلایل نبود دراما در گونه‌های اصلی ادب فارسی، فقدان توجه به هنرهای نمایشی پیش از اسلام بوده باشد، زیرا همزمان با یونان باستان، در ایران باستان از هخامنشی به بعد نیز نمونه‌هایی از
                   هنرهای نمایشی همراه آواز و موسیقی نیز وجود دارد .
                </h3>
                <button onClick={()=>{setMore(true)}} className={more ? "hideButton" : "showButton"}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                    </svg>
                </button>
           <div className={more ? "inneroff" : "inner"}>
           <div className={more ? "hidden" : "shown"}></div>
           <h1>تعریف ها از ادبیات</h1>
            </div>
            </div>
            <div className={more ? "more" : "less"}>
                <h1>تعریف ها از ادبیات</h1>
                <h3>ادبیات در هر فرهنگ، جامعه و ملتی دارای تعاریف مختلفی بوده و در طی زمان ممکن است تعاریف پیشین آن تغییر کند یا به چالش کشیده‌شود. ادب واژه‌ای است معرب از فارسی. این واژه از دیدگاه واژه‌شناسان به معنی ظرف و حسن تناول آمده است. برخی نیز در فارسی، ادب را به معنی فرهنگ ترجمه کرده‌اند و گفته‌اند که ادب یا فرهنگ همان دانش است. از دیگر معانی واژهٔ ادب می‌توان به هنر، حسن معاشرت، شیوهٔ پسندیده، با سخن اشاره کرد؛ اما ادب در اصطلاح، نام دانشی است که قدما آن را شامل این علوم دانسته‌اند: واژه، صرف، نحو، معانی، بیان، بدیع، عروض، قافیه، قوانین خط، قوانین قرائت که بعضی اشتقاق و انشاء راهم بدان‌ها افزوده‌اند.
                    البته دیدگاه     ادبای قدیم دربارهٔ معنی اصطلاحی «ادب» کمی مختلف است. بعضی آن را فضیلت اخلاقی، برخی پرهیز از انواع خطاها و برخی آن را مانند فرشته‌ای دانسته‌اند که صاحبش را از ناشایستی‌ها بازمی‌دارد.
                    اما علم ادب (ادبیات) یا سخن‌سنجی یا در دیدگاه پیشینیان اشاره داشته است به دانش آشنایی با نظم و نثر از جهت درستی و نادرستی و خوبی و بدی و مراتب آن. اما برخی ادیب را کسی می‌دانستند که عالم بر علوم نحو، لغت، صرف، معنا، علم بیان، عروض، قافیه و فروع باشد و برخی خط، قرض‌الشعر، انشا، محاضره و تاریخ را هم جزو آن‌ها دانسته‌اند. و در ایران تا سدهٔ پیشین صفت ادیب را برای کسی به کار می‌بردند که به زبانهای فارسی و عربی و علوم مربوط که به آن‌ها اشاره شد مسلط و در سخن ماهر در استفاده از آن‌ها بود. مانند ادیب الممالک فراهانی و ادیب نیشابوری. جرجی زیدان در این‌باره می‌نویسد:
                    «علم ادب در اصطلاح علمای ادبیت مشتمل بر اکثر علوم ادبیه است از قبیل: نحو، لغت، تصریف، عروض، قوافی، صنعت شعر، تاریخ و انساب؛ و ادیب کسی است که دارای تمام این علوم یا یکی از آن‌ها باشد و فرق مابین ادیب و عالِم آن است که ادیب از هر چیزی بهتر و خوب‌ترش را انتخاب می‌نماید و عالم تنها یک مقصد را گرفته در آن مهارت می‌یابد.»
                     مردم غالباً بین ادبیات و آثار مکتوب دیگر تفاوت قائل می‌شوند. اصطلاحات «تخیل ادبی» و «شایستگی ادبی» غالباً به منظور تشخیص آثار ادبی از یکدیگر مورد استفاده قرار می‌گیرند؛ مثلاً تقریباً تمام انسان‌های باسواد دنیا آثار چارلز دیکنز را در زمرهٔ «ادبیات» تلقی می‌کنند در حالی که برخی از منتقدان، آثار جفری آرچر را شایستهٔ گنجانده شدن تحت عنوان «ادبیات انگلیسی» نمی‌دانند. گاهی ممکن است منتقدان برخی از آثار را به دلایلی همچون سطح پایین دستور زبان و نحو، داشتن پیرنگ روایتی باورنکردنی یا گسیخته یا داشتن شخصیت‌های متناقض یا غیرقابل‌باور از زمرهٔ آثار ادبی حذف کنند. اما باید گفت که مفهوم واژهٔ ادب و ادبیات نیز همانند همهٔ پدیده‌های دیگر در طول زمان یکسان نمانده و دستخوش تحول گردیده است. بیشتر اقوام قدیم جهان، همچون یونانیان، ادب را فقط به معنی و مفهوم شعر به کار می‌برده‌اند و علوم ادبی، نزد آن‌ها علم شعر بوده است و بس.
                </h3>            
                <button onClick={()=>setMore(false)} className={more ? "showButton" : "hideButton"}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
                    <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                    </svg>
                </button>

            </div>
            <div className='middle'>
            <aside>
                <ul>
                    <li><Link to='./persian'>ادبیات فارسی</Link></li>
                    <li><Link to='./world'>ادبیات جهان</Link></li>
                    <li><Link to='./biography'>زندگی نامه</Link></li>
                    <li><Link to='./podcast'>پادکست</Link></li>
                </ul>
            </aside>
            <div className='left'>
                <div className='part'>
                    <h1>ادبیات فارسی</h1>
                    <div className='books'>
                        {persian.map((item)=>{return <div className='item' key={item.id}>
                            <img src={item.image}/>
                            <h4 className='title'>{item.title}</h4>
                            <h4>نویسنده : {item.author}</h4>
                            <Link to={`/article/${item.id}`}>بیشتر</Link>

                        </div>})}
                        <Link to='./persian'><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
  <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
</svg></Link>
                    </div>
                </div>
                <div className='line'></div>
                <div className='part'>
                    <h1>ادبیات جهان</h1>
                    <div className='books'>{world.map((item)=>{return <div className='item' key={item.id}>
                        <img src={item.image}/>
                        <h4 className='title'>{item.title}</h4>
                        <h4>نویسنده : {item.author}</h4>
                        <Link to={`/article/${item.id}`}>بیشتر</Link>
                    </div>})}
                    <Link to='./world'><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
  <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
</svg></Link>
                    </div>
                </div>
                <div className='line'></div>
                <div className='part'>
                    <h1>زندگی نامه</h1>
                    <div className='books'>{biography.map((item)=>{return <div className='item' key={item.id}>
                        <img src={item.image}/>
                        <h4 className='title'>{item.title}</h4>
                        <h4>نویسنده : {item.author}</h4>
                        <Link to={`/article/${item.id}`}>بیشتر</Link>
                    </div>})}
                    <Link to='./biography'><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
  <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
</svg></Link></div>
                </div>
                <div className='line'></div>
                <div className='part'>
                    <h1>پادکست</h1>
                        <div className='books'>{podcast.map((item)=>{return <div className='item' key={item.id}>
                        <img src={item.image}/>
                        <h4 className='title'>{item.title}</h4>
                        <h4>گوینده : {item.speaker}</h4>
                        <Link to={`/article/${item.id}`}>بیشتر</Link>
                    </div>})}
                    <Link to='./podcast'><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
  <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
</svg></Link></div>
                </div>
                <div className='line'></div>

            </div>
            </div>
        </div>
    );
}