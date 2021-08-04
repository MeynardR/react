import React from 'react';
import CounTable from './CounTable';

const List = ({ countries }) => {

    const listComponent = countries.map((user, i) => {
        return (
            <CounTable 
                key={i} 
                name={countries[i].name} 
                capital={countries[i].capital} 
                subregion={countries[i].subregion} 
                population={countries[i].population}
            />
        )
    })
    
    return (
        <React.Fragment>

            <table>
                <td>{listComponent}</td>
            </table>

            <CounTable name={countries[0].name} capital={countries[0].capital} subregion={countries[0].subregion} population={countries[0].population}/>

            <CounTable name={countries[1].name} capital={countries[1].capital} subregion={countries[1].subregion} population={countries[1].population}/>

        </React.Fragment>
        
    );
}

export default List;