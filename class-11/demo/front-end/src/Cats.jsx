function Cats({ cats }) {
  return (
    <>
      {cats.length && cats.map((cat, idx) => (
        <div key={idx}>
          {cat.name} in {cat.location}
        </div>
      ))}
    </>
  )
}


export default Cats;
