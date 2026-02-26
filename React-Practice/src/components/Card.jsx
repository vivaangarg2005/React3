function Card({ user, Profession, age, src }) {
  return (
    <div className="card">
      <img className="image" src={src} alt="" />
      <h1>{user}</h1>
      <h2>{Profession}</h2>
      <h2>Age: {age}</h2>
    </div>
  );
}
export default Card;
