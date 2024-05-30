import React from 'react'

// import { ReactNode } from 'react';

// import StreamVideoProvider from '@/providers/StreamClientProvider';

const Meeting = ({ params }: {params:{ id: string }}) => {
    return (
        <div>
            <h1>Meeting room #:{params.id}</h1>
        </div>
    );
};

export default Meeting;