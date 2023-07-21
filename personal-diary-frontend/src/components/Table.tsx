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
import BasicModal from './Modal';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

function createData(slNo: number, title: string, createdOn: string) {
    return { slNo, title, createdOn };
}

const Typography = styled.span`
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 800;
    font-size: 0.8rem;
`;

/**
 * BasicTable component to display the list of entries
 * @returns {JSX.Element} BasicTable component
 */
export default function BasicTable({ records }: { records: Array<any> }) {
    const [modalContent, setModalContent] = useState({
        title: '',
        content: '',
        open: false,
    });
    const [rows, setRows] = useState<Array<any>>([]);

    const handleModalClose = () => {
        setModalContent({ ...modalContent, open: false });
        return null;
    };
    const handleModalSave = () => {
        setModalContent({ ...modalContent, open: false });
        //Fire an API call to save the data
        return null;
    };

    useEffect(() => {
        if (records.length === 0) return;
        for (let record of records) {
            if (record.title != '')
                setRows((rows) => [
                    ...rows,
                    createData(record.slNo, record.title, record.createdOn),
                ]);
        }
    }, []);

    return (
        <TableContainer component={Paper}>
            <BasicModal
                modalContent={modalContent}
                onClose={handleModalClose}
                onSave={handleModalSave}
            />
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="left">
                            <Typography>Sl. No.</Typography>
                        </TableCell>
                        <TableCell align="center">
                            <Typography>Title</Typography>
                        </TableCell>
                        <TableCell align="center">
                            <Typography>Created On</Typography>
                        </TableCell>
                        <TableCell align="right">
                            <Typography>Modify Entry</Typography>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.length ? (
                        rows.map((row) => (
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
                                <TableCell
                                    align="center"
                                    sx={{ maxWidth: '50vh' }}
                                >
                                    {row.title}
                                </TableCell>
                                <TableCell align="center">
                                    {row.createdOn}
                                </TableCell>
                                <TableCell align="right">
                                    <IconButton
                                        aria-label="delete"
                                        color="primary"
                                    >
                                        <EditIcon />
                                    </IconButton>
                                    <IconButton
                                        aria-label="delete"
                                        color="primary"
                                    >
                                        <DeleteIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell align="center" colSpan={4}>
                                Add a new entry to get started
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

BasicTable.propTypes = {
    records: PropTypes.array.isRequired,
};
