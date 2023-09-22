'use client'

import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import AddIcon from '@mui/icons-material/Add';
import Stack from '@mui/material/Stack';
import ReListButton from '@/components/ReListButton';
import { useProduct } from '@/hooks/useProduct';
import RemoveButton from '@/components/RemoveButton';

export default function OptionPanel() {

    const {
        reListProducts,
        removeProducts,
        hasSelected
    } = useProduct();

    return (

        <Grid
            container
            direction="row"
            justifyContent="flex-end">

            <Stack
                direction="row"
                spacing={2}>

                <RemoveButton
                    remove={removeProducts}
                    disabled={!hasSelected}
                />

                <ReListButton
                    reList={reListProducts}
                />

                <Button
                    variant="contained"
                    endIcon={<AddIcon />}>
                    ADD
                </Button>

            </Stack>

        </Grid>

    )

}