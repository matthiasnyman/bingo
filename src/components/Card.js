import React from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';

const Card = (props) => {
  const {backgroundImg, name} = props;
  return (
    <Flippy
      flipOnHover={false} // default false
      flipOnClick={true} // default false
      flipDirection="horizontal" // horizontal or vertical
      // ref={(r) => (this.flippy = r)} // to use toggle method like this.flippy.toggle()
      // if you pass isFlipped prop component will be controlled component.
      // and other props, which will go to div
      style={{
        height: '100%',
        width: '100%',
      }}
    >
      <FrontSide
        style={{
          backgroundColor: '#41669d',
          backgroundImage: `url(http://localhost:1337${backgroundImg})`,
          backgroundSize: 'cover',  
          color: 'white'  
        }}
      >
        {name}
      </FrontSide>
      <BackSide 
        style={{ 
          backgroundColor: '#175852',
          heigt: '100%',
          width: '100%',
        }}
      >
        x
      </BackSide>
    </Flippy>
  );
};

export default Card;
