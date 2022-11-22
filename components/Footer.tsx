import React from "react";

const Footer = () => {
  return (
    <div>
      <p className="copy">&copy; 2022 Francisco García</p>
      <style jsx>{`
        .copy {
          text-align: end;
        }
      `}</style>
    </div>
  );
};

export default Footer;
