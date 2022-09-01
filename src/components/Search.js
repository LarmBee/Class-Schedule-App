import React from "react";
// import { useState, useEffect } from "react";
import { ReactSearchAutocomplete } from "react-search-autocomplete";

function Search({notes,handleOnSearch,handleOnSelect}) {
  

  return (
    <div>
      <section className="py-2 container">
        <div className="row justify-content-center">
          <div className="col-12" mb-5>
            <div className="mb-3 col-4 mx-auto text-center">
              <label form label>
                Search
              </label>
              {/* <input type="text" className='form-control'
                        value = {filter}
                        onChange = {SearchSchedule} /> */}
              {notes.length > 0 && (
                <ReactSearchAutocomplete
                  items={notes}
                  fuseOptions={{ keys: ["title", "description"] }}
                  resultStringKeyName="title"
                  onSearch={handleOnSearch}
                  // onHover={handleOnHover}
                  onSelect={handleOnSelect}
                  // onFocus={handleOnFocus}
                  autoFocus
                  // formatResult={formatResult}
                />
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Search;
