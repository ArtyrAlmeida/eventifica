import React from 'react';
import { EventList } from './components/Events/EventList/EventList';
import Map from './components/Map/Map';

function App() {
  return (
    <div>
      <div>
        <EventList/>
        <Map/>
      </div>
    </div>
  );
}

export default App;
