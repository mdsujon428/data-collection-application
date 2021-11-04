import { Button, Checkbox, Container, FormControlLabel, Grid, TextField, Typography } from '@mui/material';
import { border, Box, textAlign } from '@mui/system';
import { useState } from 'react';

const StoreForm = () => {
    const bgCyan = '#18ffff';
    const [checkbox, setCheckbox] = useState(false)
    const handleSubmit = (e) => {
        e.target.reset()
        e.preventDefault()
    }
    const handleChecked = (e) => {
        setCheckbox(e.target.checked)
    }
    return (
        <Container >
            <Box sx={{ px: 1, m: 2, py: 2, border: 1, borderColor: 'grey.500', borderRadius: 2 }}>
                <form onSubmit={handleSubmit}>
                    <Typography variant='h3' sx={{ display: { xs: 'none', sm: 'block' }, color: bgCyan }}>Information Collector Application </Typography>
                    <TextField
                        sx={{textAlign:'left',mb:2}}
                        id="standard-helperText"
                        variant="standard"
                         value={new Date().toLocaleString()}
                    />
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <TextField
                                required
                                sx={{ width: '100%' }}
                                placeholder='Store Name'
                                variant="outlined" />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                sx={{ width: '100%' }}
                                placeholder='Store Type/Business Type or Other Type'
                                variant="outlined" />
                        </Grid>

                        <Grid item xs={12} sm={12} md={12}>
                            <TextField
                                sx={{ width: '100%' }}
                                placeholder='Owner Name'
                                variant="outlined" />
                        </Grid>
                        {checkbox && <Grid item xs={12} sm={12} md={12}>
                            <TextField
                                sx={{ width: '100%' }}
                                placeholder='Manager Name'
                                variant="outlined" />
                        </Grid>

                        }
                        {checkbox && <Grid item xs={12} sm={12} md={12}>
                            <TextField
                                sx={{ width: '100%' }}
                                placeholder='Manager Mobile Number'
                                variant="outlined" />
                        </Grid>

                        }
                        <Grid item xs={12} sm={12} md={12}>
                            <FormControlLabel onClick={handleChecked} sx={{ ml: 1, display: 'block', textAlign: 'left' }} control={<Checkbox defaultChecked />} label="Is there manager" />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} >
                            <TextField
                                sx={{ width: '100%' }}
                                placeholder='Mobile Number'
                                variant="outlined" />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                            <TextField
                                sx={{ width: '100%' }}
                                placeholder='Street'
                                variant="outlined" />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                sx={{ width: '100%' }}
                                multiline
                                rows={4}
                                placeholder="Address"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                sx={{ width: '100%' }}
                                multiline
                                rows={4}
                                placeholder="Auxillary Address"
                            />
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <Button type='submit' sx={{ width: '100%', py: 2, bgcolor: bgCyan, fontWeight: 600, fontSize: 18 }}>SUBMIT</Button>
                        </Grid>

                    </Grid>
                </form>
            </Box>
        </Container>
    );
};

export default StoreForm;