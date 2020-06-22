import React, { useState, useEffect } from "react";
import API from "../utils/API";

const Meals = (props) => {
  return (
    <div>
      <div className="container mt-5 clearfix">
        <div className="row">
          <div className="col-xs-12 col-md-6 text-left">
            <NewReceiptModal buttonLabel="Add Receipt" className="Add" />
          </div>
          <div className="col-xs-12 col-md-6 text-right">
            <div className="dropdown float-right">
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <a className="dropdown-item" href="#">
                  Date
                </a>
                <a className="dropdown-item" href="#">
                  Amount
                </a>
                <a className="dropdown-item" href="#">
                  Progress
                </a>
              </div>
            </div>
            <div className="dropdown float-right mr-3">
              <DropDown title="Sort" sort={setSortState}></DropDown>
            </div>
          </div>

          <div className="container mt-5">
            <div className="row">
              <div className="d-none d-md-block col-md-6 col-lg-4 ">
                <PlusReceiptModal></PlusReceiptModal>
              </div>
              {receiptState.receipts
                ? receiptState.receipts.map((receipt) => (
                    <ReceiptPreview
                      key={receipt.id}
                      value={receipt}
                      onClick={() =>
                        props.history.push("/receipt/" + receipt.id)
                      }
                    ></ReceiptPreview>
                  ))
                : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Meals;
