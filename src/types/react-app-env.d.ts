/// <reference types="react-scripts" />

declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}

declare module "*.svg";
declare module "*.jpg";
declare module "*.png";



// declare module "@mui/material/styles" {
//   interface BreakpointOverrides {
//     xs: false; // removes the `xs` breakpoint
//     sm: false;
//     md: false;
//     lg: false;
//     xl: false;
//     mobile: true; // adds the `mobile` breakpoint
//     tablet: true;
//     laptop: true;
//     desktop: true;
//   }
// }