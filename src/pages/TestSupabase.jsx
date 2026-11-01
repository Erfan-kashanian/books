import { useEffect } from 'react'
import { supabase } from '../config/supabase'

function TestSupabase() {

    useEffect(() => {

        const getBooks = async () => {

            const { data, error } = await supabase
                .from('books')
                .select('*')

            console.log('Books:', data)
            console.log('Error:', error)

        }

        getBooks()

    }, [])

    return (
        <div>
            Test Supabase
        </div>
    )
}

export default TestSupabase