import './Body.css';
// 스타일 불러오는 법은 이렇게.
import {useState} from "react";
import State from './State';
import Ref from './Ref';

function Body(props) {
    const numberA = 1;
    const numberB = 3;
    // 리액트는 {}만 쓰고 렌더링할 변수를 입력하면 된다.
    // 근데 숫자 문자열 불린 null undefined만 됨... 배열?안됨. 객체? 안됨.
    // 객체를 찍으려면 프로퍼티에 접근해서 값을 가져오는 수밖에 없다.
    const {name, location} = props;
    // 프롭스를 여러개 보낼때는 이렇게 쓴다.
    const [ numberC, setNumber ] = useState(0);

    function clickBtn() {
        setNumber(numberC + 1);      
    }
    return (
        <body>
            <div class="body" style={{background:"yellow"}}>
            {/* style을 인라인 규칙으로 쓸때는 콧수염하고 객체 형식으로 써주셈 */}
                body
            </div>
            {name} {location}<br />
            {/* props를 받을 땐 맨위 function 안에 props를 써줘야한다. 그리고 props.프롭스이름(예시>props.name) 을 해서 값을 나타낸다. */}
            {/* props를 여러개 받을땐 위에서 const {프롭스명 리스트} = props;해주고 아래에선 프롭스명만 쓴다. */}
            {numberA+numberB}

            <button onClick={clickBtn}>버튼</button>
            {/* 함수 호출은 이렇게. 여기는 따옴표 안에가 아니라 걍 써버리네? */}
            <State number={numberC} />
            {/* 자식요소로 state 보내는 법. 변수명=보낼상태값 하고 자식요소에선 이름에 ({변수명}) 해주면 받아봄 */}

            <Ref />
        </body>
        // 리액트는 최상위 태그를 하나만 쓸 수 있는데(이건 Vue.js랑도 비슷하네)
        // 구태여 태그 여러개를 쓰고 싶다면 <React.Fragment> </React.Fragment>로 감싸주자. 얘는 렌더링되지 않는다.
    );
};

export default Body;