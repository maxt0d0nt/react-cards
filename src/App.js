import './App.css';
import Testimonio from './components/Testimonio'

function App() {
  return (
  <div className='App'>
    <div className='contenedor-principal'>
      <h1>Lo que nuestros alumnos opinan de nosotros</h1>
      <Testimonio 
      nombre='Arianna Merida'
      imagen='1622810211283'
      cargo='Data Minning'
      empresa='ING TECH'
      Testimonio='Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de'      />
    
      <Testimonio 
      nombre='Sakura'
      imagen='sakura'
      cargo='Mascota'
      empresa='Home Office'
      Testimonio='Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de'      />

      <Testimonio 
      nombre='Sahori'
      imagen='sahori'
      cargo='Mascota'
      empresa='Home Office'
      Testimonio='Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de'      />      
    </div>
  </div>
  );
}

export default App;
