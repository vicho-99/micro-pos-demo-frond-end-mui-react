import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Button, Divider } from '@mui/material';
import Stack from '@mui/material/Stack';
import ProductCard from '@/components/ProductCard';

export default function BasicGrid() {

    return (

        <Grid container spacing={1}  >

            <Grid item xs={9} lg={9} sx={{ p: 1 }} style={{ height: '100%', overflow: 'auto' }} >
                <ProductCard />
            </Grid>

            <Grid item xs={3} sx={{ p: 1 }} >

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
                                Current Order
                            </Typography>

                            <Divider />
                        </Grid>


                        <Grid container justifyContent={"end"} direction={"column"} item lg={12}  >

                            <Stack spacing={2} direction="column" >

                                <Stack spacing={1} direction="column" sx={{ bgcolor: 'background.default', p: 2, borderRadius: 4 }}  >

                                    <Grid container justifyContent={"space-between"} direction={"row"}   >

                                        <Typography variant="button" display="block" >
                                            Total
                                        </Typography>


                                        <Typography variant="button" display="block" >
                                            500.000
                                        </Typography>

                                    </Grid>

                                    <Grid container justifyContent={"space-between"} direction={"row"}   >

                                        <Typography variant="button" display="block" >
                                            Taxes
                                        </Typography>


                                        <Typography variant="button" display="block" >
                                            500.000
                                        </Typography>

                                    </Grid>

                                </Stack>


                                <Button color="primary" variant="contained">PAY </Button>

                            </Stack>




                        </Grid>
                    </Grid>

                </Paper>

            </Grid>

        </Grid>

    );

}