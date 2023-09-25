'use client'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';
import { useProduct } from '@/hooks/useProduct';

export default function ProductCard() {

    const { product } = useProduct();

    return (

        <Grid container spacing={1} >
            {product.map(e => (
                <Grid key={e.productId} item lg={2} md={3} sm={3} xs={4}  >
                    <Card sx={{ width: '100%' }}>
                        <CardActionArea  >
                            <CardMedia
                                component="img"
                                sx={{ height: '100%' }}
                                image={e.photoUrl}
                                alt="green iguana"
                            />
                            <CardContent sx={{ p: 1 }} >
                                <Typography noWrap variant="caption">
                                    {e.name}
                                </Typography>
                                <Typography noWrap variant="body2" color="text.secondary">

                                    {e.price.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' })}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            ))}
        </Grid>



    );
}