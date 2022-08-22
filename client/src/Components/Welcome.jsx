import React, { useContext } from "react";
import { Button } from "reactstrap";
import { TransactionContext } from "../context/TransactionContext";
import Loader from "react-js-loader";

const Input = ({ placeholder, type, value, name, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-75 rounded-sm p-2 bg-transparent text-white border-none text-sm white-glassmorphism"
  />
);
const Welcome = () => {
  const {
    connectWallet,
    currentAccount,
    formData,
    handleChange,
    sendTransaction,
    isLoading,
  } = useContext(TransactionContext);

  const handleSubmit = (e) => {
    const { addressTo, amount, keyword, message } = formData;
    e.preventDefault();
    if (!addressTo || !amount || !keyword || !message) return;
    sendTransaction();
  };

  return (
    <div className="row" style={{ color: "white" }}>
      <div
        className="col-lg-6 col-md-12 d-flex flex-column justify-content-center align-items-center"
        style={{ paddingLeft: "50px" }}
      >
        <div className="">
          <h1 className="my-3">
            Send Crypto <br />
            across World
          </h1>

          <p className="my-3">
            Explore the crypto world. Buy and Sell <br /> cryptocurrencies
            easily on Krypto
          </p>

          {currentAccount ? (
            <div
              className="border rounded blue-glassmorphism
            p-2"
            >
              Wallet Address :- <br />
              {currentAccount}
            </div>
          ) : (
            <Button color="primary" className="my-3" onClick={connectWallet}>
              Connect Wallet
            </Button>
          )}

          <div className="my-3">
            <div className="row">
              <div className="border p-3 col-4 border-white">Reliability</div>
              <div className="border p-3 col-4 border-white">Security</div>
              <div className="border p-3 col-4 border-white">Ethereum</div>
            </div>
            <div className="row">
              <div className="border p-3 col-4 border-white">Web 3.0</div>
              <div className="border p-3 col-4 border-white">Low Fees</div>
              <div className="border p-3 col-4 border-white">BlockChain</div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-6 col-sm-12 p-5">
        <div className="blue-glassmorphism py-4  d-flex flex-column justify-content-center align-items-center ">
          <Input
            placeholder="Address To"
            name="addressTo"
            type="text"
            handleChange={handleChange}
          />
          <Input
            placeholder="Amount (ETH)"
            name="amount"
            type="number"
            handleChange={handleChange}
          />
          <Input
            placeholder="Keyword (Gif)"
            name="keyword"
            type="text"
            handleChange={handleChange}
          />
          <Input
            placeholder="Enter Message"
            name="message"
            type="text"
            handleChange={handleChange}
          />
          {isLoading ? (
            <Loader
              type="spinner-default"

            />
          ) : (
            <Button className="w-75" outline onClick={handleSubmit}>
              Send Now
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Welcome;
