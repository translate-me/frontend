import React from 'react';

const styles = {
  container: {
    fontFamily: 'Raleway',
    position: 'absolute',
    right: 0,
    bottom: 0,
    left: 0,
    flexDirection: 'row',
    textAlign: 'center',
  },
  logo:{
    fontFamily: 'Nixie One'
  }
};

export const SimpleFooter = () => (
  <div style={styles.container}>
    <p><b style={styles.logo}>translate.me</b> | 2019</p>
  </div>
);


export default SimpleFooter;
