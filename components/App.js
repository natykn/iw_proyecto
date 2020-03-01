//importar librerías necesarias
import React from 'react';
//api unsplash
import unsplash from '../api/Unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component  {
  //estados del componente
  state ={images : [], total:0, total_pages:0, current_page:1};

//función que se ejecuta cuando se hace submit el formulario
  onSearchSubmit = async props => {
    const response =  await unsplash.get('search/photos',{
        params: {query:props.term, page:props.page}
    });
    //actualizacion de estados con la data obtenida del api
    this.setState({images: response.data.results,
       total: response.data.total,
       total_pages: response.data.total_pages,
       current_page: props.page,
      });
  };

  render(){
    //valida si desplegar o no información de los resultados del api
    var resultsInfo = "";
    if(this.state.total>0 && this.state.current_page<=this.state.total_pages){
      resultsInfo =  <div>  Imágenes encontradas: {this.state.total} <br></br>
                            Página  {this.state.current_page} de  {this.state.total_pages}
                     </div>
    }

    //renderiza los componentes searchBar y la imageList
    return (
      <div className="ui container" style={{marginTop:'10px'}}>
            <SearchBar onSubmit= {this.onSearchSubmit}/>
            {resultsInfo}
            <ImageList images={this.state.images}/>
      </div>
    );
  }
}
export default App;
