import "../assets/styles/Card.css";
import { lists } from "../data/data.js";

export const Card: React.FC = () => {
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
