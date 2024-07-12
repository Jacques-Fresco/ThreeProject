import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";
import "./ImageSlider.scss";

// Define a custom cubic easing function
CustomEase.create("cubic", "0.83, 0, 0.17, 1");

const images = [
  "https://images.unsplash.com/photo-1689602037070-fec2eca3f5b2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1718125188885-7ce699512931?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1718116088537-212b192d1ad9?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1718194822494-47de8fb7922c?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1713970700051-556d05c59fce?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
];

const ImageSlider = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const splitTextIntoSpans = (selector) => {
      let elements = document.querySelectorAll(selector);
      elements.forEach((element) => {
        let text = element.innerText;
        let splitText = text
          .split("")
          .map((char) => `<span>${char === " " ? "&nbsp;&nbsp;" : char}</span>`)
          .join("");
        element.innerHTML = splitText;
      });
    };

    const initializeCards = () => {
      let cards = Array.from(document.querySelectorAll(".card-im"));
      gsap.to(cards, {
        y: (i) => -15 + 15 * i + "%",
        z: (i) => 15 * i,
        duration: 1,
        ease: "cubic",
        stagger: -0.1
      });
    };

    splitTextIntoSpans(".copy-im h1");
    initializeCards();

    gsap.set("h1 span", { y: -200 });
    gsap.set(".slider-im .card-im:last-child h1 span", { y: 0 });

    const handleClick = () => {
      if (isAnimating) return;

      setIsAnimating(true);
      let slider = document.querySelector(".slider-im");
      let cards = Array.from(slider.querySelectorAll(".card-im"));
      let lastCard = cards.pop();
      let nextCard = cards[cards.length - 1];

      gsap.to(lastCard.querySelectorAll("h1 span"), {
        y: 200,
        duration: 0.75,
        ease: "cubic"
      });

      gsap.to(lastCard, {
        y: "+=150%",
        duration: 0.75,
        ease: "cubic",
        onComplete: () => {
          slider.prepend(lastCard);
          initializeCards();
          gsap.set(lastCard.querySelectorAll("h1 span"), { y: -200 });

          setTimeout(() => {
            setIsAnimating(false);
          }, 1000);
        }
      });

      gsap.to(nextCard.querySelectorAll("h1 span"), {
        y: 0,
        duration: 1,
        ease: "cubic",
        stagger: 0.05
      });
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [isAnimating]);

  return (
    <div className="container-im">
      <div className="inner-container-im">
        <div className="slider-im">
          {images.map((src, index) => (
            <div className="card-im" key={index}>
              <img src={src} alt={`Slide ${index + 1}`} />
              <div className="copy-im">
                <h1>Lorem, ipsum.</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
