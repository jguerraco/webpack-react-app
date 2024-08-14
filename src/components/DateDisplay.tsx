import React from "react";
import moment from "moment";

const DateDisplay: React.FC = () => {
  return <div>Current Date: {moment().format("MMMM Do YYYY, h:mm:ss a")}</div>;
};

export default DateDisplay;
