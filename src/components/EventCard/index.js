import PropTypes from "prop-types";
import { getMonth } from "../../helpers/Date";

import "./style.scss";

const EventCard = ({
  imageSrc = "/path/to/default/image.png", // Valeur par défaut
  imageAlt = "image", // Valeur par défaut
  date = new Date(), // Valeur par défaut
  title = "Titre par défaut", // Valeur par défaut
  label = "", // Valeur par défaut
  small = false,
  ...props
}) => (
  <div
    data-testid="card-testid"
    className={`EventCard${small ? " EventCard--small" : ""}`}
    {...props}
  >
    <div className="EventCard__imageContainer">
      <img data-testid="card-image-testid" src={imageSrc} alt={imageAlt} />
      {label && <div className="EventCard__label">{label}</div>}{" "}
      {/* Affiche le label uniquement s'il est défini */}
    </div>
    <div className="EventCard__descriptionContainer">
      <div className="EventCard__title">{title}</div>
      <div className="EventCard__month">{getMonth(date)}</div>
    </div>
  </div>
);

EventCard.propTypes = {
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  date: PropTypes.instanceOf(Date),
  title: PropTypes.string,
  small: PropTypes.bool,
  label: PropTypes.string,
};

EventCard.defaultProps = {
  imageSrc: "/path/to/default/image.png",
  imageAlt: "image",
  date: new Date(),
  title: "Titre par défaut",
  small: false,
  label: "",
};

export default EventCard;
