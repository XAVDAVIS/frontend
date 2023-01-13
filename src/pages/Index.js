import { useState } from 'react';
import { Link } from 'react-router-dom';

function Index(props) {
    const formFields = {
        name: '',
        title: '',
        image: ''
    };

    const [newForm, setNewForm] = useState(formFields);

    
    const handleChange = (event) => {
        // When the set state function is called
        // new state is passed in as argument
        // the new state is then used to replace old state
        // in summary: old state will always be overridden with new state
        setNewForm({
            ...newForm, 
            [event.target.name]: event.target.value 
        });
    };

    // TODO: finish this after form
    // this function will "lift" form state up the component hiearchy to Main component's createPeople function
    const handleSubmit = (event) => {
        event.preventDefault(); // this prevents a page refresh
        props.createPeople(newForm);
        setNewForm(formFields); // reset form to empty fields
    };
    
    const loaded = () => {
        return props.people.map(person => (
            <div key={person._id}>
                <Link to={`/people/${person._id}`}>
                    <h1>{person.name}</h1>
                </Link>
            </div>
        ));
    };
    const loading = () => {
        return <h1>Loading</h1>;
    };

    return (
        <section>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="name" 
                    onChange={handleChange} 
                    value={newForm.name} 
                />
                <input 
                    type="text" 
                    name="title" 
                    onChange={handleChange} 
                    value={newForm.title} 
                />
                <input 
                    type="text" 
                    name="image" 
                    onChange={handleChange} 
                    value={newForm.image} 
                />
                <input type="submit" value="Add Person" />
            </form>
            { props.people ? loaded() : loading() }
        </section>
    );
    
}

export default Index;