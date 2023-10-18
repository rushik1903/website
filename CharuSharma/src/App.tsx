import CombinedPage from './CombinedPage';
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'

function App(){
  return (<div 
    className='d-flex totalContainer'
  style={{
    width:'100vw',
    height:'100vh'
    }}>
      <CombinedPage></CombinedPage>
      {/* <a className="twitter-timeline" href="https://twitter.com/sh_charu?ref_src=twsrc%5Etfw">Tweets by sh_charu</a> */}
      
      {/* <div className="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="light" data-type="VERTICAL" data-vanity="sai-rushik-jasti" data-version="v1"><a className="badge-base__link LI-simple-link" href="https://in.linkedin.com/in/sai-rushik-jasti?trk=profile-badge">Sai Rushik Jasti</a></div> */}
    </div>);
}


// function App(){
//   return <> 
//   <blockquote className="twitter-tweet"><p lang="en" dir="ltr">Will be talking in person about our recent work and 3D vision on 11-12 December at IITJ! <a href="https://t.co/h5YxHAS6ap">https://t.co/h5YxHAS6ap</a></p>&mdash; Charu Sharma (@sh_charu) <a href="https://twitter.com/sh_charu/status/1710171120027209791?ref_src=twsrc%5Etfw">October 6, 2023</a></blockquote> 
//   <a href="https://twitter.com/sh_charu?ref_src=twsrc%5Etfw" className="twitter-follow-button" data-show-count="false">Follow @sh_charu</a>
  
//   </>
// }

export default App;