function counterReducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1
      };
    case "DECREMENT":
      return {
        count: state.count - 1
      };
    default:
      return state;
  }
}

var store = Redux.createStore(counterReducer, {count: 0});
var valueEl = document.getElementById("value");

function render() {
  valueEl.innerHTML = store.getState().count.toString();
}

render();

store.subscribe(render);

document.getElementById("increment").addEventListener("click", function() {
  store.dispatch({ type: "INCREMENT" });
});

document.getElementById("decrement").addEventListener("click", function() {
  store.dispatch({ type: "DECREMENT" });
});