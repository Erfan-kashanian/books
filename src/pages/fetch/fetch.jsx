import { useEffect, useState } from "react"
import { supabase } from "/Users/Erfan kashanian/Desktop/books/my-app/src/config/supabase"

export const UseFetch = (category, subcategory) => {

    const [data, setData] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {

        const fetchData = async () => {

            setError(null)

            try {

                let query = supabase
                    .from('books')
                    .select('*')

                if (category) {
                    query = query.eq('category', category)
                }

                if (subcategory) {
                    query = query.eq('subcategory', subcategory)
                }

                const { data, error } = await query

                if (error) {
                    throw error
                }

                setData(data)

            } catch (err) {

                setError(err.message)

            }

        }

        fetchData()

    }, [category, subcategory])

    return [data, error]
}