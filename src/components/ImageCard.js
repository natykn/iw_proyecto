import React from 'react';

class ImageCard extends React.Component {
  //props es la data de imágenes obtendida desde ImageList
  constructor(props){
    super(props);
    //estados del componente, son utilizados para colocar las imágenes
    // de una manera más estética que lo que luciría en un grid
    this.state = {spans:0};
    this.imageRef = React.createRef();
  }

  componentDidMount(){
    this.imageRef.current.addEventListener('load',this.setSpans);
  }
//identifica el span que debe asociar a cada imagen segun su altura
setSpans=()=>{
   var spans=10;
   if(this.imageRef!=null &&  this.imageRef.current!=null){
    const height = this.imageRef.current.clientHeight;
    spans = Math.ceil(height/10);
   }


  this.setState({spans});
};
  //renderiza la image para que pueda ser desplegada en pantalla
  render(){
    const { description, urls} = this.props.image;

    return (
      <div style={{gridRowEnd: `span ${this.state.spans}`}}>
        <img ref={this.imageRef} alt={description} src={urls.regular}/>
        </div>
    );
  }
}
export default ImageCard;
