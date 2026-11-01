import {UseFetch} from '../fetch/fetch';
import { useState } from 'react';
import { Link } from 'react-router-dom';
export default function History(){
   const [books,error] = UseFetch("history");
   const[more,setMore]=useState(null)
    const result = books.filter((book) =>
    book.category === "history" 
)
    const iran = result.filter((item)=>item.subcategory === "iran")
    const world = result.filter((item)=>item.subcategory==="world")
    const islam = result.filter((item)=> item.subcategory === "islam")
    const podcast = result.filter((item)=>item.subcategory==="podcast")    

if (error) {return <p>{error}</p>}
    return (
        <div className='body'>
            <div className={more ? "introductionLess" : "introduction"}>
                <h1>تاریخ</h1>
                <h3>تا جایی که می‌دانیم هرودوت نخستین کسی بود که واژه‌ی هیستوریا، به معنای تحقیق (تحقیقی که بر اساس داده‌ها انجام می‌داد) را به کار برد که امروزه معنای تاریخ می‌دهد. تاریخ در دو معنای دانش مطالعه‌ی گذشته و تحلیل و تفسیر آن تعریف می‌شود. این مطالعه گاهی از مرزهای ملی عبور می‌کند و پدیده‌های تاریخی را در سطحی کلان درباره‌ی ملت‌های مختلف و عواملی که بر سرنوشت اقوام مناطق زیادی تأثیرگذار بوده بررسی می‌کند.</h3>
                <h3>پرفروش‌ترین کتاب‌های تاریخی ایران همواره مورد توجه پژوهشگران و علاقه‌مندان به تاریخ بوده‌اند. برخی تاریخ را مادر علوم می‌دانند و بر اهمیت آن تأکید دارند. بررسی تاریخ می‌تواند از تکرار برخی حوادث جلوگیری کند و بر علوم دیگر مانند فلسفه و ادبیات تأثیر بگذارد. بسیاری از مکاتب فکری و هنری نیز از تاریخ الهام گرفته‌اند، مانند مکتب کلاسیسیسم که متأثر از یونان و روم باستان است.</h3>
                <button onClick={()=>{setMore(true)}} className={more ? "hideButton" : "showButton"}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                    </svg>
                </button>
           <div className={more ? "inneroff" : "inner"}>
           <div className={more ? "hidden" : "shown"}></div>
           <h1>مفهوم تاریح</h1>
            </div>
            </div>
            <div className={more ? "more" : "less"}>
                <h1>مفهوم تاریخ</h1>
                <h3>در مورد مفهوم تاریخ دیدگاه‌های گوناگونی وجود دارد. اما می‌توان میان تاریخ به‌عنوان واقعیتی که رخ داده و تاریخ به‌عنوان ثبت این واقعیت‌ها تفاوت قائل شد. دسترسی کامل به حقایق گذشته ممکن نیست، اما از طریق اسناد و آثار باقی‌مانده می‌توان شناختی نسبی به دست آورد.مارتیمر جی آدلر، جوهره تاریخ را در داستان‌سرایی می‌داند، همچنان که در پنج حرف پایانی واژه history در انگلیسی، ردپای story (داستان) دیده می‌شود. هرچند بسیاری از مورخان این تعریف را نمی‌پذیرند، اما این دیدگاه نشان می‌دهد که چرا تاریخ برای بسیاری جذاب است
                </h3>
                <h3></h3>            
                <button onClick={()=>setMore(false)} className={more ? "showButton" : "hideButton"}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
                    <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                    </svg>
                </button>

            </div>
            <div className='middle'>
            <aside>
                <ul>
                    <li><Link to='./iran'>تاریخ ایران</Link></li>
                    <li><Link to='./world'>تاریخ جهان</Link></li>
                    <li><Link to='./islam'>تاریخ اسلام</Link></li>
                    <li><Link to='./podcast'>پادکست</Link></li>
                </ul>
            </aside>
            <div className='left'>
                <div className='part'>
                    <h1>تاریخ ایران</h1>
                    <div className='books'>
                        {iran.map((item)=>{return <div className='item' key={item.id}>
                            <img src={item.image}/>
                            <h4 className='title'>{item.title}</h4>
                            <h4>نویسنده : {item.author}</h4>
                            <Link to={`/article/${item.id}`}>بیشتر</Link>

                        </div>})}
                        <Link to='./iran'><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
  <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
</svg></Link>
                    </div>
                </div>
                <div className='line'></div>
                <div className='part'>
                    <h1>تاریخ جهان</h1>
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
                    <h1>تاریخ اسلام</h1>
                    <div className='books'>{islam.map((item)=>{return <div className='item' key={item.id}>
                        <img src={item.image}/>
                        <h4 className='title'>{item.title}</h4>
                        <h4>نویسنده : {item.author}</h4>
                        <Link to={`/article/${item.id}`}>بیشتر</Link>
                    </div>})}
                    <Link to='./islam'><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
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