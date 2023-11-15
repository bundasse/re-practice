import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

function App() {
  const name = "토끼파행동대장";
  return (
    <div className="App">
      <Header />
      <Body name={name} />
      {/* 프롭스 전달방법 */}
      <Footer />
    </div>
  );
}

export default App;
