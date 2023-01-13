

export const ButtonComponent = (props) => {

  let isDisabled = props.text == '' ? true : false

  function sendDataToParent() {
    props.sendDataToParent(props.text)
  }

  return (
    <button
      disabled={isDisabled}
      className='
       m-1 text-lg font-bold
       sm:w-28 sm:h-28 sm:text-3xl
       sm:font-semibold
    bg-gray-100
    hover:bg-gray-300 rounded-lg'
      onClick={sendDataToParent}
    >{props.text}
    </button>
  )
}