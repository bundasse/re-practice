import './Body.css';
// 스타일 불러오는 법은 이렇게.

function Body(props) {
    const numberA = 1;
    const numberB = 3;
    // 리액트는 {}만 쓰고 렌더링할 변수를 입력하면 된다.
    // 근데 숫자 문자열 불린 null undefined만 됨... 배열?안됨. 객체? 안됨.
    // 객체를 찍으려면 프로퍼티에 접근해서 값을 가져오는 수밖에 없다.
    return (
        <body>
            <div class="body" style={{background:"yellow"}}>
            {/* style을 인라인 규칙으로 쓸때는 콧수염하고 객체 형식으로 써주셈 */}
                body
            </div>
            {props.name}
            {/* props를 받을 땐 맨위 function 안에 props를 써줘야한다. 그리고 props.프롭스이름 을 해서 값을 나타낸다. */}
            {numberA+numberB}
        </body>
        // 리액트는 최상위 태그를 하나만 쓸 수 있는데(이건 Vue.js랑도 비슷하네)
        // 구태여 태그 여러개를 쓰고 싶다면 <React.Fragment> </React.Fragment>로 감싸주자. 얘는 렌더링되지 않는다.
    );
};

export default Body;