import "./Footerstyle.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>Exploraholic</h1>
          <p>Let's explore the world</p>
        </div>

        <div>
          <a href="/">
            <i className="fa-brands fa-square-facebook"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-square-instagram"></i>
          </a>
          <a href="/">
            <i class="fa-brands fa-linkedin"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-square-twitter"></i>
          </a>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h4>Project</h4>
          <a href="/">Changelog</a>
          <a href="/">Status</a>
          <a href="/">License</a>
          <a href="/">All version</a>
        </div>
        <div>
          <h4>Community</h4>
          <a href="/">Changelog</a>
          <a href="/">Status</a>
          <a href="/">License</a>
          <a href="/">All version</a>
        </div>
        <div>
          <h4>Help</h4>
          <a href="/">Changelog</a>
          <a href="/">Status</a>
          <a href="/">License</a>
          <a href="/">All version</a>
        </div>
        <div>
          <h4>Others</h4>
          <a href="/">Changelog</a>
          <a href="/">Status</a>
          <a href="/">License</a>
          <a href="/">All version</a>
        </div>
      </div>
    </div>
  );
};
export default Footer;
