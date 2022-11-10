
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../App.css'

const Quiz = () => {

    const [data, setData] = useState([])
    const [ans, setAns] = useState(0)
    const [questionNumber, setQuestionNumber] = useState(0)
    const [isFirst, setIsFirst] = useState(true)
    const [checked, setChecked] = useState('')
    const [result, setResult] = useState([])

    let navigate = useNavigate();

    useEffect(() => {
        if (isFirst) {
            fetchQuestion()
        }
        if (questionNumber === 10) {
            let path = `/result`;
            navigate(path, { state: { ans, result } });
        }
    }, [questionNumber])

    const fetchQuestion = () => {
        fetch(
            "https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean")
            .then((res) => res.json())
            .then((json) => {
                console.log("json>>>", json);
                setData(json.results)
                setIsFirst(false)
            })
    }

    const handleCheck = (e) => {
        setChecked(e.target.value)
    }

    const handleSubmit = () => {
        let newData;
        if (data[questionNumber].correct_answer === checked) {
            setAns(ans + 1)
            newData = {
                Que: data[questionNumber].question,
                Ans: checked,
                isTrue: true
            }
        } else {
            newData = {
                Que: data[questionNumber].question,
                Ans: checked,
                isTrue: false
            }
        }
        setResult([...result, newData])

        if (questionNumber !== 10) {
            setQuestionNumber(questionNumber + 1)
        }

        setChecked('')
    }


    return (
        <div className="App-header">
            <div className='box-style'>
                {data.length !== 0 ?
                    <>
                        <div className='mainpage_header'>
                            {data[questionNumber]?.category}
                        </div>
                        <div className='sub-box-style'>
                            {data[questionNumber]?.question}
                        </div>
                        <div>
                            {questionNumber + 1} of 10
                        </div>
                        <div className="radio">
                            <div>
                                <label>
                                    <input
                                        type="radio"
                                        name="ans"
                                        value="True"
                                        checked={checked === 'True'}
                                        onChange={handleCheck} />
                                    True
                                </label>
                            </div>
                            <div>
                                <label>
                                    <input
                                        type="radio"
                                        name="ans"
                                        value="False"
                                        checked={checked === 'False'}
                                        onChange={handleCheck} />
                                    False
                                </label>
                            </div>
                        </div>
                        <div className='btn'>
                            <button className='btn_line' disabled={checked === '' ? true : false} onClick={handleSubmit}>{questionNumber === 9 ? 'Done' : 'Next'}</button>
                        </div>
                    </>
                    :
                    <>
                        <div className='mainpage_header'>
                            Please Waiting.....
                        </div>
                    </>
                }
            </div>
        </div >
    )
}

export default Quiz