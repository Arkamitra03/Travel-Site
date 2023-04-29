import "./Herostyles.css";
function Hero(props) {
  return (
    <>
      <div className={props.cName}>
        <img className="bgImg" alt="home-img" src={props.heroImg} />
      </div>
      <div className={props.heroText}>
        <h1>{props.heading}</h1>
        <p>{props.subHeading}</p>
        <a href={props.url} className={props.btnUrlcls}>
          {props.btnName}
        </a>
      </div>
    </>
  );
}
export default Hero;
