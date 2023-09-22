import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';

export default function DataTable({
    columns,
    rowId,
    selected,
    setSelected,
    data
}) {

    return (

        <Paper elevation={2} >

            <div style={style}>

                <DataGrid
                    onRowSelectionModelChange={(dataSelected) => setSelected(dataSelected)}
                    rowSelectionModel={selected}
                    rows={data}
                    getRowId={(row) => row?.[rowId]}
                    columns={columns}
                    
                    checkboxSelection
                />

            </div>

        </Paper>
        
    );
}



let style = {
    height: 423,
    width: '100%'
}