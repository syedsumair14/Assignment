import React from "react";

const InputField = props => {
  let { stateName } = props;

  const showFields = () => {
    if (props.type === "radio") {
      return props.options.map((value, idx) => (
        <span key={idx} className="ml-1">
          <input
            type="radio"
            name={props.title}
            value={value}
            onChange={e => props._handleChange(stateName, e.target.value)}
          />
          {value}
        </span>
      ));
    } else if (props.type === "checkbox") {
      return props.options.map((value, idx) => (
        <span key={idx}>
          <input
            type="checkbox"
            onChange={e => props._handleChange(stateName, e.target.value)}
          />
          {value}
        </span>
      ));
    } else if (props.type === "dropdown") {
      return (
        <select
        key={props.title}
          onChange={e => props._handleChange(stateName, e.target.value)}
          name={stateName}
        >
          <option>Please Select {props.title}</option>
          {props.options.map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      );
    } else {
      return (<div>
        <input
        key={props.title}
          className="form-control"
          type={props.type}
          placeholder={props.placeholder}
          name={props.title}
          value={props.value}
          onChange={e => props._handleChange(stateName, e.target.value)}
        />
        {/* <div>Error</div> */}
        </div>
      );
    }
  };

  return (
    <div>
      <div className="form-group row">
        <label className="col-sm-2 col-form-label">{props.title}</label>
        <div className="col-sm-8">{showFields()}</div>
      </div>
    </div>
  );
};

export default InputField;
