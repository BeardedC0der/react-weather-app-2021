import React, { useEffect, useState } from 'react';

const Search = () => {
    const [location, setLocation] = useState({
        loading: false,
        location: "",
    });

    useEffect( () => {
        // set initial state
        setLocation({
            loading: true,
            location: ""
        })
        // grab the api key from the env file
        const APIkey = process.env.REACT_APP_API_KEY;
        console.log(location.location);
        // set up the weather api url
        const weather = `https://api.openweathermap.org/data/2.5/weather?q=${location.location}&APPID=${APIkey}&units=metric`;
        // const forecast = `https://api.openweathermap.org/data/2.5/forecast?q=${value}&APPID=${APIkey}&units=metric`;
        debugger
        fetch(weather)
            .then((res) => res.json())
            .then((response) => {
                setLocation({ loading: false, location: response });
                console.log(response);
            });
    }, [setLocation, location.location]);
    return (
        <div className="">
            <form>
                <label htmlFor="location">
                    Location
                    <input 
                        id="location" 
                        value={location.location} 
                        placeholder="Location" 
                        onChange={ e => setLocation({ loading: false, location: e.target.value })}
                        onBlur={ e => setLocation({ loading: false, location: e.target.value })}
                    />
                </label>
                <button className="" type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Search;