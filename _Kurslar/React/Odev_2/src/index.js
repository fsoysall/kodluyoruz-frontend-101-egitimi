import React from 'react'
import styles from './styles.module.css'

export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>
}

export const Button = ({ text, type, size, disabled, border, padding, handleClick }) => {

  let paddingstyle = "";
  if(padding === "psmall") paddingstyle = styles.psmall;
  if(padding === "pmedium") paddingstyle = styles.pmedium;
  if(padding === "plarge") paddingstyle = styles.plarge;
  if(padding === "pxlarge") paddingstyle = styles.pxlarge;

  let borderstyle = "";
  if(border === "pill") borderstyle = styles.pill;
  if(border === "circle") borderstyle = styles.circle;
  if(border === "rounded-2") borderstyle = styles.rounded2;
  if(border === "rounded-3") borderstyle = styles.rounded3;
  if(border === "rounded-4") borderstyle = styles.rounded4;
  if(border === "rounded-5") borderstyle = styles.rounded5;
  if(border === "rounded-6") borderstyle = styles.rounded6;
  if(border === "rounded-7") borderstyle = styles.rounded7;
  if(border === "rounded-8") borderstyle = styles.rounded8;
  if(border === "rounded-9") borderstyle = styles.rounded9;
  if(border === "rounded-10") borderstyle = styles.rounded10;
  if(border === "rounded-20") borderstyle = styles.rounded20;

  let disabledstyle = "";
  if(disabled === true) disabledstyle = styles.disabled;

  let sizestyle = "";

  if(size==="s01") sizestyle = styles.s01;
  if(size==="s03") sizestyle = styles.s03;
  if(size==="s05") sizestyle = styles.s05;
  if(size==="s08") sizestyle = styles.s08;
  if(size==="s10") sizestyle = styles.s10;
  if(size==="s12") sizestyle = styles.s12;
  if(size==="s15") sizestyle = styles.s15;
  if(size==="s18") sizestyle = styles.s18;
  if(size==="s20") sizestyle = styles.s20;
  if(size==="s25") sizestyle = styles.s25;
  if(size==="s30") sizestyle = styles.s30;


  let setupstyle = "";
  if(type === "primary") setupstyle = styles.primary;
  if(type === "primaryOutlined") setupstyle = styles.primaryOutlined;
  if(type === "primaryLink") setupstyle = styles.primaryLink;
  
  if(type === "secondary") setupstyle = styles.secondary;
  if(type === "secondaryOutlined") setupstyle = styles.secondaryOutlined;
  if(type === "secondaryLink") setupstyle = styles.secondaryLink;


  if(type === "success") setupstyle = styles.success;
  if(type === "successOutlined") setupstyle = styles.successOutlined;
  if(type === "successLink") setupstyle = styles.successLink;


  if(type === "danger") setupstyle = styles.danger;
  if(type === "dangerOutlined") setupstyle = styles.dangerOutlined;
  if(type === "dangerLink") setupstyle = styles.dangerLink;


  if(type === "warning") setupstyle = styles.warning;
  if(type === "warningOutlined") setupstyle = styles.warningOutlined;
  if(type === "warningLink") setupstyle = styles.warningLink;


  if(type === "info") setupstyle = styles.info;
  if(type === "infoOutlined") setupstyle = styles.infoOutlined;
  if(type === "infoLink") setupstyle = styles.infoLink;



  if(type === "dark") setupstyle = styles.light;
  if(type === "darkOutlined") setupstyle = styles.lightOutlined;
  if(type === "darkLink") setupstyle = styles.lightLink;

  let stylecollection = "" + styles.reset + " " + borderstyle + " " + disabledstyle + " " + sizestyle + " " + setupstyle + " " +  paddingstyle;



  return <button className={stylecollection} onClick={handleClick}>{text}</button>
}
