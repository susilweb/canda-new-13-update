import  '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import Layouts from '../components/Layouts'
import {useRouter} from 'next/router';
import Header from '../components/Header';
import {useState, useEffect} from 'react'
import LoadingBar from 'react-top-loading-bar'
// function MyApp({ Component, pageProps }) {

//   return 
  
//   <Layouts>
//       <Component {...pageProps} />
//     </Layouts>
// }

// export default MyApp


function MyApp({ Component, pageProps }) {
  const [progress, setProgress] = useState(0);
  useEffect(() =>{
    router.events.on('routeChangeStart',()=>{
setProgress(40)
 })
      
router.events.on('routeChangeComplete',()=>{
setProgress(600)
 })
    
  })

  const router = useRouter();
  if(router.asPath =='/contact-us/' ||
      router.asPath =='/thank-you/' ||
      router.asPath =='/schedule-a-demo/'  ||
      router.asPath =='/schedule-a-demo' 

  )  {
    return (
      <>
        <LoadingBar
      color='#bb2b36'
      progress={progress}
      waitingTime={600}
      height={2}
      onLoaderFinished={() => setProgress(0)}
      />
      <Header />
      <Component {...pageProps} />
      </>
    )
   
 };

  return <>
    <LoadingBar
      color='#bb2b36'
      progress={progress}
      waitingTime={600}
      height={2}
      onLoaderFinished={() => setProgress(0)}
      />
  <Layouts>
  <Component {...pageProps} />
  </Layouts>
  </>
}

export default MyApp
