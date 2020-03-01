import React from 'react';

class SearchBar extends React.Component {
//maneja los estados de el texto que se está introduciendo y el número de
//página en la que el api se encuentra
state = { term: '', page: 1};
//cuando se hace submit se llama al api y incrementa el contador de página
onFormSubmit = (event) => {
  event.preventDefault();
  this.props.onSubmit(this.state);
  this.setState({page:this.state.page + 1});
}

render(){
    //valida si mostrar el botón para ver la siguiente página o no
    var buttonText="";
    if (this.state.page === 1 || this.state.term === "") {
      buttonText = "";
    } else {
      buttonText = <button className="ui button" type="submit">ver siguiente página -> </button>
    }
    //muestra un form con un input y en el caso de que la búsqueda genere más de una página
    //muestra un botón para ver la siguiente página de imágenes ya que el api retorna imagenes de
    //10 en 10
    return (
      <div  className= "ui segment" >
          <form onSubmit={this.onFormSubmit} className= "ui form" >
            <div className = "field">
              <label>Buscador de  Imágenes </label>
              <input type="text"placeholder="Ingrese lo que desee buscar Ejemplo: house . Luego presione -Enter-"
              value={this.state.term}
              onChange={e=>this.setState({term:e.target.value, page:1})} />
            </div>
            {buttonText}
          </form>
      </div>
    );
  }
}

export default SearchBar;
