'use client'

import Table from '@/components/Table'
import useCategory from '@/hooks/useCategory';
import useOrder from '@/hooks/useOrder';

export default function TableList({
    columns
}) {

    let rowId = "orderId";

    const {
        order
    } = useOrder();



    return (

        <Table
            data={order}
            selected={[]}
            setSelected={null}
            rowId={rowId}
            columns={columns}
        />

    )

}