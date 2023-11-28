import porto1 from "../assets/images/porto1.jpg";
import porto2 from "../assets/images/porto2.jpg";
import porto3 from "../assets/images/porto3.jpg";
import porto4 from "../assets/images/porto4.jpg";
import porto5 from "../assets/images/porto5.jpg";
import porto6 from "../assets/images/porto6.jpg";
import porto7 from "../assets/images/porto7.jpg";
import "../assets/styles/Card.css";

export const Card: React.FC = () => {
  const lists = [
    {
      id: 1,
      url: porto1,
      tech: "Next.js",
      description: "Make Landing Page with Next.js and tailwind",
    },

    {
      id: 2,
      url: porto2,
      tech: "Vue.js",
      description: "Make Dahsboard with vue3.js and tailwind",
    },
    {
      id: 3,
      url: porto3,
      tech: "Vue.js",
      description: "Make Landing Page with vue3.js and Vanilla CSS",
    },
    {
      id: 4,
      url: porto4,
      tech: "HTML5",
      description: "Make Landing Page with HTML5 and Tailwind",
    },
    {
      id: 5,
      url: porto5,
      tech: "Vue.js",
      description: "Make Dashboard with Vue3.js and tailwind",
    },
    {
      id: 6,
      url: porto6,
      tech: "React.js",
      description: "Make Web Portofolio with React and Vanilla Css",
    },
    {
      id: 7,
      url: porto7,
      tech: "React.js",
      description: "Make Profile Company Web with React and Vanilla Css",
    },
  ];
  return (
    <section id="portofolio" className="card-container">
      {lists.map((list) => {
        return (
          <div className="card" key={list?.url}>
            <div className="imgBx">
              <img alt="image" src={list?.url} />;
            </div>
            <div className="content">
              <span className="price">
                <p>{list?.tech}</p>
              </span>
              <p className="desc">{list?.description}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
};
