export default function Button(props) {
  const {
    value,
    onButtonClick
  } = props;
  return React.createElement("input", {
    type: "button",
    className: "Button",
    onClick: onButtonClick,
    value: value
  });
}