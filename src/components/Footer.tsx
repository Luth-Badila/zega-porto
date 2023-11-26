function Footer() {
  return (
    <div className="footer">
      <div className="footer-sections">
        <div className="content-section">
          <div className="content">
            <h1>Customare Care</h1>
            <div className="inner-section">
              <div className="flex flex-col gap-3">
                <p>Contact Us</p>
                <p>Shipping</p>
              </div>
              <div className="flex flex-col gap-3">
                <p>Returns</p>
                <p>Guiding</p>
              </div>
            </div>
          </div>
          <div className="text-7xl">Logo Here</div>
          <div className="flex flex-col gap-3">
            <h1>Corporate</h1>
            <div className="inner-section">
              <div className="flex flex-col gap-3">
                <p>Contact Us</p>
                <p>Shipping</p>
              </div>
              <div className="flex flex-col gap-3">
                <p>Returns</p>
                <p>Guiding</p>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-follow">
          <h3 className="uppercase text-xl font-semibold">Contact and Follow Us On</h3>
          <div className="flex gap-3 items-center">
            <i className="ant-design:facebook-filled" />
            <i className="cib:instagram" />
            <i className="fa-brands:whatsapp" />
            <i className="mdi:youtube" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
