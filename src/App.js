import React from 'react';
import Search from './components/Search';

function App() {
  const APIkey = process.env.REACT_APP_API_KEY;
  console.log(APIkey);
  // const weather = `https://api.openweathermap.org/data/2.5/weather?q=${value}&APPID=${APIkey}&units=metric`;
  // const forecast = `https://api.openweathermap.org/data/2.5/forecast?q=${value}&APPID=${APIkey}&units=metric`;

  return (
    <div className="">
      <Search/>
    </div>
  );
}

export default App;
