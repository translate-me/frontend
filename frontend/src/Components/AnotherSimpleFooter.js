import React from 'react';
let styles;

export const AnotherSimpleFooter = () => (
  <div style={styles.container}>
    <p><b style={styles.logo}>translate.me</b> | 2019</p>
  </div>
);

styles = {
  container: {
    fontFamily: 'Raleway',
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

export default AnotherSimpleFooter;
