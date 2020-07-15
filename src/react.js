import { h } from "snabbdom";

class Component {
  constructor() {}

  componentWillMount() {}
  componentDidMount() {}

  setState(paritalState) {
    this.state = {
      ...this.state,
      ...paritalState,
    };
    React.__updater(this);
  }

  render() {}
}

Component.prototype.isReactClassComponnet = true;

const createElement = (type, props = {}, ...children) => {
  console.log(type, props, children);

  if (type.prototype && type.prototype.isReactClassComponnet) {
    const componentInstance = new type(props);

    componentInstance.__vNode = componentInstance.render();
    componentInstance.__vNode.data.hook = {
      create: () => {
        componentInstance.componentWillMount();
      },
      insert: () => {
        componentInstance.componentDidMount();
      },
    };

    return componentInstance.__vNode;
  }

  if (typeof type === "function") {
    return type(props);
  }

  props = props || {};
  let dataProps = {};
  let eventProps = {};

  for (let propKey in props) {
    if (propKey.startsWith("on")) {
      const event = propKey.substring(2).toLowerCase();
      eventProps[event] = props[propKey];
    } else {
      dataProps[propKey] = props[propKey];
    }
  }

  return h(type, { props: dataProps, on: eventProps }, children);
};

const React = {
  createElement,
  Component,
};

export default React;
