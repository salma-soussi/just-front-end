import { Chip, TablePagination, TableFooter, IconButton, Paper, TableRow, TableHead, TableCell, TableBody, Table, makeStyles, useTheme, withStyles } from '@material-ui/core';

export const StyledTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

export const StyledTableRow = withStyles(theme => ({
    root: {
        '&:nth-of-type(odd)': {
            // backgroundColor: theme.palette.background.main
        },
    },
}))(TableRow);


export const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing(3),
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
    chip: {
        margin: theme.spacing(1),
    },
}));

export const useStyles1 = makeStyles(theme => ({
    root: {
        flexShrink: 0,
        color: theme.palette.text.secondary,
        marginLeft: theme.spacing(2.5),
    },
}));