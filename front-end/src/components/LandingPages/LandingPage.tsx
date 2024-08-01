// import { useEffect, useState } from 'react';

import NotificationSystem from './NotificationSystem';
import WorkoutTracking from './WorkoutTracking';
import BandStyle from './BandStyle';
import TuneRoutine from './TuneRoutine';
import Specifications from './Specifications/Specifications';
import HabitsMindfulness from './HabitsMindfulness';
import ChangingDevice from './ChangingDevice';
import Subscribe from './Subscribe';
import HeroBanner from './HeroBanner';

const HomePage = () => {
    return (
        <div className='w-full overflow-hidden'>
            <HeroBanner />
            <WorkoutTracking />
            <NotificationSystem />
            <BandStyle />
            <TuneRoutine />
            <Specifications />
            <HabitsMindfulness />
            <ChangingDevice />
            <Subscribe/>
        </div>
    );
}

export default HomePage;
