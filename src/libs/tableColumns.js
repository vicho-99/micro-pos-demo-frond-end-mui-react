'use client'

import EditButton from "@/components/EditButton";
import useCategory from "@/hooks/useCategory";
import { useProduct } from "@/hooks/useProduct";


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
        field: 'actions',
        type: 'actions',
        renderCell: (params) => {
            const { setSelectedToEdit } = useProduct();
            return <EditButton id={params.id} setSelectedToEdit={setSelectedToEdit} />

        }
    },
];

export const categoryColumns = [

    {
        field: 'categoryId',
        headerName: 'ID',
        width: 50
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
        field: 'isActive',
        type: 'boolean',
        headerName: 'isActive',
    },
    {

        filterable: false,
        width: 50,
        field: 'actions',
        type: 'actions',
        renderCell: (params) => {

            const { setSelectedToEdit } = useCategory();

            return <EditButton id={params.id} setSelectedToEdit={setSelectedToEdit} />

        }
    },
];


export const orderColumns = [

    {
        field: 'orderId',
        headerName: 'ID',
        width: 85
    },

    {
        field: 'created',
        headerName: 'Created at',
        width: 175,
    },
    {
        field: 'paymentMethod',
        headerName: 'Payment Method',
        width: 175,
        flex: 1,
    },
    {
        field: 'totalAmount',
        type: 'number',
        headerName: 'Total',
        width: 175,

    },
    {
        field: 'totalItem',
        type: 'number',
        headerName: 'Lines',
        width: 175,
    },
    /*
    {

        filterable: false,
        width: 50,
        field: 'actions',
        type: 'actions',
           renderCell: (params) => {
  
              const { setSelectedToEdit } = useCategory();
  
              return <EditButton id={params.id} setSelectedToEdit={setSelectedToEdit} />
  
          }
    },
 */
];
