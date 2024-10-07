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

document.querySelector("#addForm").addEventListener('submit', e =>{
  e.preventDefault();
  const firstNameInput = e.currentTarget.firstName;
  dispatch({
    owner:{
      firstName: firstNameInput.value
    }
  })
})

subscribe(state => {
  if(state){
    document.querySelector('#header').textContent = `Le propriétaire du restaurant est ${state.owner.firstName}`
  }
})