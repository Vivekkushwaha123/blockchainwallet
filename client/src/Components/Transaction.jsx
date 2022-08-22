import React, { useContext } from "react";
import { TransactionContext } from "./../context/TransactionContext";
import dummyData from "../utils/DummyData";

const Transaction = () => {
  const { currentAccount , transactions } = useContext(TransactionContext);
  const shortenAddress = (address) =>
    `${address.slice(0, 5)}...${address.slice(address.length - 4)}`;
  const TransactionsCard = ({
    id,
    url,
    message,
    timestamp,
    addressFrom,
    amount,
    addressTo,
  }) => {
    return (
      <div>
        <div className="border rounded bg-dark p-3 m-2">
          <div className="">From:- {shortenAddress(addressFrom)}</div>
          <div className="">To:- {shortenAddress(addressTo)}</div>
          <div className="">Amount :{amount}</div>
          <div className="">Message :{message}</div>
          <div>Time :{timestamp}</div>
        </div>
      </div>
    );
  };
  return (
    <div style={{ color: "white" }}>
      <div className="d-flex flex-column justify-content-center align-items-center">
        {currentAccount ? (
          <h3>Latest Transaction</h3>
        ) : (
          <h3>Connect Account</h3>
        )}
      </div>
      <div className="d-flex flex-wrap justify-content-center align-items-center mt-10">
        {[...transactions].reverse().map((transaction, i) => (
          <TransactionsCard key={i} {...transaction} />
        ))}
      </div>
    </div>
  );
};

export default Transaction;
