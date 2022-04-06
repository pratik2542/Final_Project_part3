import React, { useEffect, useState } from 'react'
import MainScreen from '../../components/MainScreen'
import { Link } from "react-router-dom"
import { Badge, Button, Card } from 'react-bootstrap'
import axios from 'axios';

const MyNotes = () => {

const [notes, setNotes] = useState([]);

    const deleteHandler = (id) => {
        if (window.confirm("Are you sure?")) {

        }
      };

      const fetchNotes = async() => {
          const { data } = await axios.get('/api/notes');

          setNotes(data);
      };

      console.log(notes);

      useEffect(() => {
        fetchNotes();
      }, []);
      
      
  return (
    
        <MainScreen title='Wlecome Back, We are Mordern Developer..'>
            <Link to="/createnote">
                <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
                Create new Note
                </Button>
                </Link>
                    {
                        notes.map(note => (
                
                    <Card style={{ margin: 10 }}>
                    <Card.Header style={{ display: "flex" }}><span style={{
                      color: "black",
                      textDecoration: "none",
                      flex: 1,
                      cursor: "pointer",
                      alignSelf: "center",
                      fontSize: 18,
                    }}>
                        
                        </span>
                    <div>
                        <Button href={`/note/${note._id}`}>Edit</Button>
                        <Button
                      variant="danger"
                      className="mx-2"
                      onClick={() => deleteHandler(note._id)}
                    >
                      Delete
                    </Button>
                    </div>
                    </Card.Header>
                    <Card.Body>
                        <h4>
                            <Badge variant='Success'>
                                Category - {note.category}
                            </Badge>
                        </h4>
                    <blockquote className="blockquote mb-0">
                     <p>
                        {note.content}
                     </p>
                    <footer className="blockquote-footer">
                           Created on some date
                    </footer>
                    </blockquote>
                    </Card.Body>
                </Card>
            
                        ))
                    }
                
      
        </MainScreen>
    
  )
}

export default MyNotes