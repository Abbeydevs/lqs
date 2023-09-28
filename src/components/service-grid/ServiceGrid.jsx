import Services from "../services/Services";
import "./service-grid.css";

const ServiceGrid = () => {
  return (
    <div className="container">
      <div className="card sg-card">
        <h1>All Service we provide</h1>
        <p>
          At LQS HealthCare Services Ltd, we are committed to offering a
          comprehensive range of care services to meet the unique needs of our
          residents. Our dedicated team of caregivers and healthcare
          professionals work tirelessly to ensure the well-being, comfort, and
          happiness of every individual entrusted to our care. Here are the care
          services we provide:
        </p>
      </div>
      <Services title="" links="" />
    </div>
  );
};

export default ServiceGrid;
