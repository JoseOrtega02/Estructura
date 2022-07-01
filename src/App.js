import { Header } from './components/Header';
import { Hero } from './components/hero';
import { Tema } from './components/tema';
import { Autores } from './components/autores';
import  {Banner}  from './components/banner';
import {Footer} from "./components/footer"
import './App.css';
import video1 from "./img/Video1.mp4"

import actv1 from "./Act1/Ahorcado.htm"

import video2 from "./img/Video2.mp4"
import imagen1 from "./img/Imagen1.jpg"
import video3 from "./img/Video3.mp4"
import imagen2 from "./img/Imagen2.jpg"
import video4 from "./img/Video4.mp4"
function App() {
  return (
    <div className="App">
       <Banner/>
      <Header/>
      <Hero/>
  <Tema title="Conceptos Introductorios" id="tema1" indrod="Vamos a empezar hablando de que es una computadora:"
  indrod2="La computadora no es más que una máquina que realiza un trabajo
por medio de la energía eléctrica; pero es capaz de aliviar al humano
de tareas rutinarias como el almacenamiento, la realización de cálculos y las
decisiones repetitivas."
indrod3="Las computadoras actuales son sistemas electrónicos digitales complejos. Se caracterizan por su:"
indrod4="Versatilidad: Puede destinarse a distintos usos."
indrod5="Velocidad: Puede ejecutar millones de instrucciones en un segundo."
indrod6="Capacidad de almacenamiento: Puede almacenar gran cantidad de datos y disponer de ellos cuando un programa los requiera."
indrod7="Ahora en este videos veremos que son los datos e información y los procesamientos de datos:" video={video1}  desc="" actv="./Act1/Ahorcado.htm" />
      <Tema title="Partes de una computadora" id="tema2"indrod="Como funciona una computadora y sus partes" video={video2} desc="Los dispositivos que sirven para ingresar datos se denominan Unidades de Entrada, el
procesamiento es realizado por la Unidad Central de Procesamiento de acuerdo al programa
almacenado en la Unidad de Memoria y los resultados se informan al usuario a través de
dispositivos denominados Unidades de Salida." img={imagen1}  actv="actv.html" />
      <Tema title="Bit,Byte y Palabra" id="tema3" indrod="Bit y Byte" video={video3} desc="La palabra se puede definir como la cantidad de bits que la computadora utiliza en forma
simultánea para realizar ciertos procesos internos, tales como la transferencia de datos entre
sus componentes. La cantidad de bits que forman una palabra se denomina tamaño, longitud o
ancho de palabra. Las computadoras modernas normalmente poseen un tamaño de palabra de
16, 32 o 64 bits. También suele hacerse referencia al tamaño de palabra expresándolo en bytes
(palabra de dos bytes, palabra de cuatro bytes, etc.)." img={imagen2} actv="actv.html" />
      <Tema title="Señales digitales y analógicas" id="tema4" video={video4} 
desc="Conversión analógica/digital (A/D)"
desc1="Como la computadora es una máquina digital, para operar con dispositivos analógicos, es
necesario realizar la conversión correspondiente. Así, un periférico de entrada que opera con
datos representados por señales analógicas (como el módem, mouse, escáner), debe realizar la
conversión correspondiente a señales digitales para que dichos datos puedan ser interpretadas
por la computadora. Este proceso se denomina conversión analógico/digital, o simplemente
conversión A/D."
desc2="Conversión digital/analógica (D/A)"
desc3="Similarmente, cuando un periférico de salida requiere señales de tipo analógico para
mostrar los resultados, las señales internas digitales generadas por la computadora deben ser
transformadas a señales analógicas. Este proceso se denomina conversión digital/analógica, o
simplemente conversión D/A." 
actv="actv.html" />
      <Autores/>
      <Footer/>
    </div>
  );
}

export default App;
