
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../config/supabase";
import './article.css'

export default function Article(){

    const {id} = useParams()

    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        const fetchBook = async () => {

            setLoading(true)
            setError(null)

            try {

                const { data, error } = await supabase
                    .from('books')
                    .select('*')
                    .eq('id', id)
                    .single()

                if (error) {
                    throw error
                }

                setData(data)

            } catch (err) {

                setError(err.message)

            } finally {

                setLoading(false)

            }

        }

        fetchBook()

    }, [id])

    if (loading) {
        return <p>در حال دریافت اطلاعات...</p>
    }

    if (error) {
        return <p>{error}</p>
    }

    if (!data) {
        return <p>کتابی پیدا نشد.</p>
    }

    if(data.subcategory === "podcast"){

        return(
            <div className="mainPart">

                <div className="image">
                    <img src={data.image} alt={data.title}/>
                </div>

                <div className="detail">
                    <h1>{data.title}</h1>
                    <h3>گوینده : {data.speaker}</h3>
                    <h3>انتشارات : {data.publisher}</h3>
                    <button>خرید</button>
                </div>

                <div className="discription">
                    <h2>درباره پادکست</h2>
                    <h4>{data.discription}</h4>
                </div>

            </div>
        )

    }

    else{

        return(
            <div className="mainPart">

                <div className="image">
                    <img src={data.image} alt={data.title}/>
                </div>

                <div className="detail">
                    <h1>{data.title}</h1>
                    <h3>نویسنده : {data.author}</h3>
                    <h3>انتشارات : {data.publisher}</h3>
                    <button>خرید</button>
                </div>

                <div className="discription">
                    <h2>درباره کتاب</h2>
                    <h4>{data.discription}</h4>
                </div>

            </div>
        )

    }

}
