/* eslint-disable react/prop-types */
function Card({ children }) {
  return (
    <div className="grid lg:grid-cols-12 md:me-3">
      <div className="col-span-12">{children}</div>
    </div>
  );
}

export default Card;
