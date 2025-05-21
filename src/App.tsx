import  AppStyle  from './App.module.less';
import  Nav  from './components/Nav'
import Main from './components/Main/Main'
import Footer from './components/Footer';
import BackTop from './components/BackTop/BackTop';
function App() {

  return (
    <>
    <div className={AppStyle.Appbox}>
    <Nav />
    <Main />
    <Footer />
    <BackTop />
    </div>
    </>
  )
}

export default App
