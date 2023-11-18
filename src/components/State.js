import {useState} from "react";

function State() {
    const [ vaR, funcTion ] = useState('토끼');
    // const [ option, setOption ] = useState('');
    const [ state, setState ] = useState({
            text: "",
            option: ""
        });
    const callBun = () => {
        funcTion(vaR + '🐇');
    }
    const handleOnChange = (e) =>{
        setState({
            ...state,
            [e.target.name] : e.target.value,
        })
        console.log(e.target.value);
    }
    return(
        <div>
            <button onClick={callBun}>토끼를 불러보아요</button>
            <p>{vaR}</p>
            <div><input name="text" value={state.text} onChange={handleOnChange} /></div>
            <select name="option" value={state.option} onChange={handleOnChange}>
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