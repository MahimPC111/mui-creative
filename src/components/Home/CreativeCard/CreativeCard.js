import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { Box } from '@mui/system';

const CreativeCard = ({ image }) => {
    return (
        <Card sx={{ maxWidth: 345, p: 2, borderRadius: '10px', margin: 'auto' }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="200"
                    image={image}
                    alt="work"
                    style={{ borderRadius: '10px', width: '300px', margin: 'auto' }}
                />
                <CardContent sx={{
                    p: 0,
                    pt: 4,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    '&:last-child': {
                        pb: 0
                    }
                }}>
                    <Box>
                        <Typography
                            gutterBottom
                            variant="body"
                            component="div"
                            color='text.secondary'
                        >
                            Web design
                        </Typography>
                        <Typography
                            variant="body2"
                            color="text.main"
                            fontWeight={600}
                            fontSize={20}
                        >
                            Web design research
                        </Typography>
                    </Box>
                    <IconButton>
                        <AddIcon sx={{
                            fontSize: '30px',
                            border: '1px solid grey',
                            borderRadius: '50%',
                            padding: '4px',
                            color: 'black'
                        }} />
                    </IconButton>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default CreativeCard;