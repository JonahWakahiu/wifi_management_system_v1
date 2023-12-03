import { differentPackages } from "../../data";

const Package = ({ setAmount }) => {
  return (
    <>
      {differentPackages.map((item, i) => {
        const { name, amount, timeLimit, speedLimit } = item;
        return (
          <div
            className="packages_deals"
            key={i}
            onClick={() => setAmount(amount)}
          >
            <h3>{name}</h3>
            <h4>{timeLimit}</h4>
            <h5>{speedLimit}</h5>
          </div>
        );
      })}
    </>
  );
};
export default Package;
