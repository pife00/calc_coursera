import { useState } from 'react'
import { Input } from './Input'
import { ButtonComponent } from './Button'

function App() {
  const [numb1, setNumb1] = useState("")
  const [operation, setOperation] = useState('')
  const [inputData, setInputData] = useState('')

  function DEL(){
    let string = inputData.slice(0,-1)
    setInputData(string)
  }

  function actionOperation(numb2) {
    let string = `${numb1}${operation}${numb2}`
    let result = eval(string)
    return result.toString()
  }

  function dataFromButton(text) {

    switch (text) {

      case 'DEL':
        DEL()
        break;

      case 'RESET INPUT':
        setInputData('')
        break;

      case '=':
        setInputData(actionOperation(inputData))
        break;

      case '+':
        setNumb1(inputData)
        setOperation('+')
        setInputData('')
        break;

      case '-':
        setNumb1(inputData)
        setOperation('-')
        setInputData('')
        break;

      case '/':
        setNumb1(inputData)
        setOperation('/')
        setInputData('')
        break;

      case '*':
        setNumb1(+inputData)
        setOperation('*')
        setInputData('')
        break;

      default:
        setInputData(inputData + text)
    }
  }

  return (
    < >
      <main>
        <div className="flex flex-row">
          <div className="sm:basis-1/3"></div>
          <div className=" sm:basis-1/3">
            <Input data={inputData} />


            <div className='grid grid-cols-4 w-full sm:h-1/5 h-1/3 ' >
              <ButtonComponent sendDataToParent={dataFromButton} text={""} />
              <ButtonComponent sendDataToParent={dataFromButton} text={"RESET INPUT"} />
              <ButtonComponent sendDataToParent={dataFromButton} text={"DEL"} />
              <ButtonComponent sendDataToParent={dataFromButton} text={"/"} />
            </div>

            <div className='grid grid-cols-4 sm:h-1/5 h-1/3' >
              <ButtonComponent sendDataToParent={dataFromButton} text={"7"} />
              <ButtonComponent sendDataToParent={dataFromButton} text={"8"} />
              <ButtonComponent sendDataToParent={dataFromButton} text={"9"} />
              <ButtonComponent sendDataToParent={dataFromButton} text={"*"} />
            </div>

            <div className='grid grid-cols-4 sm:h-1/5 h-1/3' >
              <ButtonComponent sendDataToParent={dataFromButton} text={"4"} />
              <ButtonComponent sendDataToParent={dataFromButton} text={"5"} />
              <ButtonComponent sendDataToParent={dataFromButton} text={"6"} />
              <ButtonComponent sendDataToParent={dataFromButton} text={"-"} />
            </div>

            <div className='grid grid-cols-4 sm:h-1/5 h-1/3' >
              <ButtonComponent sendDataToParent={dataFromButton} text={"1"} />
              <ButtonComponent sendDataToParent={dataFromButton} text={"2"} />
              <ButtonComponent sendDataToParent={dataFromButton} text={"3"} />
              <ButtonComponent sendDataToParent={dataFromButton} text={"+"} />
            </div>

            <div className='grid grid-cols-4 sm:h-1/5 h-1/3' >
              <ButtonComponent text={""} />
              <ButtonComponent sendDataToParent={dataFromButton} text={"0"} />
              <ButtonComponent text={""} />
              <ButtonComponent sendDataToParent={dataFromButton} text={"="} />
            </div>
          </div>
          <div className="sm:basis-1/3"></div>
        </div>
      </main>
    </>
  )
}

export default App
