import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import DataEntry from './components/DataEntry';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';

function App() {
  const [portfolioData, setPortfolioData] = useState(null);

  const handleDataSubmit = (data) => {
    setPortfolioData(data);
    console.log('Portfolio Data:', data);
  };

  const handleGoHome = () => {
    setPortfolioData(null);
  };

  return (
    <div className="App">
      <Navbar goHome={handleGoHome} />

      {!portfolioData ? (
        <DataEntry onSubmit={handleDataSubmit} />
      ) : (
        <div>
          <Hero name={portfolioData.name} bio={portfolioData.bio} />

          <AboutMe
            // skills={
            //   portfolioData.skills
            //     ? portfolioData.skills.split(',').map(skill => skill.trim())
            //     : []
            // }
            // interests={
            //   portfolioData.interests
            //     ? portfolioData.interests.split(',').map(interest => interest.trim())
            //     : []
            // }
            //bio={portfolioData.bio}
            profilePic={portfolioData.profilePic}
            skills={portfolioData.skills ? portfolioData.skills.split(',').map(skill => skill.trim()) : []}
            interests={portfolioData.interests ? portfolioData.interests.split(',').map(interest => interest.trim()) : []}
            bio={portfolioData.aboutMe}
          />

          <h1>Portfolio Generated!</h1>
          <pre>{JSON.stringify(portfolioData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default App;
