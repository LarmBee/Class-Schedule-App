
import React, { useEffect, useState } from 'react'

const NoteList = () => {

    const [Notes, setNotes] = useState([]);



    const getNotes = async () => {
        const response = await fetch("https://ratibar.herokuapp.com/schedules");
        const FinalData = await response.json();
        setNotes(FinalData)
		console.log(FinalData);
    }



    useEffect(() => {
        getNotes();
    }, [])
	


    return (
      
            <div className="container">
               
                {
                    Notes.map((Note) => {
                        return (

                            <div className="card_item" key={Note.id}>
                                <div className="card_inner">
                                    {/* <img src={Note.a} alt="" style={{width: '70px', height: '70px'}}/> */}
									<h1>{Note.title}</h1>
									<h2>{Note.date}</h2>
									<h2>{Note.time}</h2>
									<h2>{Note.description}</h2>
                                </div>

                            </div>
                        )
                    })
                }

            </div>              


    )
}

export default NoteList;