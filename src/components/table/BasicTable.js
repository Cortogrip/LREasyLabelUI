
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import React, { useState, useEffect } from 'react';


function createData(id, name, fname, email) {
  return { id, name, fname, email};
}

let rows = [];

// const rows = [
//   createData("001", "Simonnet", "laurent", "laurent.simonnet@gmail.com"),
// ];

export default function BasicTable() {

  const [page, setPost] = useState([]);
  rows = [];
  useEffect(() => {

      fetch(
        'http://localhost:6469/api/users', )
         .then((response) => response.json())
         .then((page) => {
            console.log(page);
            setPost(page);
         })
         .catch((err) => {
            console.log(err.message);
         });

  }, []);

  if (typeof page.page != 'undefined'){
    console.log("------------------- 1 ------------------------");
    console.log("Index         : " + page.page);
    console.log("Nb of users   : " + page.total);
    console.log("Nb of pages   : " + page.total_pages);
    console.log("User per page : " + page.per_page);
    console.log("Data : " + page.data);
    console.log("-------------------------------------------");
    page.data.map((user)=>{
      console.log("User :" + user.id + " - " + user.first_name + " - " + user.last_name + " - " + user. email );
      rows.push(createData(user.id, user.last_name, user.first_name, user. email));
    });
  }



  // page.data.forEach(user => {
  //   console.log("User :" + user.id + " - " + user.first_name + " - " + user.last_name + " - " + user. email );
  // });



  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow >
            <TableCell className="headerRow">Id</TableCell>
            <TableCell className="headerRow">Name</TableCell>
            <TableCell className="headerRow">Firstname</TableCell>
            <TableCell className="headerRow">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left">{row.id}</TableCell>
              <TableCell align="left">{row.name}</TableCell>
              <TableCell align="left">{row.fname}</TableCell>
              <TableCell align="left">{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}