import "./App.css";
import DiaryEditor from './DiaryEditor';
import DiaryList from "./DiaryList";

const dummyList = [
  {
    id:1,
    author:"나",
    content:"지금 아침 6시야,,,",
    emotion:3,
    created_date: new Date().getTime(),
  },
  {
    id:2,
    author:"나",
    content:"지금 아침 6시야,,,",
    emotion:3,
    created_date: new Date().getTime(),
  },
  {
    id:3,
    author:"나",
    content:"지금 아침 6시야,,,",
    emotion:3,
    created_date: new Date().getTime(),
  }
]

const App = () => {
  return (
    <div className="App">
      <DiaryEditor/>
      <DiaryList diaryList={dummyList}/>
    </div>
  );
};

export default App;