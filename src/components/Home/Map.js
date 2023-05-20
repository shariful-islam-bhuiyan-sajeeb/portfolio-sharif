import React from "react";

const Map = () => {
  return (
    <div className="lg:mt-8 md:mt-6 mt-4 space-y-3">
      <div className="text-center ">
        <h2 className="lg:text-2xl md:text-xl text-md lg:font-semibold font-medium">
          Address
        </h2>
        <p className="lg:text-md text-black text-sm">
          Farmgate,Dhaka, Bangladesh
        </p>
      </div>
      <div className="text-center lg:px-2 px-4 rounded">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10328.770879389136!2d90.38257535277609!3d23.75550985050616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8a426199b0d%3A0x6a2c655d06c88ec9!2sFarmgate%2C%20Dhaka%201205!5e0!3m2!1sen!2sbd!4v1684556724717!5m2!1sen!2sbd"
          width="100%"
          height="500"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
