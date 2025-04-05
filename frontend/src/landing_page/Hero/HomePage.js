import React from 'react';
import Usage from './Usage';
import Doctors from './Doctors';
import Department from './Department';
import Application from './Application';

function HomePage() {
    return ( 
        <>
          <Usage/>
          <Doctors/>
          <Department/>
          <Application/>
        </>
     );
}

export default HomePage;