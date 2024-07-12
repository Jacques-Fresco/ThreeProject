import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ProjectsSection.css';

gsap.registerPlugin(ScrollTrigger);

const ProjectsSection = () => {
  useEffect(() => {
    // Projects section - Title
    gsap.set(".projects-section .title", {
      y: -200,
      opacity: 0
    });
    gsap.to(".projects-section .title", {
      duration: 1.6,
      y: 0,
      opacity: 1,
      ease: "power2.inOut",
      yoyo: true,
      scrollTrigger: {
        trigger: ".projects-section",
        start: "top center",
        end: "center",
        markers: false
      }
    });

    // Projects section - Left
    gsap.set(".pbox-left", {
      opacity: 0,
      x: -800
    });
    gsap.to(".pbox-left", {
      duration: 1.6,
      x: 0,
      opacity: 1,
      scale: 1,
      ease: "power2.inOut",
      yoyo: true,
      scrollTrigger: {
        trigger: ".projects-section",
        start: "top center",
        end: "center",
        markers: false
      }
    });

    // Projects section - Right
    gsap.set(".pbox-right", {
      x: 500
    });
    gsap.to(".pbox-right", {
      duration: 1.6,
      x: 0,
      ease: "power2.inOut",
      yoyo: true,
      scrollTrigger: {
        trigger: ".projects-section",
        start: "top center",
        end: "center",
        markers: false
      }
    });

    // Projects section - content section
    gsap.set(".project-content", {
      x: -200,
      y: -200,
      opacity: 0
    });
    gsap.to(".project-content", {
      duration: 1.6,
      x: 0,
      y: 0,
      opacity: 1,
      delay: 0.2,
      ease: "power2.inOut",
      yoyo: true,
      scrollTrigger: {
        trigger: ".projects-section",
        start: "top center",
        end: "center",
        markers: false
      }
    });
  }, []);

  return (
    <section className="projects-section white-bg position-relative overflow-hidden">
      <h2 className="title text-center">Projects</h2>
      <div className="container">
        <div className="row align-items-stretch overflow-hidden gy-1 gy-md-0 gx-1 gx-md-3 gx-lg-4">
          <div className="col-md-9">
            <div className="row g-1 g-md-3 g-lg-4 overflow-hidden">
              <div className="col-8">
                <div className="project-box pbox-left">
                  <img src="https://www.yudiz.com/codepen/interior-design/project-01.jpg" className="img-fluid" alt="Project" />
                </div>
              </div>
              <div className="col-4">
                <div className="project-box pbox-right">
                  <img src="https://www.yudiz.com/codepen/interior-design/project-02.jpg" className="img-fluid" alt="Project" />
                </div>
              </div>
              <div className="col-4">
                <div className="project-box pbox-left">
                  <img src="https://www.yudiz.com/codepen/interior-design/project-03.jpg" className="img-fluid" alt="Project" />
                </div>
              </div>
              <div className="col-8 overflow-hidden">
                <div className="project-box project-content">
                  <img src="https://www.yudiz.com/codepen/interior-design/project-bg.jpg" className="img-fluid bg-img" alt="Project" />
                  <div className="row align-items-center h-100">
                    <div className="col-10 col-md-8 col-xxl-7 ms-auto">
                      <p>We celebrated our 100th anniversary with series of events and initiatives that paid tribute to our rich history, our role in the development of the field, and the great opportunities for the future. But we're only just beginning. SID's future is exciting, and we're looking forward to the next 100 years.</p>
                      <a href="javascript:void(0)" className="common-btn ms-auto d-table"><img src="https://www.yudiz.com/codepen/interior-design/arrow-right.svg" className="img-fluid" alt="Arrow" /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="project-box big pbox-right">
              <img src="https://www.yudiz.com/codepen/interior-design/project-04.jpg" className="img-fluid" alt="Project" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
