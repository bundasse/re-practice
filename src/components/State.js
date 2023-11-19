import {useState} from "react";

function State() {
    const [ vaR, funcTion ] = useState('토끼');
    // const [ option, setOption ] = useState('');
    const [ state, setState ] = useState({
            text: "",
            option: ""
        });
        // 여러 state를 묶어서 관리하는 방법은 이렇다.
    const callBun = () => {
        funcTion(vaR + '🐇');
    }
    const handleOnChange = (e) =>{
        setState({
            ...state,
            [e.target.name] : e.target.value,
        })
        // 이벤트 대상(인풋박스)의 name을 오브젝트의 속성으로 삼고, value를 값으로 삼는다.
        console.log(e.target.value);
    }
    return(
        <div>
            <button onClick={callBun}>토끼를 불러보아요</button>
            {/* state를 바꾸는 함수를 사용할 경우 onClick에 함수를 넣고, const 함수명 = 하고 안에 state를 다루는 함수 안에 어떻게 변경할건지 써준다. */}
            <p>{vaR}</p>
            <div><input name="text" value={state.text} onChange={handleOnChange} /></div>
            <select name="option" value={state.option} onChange={handleOnChange}>
                {/* handleOnChage에 state 변경을 모두 담아줬다. 어떻게 바꿀지는 setState 안에서 정한다. */}
                <option key={'1'}>1번</option>
                <option key={'2'}>2번</option>
                <option key={'3'}>3번</option>
            </select>
            {state.text}
            {state.option}
        </div>
    );
    
}
export default State;