const baseStyle = {
    color: "black.900",
    fontFamily: "Inter",
  };
  const sizes = {
    textxs: {
      fontSize: "9px",
      fontWeight: 500,
    },
    textmd: {
      fontSize: "11px",
      fontWeight: 500,
    },
    textlg: {
      fontSize: "12px",
      fontWeight: 500,
    },
    textxl: {
      fontSize: "14px",
      fontWeight: 500,
    },
    headingxs: {
      fontSize: "10px",
      fontWeight: 700,
    },
    headings: {
      fontSize: "12px",
      fontWeight: 700,
    },
    headingmd: {
      fontSize: "13px",
      fontWeight: 700,
    },
    headinglg: {
      fontSize: "14px",
      fontWeight: 700,
    },
    headingxl: {
      fontSize: "15px",
      fontWeight: 700,
    },
  };
  const defaultProps = {
    size: "textlg",
  };
  
  const Heading = {
    baseStyle,
    sizes,
    defaultProps,
  };
  export default Heading;
  