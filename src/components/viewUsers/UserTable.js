import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useState, useEffect } from 'react';
import { db } from '../../config/Firebase';


const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Name', width: 130 },
  { field: 'email', headerName: 'email', width: 130 },
  {
    field: 'mobile',
    headerName: 'Mobile',
    description: 'This column has a value getter and is not sortable.',
    sortable: true,
    width: 160,
    
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  
];

// const rows = [
//   { id: 1, email: 'Snow', name: 'Jon', age: 35, mobile: 123456},
//   { id: 2, email: 'Lannister', name: 'Cersei', age: 42 },
//   { id: 3, email: 'Lannister', name: 'Jaime', age: 45 },
//   { id: 4, email: 'Stark', name: 'Arya', age: 16 },
//   { id: 5, email: 'Targaryen', name: 'Daenerys', age: null },
//   { id: 6, email: 'Melisandre', name: null, age: 150 },
//   { id: 7, email: 'Clifford', name: 'Ferrara', age: 44 },
//   { id: 8, email: 'Frances', name: 'Rossini', age: 36 },
//   { id: 9, email: 'Roxie', name: 'Harvey', age: 65 },
// ];


export default function DataTable() {

  const [rows, setRows] = useState([]);
  const [users,setUsers]=useState([]);
  const fetchUsers=async()=>{
    const response=db.collection('users');
    const data=await response.get();
    var user;
    var counter = 1;
    data.docs.forEach(item=>{
      user = item.data();
      user['id'] = counter;
      
      console.log('user', user)
     
     console.log('rows', rows)
     counter++;
    })
    setRows([...rows, user])
  }
  useEffect(() => {
    fetchUsers();
  }, [])

console.log(rows);
// var user = users[0];
// user['id'] = 10
// rows.push(users[0])
 
  return (
    <div style={{ height: 400, width: '60%', marginLeft: '20%', marginTop: 50}}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
