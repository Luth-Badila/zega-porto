import Car1 from "../assets/images/1.jpg";
import "../assets/styles/Card.css";

export default function Card() {
  interface lists {
    id: number;
    url: any;
    title: string;
  }

  const lists = [
    {
      id: 1,
      url: Car1,
      price: "RP 30.000",
      tech: {
        one: "vue.js",
        two: "tailwind",
      },
    },

    {
      id: 2,
      url: Car1,
      price: "RP 30.000",
      rating: "4.8",
      sold: "10 sold",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi dicta incidunt, libero iusto at ipsa autem reiciendis nihil qui a!",
      city: "Konoha",
    },
    {
      id: 3,
      url: Car1,
      price: "RP 30.000",
      rating: "4.8",
      sold: "10 sold",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi dicta incidunt, libero iusto at ipsa autem reiciendis nihil qui a!",
      city: "Konoha",
    },
  ];
  return (
    // <section className="card-container">
    //   <div className="card">
    //     <div className="imgBx">
    //       <img src={Car1} alt="car-image" className="" />
    //     </div>
    //     <div className="content">
    //       <span className="price">
    //         <a href="">$1000</a>
    //       </span>
    //       <ul>
    //         <li>Somewhere</li>
    //         <li>Somewhere</li>
    //         <li>Somewhere</li>
    //       </ul>
    //     </div>
    //   </div>
    // </section>
    <section className="card-container">
      {lists.map((list) => {
        return (
          <div className="card" key={list?.url}>
            <div className="imgBx">
              <img alt="image" src={list?.url} />;
            </div>
            <div className="content">
              <span className="price">
                <a href="#">{list?.price}</a>
              </span>
            </div>
          </div>
        );
      })}
    </section>
  );
}
