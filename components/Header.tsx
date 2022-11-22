import type { FC } from "react";

const Header: FC = () => {
  return (
    <div>
      <h1 className="title">Intercambio 2022</h1>
      <style jsx>{`
        .title {
          text-align: center;
        }
      `}</style>
    </div>
  );
};

export default Header;
