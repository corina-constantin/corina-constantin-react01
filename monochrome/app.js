class NewsletterForm extends React.Component {
  state = {
    email: '',
    formMessage: '',
    busy: false,
    submitted: false,
    successMessage: '',
  };

  validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return re.test(email);
  }

  onSubmit = (event) => {
    event.preventDefault();
    const email = this.state.email;

    this.setState({
      formMessage: '',
    });

    if (!this.validateEmail(email)) {
      this.setState({
        formMessage: 'Please use a valid email!',
      });
      return;
    }

    this.setState({
      busy: true,
    });

    setTimeout(() => {
      this.setState({
        busy: false,
        email: '',
        submitted: true,
        successMessage: `${this.state.email} subscribed!`,
      });
    }, 3000);
  };

  onInputChange = (event) => {
    const email = event.target.value;

    this.setState({
      email,
    });
  };

  render() {
    if (this.state.submitted) {
      return <div className="container">{this.state.successMessage}</div>;
    }

    return (
      <form
        className="form-email-newsletter container"
        onSubmit={this.onSubmit}
      >
        <label htmlFor="email-newsletter">
          Subscribe to our <span>newsletter</span>
        </label>
        <input
          type="text"
          name="email-newsletter"
          id="email-newsletter"
          value={this.state.email}
          onChange={this.onInputChange}
          placeholder="enter your email address to receive the latest news!"
        ></input>

        <button type="submit">
          {this.state.busy ? (
            // am pus aici loader-ul
            <i className="fas fa-spinner loader"></i>
          ) : (
            'Subscribe'
          )}
        </button>

        <div className="form-message">{this.state.formMessage}</div>
      </form>
    );
  }
}

const newsletterContainer = document.querySelector(
  '.footer-sign-up-newsletter',
);
ReactDOM.createRoot(newsletterContainer).render(
  <NewsletterForm></NewsletterForm>,
);
