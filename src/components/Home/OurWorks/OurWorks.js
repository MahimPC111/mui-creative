import { Box, Grid, IconButton } from '@mui/material';
import React from 'react';
import SectionTitle from '../../../shortComponents/SectionTitle/SectionTitle';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CreativeCard from '../CreativeCard/CreativeCard';
import { styled } from '@mui/system';
import { works } from '../../../shortComponents/SectionTitle/works';

const OurWorks = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (newValue) => {
        setValue(newValue);
    };

    const HeadSection = styled(Box)(({ theme }) => ({
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        [theme.breakpoints.down('lg')]: {
            flexDirection: 'column',
            '&>img': {
                marginBottom: '2rem'
            }
        }
    }))

    return (
        <Box sx={{ my: 10 }}>
            <HeadSection>
                <SectionTitle
                    title='Here are some of'
                    colored="our works" />

                {/* Button for medium and lower device */}

                <Box sx={{ display: ['visible', 'visible', 'none'] }}>
                    <IconButton
                        onClick={() => setValue(value - 1)}
                        disabled={value === 0}
                        sx={{
                            border: '2px solid #959EAD',
                            color: 'black',
                            mr: 2
                        }}>
                        <ArrowBackIcon />
                    </IconButton>
                    <IconButton
                        onClick={() => setValue(value + 1)}
                        disabled={value === 3}
                        sx={{
                            border: '2px solid #959EAD',
                            color: 'black',
                        }}>
                        <ArrowForwardIcon />
                    </IconButton>
                </Box>

                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 5
                }}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        centered
                        sx={{
                            '& .MuiTabs-indicator': {
                                display: 'none'
                            },
                            '& .Mui-selected': {
                                color: 'primary.green',
                                fontWeight: 'bold'
                            },
                            '& .MuiButtonBase-root': {
                                textTransform: 'capitalize',
                            },
                            display: 'flex',
                        }}
                    >
                        <Tab label="All" />
                        <Tab label="Web development" />
                        <Tab label="Graphic design" />
                        <Tab label="Web design" />
                    </Tabs>

                    {/* Button for large and higher device */}

                    <Box sx={{
                        display: ['none', 'none', 'block']
                    }}>
                        <IconButton
                            onClick={() => setValue(value - 1)}
                            disabled={value === 0}
                            sx={{
                                border: `2px solid ${value === 0 ? '#959EAD' : 'black'}`,
                                color: 'black',
                                mr: 2
                            }}>
                            <ArrowBackIcon />
                        </IconButton>
                        <IconButton
                            onClick={() => setValue(value + 1)}
                            disabled={value === 3}
                            sx={{
                                border: `2px solid ${value === 3 ? '#959EAD' : 'black'}`,
                                color: 'black',
                            }}>
                            <ArrowForwardIcon />
                        </IconButton>
                    </Box>
                </Box>
            </HeadSection>

            {/* work card section */}
            <Grid container spacing={3}>
                {
                    works[value].map((image, i) => (
                        <Grid key={i} xs={12} sm={6} md={4} item>
                            <CreativeCard image={image} />
                        </Grid>
                    ))
                }
            </Grid>
        </Box >
    );
};

export default OurWorks;