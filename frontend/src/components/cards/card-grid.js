import './card.css';
import Button from 'react-bootstrap/Button';

function GridExample() {
  return (
    //vedant
    <div className='card-container'>
  <div className="container_focus1">
    <div className="card_focus">
      <div className="card_focus-header">
        <img src="/assets/buy.webp" alt="Card image cap" />
      </div>
      <div className="card_focus-body">
        <h4 className="card-title">Buy A Home</h4>
        <hr className="hr-light" />
        <p>Buy Your New Home with us in lowest<br />price on the market</p>
        <div className="buttonAlign"><Button href="/buy">Buy</Button>{''}</div>
      </div>
    </div>
    <div className="card_focus">
      <div className="card_focus-header">
        <img src="/assets/rent.htm" alt="Card image cap"/>
      </div>
      <div className="card_focus-body">
        <h4 className="card-title">Rent A Home</h4>
        <hr className="hr-light" />
        <p>
          Rent a home with us and we will find<br />reliable buyers for you
        </p>
        <div className="buttonAlign"><Button href="/rent">Rent</Button>{''}</div>
      </div>
    </div>
    {/* <div className="card_focus">
      <div className="card_focus-header">
        <img src="/assets/sell.jpg" alt="Card image cap"/>
      </div>
      <div className="card_focus-body">
        <h4 className="card-title">Sell A Home</h4>
        <hr className="hr-light" />
        <p>
          Sell your House through us and we will make sure you get the best
          Price.
        </p>
        <div className="buttonAlign"><button>More</button></div>
        <br /><br />
      </div>
    </div> */}
  </div>
  </div>
  );
}

export default GridExample;