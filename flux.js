
let state = {
  value: null,
  list: []
};
const subscribers = [];

const dispatch = (newStateValue) => {
  state = newStateValue;
  for (const fct of subscribers) {
      fct(state)
  }
}

const subscribe = (subscriberFct) => {
  subscribers.push(subscriberFct);
}

subscribe((state) => {
  console.log(state)
  if (state.owner) {
    console.log('Le propriétaire est ajouté', state.owner)
    document.querySelector('#header').textContent = `Le propriétaire du restaurant est ${state.owner.firstName}`
  }
  if (state.list) {
    document.querySelector('#command').innerHTML = ``;
    for (let item of state.list) {
      const itemElement = document.createElement('div')
      itemElement.innerHTML = `
      <div>
      ${item.title} <span>${item.price}</span>
      </div>
      `
      document.querySelector('#command').appendChild(itemElement)
    }
  }
})

dispatch({
  company: {
      name: 'Burger du Pré'
  },
  list: []
})


document.querySelector('#addForm').addEventListener("submit", (evt) => {
  evt.preventDefault()
  const firstNameInput = evt.currentTarget.firstName
  dispatch({
      company: {
          name: 'Burger du Pré'
      },
      owner: {
          firstName: firstNameInput.value,
      },
      list: []
  })
})

document.querySelectorAll('.orderButton').forEach((element) => {
  element.addEventListener('click', (event) => {
      console.info(state)
      const productId = event.target.dataset['id']
      const productList = state.list
      productList.push(PRODUCT_LIST[productId])
      dispatch({
          company: {
              name: 'Burger du Pré'
          },
          list: productList,
      })
  })
})

const DoubleCantal = {
  title: 'Double Cantal',
  price: 15.99,
}


const SuperCremeux = {
  title: 'Super Crémeux',
  price: 14.99,
}


const PouletCroquant = {
  title: 'Poulet Croquant',
  price: 17.99,
}

const PRODUCT_LIST = {
  PouletCroquant,
  SuperCremeux,
  DoubleCantal,
}
