import React, { useEffect, useState } from 'react';
import './css/dashboard.css';
import Lottie from "lottie-react";
import logo from "./animations/logo.json";
import Fashion from './sections/Fashion';
import BeautyandGrooming from './sections/Beauty&Grooming';
import Lifestyle from './sections/Lifestyle';
import HomeDecorandFurnishing from './sections/HomeDecor&Furnishing';
import Wellness from './sections/Wellness';
import Gifts from './sections/Gifts';
import Experiences from './sections/Experiences';
import Collectibles from './sections/Collectibles';
import Category from './Category';

function Dashboard() {
  const [sections, setSections] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/allSection')
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Failed to fetch data');
        }
      })
      .then(data => {
        setSections(data.sections);
      })
      .catch(error => {
        console.error("Error fetching sections:", error);
      });
  }, [sections]);

  const handleTabClick = (event, index) => {
    event.preventDefault();
    const sectionId = sections[index]._id;
    const scrollTop = document.getElementById(sectionId).offsetTop - 70 + 1;
    window.scrollTo({ top: scrollTop, behavior: 'smooth' });
  };

  const handleScroll = () => {
    const etHeroTabs = document.querySelector('.et-hero-tabs');
    if (!etHeroTabs) return;
  
    const offset = etHeroTabs.offsetTop + etHeroTabs.offsetHeight - 70;
    if (window.pageYOffset > offset) {
      document.querySelector('.et-hero-tabs-container').classList.add('et-hero-tabs-container--top');
    } else {
      document.querySelector('.et-hero-tabs-container').classList.remove('et-hero-tabs-container--top');
    }
  
    let maxVisibleArea = 0;
    let currentSectionId = null;
  
    sections.forEach(section => {
      const sectionElement = document.getElementById(section._id);
      const sectionTop = sectionElement.offsetTop - 70;
      const sectionBottom = sectionElement.offsetTop + sectionElement.offsetHeight - 70;
      const visibleArea = Math.min(window.pageYOffset + window.innerHeight, sectionBottom) - Math.max(window.pageYOffset, sectionTop);
  
      if (visibleArea > maxVisibleArea) {
        maxVisibleArea = visibleArea;
        currentSectionId = section._id;
      }
    });
  
    // console.log("Current section ID:", currentSectionId);
  
    if (currentSectionId) {
      const currentIndex = sections.findIndex(section => section._id === currentSectionId);
      // console.log("Current section index:", currentIndex);
  
      const currentTab = document.querySelector(`.et-hero-tab[data-index="${currentIndex}"]`);
      // console.log("Current tab:", currentTab);
  
      setSliderCss(currentTab);
    }
  };
  ;
  

  const setSliderCss = (currentTab) => {
    if (!currentTab) return;
    const width = window.getComputedStyle(currentTab).width;
    const left = currentTab.offsetLeft;
    const tabSlider = document.querySelector('.et-hero-tab-slider');
    tabSlider.style.width = width;
    tabSlider.style.left = left + 'px';
  };

  useEffect(() => {
    document.querySelectorAll('.et-hero-tab').forEach((tab, index) => {
      tab.addEventListener('click', (event) => handleTabClick(event, index));
      tab.setAttribute('data-index', index);
    });
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sections]);

  return (
    <div>
      <section className="et-hero-tabs">
        <Lottie animationData={logo} loop={false} style={{ height: "15rem" }} />
        <h1>ELITE AVENUE</h1>
        <h3>Where luxury meets convenience</h3>
        <div className="et-hero-tabs-container">
          {sections.map((section, index) => (
            <a key={section._id} className="et-hero-tab" href={`#${index}`}>
              {section.name}
            </a>
          ))}
          <span className="et-hero-tab-slider"></span>
        </div>
      </section>

      <main className="et-main">
        {sections.map(section => (
          <section key={section._id} className="et-slide" id={section._id}>
            <Category sectionName={section.name} />
          </section>
        ))}
      </main>
    </div>
  );
}

export default Dashboard;
