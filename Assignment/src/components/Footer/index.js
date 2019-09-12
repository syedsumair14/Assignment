import React from "react";
import Button from '../Button'

const Footer = props => {
  const { buttons } = props;
  const { submitForm } = props;
  const { cancelForm } = props;

  return (
    <div className="container header">
      <div className="float-right">
          {buttons.map(button => <Button key={button.title} cancelForm={cancelForm} submitForm={submitForm} title={button.title} type={button.type} />)}
      </div>
    </div>
  );
};

export default Footer;
