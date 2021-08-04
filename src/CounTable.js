import React from 'react';

const CounTable = ({name, capital, subregion, population}) => {

	return(
       <div>
           <table>
			   <tr>
                    <th>Name</th>
                    <th>Captial</th>
                    <th>Sub Region</th>
                    <th>Population</th>
                </tr>
				<tr>
					<td>{name}</td>
					<td>{capital}</td>
					<td>{subregion}</td>
					<td>{population}</td>
				</tr>
			</table>
       </div>
    );
}

export default CounTable;