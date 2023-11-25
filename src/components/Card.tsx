import Car1 from "../../public/images/1.jpg";

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
    // {
    //   id: 2,
    //   url: card2,
    //   price: "RP 30.000",
    //   rating: "4.8",
    //   sold: "10 sold",
    //   description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi dicta incidunt, libero iusto at ipsa autem reiciendis nihil qui a!",
    //   city: "Konoha",
    // },
    // {
    //   id: 3,
    //   url: card3,
    //   price: "RP 30.000",
    //   rating: "4.8",
    //   sold: "10 sold",
    //   description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi dicta incidunt, libero iusto at ipsa autem reiciendis nihil qui a!",
    //   city: "Konoha",
    // },
    {
      id: 4,
      url: Car1,
      price: "RP 30.000",
      rating: "4.8",
      sold: "10 sold",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi dicta incidunt, libero iusto at ipsa autem reiciendis nihil qui a!",
      city: "Konoha",
    },
    // {
    //   id: 5,
    //   url: card5,
    //   price: "RP 30.000",
    //   rating: "4.8",
    //   sold: "10 sold",
    //   description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi dicta incidunt, libero iusto at ipsa autem reiciendis nihil qui a!",
    //   city: "Konoha",
    // },
    // {
    //   id: 6,
    //   url: card6,
    //   price: "RP 30.000",
    //   rating: "4.8",
    //   sold: "10 sold",
    //   description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi dicta incidunt, libero iusto at ipsa autem reiciendis nihil qui a!",
    //   city: "Konoha",
    // },
    // {
    //   id: 7,
    //   url: card7,
    //   price: "RP 30.000",
    //   rating: "4.8",
    //   sold: "10 sold",
    //   description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi dicta incidunt, libero iusto at ipsa autem reiciendis nihil qui a!",
    //   city: "Konoha",
    // },
    // {
    //   id: 8,
    //   url: card8,
    //   price: "RP 30.000",
    //   rating: "4.8",
    //   sold: "10 sold",
    //   description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi dicta incidunt, libero iusto at ipsa autem reiciendis nihil qui a!",
    //   city: "Konoha",
    // },
    {
      id: 9,
      url: Car1,
      price: "RP 30.000",
      rating: "4.8",
      sold: "10 sold",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi dicta incidunt, libero iusto at ipsa autem reiciendis nihil qui a!",
      city: "Konoha",
    },
  ];
  return (
    <section className="card2-container">
      {lists.map((list) => {
        return (
          <div className="card2" key={list?.url}>
            <div className="imgBx">
              <img className="imgBx" alt="sliderImage" src={list?.url} />;
            </div>
            <div className="content2">
              <span className="price">
                <a href="#">{list?.price}</a>
              </span>
              <div className="col">
                <div className="flex-long">
                  <div className="flex-center">
                    <i icon="zondicons:star-full" fontSize={20} color="yellow" />
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
                  <i icon="mdi:cart-outline" fontSize={20} color="yellow" />
                  <span>Add to cart</span>
                </button>
              </div>
            </div>
          </div>
        );
      })}
      {/* <div className="card2">
        <div className="imgBx">
          <Image className="imgBx" alt="sliderImage" src={Car1} />;
        </div>
        <div className="content2">
          <span className="price">
            <Link href="#">$1.000.000</Link>
          </span>
          <div className="col">
            <div className="flex-long">
              <div className="flex-center">
                <Icon icon="zondicons:star-full" fontSize={20} color="yellow" />
                <span className="rating">4.8</span>
                <span className="rating">|</span>
                <span className="rating">10 sold</span>
              </div>
              <div className="flex-center">
                <p className="rating">City</p>
              </div>
            </div>
            <div className="description">
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi dicta incidunt, libero iusto at ipsa autem reiciendis nihil qui a!</p>
            </div>
            <button className="cart">
              <Icon icon="mdi:cart-outline" fontSize={20} color="yellow" />
              <span>Add to cart</span>
            </button>
          </div>
        </div>
      </div> */}
    </section>
  );
}
