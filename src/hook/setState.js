import React from "../react";

const states = [];
let cursor = 0;

function useState(initialState) {
  const currentCursor = cursor;
  states[currentCursor] = states[currentCursor] || initialState;

  function setState(newState) {
    state[currentCursor] = newState;
    // React.__updater(this);
    cursor = 0;
  }

  ++cursor;

  return [state, setState];
}
