import { useState } from 'react'
import { defineWordByName } from "../../api/DictionaryService";

const App = () => {


  const [definition, setDefinition] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      setIsLoading(true);
      setDefinition('');
      setErrorMsg('');

      const { word } = event.target.elements
      // console.log(word);
      const response = await defineWordByName(word.value);

      setDefinition(response.data[0].meanings[0].definitions[0].definition);
    } catch (event) {
      console.log("Sorry hay un problema!");
    } finally {
      setIsLoading(false);
    }

  };

  return (
    <>

      <div className="App">
        <h1>This is react-testing-library</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="word" >word: </label>
          <input id="word" type="text" />

          <button disabled={isLoading} type="submit" >definicion</button>
        </form>
        {
          isLoading && <p>Loading...</p>
        }
        {
          !isLoading && definition && <p>{definition}</p>
        }
        {
          !isLoading && !definition && !errorMsg && <p>{`Type a word`}</p>
        }
        {
          !isLoading && errorMsg && <p>{errorMsg}</p>
        }
      </div>

    </>
  );
}

export default App;
