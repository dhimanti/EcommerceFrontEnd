import React, { useRef, useState, useEffect, createRef } from 'react';
import gsap from 'gsap';
import './css/navbar2.css';
import Lottie from "lottie-react";
import logoAnimation from "./animations/logo.json";

/*--------------------
Items
--------------------*/
const items = [
  {
    name: "",
    color: "#000000",
    href: "#",
    logo: logoAnimation
  },
  {
    name: "Freelance",
    color: "#f44336",
    href: "#"
  },
  {
    name: "Design",
    color: "#e91e63",
    href: "#"
  },
  {
    name: "Director",
    color: "#9c27b0",
    href: "#"
  },
  {
    name: "Experience",
    color: "#673ab7",
    href: "#"
  },
  {
    name: "Interface",
    color: "#3f51b5",
    href: "#"
  },
  {
    name: "Interface",
    color: "#3f51b5",
    href: "#"
  }
];

/*--------------------
Menu
--------------------*/
const Menu = ({ items }) => {
  const rootRef = useRef(null);
  const indicator1Ref = useRef(null);
  const indicator2Ref = useRef(null);
  const itemRefs = useRef(items.map(() => createRef()));
  const [active, setActive] = useState(0);

  const animate = () => {
    const menuOffset = rootRef.current.getBoundingClientRect();
    const activeItem = itemRefs.current[active].current;
    const { width, height, top, left } = activeItem.getBoundingClientRect();

    const settings = {
      x: left - menuOffset.x,
      y: top - menuOffset.y,
      width,
      height,
      backgroundColor: items[active].color,
      ease: 'elastic.out(.7, .7)',
      duration: 0.8
    };

    gsap.to(indicator1Ref.current, {
      ...settings,
    });

    gsap.to(indicator2Ref.current, {
      ...settings,
      duration: 1
    });
  };

  useEffect(() => {
    animate();
    window.addEventListener('resize', animate);

    return () => {
      window.removeEventListener('resize', animate);
    };
  }, [active]);

  return (
    <>
      {/* <Lottie animationData={logoAnimation} loop={true} style={{ height: "1.5em" }} /> */}

      <div ref={rootRef} className="menu">
        {items.map((item, index) => (
          <a
            key={item.name}
            ref={itemRefs.current[index]}
            className={`item ${active === index ? 'active' : ''}`}
            onMouseEnter={() => {
              setActive(index);
            }}
            href={item.href}
          >
            {item.logo && <Lottie animationData={item.logo} loop={false} style={{ height: "1.5em", marginRight: "10px" }} />}
            {item.name}
          </a>
        ))}
        <div ref={indicator1Ref} className="indicator" />
        <div ref={indicator2Ref} className="indicator" />
      </div>
    </>
  );
};

export default function Navbar() {
  return (
    <div>
      <Menu items={items} />
    </div>
  );
}
