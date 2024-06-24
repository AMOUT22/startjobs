import logo from './logo.svg';
import emailjs from 'emailjs-com';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import logoStartJobs from "./pictures/image.png"
import companypic from "./pictures/company.jpg"
import videoedit1 from "./pictures/videoedit1.svg"
import graphique from "./pictures/graphique.png"
import web from "./pictures/web.svg"
import React, { useState,useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin,} from '@fortawesome/free-brands-svg-icons';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';



function App() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    service: '',
    socialLinks: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleServiceChange = (service) => {
    setFormData({ ...formData, service });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace with your actual EmailJS service ID, template ID, and user ID
    emailjs.send('service_cqjebjg', 'template_7k7p47j', formData, 'Z9d2fpUp282jt6uNV')
      .then((result) => {
        console.log(result.text);
        alert('Message sent successfully!');
      }, (error) => {
        console.log(error.text);
        alert('Failed to send the message, please try again.');
      });

    setFormData({
      fullName: '',
      phone: '',
      email: '',
      service: '',
      socialLinks: ''
    });
  };
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const cards = [
    { id: 1,logo:web, content: 'Développement web et mobile' , paragraph : "Transformez votre vision en réalité avec StartJobs ! Nous créons des sites web captivants et des applications mobiles révolutionnaires qui engagent vos utilisateurs et propulsent votre marque vers de nouveaux sommets. Notre équipe de développeurs talentueux combine créativité et expertise technique pour concevoir des solutions digitales sur mesure, parfaitement adaptées à vos besoins."},
    { id: 2,logo:graphique, content: 'Design Graphique' , paragraph : "Le graphisme est bien plus qu'un simple design, c'est l'art de raconter votre histoire de manière visuelle et impactante. Notre équipe de designers créatifs excelle dans la création de visuels uniques et mémorables qui reflètent l'identité et les valeurs de votre marque. Que vous ayez besoin de logos distinctifs, de supports marketing attrayants, ou de conceptions graphiques pour vos campagnes publicitaires, nous transformons vos idées en œuvres d'art visuelles. Faites confiance à notre expertise pour donner vie à votre marque et captiver votre audience avec des designs qui se démarquent."},
    { id: 3,logo:videoedit1, content: 'Production audiovisuelle', paragraph : "Nous donnons vie à vos idées grâce à des productions audiovisuelles de haute qualité qui captivent et inspirent. Que ce soit pour des vidéos promotionnelles, des clips publicitaires, ou des contenus pour les réseaux sociaux, notre équipe de professionnels de l’audiovisuel utilise les dernières technologies et techniques de montage pour créer des vidéos percutantes et engageantes. Nous nous occupons de tout, de la conception à la post-production, pour garantir des résultats qui surpassent vos attentes et véhiculent parfaitement votre message. Faites passer votre communication au niveau supérieur avec des vidéos qui racontent votre histoire de manière dynamique et inoubliable." },
    { id: 4, content: 'Card 4 Content', paragraph : "paragraph 4" },
    { id: 5, content: 'Card 5 Content', paragraph : "paragraph 5" },
    { id: 6, content: 'Card 6 Content', paragraph : "paragraph 6" },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(3);


  useEffect(() => {
    const updateCardsPerPage = () => {
      if (window.innerWidth < 640) {
        setCardsPerPage(1);
      } else if (window.innerWidth < 768) {
        setCardsPerPage(2);
      } else {
        setCardsPerPage(3);
      }
    };

    updateCardsPerPage();
    window.addEventListener('resize', updateCardsPerPage);

    return () => window.removeEventListener('resize', updateCardsPerPage);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      const maxIndex = cards.length - cardsPerPage;
      return Math.min(prevIndex + 1, maxIndex);
    });
  };

  const visibleCards = cards.slice(currentIndex, currentIndex + cardsPerPage);
  return (

    <div className="App ">
      <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-8 py-6">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center text-gray-800 text-lg font-bold font-poppins">
            <img src={logoStartJobs} alt="Your Logo" className="h-10 sm:h-12 md:h-14 lg:h-16 xl:h-16 2xl:h-16 mr-4" />
            
          </a>
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-800 hover:text-orange-500 font-poppins">Home</a>
            <a href="/" className="text-gray-800 hover:text-orange-500 font-poppins">Services</a>
            <a href="/" className="text-gray-800 hover:text-orange-500 font-poppins">A propos de nous</a>
            <a href="/" className="text-gray-800 hover:text-orange-500 font-poppins">Portfolio</a>
            <a
              href="/service.js"
              className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded focus:outline-none focus-shadow-outline font-poppins"
            >
              Contact
            </a>
          </div>
          {/* Hamburger menu for mobile */}
          <div className="md:hidden">
            <button
              className="text-gray-800 hover:text-orange-500"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"strokeLinejoin="round" strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            {mobileMenuOpen && (
              <div className="absolute top-0 left-0 w-full h-screen bg-white shadow-md p-4">
                <button
                  className="text-gray-800 hover:text-orange-500 absolute top-4 right-4"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"strokeLinejoin="round" strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
                <a
                  href="/"
                  className="block text-gray-800 hover:text-orange-500 font-poppins py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </a>
                <a
                  href="/"
                  className="block text-gray-800 hover:text-orange-500 font-poppins py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Services
                </a>
                <a
                  href="/"
                  className="block text-gray-800 hover:text-orange-500 font-poppins py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  A propos de nous
                </a>
                <a
                  href="/"
                  className="block text-gray-800 hover:text-orange-500 font-poppins py-2 mb-4"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Portfolio
                </a>
                <a
                  href="/"
                  className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus-shadow-outline font-poppins"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>


    <div className="flex container mx-auto px-4 md:px-8 lg:px-16 ">
  <div className="flex flex-col md:flex-row bg-white rounded-lg p-6 md:p-10 w-full space-y-4 md:space-y-0 md:space-x-8">
    <div className="order-2 md:order-1 md:w-1/2 p-4 md:pr-8"> 
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 max-w-lg">Innovateurs en Branding numérique</h1>
      <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-lg">Du concept à la concrétisation, nous propulsons votre marque vers une réussite sans précédent.</p>
      <hr className="border-0 bg-orange-500 h-1 w-full"></hr>
      <div className="grid grid-cols-2 gap-4 my-8">
        <div className="p-4 rounded-lg text-center text-orange-500 hover:text-white hover:bg-orange-500">
          <p className="text-xl font-semibold"><i className="fa-solid fa-arrow-trend-up"></i> +20</p>
          <p className="text-sm font-bold">Compagnes</p>
          <p className="text-sm">Lancées</p>
        </div>
        <div className="p-4 rounded-lg text-center text-orange-500 hover:text-white hover:bg-orange-500">
          <p className="text-xl font-semibold"><i className="fa-solid fa-arrow-trend-up"></i> +80</p>
          <p className="text-sm font-bold">Vidéos</p>
          <p className="text-sm">Teaser</p>
        </div>
        <div className="p-4 rounded-lg text-center text-orange-500 hover:text-white hover:bg-orange-500">
          <p className="text-xl font-semibold"><i className="fa-solid fa-arrow-trend-up"></i> +150</p>
          <p className="text-sm font-bold">Flyers</p>
          <p className="text-sm">Digiteaux crées</p>
        </div>
        <div className="p-4 rounded-lg text-center text-orange-500 hover:text-white hover:bg-orange-500">
          <p className="text-xl font-semibold"><i className="fa-solid fa-arrow-trend-up"></i> +70</p>
          <p className="text-sm font-bold">Clients</p>
          <p className="text-sm">Satisfaits</p>
        </div>
      </div>
      <div className="flex space-x-4">
        <a href="#" className="text-orange-500 hover:text-orange-600">
          <FontAwesomeIcon icon={faFacebook} size="1x" />
        </a>
        <a href="#" className="text-orange-500 hover:text-orange-600">
          <FontAwesomeIcon icon={faTwitter} size="1x" />
        </a>
        <a href="#" className="text-orange-500 hover:text-orange-600">
          <FontAwesomeIcon icon={faInstagram} size="1x" />
        </a>
        <a href="#" className="text-orange-500 hover:text-orange-600">
          <FontAwesomeIcon icon={faLinkedin} size="1x" />
        </a>
      </div>
    </div>
    <div className="order-1 md:order-2 md:w-1/2  p-4 md:pl-8"> 
      <img src={companypic} alt="Company" className="rounded-lg w-full h-auto sm:w-full md:w-full lg:w-full " />
    </div>
  </div>
</div>




    <div class="overflow-hidden">
  <div class="flex animate-scrollTitles text-xl whitespace-nowrap text z">
    <div class="px-4 text1">Transformer les Idées en Impact</div> <span> °°°</span>
    <div class="px-4 text1">Innover. Élever. Dominer</div> <span> °°°</span>
    <div class="px-4 text1">Votre Vision, Notre Stratégie</div> <span> °°°</span>
    <div class="px-4 text1">Déclenchez votre créativité</div> <span> °°°</span>
    <div class="px-4 text1">Transformez les rêves en réalité</div> <span> °°°</span>
    <div class="px-4 text1">Repoussez les limites, faites l'histoire</div> <span> °°°</span>
    <div class="px-4 text1">Donnez de l'élan à votre parcours</div> <span> °°°</span>
    <div class="px-4 text1">Libérez votre potentiel</div> <span> °°°</span>
    <div class="px-4 text1">Inspirez l'innovation</div> <span> °°°</span>
  </div>
</div>




<div class="container mx-auto px-4 md:px-8 lg:px-16 section1">
  <div class="slide3">
    <h3 class="text-xl md:text-l lg:text-xl font-bold mb-4 p-4 max-w-lg titre1">Innovateurs en Branding numérique</h3>
    <p class="mb-8 px-4 max-w-lg ">Du concept à la concrétisation, nous propulsons votre marque vers une réussite sans précédent.</p>
  </div>

  <div class="carousel mt-4">
  <div class="flex justify-end space-x-2 ">
  <button
          onClick={handlePrev}
          className={`p-2 text-gray-600 hover:text-gray-900 ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={currentIndex === 0}
        >
          <FontAwesomeIcon icon={faArrowLeft} size="1x" />
        </button>
        <button
          onClick={handleNext}
          className={`p-2 text-gray-600 hover:text-gray-900 ${currentIndex >= cards.length - cardsPerPage ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={currentIndex >= cards.length - cardsPerPage}
        >
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </button>
  </div>
  <div class="flex flex-wrap overflow-hidden items-center justify-center">
  {visibleCards.map((card) => (
    <div key={card.id} className="w-full sm:w-full md:w-1/3 lg:w-1/4  p-4 cardss">
    <div className="w-full h-[331px] cartee mx-auto rounded overflow-hidden shadow-lg p-6 bg-white flex flex-col justify-between transition duration-300 ease-in-out group hover:bg-gray-100">
      <div className="flex mb-4">
        <div className="flex carte">
          <img src={card.logo} alt="Card Logo" className="w-full h-full object-cover" />
        </div>
      </div>
      <div className="font-bold text-xl carte mb-4">
        {card.content}
      </div>
      <div className="flex-1">
        <p className="text-gray-700 text-base line-clamp-5 carte">
          {card.paragraph}
        </p>
      </div>
      <div className="text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out bot">
        <a href={card.link} className="block bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600">
          Lire Plus
        </a>
      </div>
    </div>
  </div>
  
  
  
  ))}
</div>



<div className="flex flex-col lg:flex-row items-center justify-center gap-8 py-8 px-4 lg:px-8 slidez ">
      <div className="lg:w-1/2 lg:pr-4 mb-6 lg:mb-0">
        <h2 className="text-3xl font-bold  lg:text-left mb-4">Transformez Votre Marque : Des Expériences Inoubliables avec Passion, Précision et Pertinence</h2>
        <p className="text-lg text-gray-700 mb-4 text-center lg:text-left carte">
        Notre agence marketing se distingue par son engagement passionné à créer des expériences mémorables, soutenues par une approche rigoureuse et précise. Chaque stratégie est minutieusement conçue pour être pertinente et adaptée aux besoins uniques de nos clients, garantissant ainsi des résultats tangibles et durables.
        </p>
        <br/> <br />
        <a
              href="/"
              className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded focus:outline-none focus-shadow-outline font-poppins"
            >
              Contact-nous
            </a>
      </div>
      <br/> <br />
      <div className="lg:w-1/2 order-1 md:order-2">
      <div className=""> 
      <img src={companypic} alt="Company" className="rounded-lg w-full h-auto sm:w-full md:w-full lg:w-full " />
    </div>
      </div>
    </div>



    <br></br>
    <br></br>
    <br></br>
 


    


</div>
</div>

<div className="bg-[#FF7B42] text-white py-6">
      <div className="container mx-auto px-4">
      <div className="flex flex-col lg:flex-row items-center justify-center py-8 px-6 lg:px-8 slidez micro">
      {/* Left Side */}
      <div className="lg:w-1/2 lg:pr-4 mb-6 lg:mb-0">
        <h2 className="text-3xl font-bold lg:text-left mb-4">
          Transformez Votre Marque : Des Expériences Inoubliables avec Passion, Précision et Pertinence
        </h2>
    <br></br>

        <p className="text-lg mb-4 text-center lg:text-left carte">
          Notre agence marketing se distingue par son engagement passionné à créer des expériences mémorables, soutenues par une approche rigoureuse et précise. Chaque stratégie est minutieusement conçue pour être pertinente et adaptée aux besoins uniques de nos clients, garantissant ainsi des résultats tangibles et durables.
        </p>
    <br></br>

    <a
  href="/"
  className="border border-white text-white py-2 px-4 rounded focus:outline-none focus-shadow-outline font-poppins hover:bg-orange-500 hover:text-white"
>
Voir Plus
</a>
      </div>
    <br></br>


      {/* Right Side */}
      <div className="lg:w-1/2 order-1 md:order-2">
        <div className="grid grid-cols-1 gap-4">
          <div className="w-full h-32">
            <img src={companypic} alt="Company" className="rounded-lg w-full h-full object-cover" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="w-full h-32">
              <img src={companypic} alt="Company" className="rounded-lg w-full h-full object-cover" />
            </div>
            <div className="w-full h-32">
              <img src={companypic} alt="Company" className="rounded-lg w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
        
      </div>
    </div>

    <br />
    <br />
    <br />

    <div className="flex flex-col lg:flex-row w-full p-8">
      {/* Left Side - Form */}
      <form onSubmit={handleSubmit} className="lg:w-1/2 w-full space-y-6">
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <div className="w-full md:w-1/2">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="fullName">
              Nom Complet
            </label>
            <input
              type="text"
              id="fullName"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Nom Complet"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="w-full md:w-1/2">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="phone">
              Numéro de Téléphone
            </label>
            <input
              type="tel"
              id="phone"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Téléphone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div>
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Adresse Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 font-bold mb-2">
            Choisir un Service
          </label>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <button
              type="button"
              className={`p-2 border border-gray-300 rounded hover:bg-[#FF7B42] ${
                formData.service === 'Branding' && 'bg-[#FF7B42] text-white'
              }`}
              onClick={() => handleServiceChange('Branding')}
            >
              Branding
            </button>
            <button
              type="button"
              className={`p-2 border border-gray-300 rounded hover:bg-[#FF7B42] ${
                formData.service === 'Websites' && 'bg-[#FF7B42] text-white'
              }`}
              onClick={() => handleServiceChange('Websites')}
            >
              Websites
            </button>
            <button
              type="button"
              className={`p-2 border border-gray-300 rounded hover:bg-[#FF7B42] ${
                formData.service === 'Applications Mobile' && 'bg-[#FF7B42] text-white'
              }`}
              onClick={() => handleServiceChange('Applications Mobile')}
            >
              Applications Mobile
            </button>
            <button
              type="button"
              className={`p-2 border border-gray-300 rounded hover:bg-[#FF7B42] ${
                formData.service === 'Autre' && 'bg-[#FF7B42] text-white'
              }`}
              onClick={() => handleServiceChange('Autre')}
            >
              Autre
            </button>
          </div>
        </div>
        <div>
          <label className="block text-gray-700 font-bold mb-2" htmlFor="socialLinks">
            Liens vers vos réseaux sociaux / site web
          </label>
          <input
            type="text"
            id="socialLinks"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Liens"
            value={formData.socialLinks}
            onChange={handleChange}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 focus:outline-none focus:shadow-outline"
        >
          Envoyer
        </button>
      </form>

      {/* Right Side - Map */}
      <div className="lg:w-1/2 w-full mt-8 lg:mt-0 lg:pl-8">
        <div className="w-full h-64 lg:h-full bg-gray-200 rounded">
          <iframe
            title="Casablanca Map"
            className="w-full h-full rounded"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.838417424509!2d-7.628221585347127!3d33.57311044928226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d23b828e41b5%3A0x7a81929b1a5a5b5f!2sCasablanca%2C%20Morocco!5e0!3m2!1sen!2sus!4v1629385472247!5m2!1sen!2sus"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Startjobs.ma. All rights reserved.
        </p>
        <div className="space-x-4 mb-4">
          <a href="/" className="hover:underline">Home</a>
          <a href="/service" className="hover:underline">Services</a>
          <a href="/about" className="hover:underline">About Us</a>
          <a href="/portfolio" className="hover:underline">Portfolio</a>
          <a href="/contact" className="hover:underline">Contact</a>
        </div>
        <div className="flex justify-center space-x-4 items-center">
          <a href="#" className="text-white hover:text-orange-600">
            <FontAwesomeIcon icon={faFacebook} size="1x" />
          </a>
          <a href="#" className="text-white hover:text-orange-600">
            <FontAwesomeIcon icon={faTwitter} size="1x" />
          </a>
          <a href="#" className="text-white hover:text-orange-600">
            <FontAwesomeIcon icon={faInstagram} size="1x" />
          </a>
          <a href="#" className="text-white hover:text-orange-600">
            <FontAwesomeIcon icon={faLinkedin} size="1x" />
          </a>
        </div>
      </div>
    </footer>











   



    </div>
    
  );
}

export default App;
