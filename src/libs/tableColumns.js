'use client'

import EditButton from "@/components/EditButton";

export const productColumns = [

    {
        field: 'productId',
        headerName: 'ID',
        width: 50
    },
    {
        field: 'photoUrl',
        headerName: 'Image URL',
        width: 100,
        renderCell: (params) => {
            return <img style={{ height: '100%', width: '100%' }} src={params.value} />
        }
    },
    {
        field: 'created',
        headerName: 'Created at',
        width: 175,
    },
    {
        field: 'name',
        headerName: 'Name',
        flex: 1
    },
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
        renderCell: (params) => {
            return params.value.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' });
        }
    },
    {
        field: 'isActive',
        type: 'boolean',
        headerName: 'isActive',
    },
    {

        filterable: false,
        width: 50,
        type: 'actions',
     
        renderCell: (params) => {


            return <EditButton id={params.id} />
        }
    },
];