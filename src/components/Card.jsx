import star from "../assets/star.png";

function Card({
  typeSkill,
  img,
  title,
  children,
  clientName,
  clientCompany,
  clientStars,
}) {
  return (
    <>
      {typeSkill ? (
        <li className="text-center py-16">
          <img className="mx-auto" src={img} alt="Skill Image" />
          <h2 className="font-semibold leading-7 text-xl mt-11 mb-3">
            {title}
          </h2>
          <p>{children}</p>
        </li>
      ) : (
        <li className="text-center p-11 bg-bleached-silk">
          <p className="font-semibold leading-7 text-xl mt-11 mb-3">
            {children}
          </p>
          <div className="flex gap-2">
            <img className="w-12 h-12" src={img} alt="Client Image" />
            <div>
              <ul className="flex gap-1">
                {Array.from(Array(clientStars).keys()).map((i) => (
                  <li key={i}>
                    <img src={star} alt="star" />
                  </li>
                ))}
              </ul>
              <h2 className="font-semibold leading-7 text-xl my-1 ">
                {clientName}
              </h2>
              <p className="text-start">{clientCompany}</p>
            </div>
          </div>
        </li>
      )}
    </>
  );
}

export default Card;
