import { Header } from './header/Header';
import Private from './private/Private';
import Perfomance from './perfomanse/Perfomance';
import Charter from './charter/Charter';
import Enjoy from './enjoy/Enjoy';
import Footer from './footer/Footer';

export const App = () => {
  return (
    <div>
      <Header />
      <Private />
      <Perfomance />
      <Charter />
      <Enjoy />
      <Footer />
    </div>
  );
};
