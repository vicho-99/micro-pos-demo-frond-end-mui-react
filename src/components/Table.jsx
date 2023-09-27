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

                {data &&
                    <DataGrid
                        density='comfortable'
                        onRowSelectionModelChange={(dataSelected) => setSelected(dataSelected)}
                        rowSelectionModel={selected}
                        rows={data}
                        getRowId={(row) => row?.['productId']}
                        columns={columns}
                        disableSelectionOnClick={false}
                        checkboxSelection
                        disableRowSelectionOnClick
                    />
                }


            </div>

        </Paper>

    );
}



let style = {
    height: 423,
    width: '100%'
}