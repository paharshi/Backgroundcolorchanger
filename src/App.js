import './App.css';

function App() {
  return(
      <div className='Wrapper'>
          <h1>Back ground color changer </h1>
          <input type='color'onChange={
            (changing)=>{
           document.body.style.background = changing.target.value
            }
          }/>
      </div>
  )
}

export default App;
