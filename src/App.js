import Greeting from "./Greeting";
import Message from "./Message";
import Button from "./Button";

function App() {
  function handleClick() {
    console.log("Кнопку натиснули!");
  }

  return (
    <div>
      <Greeting name="Юрій" />
      <Message text="Це моє повідомлення" />
      <Button onClick={handleClick} />
    </div>
  );
}

export default App;
