import React from 'react';
import { EventList } from './components/Events/EventList/EventList';
import Map from './components/Map/Map';
import { MarkerProvider } from './contexts/marker-provider';

function App() {
  return (
    <MarkerProvider>
      <div>
        <div>
          <Map/>
        </div>
      </div>
    </MarkerProvider>
  );
}

export default App;
