import React from 'react';

const CounTable = ({name, capital, subregion, population}) => {

	return(
       <table>
           <tr>
                <td className='ph3'>{name}</td>
                <td className='ph3'>{capital}</td>
                <td className='ph3'>{subregion}</td>
                <td className='ph3'>{population}</td>
           </tr>
            
       </table>
    );
}

export default CounTable;