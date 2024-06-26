import {useState} from 'react'; 


const App = () => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const [chatHistory, setChatHistory] = useState([]);


  const surpriseOps = [
    'What is indonesia?', 
    'Is College worth it?',
    'What is an AI?', 
    'is Computer Science hard?'

  ]

  const surprise = () => {
    const randomVal = surpriseOps[Math.floor(Math.random() * surpriseOps.length)];
    setValue(randomVal);
  }


  //getting an API 
  const getResponse = async () => {
    if(!value) {
      setError("Error: Please input a question");
      return;
    }
    try {
      const options = {
        origin: 'http://localhost:7000',
        method: 'POST', 
        body: JSON.stringify({
          history: chatHistory,
          message: value
        }), 
        headers: {
          'Content-Type': 'application/json'
        }
      };
      const response = await fetch('http://localhost:8000/gemini', options);
      const data = await response.text(); 

      setChatHistory(oldChatHistory => [...oldChatHistory, {
        role: "user", 
        parts: value
      }, 
        {
          role: "model",
          parts: data
        }
        
      ])
      console.log(chatHistory);
      setValue("");

    } catch (error) {
      console.error(error); 
      setError("Something went wrong");  
    }
  };
  
  const clear = () => {
    setValue("")
    setError("")
    setChatHistory([])
  }
  return (
      <div className = "App">
        <p className = "header-question">
          What to Find? 
          <button className ="surprise" onClick={surprise} disabled={!chatHistory}>Random Prompt</button>
        </p>

        <div className = "input-container">
          <input
            value = {value}
            placeholder="Input your question here"
            onChange = {(e) => setValue(e.target.value)}

          />
          {!error && <button onClick={getResponse}>Search</button>}
          {error && <button onClick = {clear}>Clear</button>}
        </div>
        {/* show error if exist */}
        {error && <p>{error}</p>}
        <div className = "search-result">
            {chatHistory.map((chatItem, _index) => <div key = {_index}>
              <p className = "answer">{chatItem.role}: {chatItem.parts}</p>
            </div>)}
        </div>
      </div>
  );
}

export default App;
