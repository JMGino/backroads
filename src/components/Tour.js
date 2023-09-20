import { tours } from '../data';

const Tour = () => {
  return (
    <div className="section-center featured-center">
      {tours.map((tour) => {
        const { id, image, date, title, info, location, duration, cost } = tour
        return (
          <article className="tour-card" key={id}>
            <div className="tour-img-container">
              <img src={image} className="tour-img" alt="" />
              <p className="tour-date">{date}</p>
            </div>
            <div className="tour-info">
              <h4>{title}</h4>
              <p>{info}</p>
              <div className="tour-footer">
                <p>
                  <span>
                    <i className="fas fa-map"></i>
                  </span>
                  {location}
                </p>
                <p>{duration}</p>
                <p>{cost}</p>
              </div>
            </div>
          </article>
        )
      })}
    </div>
  )
}
export default Tour