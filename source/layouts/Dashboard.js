import React from 'react';
import Counter from './Counter';
import Navi from './Navi';
import '../layouts/Counter.css';
import '../layouts/Navi.css';
import { Grid } from '@material-ui/core';

export default function Dashboard() {
    return (
        <div>
            <Grid
                container
                spacing={0}
                alignItems="center"
                justify="center"
                style={{ minHeight: '100vh' }}
            >
                <Navi />
                <Counter />
            </Grid>

        </div>
    )
}
