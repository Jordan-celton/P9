import { useEffect, useState } from "react";
import { useData } from "../../contexts/DataContext";
import { getMonth } from "../../helpers/Date";

import "./style.scss";

const Slider = () => {
  const { data } = useData();
  const [index, setIndex] = useState(0);

  // Tri des événements par date décroissante
  const byDateDesc = data?.focus?.sort(
    (evtA, evtB) => new Date(evtB.date) - new Date(evtA.date)
  );

  const nextCard = () => {
    setTimeout(
      () => setIndex(index < (byDateDesc?.length ?? 0) - 1 ? index + 1 : 0),
      5000
    );
  };

  useEffect(() => {
    nextCard();
  }, [index, byDateDesc?.length]);

  return (
    <div className="SlideCardList">
      {byDateDesc?.map((event) => (
        <div
          key={event.id || event.date} // Utilisez une combinaison d'ID et de date si l'ID est absent
          className={`SlideCard SlideCard--${
            index === byDateDesc.findIndex((e) => e.date === event.date)
              ? "display"
              : "hide"
          }`}
        >
          <img src={event.cover} alt={event.title} />
          <div className="SlideCard__descriptionContainer">
            <div className="SlideCard__description">
              <h3>{event.title}</h3>
              <p>{event.description}</p>
              <div>{getMonth(new Date(event.date))}</div>
            </div>
          </div>
        </div>
      ))}
      <div className="SlideCard__paginationContainer">
        <div className="SlideCard__pagination">
          {byDateDesc?.map((event, idx) => (
            <input
              key={event.id || idx} // Utiliser une combinaison d'ID et d'index si l'ID est absent
              type="radio"
              name="radio-button"
              checked={index === idx}
              readOnly
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
