import Header from '../component/Header';
import Footer from '../component/Footer';
import Content from '../component/Content'; 
import Main from '../component/Main';
import Category from '../component/CategoryProduk'; 

export default function Homepage() {
  return (
    <div>
      <Header />
      <Content />
      <Main />
      <Category /> 
      <Footer />
    </div>
  );
}
