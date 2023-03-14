const CreditCard = ({formData, side}) =>
{
  return (
    <div className="credit-card">
          {side === 'front' && <div className="visa-front-side card">
              <div className="card-details-container">
                  <div className="detail-container">
                      <p>Expiry:</p>
                      <h2>{formData.date}</h2>
                  </div>

                  <div className="detail-container">
                      <p>Cardholder:</p>
                      <h2>{formData.name}</h2>
                  </div>

              </div>
              <div className="number-display">
                  <h3>{formData.number}</h3>
              </div>
          </div>}

          {side === 'back' && <div className="visa-back-side card">
              <div id="cvv-display">
                  <p>{formData.cvv}</p>
              </div>
          </div>}
    </div>
  );
};

export default CreditCard;
