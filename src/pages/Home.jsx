import React, { useState, useRef, useCallback } from 'react'
import './../styles/Home.css'
import don from './../image/don_boso.png';
import dondon from './../image/dondon.jpg'
import don_sports from "./../image/don_sports.jpg"
import don_dance from "./../image/don_dance.jpg"
import don_cultural from "./../image/don_cultural.jpg"


export default function Home() {
  const homeRef = useRef(null);
  const galleryRef = useRef(null);
  const galleryTextRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = useCallback((elementRef) => {
    if (elementRef.current) {
      elementRef.current.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }
  }, []);

  const [activeIndex, setActiveIndex] = useState(0);

  const galleryItems = [
    {
      image: dondon,
      title: "School Group Photo",
      description: "A memorable moment capturing the spirit of our school community."
    },
    {
      image: don_sports,
      title: "Sports Day",
      description: "Celebrating athleticism and team spirit on our annual Sports Day."
    },
    {
      image: don_dance,
      title: "Cultural Dance",
      description: "Showcasing traditional dance and cultural heritage of our students."
    },
    {
      image: don_cultural,
      title: "Cultural Celebration",
      description: "Embracing diversity and creativity through our cultural events."
    }
  ];

  const handleNext = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === galleryItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? galleryItems.length - 1 : prevIndex - 1
    );
  };

  return (
    <div>
        <nav>
        <div className="logo">
            <img src={don} alt="Logo"/>
        </div>
        <div className="nav-links">
            <a href="#home" onClick={() => scrollToSection(homeRef)}>Home</a>
            <a href="#about" onClick={() => scrollToSection(galleryTextRef)}>About</a>
            <a href="#contact" onClick={() => scrollToSection(contactRef)}>Contact Us</a>
        </div>
        </nav>

        <div ref={homeRef} id="home" className="body">
          <div className="body-content">
            <h3>In the words of Albert Einstein, "Education is not learning of facts, but the training of the mind to think." However, we cannot do it alone. This is a journey that we have to take together. We are a team - students, teachers, parents, friends, and relatives. I invite you to Don Bosco School, Sonaighuli for the meaningful journey to the future.   

Swami Vivekananda once said, "Education is the manifestation of the perfection present in man..." Therefore, we shall together strive towards the inherent perfection we each of us are so abundantly bestowed with.

And finally, in the words of Mother Teresa, "Let us always meet each other with a smile, for the smile is the beginning of love."

At Don Bosco School, Sonaighuli, we believe that all that we have accomplished, we did it together. And all that we hope to accomplish, we will do it together.   

I invite you to check out our website for updates from time to time.
            </h3>
          </div>
          <img src={dondon} alt="Don Bosco School Group Photo" className="body-image" />
        </div>

        <div className="apply">
          <div className="buttons">
            Apply Now
          </div>
        </div>

        <div ref={galleryRef} id="about" className="gallery">
          <div ref={galleryTextRef} className="gallery-text">Moments</div>
          <div className="gallery-container">
            <div className="gallery-navigation">
              <button className="gallery-nav-btn" onClick={handlePrev}>←</button>
              <button className="gallery-nav-btn" onClick={handleNext}>→</button>
            </div>
            <div className="image-scroller">
              {galleryItems.map((item, index) => (
                <div 
                  key={index} 
                  className={`gallery-card ${index === activeIndex ? 'active' : ''}`}
                >
                  <img src={item.image} alt={item.title} />
                  <div className="gallery-card-content">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div ref={contactRef} id="contact" className="contacts">
          <div className="contact-text">Contact Us</div>
          <div className="contact-inf">
            <div className="contact-card">
              <i className="fas fa-phone"></i>
              <div className="contact-details">
                <h4>Phone</h4>
                <p>+91 (033) 2567-8901</p>
                <p>+91 (033) 2567-8902</p>
              </div>
            </div>
            <div className="contact-card">
              <i className="fas fa-envelope"></i>
              <div className="contact-details">
                <h4>Email</h4>
                <p>john@donboscosonaighuli.org</p>
                <p>mother@donboscosonaighuli.org</p>
              </div>
            </div>
            <div className="contact-card">
              <i className="fas fa-map-marker-alt"></i>
              <div className="contact-details">
                <h4>Address</h4>
                <p>Don Bosco School, Sonaighuli</p>
                <p>P.O. Sonaighuli, Saukuchi, Lokhra , Assam - 270019</p>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
