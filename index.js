const element = (
  <div className="bg-main-container">
    <h1 className="heading">Congratulations</h1>
    <div className="card-conatiner">
      <img
        className="img-sty"
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
      />
      <h1 className="head">Kiran V</h1>
      <p className="pera">
        Vishnu Institute Of Computer Education and Technology, Bhimavaram{" "}
      </p>
      <img
        className="img-sty-watch"
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
