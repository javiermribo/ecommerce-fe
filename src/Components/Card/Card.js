import './Card.css';
import { useEffect, useState } from "react";
import { PostItems } from '../../Helpers/HelpHttp'

const Card = () => {
  const [items, setItems] = useState([]);

  const itemsPublisher = async () => {
    const getItems = await PostItems();
    setItems(getItems)
  }

  useEffect(() => {
    itemsPublisher();
  }, [])

  return (
    <div className="cardContainer d-flex flex-wrap">
      {items.map((item) => (
        <div className="card mx-3 my-5 shadow">
          <img
            src={item.image}
            className="card-img-top img-card-properties m-0"
            alt="..."
          ></img>
          <div className="card-body">
            <h4 className="card-title">{item.title}</h4>
            <h2 className="font-weight-bold text-center">${item.price}</h2>
            <p className="card-text">{item.description}</p>
            <div className="btn-container d-flex flex-column">
              <button
                href="#"
                className="btn-shop-primary my-2 text-white font-weight-bold shadow-sm"
              >
                Comprar
              </button>
              <button href="#" className="btn-shop-secondary my-2 shadow-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-cart-plus mx-2 mb-1"
                  viewBox="0 0 16 16"
                >
                  <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z" />
                  <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                </svg>
                Añadir al carrito
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;