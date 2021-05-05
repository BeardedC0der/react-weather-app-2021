import React, { useState } from 'react';

const Search = () => {
    const [ location, setlocation ] = useState("Rugby, UK");
    return (
        <div className="">
            <form>
                <label htmlFor="location">
                    Location
                    <input 
                        id="location" 
                        value={location} 
                        placeholder="Location" 
                        onChange={ e => setlocation(e.target.value)}
                        onBlur={ e => setlocation(e.target.value)}
                    />
                </label>
                <button className="" type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Search;