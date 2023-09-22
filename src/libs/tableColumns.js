export const productColumns = [
    { field: 'productId', headerName: 'ID', width: 85 },
    { field: 'created', headerName: 'Created at', width: 175, },
    { field: 'name', headerName: 'Name', flex: 1 },
    {
        field: 'stock',
        headerName: 'Stock',
        type: 'number',
        width: 90,
    },
    {
        field: 'price',
        headerName: 'Price',
        type: 'number',
        width: 90,
    },
    { field: 'isActive', type: 'boolean', headerName: 'isActive' },
];