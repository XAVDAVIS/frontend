import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function Show(props) {
    // access the id from the url params
    const { id } = useParams();
    const navigate = useNavigate(); 

    const formFields = {
        name: '', 
        title: '', 
        image: ''
    };

    const person = props.people ? props.people.find(person => person._id === id) : null;
    
    const [editForm, setEditForm] = useState(formFields);

useEffect(() => {
    if(person) {
        setEditForm(person)
    }
}, [person]); 

    const handleChange = (event) => {
        setEditForm({
            ...editForm, 
            [event.target.name]: event.target.value
        });
    };
    const handleSubmit = (event) => {
        event.PreventDefault();
        props.updatePeople(id, editForm);
    };

    const loaded = () => {
        // use the id to find the specific person in the people array to show
       
    
        return (
            <div className="person">
                <h2>{person.name}</h2>
                <h3>{person.title}</h3>
                {   person.image && 
                    <img src={person.image} alt={person.name} />
                }
                <form onSubmit={handleSubmit}>
                    <input 
                    type="text" 
                    name="name"
                    value={editForm.name}
                    onChange={handleChange}
                     />

                     <input 
                    type="text" 
                    name="title"
                    value={editForm.title}
                    onChange={handleChange}
                     />
                     <input 
                    type="text" 
                    name="image"
                    value={editForm.image}
                    onChange={handleChange}
                     />
                    <input type="submit" value="Update Person" />
                </form>
                <button onClick={handleDelete}>Delete This Person</button>
            </div>
        );
    };
    const loading = () => {
        return <h2>Loading ...</h2>;
    };

    const handleDelete = () => {
        props.deletePeople(id);
        navigate('/');
    };

    return (
        <section>
            { props.people ? loaded() : loading() }
           
        </section>
    );
}

export default Show;