export default function Button (props) {
  const { value, onButtonClick } = props
  return (
    <input type='button' className='Button' onClick={onButtonClick} value={value} />
  )
}