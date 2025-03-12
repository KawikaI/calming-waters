const PricingInfo = () => {
    return (
      <div className="pricing-box">
        {/* Add title inside the box without changing structure */}
        <h2 className="pricing-title">Pricing & Insurance</h2> 
  
        <div className="pricing-content">
          <div className="insurance-section">
            <h3 className="section-title">Insurance Accepted</h3>
            <ul>
            <li>✔ Aetna</li>
              <li>✔ Allegiance</li>
              <li>✔ Blue Cross</li>
              <li>✔ Blue Shield</li>
              <li>✔ Blue Cross and Blue Shield</li>
              <li>✔ Carelon Behavioral Health</li>
              <li>✔ Children's Health Insurance Program (CHIP)</li>
              <li>✔ First Choice Health | FCH</li>
              <li>✔ Government Employees Health</li>
              <li>✔ Association (GEHA)</li>
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
    );
  };
  
  export default PricingInfo;