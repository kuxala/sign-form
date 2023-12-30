import "./App.css";

function App() {
  return (
    <div className="wrapper">
      <div className="left-col">
        <h1>Learn to code by watching others</h1>
        <p>
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </p>
      </div>
      <div className="right-col ">
        <div className="plans">
          <p>Try it free 7 days then $20/mo. thereafter</p>
        </div>
        <div className="container">
          <div className="inputs">
            <input placeholder="First Name" />
            <input placeholder="Last Name" />
            <input placeholder="Email Address" />
            <input placeholder="Password" />
          </div>
          <button>
            <a href="#">CLAIM YOUR FREE TRIAL</a>
          </button>
          <p className="p">
            By clicking the button, you are agreeing to our
            <span> Terms and Services</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
