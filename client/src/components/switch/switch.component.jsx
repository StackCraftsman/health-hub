import { Input, Label, Span } from "./switch.styled";

const Switch = ({inputId, inputName, content, inputValue, checked, handleRadio}) => {
  return (
    <Label htmlFor={inputId}>
      <Input
        id={inputId}
        type="radio"
        name={inputName}
        value={inputValue}
        checked={checked}
        onChange={handleRadio}
      />
       <Span>
        {content}
        {/*<FontAwesomeIcon
          className={props.fontClass}
          icon={props.fontType}
          title={props.fontTitle}
          rotation={props.rotate}
        />*/}
      </Span> 
    </Label>
  );
};

export default Switch;
