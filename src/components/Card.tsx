import Car1 from "../assets/images/1.jpg";

export default function Card() {
  const lists = [
    {
      id: 1,
      url: Car1,
      price: "RP 30.000",
      rating: "4.8",
      sold: "10 sold",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi dicta incidunt, libero iusto at ipsa autem reiciendis nihil qui a!",
      city: "Konoha",
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
    <section className="card-container">
      {lists.map((list) => {
        return (
          <div className="card" key={list?.url}>
            <div className="imgBx">
              <img className="imgBx" alt="sliderImage" src={list?.url} />;
            </div>
            <div className="content">
              <span className="price">
                <a href="#">{list?.price}</a>
              </span>
              <div className="col">
                <div className="flex-long">
                  <div className="flex-center">
                    <i className="zondicons:star-full" />
                    <span className="rating">{list?.rating}</span>
                    <span className="rating">|</span>
                    <span className="rating">{list?.sold}</span>
                  </div>
                  <div className="flex-center">
                    <p className="rating">{list?.city}</p>
                  </div>
                </div>
                <div className="description">
                  <p>{list?.description}</p>
                </div>
                <button className="cart">
                  <i className="mdi:cart-outline" />
                  <span>Add to cart</span>
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
