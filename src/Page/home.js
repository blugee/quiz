
import { useNavigate } from 'react-router-dom';
import '../App.css'

const Home = () => {

    let navigate = useNavigate();
    const routeChange = () => {
        let path = `/quiz`;
        navigate(path);
    }

    return (
        <div className="App-header">
            <div className='box-style'>
                <div className='mainpage_header'>
                    Welcome to the <br />
                    Trivia Challenge!
                </div>
                <div>
                    You will be presented <br /> with 10 True or False <br /> questions.
                </div>
                <div>
                    Can you score 100% ?
                </div>
                <div className='btn'>
                    <button className='home_btn_line' onClick={routeChange}
                    >BEGIN</button>
                </div>
            </div>
        </div >
    )
}

export default Home