
import React, { useEffect, useState } from 'react'

const Announcements = () => {

    const [Announcements, setAnnouncements] = useState([]);



    const getAnnouncements = async () => {
        const response = await fetch("https://ratibar.herokuapp.com/announcements");
        const FinalData = await response.json();
        setAnnouncements(FinalData)
		console.log(FinalData);
    }



    useEffect(() => {
        getAnnouncements();
    }, [])
	


    return (
      
            <div className="container">
               
                {
                    Announcements.map((Announcement) => {
                        return (

                            <div className="card_item" key={Announcement.id}>
                                <div className="card_inner">
									<h1>{Announcement.title}</h1>
									<h2>{Announcement.description}</h2>
                                </div>

                            </div>
                        )
                    })
                }

            </div>              


    )
}

export default Announcements