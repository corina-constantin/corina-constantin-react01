class NewsletterForm extends React.Component {
  state = {
    email: '',
    formMessage: '',
    busy: false,
    successMessage: '',
  };

  validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  //event handlers need "this"
  onSubmit = (event) => {
    event.preventDefault();
    const email = this.state.email;

    if (!this.validateEmail(email)) {
      this.setState({
        formMessage: 'Please use a valid email!',
      });

      return;
    }

    this.setState({
      busy: true,
      formMessage: '',
    });

    setTimeout(() => {
      this.setState({
        busy: false,
        email: '',
        successMessage: `Emailul ${this.state.email} a fost inscris.`,
      });
    }, 3000);
  };

  //controlled component/input
  onInputChange = (event) => {
    this.setState({
      email: event.target.value,
    });
    console.log(event.target.value);

    console.log(this.state.email);
  };

  // render runs every state changes
  render() {
    const isSubmitted = this.state.successMessage.trim().length > 0;

    if (isSubmitted) {
      return <div className="container">{this.state.successMessage}</div>;
    }

    // render must return jsx
    return (
      <form className="form-newsletter container" onSubmit={this.onSubmit}>
        <label htmlFor="field-newsletter">
          Subscribe to our <span>newsletter</span>
        </label>

        <input
          type="text"
          name="field-newsletter"
          id="field-newsletter"
          placeholder="hai in pauza"
          onChange={this.onInputChange} //avem pointerul catre aceasta functie, nu o executam prin punerea de  ()
          value={this.state.email}
        ></input>

        {this.state.email}
        <button title="Subscribe" type="submit" disabled={this.state.busy}>
          Subscribe
          {this.state.busy ? '...loading' : 'Submit'}
        </button>

        <div className="form-message">{this.state.formMessage}</div>
      </form>
    );
  }
}

const newsletterContainer = document.querySelector('.home-newsletter');
// React recipe?
ReactDOM.render(<NewsletterForm></NewsletterForm>, newsletterContainer);
