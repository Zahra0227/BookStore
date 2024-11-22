import axios from 'axios'
import React, { useContext, useEffect } from 'react'
import { DataTable, Column } from 'primereact/datatable';
import { AuthContext } from '../../components/layout';

const BookListPage = ()=>{
    const [books, setBooks]= React.useState([]);
    const [count , setCount]= React.useState(0);
    const {auth} = useContext(AuthContext);
    const getBooks = async () =>{
        try {
            const response = await axios.get('http://localhost:3010/api/books');

            console.log(response.data);
            setBooks(response.data.data);
            setCount(response.data.count);
            
        } catch (error) {error}
    };
    useEffect(()=>{
        getBooks();
    },[]);
    return (
    <div>
        <h1>BookListPage {count}</h1>
        <DataTable value={books}>
            <Column field= 'title' header='Title'/>
            <Column field= 'author' header='Author'/>
            <Column field= 'publicationYear' header='PY'/>
            <Column field= 'isbn' header='ISBN'/>
            <Column
             body={(rowData)=>{
                return (
                    <button
                     onClick={async()=>{
                       try {
                        let res = axios.delete(
                            `http://localhost:3010/api/books/${rowData._id}`,
                            {
                                headers: {
                                    Authorization:`Bearer ${auth.token}`,
                                },
                            }

                        );

                        console.log(res);

                        getBooks();
                    } catch (error) {
                        console.log(error)
                    }
                }}>Delete</button>)
            }} header='actions'/>
        </DataTable>
    </div>
)};
export default BookListPage;