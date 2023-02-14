import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material';
import React from 'react';
import SectionTitle from '../../../shortComponents/SectionTitle/SectionTitle';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const FAQ = () => {
    const items = [
        {
            title: 'How do I pay for the essentials on premium plan?',
            des: 'Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet, consectetur.Lorem ipsum dolor sit amet, consectetur.Lorem ipsum dolor sit amet, consectetur.'
        },
        {
            title: 'How do I pay for the essentials on premium plan?',
            des: 'Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet, consectetur.Lorem ipsum dolor sit amet, consectetur.Lorem ipsum dolor sit amet, consectetur.'
        },
        {
            title: 'How do I pay for the essentials on premium plan?',
            des: 'Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet, consectetur.Lorem ipsum dolor sit amet, consectetur.Lorem ipsum dolor sit amet, consectetur.'
        },
        {
            title: 'How do I pay for the essentials on premium plan?',
            des: 'Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet, consectetur.Lorem ipsum dolor sit amet, consectetur.Lorem ipsum dolor sit amet, consectetur.'
        },
    ]


    const CustomExpandIcon = () => {
        return <div>
            <div className='expandMoreIcon'>
                <AddIcon />
            </div>
            <div className='removeExpandIcon'>
                <RemoveIcon />
            </div>
        </div>
    }

    return (
        <Box sx={{ my: 10 }}>
            <SectionTitle
                title='Frequently asked'
                colored="questions" />
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 1
            }}>
                {
                    items.map((item, i) => (
                        <Accordion key={i} sx={{
                            boxShadow: 'none',
                            border: '1px solid #E5EAF4',
                            P: 2,
                            '& .Mui-expanded': {
                                '& .expandMoreIcon': {
                                    display: 'none'
                                },
                                '& .removeExpandIcon': {
                                    display: 'block',
                                    '& svg': {
                                        color: 'primary.green'
                                    }
                                }
                            }
                        }}>
                            <AccordionSummary
                                sx={{
                                    '& p': {
                                        color: 'primary.main',
                                        fontWeight: 'bold'
                                    },
                                    '& .Mui-expanded': {
                                        '& p': {
                                            color: 'primary.green'
                                        }
                                    },
                                    '& .removeExpandIcon': {
                                        display: 'none'
                                    }
                                }}
                                expandIcon={<CustomExpandIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography>{item.title}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography sx={{ color: '#5A7184' }}>
                                    {item.des}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    ))
                }
            </Box>

        </Box>
    );
};

export default FAQ;