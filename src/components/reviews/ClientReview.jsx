import "./client-review.css";
import clientData from "./client-data";

const ClientReview = () => {
  return (
    <div className="container cr-container">
      <h1>What our Clients have to say.</h1>
      <p>
        LQS Healthcare Services Ltd are a domiciliary care agency who provide
        extra assistance in your own home. If you’re looking for a dependable
        healthcare agency in Worthing, Lancing, Steyning, Bramber, Henfield,
        Shoreham, Southwick or elsewhere in Sussex you can count on LQS
        Healthcare Services Ltd.
      </p>
      <div className="data-grid">
        {clientData.map(({ comment, client }) => {
          return (
            <div className="card review-card" key={client}>
              <p>{comment}</p>
              <p className="name">{client}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ClientReview;
