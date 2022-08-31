import React from 'react'
import {useState, useEffect} from "react"
import { ReactSearchAutocomplete } from 'react-search-autocomplete'

function Search() {
    const [filter, setFilter] = useState("")
    const [notes, setNotes] = useState([]);
    const getNotes = async () => {
        const response = await fetch("https://ratibar-backend.herokuapp.com/schedules");
        const data = await response.json();
        setNotes(data);
        // console.log({data});
      };
    
      useEffect(() => {
        getNotes();
      }, []);

      let items = []
      notes.forEach(note => {
        items.push(note?.title)
      });
      console.log(items)
      const handleOnSearch = (string, results) => {
        // onSearch will have as the first callback parameter
        // the string searched and for the second the results.
        console.log(string, results)
      }
    
      const handleOnHover = (result) => {
        // the item hovered
        console.log(result)
      }
    
      const handleOnSelect = (item) => {
        // the item selected
        console.log(item)
      }
    
      const handleOnFocus = () => {
        console.log('Focused')
      }

    const SearchSchedule = (e)=>{setFilter(e.target.value)}
    let schedulenSearch =  notes?.schedule?.filter(item =>{
        return Object.keys(item).some(key =>item[key].toString().toLowerCase().includes(filter => filter.toString().toLowerCase()))
    })
    // console.log(2);
  return (
    <div>
        <section className="py-2 container">
            <div className="row justify-content-center">
                <div className="col-12" mb-5>
                    <div className="mb-3 col-4 mx-auto text-center">
                        <label form label>Search</label>
                        {/* <input type="text" className='form-control'
                        value = {filter}
                        onChange = {SearchSchedule} /> */}
                        <ReactSearchAutocomplete
                          items={items}
                          onSearch={handleOnSearch}
                          onHover={handleOnHover}
                          onSelect={handleOnSelect}
                          onFocus={handleOnFocus}
                          autoFocus
                        />
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Search