import { useState } from "react";

export const Inventory = () => {
  const [inv, setInv] = useState({
    books: 10,
    notebooks: 13,
    pens: 40,
    inkpens: 30,
  });
  // Create add and remove functions here that changes the
  // state.
  const total = () => {
    let s = 0;
    for (let key in inv) {
      s += inv[key];
    }
    if (s < 0) return 0;
    return s;
  };
  const handleBook = (value) => {
    let change = inv.books + value;
    if (change <= 0) {
      change = 0;
    }
    inv.books = change;
    let inv1 = { ...inv };
    setInv(inv1);
  };
  const handleNotebook = (value) => {
    let change = inv.notebooks + value;
    if (change <= 0) {
      change = 0;
    }
    inv.notebooks = change;
    let inv1 = { ...inv };
    setInv(inv1);
  };
  const handlepen = (value) => {
    let change = inv.pens + value;
    if (change <= 0) {
      change = 0;
    }
    inv.pens = change;
    let inv1 = { ...inv };
    setInv(inv1);
  };
  const handleInkpen = (value) => {
    let change = inv.inkpens + value;
    if (change <= 0) {
      change = 0;
    }
    inv.inkpens = change;
    let inv1 = { ...inv };
    setInv(inv1);
  };
  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "3px",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        width: "400px",
      }}
    >
      <div className="items">
        <span>Books: </span>
        <button
          className="circlularButton"
          onClick={() => {
            handleBook(1);
          }}
        >
          +
        </button>
        <button
          className="circlularButton"
          onClick={() => {
            handleBook(-1);
          }}
        >
          -
        </button>
        <span>{inv.books}</span>
      </div>
      <div className="items">
        <span>Notebooks: </span>
        <button
          className="circlularButton"
          onClick={() => {
            handleNotebook(1);
          }}
        >
          +
        </button>
        <button
          className="circlularButton"
          onClick={() => {
            handleNotebook(-1);
          }}
        >
          -
        </button>
        <span>{inv.notebooks}</span>
      </div>
      <div className="items">
        <span>Pen: </span>
        <button
          className="circlularButton"
          onClick={() => {
            handlepen(1);
          }}
        >
          +
        </button>
        <button
          className="circlularButton"
          onClick={() => {
            handlepen(-1);
          }}
        >
          -
        </button>
        <span>{inv.pens}</span>
      </div>
      <div className="items">
        <span>Ink Pens: </span>
        <button
          className="circlularButton"
          onClick={() => {
            handleInkpen(1);
          }}
        >
          +
        </button>
        <button
          className="circlularButton"
          onClick={() => {
            handleInkpen(-1);
          }}
        >
          -
        </button>
        <span>{inv.inkpens}</span>
      </div>
      {/*calculate total and show it*/}
      total: {total()}
    </div>
  );
};
