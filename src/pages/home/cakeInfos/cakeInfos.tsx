import React, { FC } from 'react';
import './cakeInfos.styles.css';
import RightSideCakeInfo from './rightside/rightSide';
import LeftSideCakeInfo from './leftSide/leftSide';


const CakeInfos: FC = () => (
  <div className={'cakeInfosContainer'}>
    <div className={'cakeInfos'}>
      <div className={'leftSide'}>
        <LeftSideCakeInfo />
      </div>
      <div className={'rightSide'}>
        <RightSideCakeInfo />
      </div>
    </div>
  </div>
);

export default CakeInfos;
