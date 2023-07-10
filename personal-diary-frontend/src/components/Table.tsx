import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import styled from 'styled-components';

function createData(slNo: number, title: string, createdOn: string) {
    return { slNo, title, createdOn };
}

const rows = [createData(0, 'title', '12/05/2023')];

const Typography = styled.span`
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 800;
    font-size: 0.8rem;
`;

export default function BasicTable() {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="left">
                            <Typography>Sl. No.</Typography>
                        </TableCell>{' '}
                        <TableCell align="right">
                            <Typography>Title</Typography>
                        </TableCell>
                        <TableCell align="right">
                            <Typography>Created On</Typography>
                        </TableCell>
                        <TableCell align="right">
                            <Typography>Modify Entry</Typography>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.slNo}
                            sx={{
                                '&:last-child td, &:last-child th': {
                                    border: 0,
                                },
                            }}
                        >
                            <TableCell component="th" scope="row">
                                {row.slNo}
                            </TableCell>
                            <TableCell align="right">{row.title}</TableCell>
                            <TableCell align="right">{row.createdOn}</TableCell>
                            <TableCell align="right">
                                <IconButton aria-label="delete" color="primary">
                                    <EditIcon />
                                </IconButton>
                                <IconButton aria-label="delete" color="primary">
                                    <DeleteIcon />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
