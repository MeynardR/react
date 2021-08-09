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
                <tr>
                    <th className='ph4'>Name</th>
                    <th className='ph3'>Captial</th>
                    <th className='ph3'>Sub Region</th>
                    <th className='ph3'>Population</th>
                </tr>
            </table>
            
            {listComponent}

            <CounTable name={countries[0].name} capital={countries[0].capital} subregion={countries[0].subregion} population={countries[0].population}/>

            <CounTable name={countries[1].name} capital={countries[1].capital} subregion={countries[1].subregion} population={countries[1].population}/>

        </React.Fragment>
        
    );
}

export default List;