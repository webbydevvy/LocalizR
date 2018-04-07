import React from 'react';
import Header from './Header';
import SubHeader from './SubHeader';
import Font from "./styledComponents/fonts.js";

const Headers = (props) => {
  return (
    <Font>
      <Header
        header={props.header}
      />
      <img src="https://cdn2.iconfinder.com/data/icons/Flag/134/Spain.png" alt="themeimage" width="150" />
      <SubHeader
        subheader={props.subHeader}/>
    </Font>
  );
};

export default Headers;