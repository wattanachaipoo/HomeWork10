const root = ReactDOM.createRoot(document.getElementById('root'));
let count = 0;

function App() {
    return (
        <div>
            <Sumzero />
            <Addcounter/>
            <Counter />
        </div>
    );
}

function Sumzero(){
    return(
        <div className="Sumzero">
            <h1 id="sum">Sum = 0</h1>
        </div>
    )
}
function Addcounter(){
    return(
        <div className="Sumzero">
            <button>Addcounter</button>
        </div>
    )
}
function Counter(){
    return(
        <div className="counter">
            <button>+</button>
            <h2 id="num">{0}</h2>
            <button>-</button>
            <button>0</button>
            <button>X</button>
        </div>
    )
}
root.render(<App />);