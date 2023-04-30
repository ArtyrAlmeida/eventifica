import React from 'react';
import { EventList } from './components/Events/EventList/EventList';
import Map from './components/Map/Map';
import { MarkerProvider } from './contexts/marker-provider';
import classes from './App.module.scss'

function App() {
  return (
    <MarkerProvider>
      <div>
        <div className={classes.main}>
          <EventList/>
          <Map/>
        </div>
      </div>
    </MarkerProvider>
  );
}

export default App;
