'use client';

import * as React from 'react';
import { styled } from '@mui/material/styles';
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { DataGrid, GridRow } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import NavTimesheet from './nav_timesheet';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: (theme.vars ?? theme).palette.text.secondary,
    ...theme.applyStyles('dark', {
        backgroundColor: '#1A2027',
    }),
}));


export default function TimesheetView() {
    const { data } = useDemoData({
        dataSet: 'Commodity',
        rowLength: 20,
        maxColumns: 5,
    });
    return (
        <>
            <NavTimesheet />
            <Grid container bgcolor="white"> {/* This is the "row" container */}

                <Grid size={3}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DateCalendar
                            sx={{ backgroundColor: "white" }}
                        />
                    </LocalizationProvider>
                </Grid>


                <Grid size={9}>
                    {/* <DataGrid {...data}

                     /> */}
                    <Box >
                        <div>
                            <h2>July</h2>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'row-reverse',
                                    p: 1,
                                    m: 1,
                                    bgcolor: 'background.paper',
                                    borderRadius: 1,
                                }}
                            >
                                <Button>Day</Button>
                                <Button>Week</Button>
                            </Box>
                        </div>
                    </Box>
                    <Box>
                        <Box
                            sx={{
                                display: 'grid',
                                gridAutoFlow: 'row',
                                gridTemplateColumns: 'repeat(7, 1fr)',
                                gridTemplateRows: 'repeat(2, 50px)',
                                gap: 1,
                            }}
                        >
                            <Item sx={{ gridColumn: '1', gridRow: '1 / 3' }}>Mon</Item>
                            <Item sx={{ gridColumn: '2', gridRow: '1 / 3' }}>Tue</Item>
                            <Item sx={{ gridColumn: '3', gridRow: '1 / 3' }}>Wes</Item>
                            <Item sx={{ gridColumn: '4', gridRow: '1 / 3' }}>Thu</Item>
                            <Item sx={{ gridColumn: '5', gridRow: '1 / 3' }}>Fri</Item>
                            <Item sx={{ gridColumn: '6', gridRow: '1 / 3' }}>Sat</Item>
                            <Item sx={{ gridColumn: '7', gridRow: '1 / 3' }}>Sun</Item>
                        </Box>
                        <Box
                            sx={{
                                display: 'list-item',
                                gridAutoFlow: 'row',
                                gridTemplateColumns: 'repeat(7, 1fr)',
                                gridTemplateRows: 'repeat(2, 50px)',
                                gap: 1,
                            }}
                        >
                            <Item sx={{ gridColumn: '1', gridRow: '1 / 3' }}></Item>
                            <Item sx={{ gridColumn: '2', gridRow: '1 / 3' }}></Item>
                            <Item sx={{ gridColumn: '3', gridRow: '1 / 3' }}></Item>
                            <Item sx={{ gridColumn: '4', gridRow: '1 / 3' }}></Item>
                            <Item sx={{ gridColumn: '5', gridRow: '1 / 3' }}></Item>
                            <Item sx={{ gridColumn: '6', gridRow: '1 / 3' }}></Item>
                            <Item sx={{ gridColumn: '7', gridRow: '1 / 3' }}></Item>
                        </Box>
                        <Box
                            sx={{
                                display: 'list-item',
                                gridAutoFlow: 'row',
                                gridTemplateColumns: 'repeat(7, 1fr)',
                                gridTemplateRows: 'repeat(2, 50px)',
                                gap: 1,
                            }}
                        >
                            <Item sx={{ gridColumn: '1', gridRow: '1 / 3' }}>1</Item>
                            <Item sx={{ gridColumn: '2', gridRow: '1 / 3' }}>2</Item>
                            <Item sx={{ gridColumn: '3', gridRow: '1 / 3' }}>3</Item>
                            <Item sx={{ gridColumn: '4', gridRow: '1 / 3' }}>4</Item>
                            <Item sx={{ gridColumn: '5', gridRow: '1 / 3' }}>5</Item>
                            <Item sx={{ gridColumn: '6', gridRow: '1 / 3' }}>6</Item>
                            <Item sx={{ gridColumn: '7', gridRow: '1 / 3' }}>7</Item>
                        </Box>
                    </Box>
                </Grid>


            </Grid>





        </>)
}

