import React from 'react';
import Banner from '../../components/Banner/Banner';
import States from '../../components/States/States';
import Trending from '../../components/Trending.jsx/Trending';

const Root = () => {
    return (
        <div>
            <Banner></Banner>
            <States></States>
            <Trending></Trending>
        </div>
    );
};

export default Root;