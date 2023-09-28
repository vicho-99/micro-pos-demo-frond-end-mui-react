'use client'

import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Button, Divider } from '@mui/material';
import Stack from '@mui/material/Stack';
import useCart from '@/hooks/useCart';
import ProductOrderList from './ProductOrderList';

export default function OrderResumen() {

    const { cart, calculateCartTotals } = useCart();

    return (

        <Paper elevation={2} style={{ height: '100%' }} sx={{ p: 1.5 }} >

            <Grid
                sx={{ height: '100%' }}
                container
                alignItems="stretch"
                direction="row"
                justifyContent="space-between"
            >

                <Grid item lg={12} >

                    <Typography variant="h6" gutterBottom>
                        CURRENT ORDER
                    </Typography>

                    <Divider />

                    <ProductOrderList products={cart} />

                </Grid>


                <Grid container justifyContent={"end"} direction={"column"} item lg={12}  >

                    <Stack spacing={2} direction="column" >

                        <Button color="primary" size='large' variant="contained"> PAY    {calculateCartTotals().finalTotal.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' })} </Button>

                    </Stack>

                </Grid>

            </Grid>

        </Paper>
    )
}