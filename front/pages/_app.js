import React from 'react'
import Head from 'next/head';
import AppLayout from '../components/AppLayout';

const Kit = ({Component}) => {
    return (
        <>
            <Head>
                <title>Kiiten In The box!</title>
            </Head>
            <AppLayout>
                <Component/>
            </AppLayout>
        </>
    )
}

export default Kit
