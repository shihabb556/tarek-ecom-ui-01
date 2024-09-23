import { Link } from 'react-router-dom';


const Hero = () => {
    return (
      <section className="home" id="home">
        <div className="content">
          <h3>Fresh And <span>Organic</span> Products For You</h3>
          <p>This Website Is Designed By Cyber Warriors Youtube Channel So That Everyone Can Learn In An Easy Way.</p>
          <Link to="#" className="btn">Shop Now</Link>
        </div>
      </section>
    );
  };
  
  export default Hero;
  