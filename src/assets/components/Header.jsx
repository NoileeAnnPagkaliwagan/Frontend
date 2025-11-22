const Header = ({ name, course }) => {
  return (
    <>
      <h1 className="text-4xl bg-pink-300 text-end p-3 text-pink-600">
        {name}
      </h1>

      <h2 className="text-2xl">{course}</h2>
    </>
  );
};

export default Header;