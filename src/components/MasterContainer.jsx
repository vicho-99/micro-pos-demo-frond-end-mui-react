import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

export default function MasterContainer({
    name,
    children
}) {

    return (

        <Container maxWidth="lg" >

            <Grid container direction="row" gap={2} >

                <Grid lg={12}  >

                    <Typography variant="h6">
                        {name}
                    </Typography>

                </Grid>

                <Grid lg={12}  >

                    <Divider />

                </Grid>

                <Grid sm={12} lg={12}>

                    {children}

                </Grid>

            </Grid>

        </Container>

    )
}