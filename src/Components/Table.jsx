import React from 'react'




const Table = () => {
    return (
        <div className='table'>
            <table>
                <thead>
                    <tr>
                        <th>№</th>
                        <th>Ad</th>
                        <th>Soyad</th>
                        <th>Nömrə</th>
                        <th>Redaktə</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Aqşin</td>
                        <td>Rəhimli</td>
                        <td>0506869944</td>
                        <td>
                            <button>Redaktə</button>
                        </td>
                    </tr>
                </tbody>

            </table>
        </div>
    )
}

export default Table