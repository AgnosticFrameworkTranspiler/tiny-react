import * as snabbdom from "snabbdom";
import propsModule from "snabbdom/modules/props";
import React from "./react";
import eventlistenersModule from "snabbdom/modules/eventlisteners";

const reconcile = snabbdom.init([propsModule, eventlistenersModule]);

let rootVNode;

const render = (el, rootDomElement) => {
  if (rootVNode == null) {
    rootVNode = rootDomElement;
  }
  rootVNode = reconcile(rootDomElement, el);
};

React.__updater = (componentInstance) => {
  const oldVNode = componentInstance.__vNode;
  const newVNode = componentInstance.render();

  componentInstance.__vNode = reconcile(oldVNode, newVNode);
};

React.render = render;

const ReactDOM = {
  render,
};

export default ReactDOM;
