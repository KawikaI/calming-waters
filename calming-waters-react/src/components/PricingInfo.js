const PricingInfo = () => {
  return (
    <>
      {/* Desktop Version - Wrapped in Old Pricing Box */}
      <div className="old-pricing-box">
        <div className="pricing-box">
          <h2 className="pricing-title">Pricing & Insurance</h2> 
          <div className="pricing-content">
            <div className="insurance-section">
              <h3 className="section-title">Insurance Accepted</h3>
              <ul>
                <li>✔ Aetna</li>
                <li>✔ Allegiance</li>
                <li>✔ Blue Cross</li>
                <li>✔ Blue Shield</li>
                <li>✔ Carelon Behavioral Health</li>
                <li>✔ CHIP</li>
                <li>✔ First Choice Health</li>
                <li>✔ GEHA</li>
                <li>✔ Medicaid</li>
                <li>✔ Medicare</li>
                <li>✔ Mountain Health CO-OP</li>
                <li>✔ Optum</li>
                <li>✔ PacificSource</li>
                <li>✔ TRICARE</li>
                <li>✔ TRIwest</li>
              </ul>
            </div>

            <div className="divider"></div>

            <div className="pricing-section">
              <h3 className="section-title">Session Fees</h3>
              <p>Individual Sessions: $175</p>
              <p>Couple Sessions: $225</p>
              <p>Family Sessions: $225+</p>

              <h3 className="section-title">Accepted Payment Methods</h3>
              <ul>
                <li>✔ Cash</li>
                <li>✔ Check</li>
                <li>✔ Visa</li>
                <li>✔ Mastercard</li>
                <li>✔ Discover</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Version */}
      <div className="pricing-container">
        <div className="insurance-box">
          <h3>Insurance Accepted</h3>
          <ul className="insurance-list">
            <li>✔ Aetna</li>
            <li>✔ Allegiance</li>
            <li>✔ Blue Cross</li>
            <li>✔ Blue Shield</li>
            <li>✔ Carelon Behavioral Health</li>
            <li>✔ CHIP</li>
            <li>✔ First Choice Health</li>
            <li>✔ GEHA</li>
            <li>✔ Medicaid</li>
            <li>✔ Medicare</li>
            <li>✔ Mountain Health CO-OP</li>
            <li>✔ Optum</li>
            <li>✔ PacificSource</li>
            <li>✔ TRICARE</li>
            <li>✔ TRIwest</li>
          </ul>
        </div>

        <div className="mobile-pricing-box">
          <h3>Session Fees</h3>
          <p>Individual Sessions: $175</p>
          <p>Couple Sessions: $225</p>
          <p>Family Sessions: $225+</p>

          <h3>Accepted Payment Methods</h3>
          <ul className="payment-methods">
            <li>✔ Cash</li>
            <li>✔ Check</li>
            <li>✔ Visa</li>
            <li>✔ Mastercard</li>
            <li>✔ Discover</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default PricingInfo;