let state = {}

const subscribers = [];

const subscribe = (funct) => {
  return (subscribers.push(funct))
}

const dispatch = (newStateValue) => {
  state = newStateValue;
  for(const funct of subscribers){
    funct(state)
  }
}

subscribe((state) => {
  console.log("state updated - A", state);
})
subscribe((state) => {
  console.log("state updated - B", state);
})

dispatch({
  value:"value A"
})
dispatch({
  value:"value B"
})