import axios from "axios";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { AuthContext } from "../../components/layout";
import { useContext, useState } from "react";

const UpdateBook = () => {
    const { auth } = useContext(AuthContext);
    const [book, setBook] = useState({
        title: '',
        author: '',
        isbn: '',
        publicationYear: '',
    });

    const handleUpdateBook = async () => {
        try {
            const response = await axios.put(`http://localhost:3010/api/books/${book.id}`, 
                book, 
                {
                    headers: {
                        Authorization: `Bearer ${auth.token}`,
                    },
                }
            );
            console.log('response:', response);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <h1>Update Book</h1>
            <Card>
                <div className="p-field">
                    <label htmlFor="title">Title</label>
                    <InputText onChange={(e) => setBook((prevState) => ({ ...prevState, title: e.target.value }))} />
                </div>
                <div className="p-field">
                    <label htmlFor="author">Author</label>
                    <InputText onChange={(e) => setBook((prevState) => ({ ...prevState, author: e.target.value }))} />
                </div>
                <div className="p-field">
                    <label htmlFor="isbn">ISBN</label>
                    <InputText onChange={(e) => setBook((prevState) => ({ ...prevState, isbn: e.target.value }))} />
                </div>
                <div className="p-field">
                    <label htmlFor="publicationYear">Publication Year</label>
                    <InputText onChange={(e) => setBook((prevState) => ({ ...prevState, publicationYear: e.target.value }))} />
                </div>
                <button label='Update Book' onClick={handleUpdateBook}>Update Book</button>
            </Card>
        </div>
    );
};

export default UpdateBook;
