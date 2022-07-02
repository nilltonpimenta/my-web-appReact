import logo3 from './quadro1.jpg'
import logo4 from './quadro2.jpg'

function Section() {
    return (
        <div style={{display:'inline-block', display:'flex',
         justifyContent:'space-between'}}>

        <p style={{backgroundColor: "#38B6FF",padding:90, }}>
            <img src={logo4} height="90"/>
            </p>

            <p style={{backgroundColor: "#38B6FF",padding:90}}>
            <img src={logo3} height="90"/>
            </p>

            <p style={{backgroundColor: "#38B6FF",padding:90}}>
            <img src={logo4} height="90"/>
            </p>

           
    </div>

    )
  }
  
  export default Section