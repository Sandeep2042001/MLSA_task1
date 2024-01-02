/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/3rd.jpeg";

const imageAltText = "A beautiful view";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Meet me",
    description:
      "You can meet me here and can connect with me",
    url: "https://sandeep2042001.github.io/MeetToSandeepLive/",
  },
  {
    title: "Learn DSA at my website",
    description:
      "from my site you can learn data structures and algorithms.",
    url: "https://sandeep2042001.github.io/Makeiteasy/",
  },
  {
    title: "my Portfolio",
    description:
      "Heyy.. se me at my portfolio and connect with me",
    url: "https://glowing-wisp-805758.netlify.app/",
  },
  {
    title: "Keep Notes",
    description:
      "You can keep your daily notes sage here and can learn from them",
    url: "https://sandeep2042001.github.io/keepNotes/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
