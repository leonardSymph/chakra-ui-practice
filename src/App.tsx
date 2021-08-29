import ApiClient from "./api/ApiClient";

function App() {
  const getData =async ()=>{
    const data = await ApiClient.get('users', {
      params: {
        ID: 'test-params-id'
      },
    })
    console.log(data)
  }

  return (
    <div className="App">
      <h1>Hello world</h1>
      <button onClick={getData}>try get</button>
    </div>
  );
}

export default App;
