import React, { useEffect } from 'react';
import './css/dashboard.css'; // Import your CSS file here
import $ from 'jquery'; // Import jQuery library
import Fashion from './sections/Fashion';
import BeautyandGrooming from './sections/Beauty&Grooming';
import Lifestyle from './sections/Lifestyle';
import HomeDecorandFurnishing from './sections/HomeDecor&Furnishing';
import Wellness from './sections/Wellness';
import Gifts from './sections/Gifts';
import Experiences from './sections/Experiences';
import Collectibles from './sections/Collectibles';

import Lottie from "lottie-react";
import logo from "./animations/logo.json";


function Dashboard() {
  useEffect(() => {
    $(document).ready(function() {
      class StickyNavigation {
        constructor() {
          this.currentId = null;
          this.currentTab = null;
          this.tabContainerHeight = 70;
          $('.et-hero-tab').click((event) => this.onTabClick(event, $(event.target)));
          $(window).scroll(() => this.onScroll());
          $(window).resize(() => this.onResize());
        }

        onTabClick(event, element) {
          event.preventDefault();
          const scrollTop = $(element.attr('href')).offset().top - this.tabContainerHeight + 1;
          $('html, body').animate({ scrollTop }, 600);
        }

        onScroll() {
          this.checkTabContainerPosition();
          this.findCurrentTabSelector();
        }

        onResize() {
          if (this.currentId) {
            this.setSliderCss();
          }
        }

        checkTabContainerPosition() {
          const $etHeroTabs = $('.et-hero-tabs');
          if ($etHeroTabs.length === 0) return; // Exit if element not found
          
          const offset = $etHeroTabs.offset().top + $etHeroTabs.height() - this.tabContainerHeight;
          if ($(window).scrollTop() > offset) {
            $('.et-hero-tabs-container').addClass('et-hero-tabs-container--top');
          } else {
            $('.et-hero-tabs-container').removeClass('et-hero-tabs-container--top');
          }
        }

        findCurrentTabSelector() {
          const self = this;
          $('.et-hero-tab').each(function () {
            const id = $(this).attr('href');
            const offsetTop = $(id).offset().top - self.tabContainerHeight;
            const offsetBottom = $(id).offset().top + $(id).height() - self.tabContainerHeight;
            if ($(window).scrollTop() > offsetTop && $(window).scrollTop() < offsetBottom) {
              self.currentId = id;
              self.currentTab = $(this);
            }
          });
          if (this.currentId !== null) {
            this.setSliderCss();
          }
        }

        setSliderCss() {
          let width = 0;
          let left = 0;
          if (this.currentTab) {
            width = this.currentTab.css('width');
            left = this.currentTab.offset().left;
          }
          $('.et-hero-tab-slider').css('width', width);
          $('.et-hero-tab-slider').css('left', left);
        }
      }

      new StickyNavigation();
    });
  }, []);

  return (
    <div>
      <section className="et-hero-tabs">
        <Lottie animationData={logo} loop={true} style={{ height: "15rem" }} />
        <h1>ELITE AVENUE</h1>
        <h3>Where luxury meets convenience</h3>
        <div className="et-hero-tabs-container">
          <a className="et-hero-tab" href="#tab-fashion">Fashion</a>
          <a className="et-hero-tab" href="#tab-beauty">Beauty & Grooming</a>
          <a className="et-hero-tab" href="#tab-lifestyle">Lifestyle</a>
          <a className="et-hero-tab" href="#tab-decor">Home Decor & Furnishings</a>
          <a className="et-hero-tab" href="#tab-wellness">Wellness</a>
          <a className="et-hero-tab" href="#tab-gifts">Gifts</a>
          <a className="et-hero-tab" href="#tab-experiences">Experiences</a>
          <a className="et-hero-tab" href="#tab-collectibles">Limited Edition & Collectibles</a>
          <span className="et-hero-tab-slider"></span>
        </div>
      </section>

      <main className="et-main">
        <section className="et-slide" id="tab-fashion">
          <Fashion />
        </section>
        <section className="et-slide" id="tab-beauty">
          <BeautyandGrooming />
        </section>
        <section className="et-slide" id="tab-lifestyle">
          <Lifestyle />
        </section>
        <section className="et-slide" id="tab-decor">
          <HomeDecorandFurnishing />
        </section>
        <section className="et-slide" id="tab-wellness">
          <Wellness />
        </section>
        <section className="et-slide" id="tab-gifts">
          <Gifts />
        </section>
        <section className="et-slide" id="tab-experiences">
          <Experiences />
        </section>
        <section className="et-slide" id="tab-collectibles">
          <Collectibles />
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
