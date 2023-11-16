import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

function App() {
  const name = "토끼파행동대장";
  const BodyProps = {
    name: name,
    location : '대구',
  };
  return (
    <div className="App">
      <Header />
      {/* <Body name={name} location={"대구"}/> */}
      {/* 프롭스 전달방법 */}
      <Body {...BodyProps} />
      {/* 이렇게 묶어서 전달하는 방법도 있다. */}
      <Footer />
    </div>
  );
}

export default App;
