import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from '@mui/material';

export const MuiTable = () => {
  return (
    <TableContainer component={Paper} sx={{ maxHeight: '300px' }}>
      <Table aria-label="simple table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell align="center">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.first_name}</TableCell>
              <TableCell>{row.last_name}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const tableData = [
  {
    id: 1,
    first_name: 'Gerri',
    last_name: 'Caghy',
    email: 'gcaghy0@amazon.co.jp',
    gender: 'Non-binary',
    ip_address: '158.214.182.220',
  },
  {
    id: 2,
    first_name: 'Regan',
    last_name: 'Weller',
    email: 'rweller1@abc.net.au',
    gender: 'Male',
    ip_address: '230.100.228.99',
  },
  {
    id: 3,
    first_name: 'Sarajane',
    last_name: 'Karpe',
    email: 'skarpe2@plala.or.jp',
    gender: 'Female',
    ip_address: '137.35.20.222',
  },
  {
    id: 4,
    first_name: 'Deeann',
    last_name: 'Dillinton',
    email: 'ddillinton3@weather.com',
    gender: 'Female',
    ip_address: '11.203.28.242',
  },
  {
    id: 5,
    first_name: 'Ermengarde',
    last_name: 'Brudenell',
    email: 'ebrudenell4@amazonaws.com',
    gender: 'Female',
    ip_address: '154.246.69.218',
  },
  {
    id: 6,
    first_name: 'Rose',
    last_name: 'Pays',
    email: 'rpays5@moonfruit.com',
    gender: 'Female',
    ip_address: '54.159.22.200',
  },
  {
    id: 7,
    first_name: 'Keen',
    last_name: 'Callow',
    email: 'kcallow6@state.gov',
    gender: 'Male',
    ip_address: '194.91.168.158',
  },
  {
    id: 8,
    first_name: 'Ewan',
    last_name: 'Rowena',
    email: 'erowena7@yellowbook.com',
    gender: 'Non-binary',
    ip_address: '76.167.27.142',
  },
  {
    id: 9,
    first_name: 'Madison',
    last_name: 'Tarbett',
    email: 'mtarbett8@redcross.org',
    gender: 'Male',
    ip_address: '52.27.230.128',
  },
  {
    id: 10,
    first_name: 'Gaspar',
    last_name: 'Gornall',
    email: 'ggornall9@mozilla.com',
    gender: 'Male',
    ip_address: '217.91.153.32',
  },
];
