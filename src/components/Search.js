import React from 'react';

const Search = () => {
    const location = "Rugby, UK"
    return (
        <div className="">
            <form>
                <label htmlFor="location">
                    Location
                    <input id="" value={location} placeholder="Location"/>
                </label>
                <button className="" type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Search;