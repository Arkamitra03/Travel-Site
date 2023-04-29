import "./Contactstyle.css";

function Contactform() {
  return (
    <div className="form-container">
      <h1>Get in Touch with Us!</h1>
      <form>
        <input type="text" placeholder="name" />
        <input type="text" placeholder="email" />
        <input type="text" placeholder="subject" />
        <textarea placeholder="message" rows="4"></textarea>
        <button>Send Message</button>
      </form>
    </div>
  );
}

export default Contactform;
