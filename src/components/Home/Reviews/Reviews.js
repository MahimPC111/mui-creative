import { Avatar, Box, Card, CardContent, CardHeader, Grid, Typography } from '@mui/material';
import React from 'react';
import client1 from '../../../assets/clients/client-1.jpeg'
import client3 from '../../../assets/clients/client-3.jpeg'
import client4 from '../../../assets/clients/client-4.jpeg'
import client2 from '../../../assets/clients/client-2.jpeg'
import SectionTitle from '../../../shortComponents/SectionTitle/SectionTitle';

const Reviews = () => {
    const reviews = [
        {
            img: client1,
            name: 'Beki witson',
            location: 'New york, USA',
            des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, nam labore, amet fugiat dicta ipsa accusantium tempore quo, obcaecati aperiam ducimus maxime qui modi in non.'
        },
        {
            img: client2,
            name: 'Jake williams',
            location: 'London, UK',
            des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, nam labore, amet fugiat dicta ipsa accusantium tempore quo, obcaecati aperiam ducimus maxime qui modi in non.'
        },
        {
            img: client3,
            name: 'Taylor james',
            location: 'Sydney, Australia',
            des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, nam labore, amet fugiat dicta ipsa accusantium tempore quo, obcaecati aperiam ducimus maxime qui modi in non.'
        },
        {
            img: client4,
            name: 'Karl bestow',
            location: 'Angola, South Africa',
            des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, nam labore, amet fugiat dicta ipsa accusantium tempore quo, obcaecati aperiam ducimus maxime qui modi in non.'
        },
    ]

    return (
        <Box>
            <SectionTitle
                title='Clients'
                colored="feedback" />

            <Grid container spacing={2} mt={1}>
                {
                    reviews.map((review, i) => (
                        <Grid key={i} xs={12} sm={6} md={4} lg={3} item>
                            <Card sx={{
                                maxWidth: 280,
                                margin: 'auto',
                                borderRadius: '0',
                                border: '1px solid lightgrey',
                                boxShadow: 'none'
                            }}>
                                <CardHeader
                                    avatar={
                                        <Avatar>
                                            <img width={100} src={review.img} alt="" />
                                        </Avatar>
                                    }
                                    title={review.name}
                                    subheader={review.location}
                                />
                                <CardContent sx={{
                                    py: 0,
                                    '&:last-child': {
                                        pb: 0
                                    }
                                }}>
                                    <Typography sx={{ p: 0, textAlign: 'justify' }} paragraph>
                                        {
                                            review.des.length > 120 ?
                                                review.des.slice(0, 120) + "..." : review.des
                                        }
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))
                }
            </Grid>
        </Box>
    );
};

export default Reviews;