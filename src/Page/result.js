
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../App.css'
import PlusIcon from "../icon/plus.png";
import MinusIcon from "../icon/minus.png"

const Result = () => {
    const location = useLocation();

    useEffect(() => {
        console.log(location.state);
    }, [])


    let navigate = useNavigate();
    const routeChange = () => {
        let path = `/`;
        navigate(path);
    }


    return (
        <div className="App-header">
            <div className='box-style'>
                <div>
                    You scored<br />
                    {location.state.ans} / 10
                </div>
                <div className='ans_class'>
                    <div className='sub_ans_class'>
                        {location?.state?.result.map((item, i) => {
                            return (
                                <div className='result_view' style={{ display: 'flex' }}>
                                    <p className='icon_view' style={{ marginTop: '10%', marginRight: "10px" }}>
                                        <img src={item.isTrue === true ? PlusIcon : MinusIcon} height={15} width={17} />
                                    </p>
                                    <p key={i}>
                                        {item.Que}
                                    </p>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className='result_btn'>
                    <button className='btn_line' onClick={routeChange}>PLAY AGAIN?</button>
                </div>
            </div>
        </div >
    )
}

export default Result