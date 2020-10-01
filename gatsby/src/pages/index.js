import React from 'react';
import { Layout } from '../components/Layout';
import { useLatestdata } from '../utils/useLatestdata';

const CurrentlySlicing = () => {
  return <p>H</p>;
};
const HotSlices = () => {
  return <p>h</p>;
};

const HomePage = () => {
  const { slicemasters, hotSlices } = useLatestdata();

  return (
    <div className='center'>
      <h1>The Best Pizza Downtown!</h1>
      <p>Open 11am to 11pm Every Single Day</p>
      <div>
        <CurrentlySlicing slicemasters={slicemasters}></CurrentlySlicing>
        <HotSlices hotSlices={hotSlices}></HotSlices>
      </div>
    </div>
  );
};

export default HomePage;
