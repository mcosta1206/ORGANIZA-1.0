// pages/_app.js
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';  // Importando o Footer
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar /> {/* Barra de navegação global */}
      <Component {...pageProps} /> {/* Renderiza o conteúdo da página atual */}
      <Footer /> {/* Rodapé global */}
    </>
  );
}
