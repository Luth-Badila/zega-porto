import porto1 from "../assets/images/porto1.jpg";
import porto2 from "../assets/images/porto2.jpg";
import porto3 from "../assets/images/porto3.jpg";
import porto4 from "../assets/images/porto4.jpg";
import porto5 from "../assets/images/porto5.jpg";
import "../assets/styles/Card.css";

export default function Card() {
  const lists = [
    {
      id: 1,
      url: porto1,
      tech: "Next.js",
      description: "lorem ipsum dolor sit amet",
    },

    {
      id: 2,
      url: porto2,
      tech: "Vue.js",
      description: "lorem ipsum dolor sit amet",
    },
    {
      id: 3,
      url: porto3,
      tech: "Vue.js",
      description: "lorem ipsum dolor sit amet",
    },
    {
      id: 4,
      url: porto4,
      tech: "React.js",
      description: "lorem ipsum dolor sit amet",
    },
    {
      id: 5,
      url: porto5,
      tech: "React.js",
      description: "lorem ipsum dolor sit amet",
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
}
