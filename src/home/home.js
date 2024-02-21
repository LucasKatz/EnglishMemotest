import { Link } from 'react-router-dom';
import Navbar from '../components/navbar';

const links = [
  {
    label: 'Animals',
    href: '/animals',
  },
  {
    label: 'Food',
    href: '/food',
  },
  {
    label: 'Feelings',
    href: '/feelings',
  },
  {
    label: 'Irregular Verbs',
    href: '/verbs',
  },
  {
    label: 'Colours',
    href: '/colours',
  },
  {
    label: 'Comparative and Superlatives',
    href: '/comparisons',
  },
];

const Home = () => {
  return (
    
    <div className='h-screen m-auto bg-white f'>
      <section className='bg-green flex flex-row justify-center align-middle h-screen'>
        <div className="flex flex-row m-auto">
          {links.map(link => (
            <Link key={link.label} to={link.href}>
              <p>
                {link.label}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
