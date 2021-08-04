import List from './List';
import { countries } from './countries'
import React from 'react';

const App = () => {
 
    return (
        <React.Fragment>
                <List countries={countries} />
        </React.Fragment>
    )
}

export default App;