


export class NameForm extends React.Component {
  //props
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      //mensaje de alerta
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      //parte que se ve en pantalla
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Nombre:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <label type="text" value={this.state.value}>
            Apellido:
          </label>
          <label type="password" >Contraseña:</label>

          <input type="submit" value="Ingresar" />
        </form>
      );
    }
  }
