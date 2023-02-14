import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const Service = ({ service }) => {
    const { image, title, details } = service;
    return (
        <Card sx={{ maxWidth: 345, mx: 'auto', pt: 2 }}>
            <CardMedia
                sx={{ height: 200, width: 200, mx: 'auto' }}
                image={image}
            />
            <CardContent sx={{ textAlign: 'center' }}>
                <Typography gutterBottom sx={{ fontWeight: 'bold' }} variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {details.length > 250 ? details.slice(0, 250) + '...' : details}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default Service;