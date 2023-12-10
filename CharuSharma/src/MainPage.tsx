import Home from "./pages/home"
import Publications from "./pages/publications"
import Research from "./pages/research"
import Media from "./pages/media"
import Resources from "./pages/resources"
import Teaching from "./pages/teaching"
import Contacts from "./pages/contacts"
import Experience from "./pages/experience"
import Others from "./pages/others"

// function GetPage(){
//     let component;
//     switch(window.location.pathname){
//         case "/":
//             component = <Home/>
//             break
//         case "/home":
//             component = <Home/>
//             break
//         case "/publications":
//             component = <Publications/>
//             break
//         case "/research":
//             component = <Research/>
//             break
//         case "/media":
//             component = <Media/>
//             break
//         case "/resources":
//             component = <Resources/>
//             break
//         case "/teaching":
//             component = <Teaching/>
//             break
//         case "/contacts":
//             component = <Contacts/>
//             break
//         case "/experience":
//             component = <Experience/>
//             break
//         case "/others":
//             component = <Others/>
//             break
//     }
//     return  <>{component}</>
// }

function GetPage(){
    return <>
        <Home/>
        <Publications/>
        <Research/>
        <Media/>
        <Resources/>
        <Teaching/>
        <Contacts/>
        <Experience/>
        <Others/>
    </>
}

interface MainpageProps {
    isClassChanged: boolean;
  }
  
  const Mainpage: React.FC<MainpageProps> = ({ isClassChanged }) => {
    return (
      <>
      <div 
      className={"mainPage "+(isClassChanged ? 'mainPageTransition' : '')}
      style={{
          position:'absolute',
          flex:'1',
          overflow:'hidden'
        }}
      >
        {GetPage()}
      </div>
      </>
    );
    };
export default Mainpage;