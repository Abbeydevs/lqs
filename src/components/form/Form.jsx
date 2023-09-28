import "./form.css";

const Form = () => {
  return (
    <div className="container form-container">
      <h3>
        Fill free to contact us through the form below. We will respond to you
        through your email
      </h3>
      <form action="">
        <div className="names">
          <div>
            <label htmlFor="f-name">First Name</label>
            <input
              type="text"
              name="first-name"
              placeholder="Enter First Name"
              className="textfield"
            />
          </div>
          <div>
            <label htmlFor="l-name">Last Name</label>
            <input
              type="text"
              name="last-name"
              placeholder="Enter Last Name"
              className="textfield"
            />
          </div>
        </div>
        <div className="email">
          <label htmlFor="email">Email address</label>
          <input
            type="text"
            name="email"
            placeholder="Enter Email Address"
            className="textfield"
          />
        </div>
        <div className="subject">
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            name="subject"
            placeholder="Enter Subject"
            className="textfield"
          />
        </div>
        <div className="message">
          <label htmlFor="message">Message</label>
          <textarea name="message" id="" cols="30" rows="10"></textarea>
        </div>
        <button className="btn primary-btn">Send Message</button>
      </form>
    </div>
  );
};

export default Form;
