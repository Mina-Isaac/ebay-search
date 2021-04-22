import React from "react";
import "./style.scss";

interface Props {
  message: string;
}
const ErrorMessage: React.FC<Props> = ({ message }) => {
  return (
    <div id="error">
      <p>{message}</p>
    </div>
  );
};

export default React.memo(ErrorMessage);
