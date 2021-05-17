export const ipad = (state = 10, action) => {
  switch (action.type) {
    case 'ADD_TO_CART1':
      return state - 1;
    default:
      return state;
  }
}

export const ipad2cart = (state = 0, action) => {
  switch (action.type) {
    case 'ADD_TO_CART1':
      return state + 1;
    default:
      return state;
  }
}

export const croptop = (state = 13, action) => {
  switch (action.type) {
    case 'ADD_TO_CART2':
      return state - 1;
    default:
      return state;
  }
}

export const croptop2cart = (state = 0, action) => {
  switch (action.type) {
    case 'ADD_TO_CART2':
      return state + 1;
    default:
      return state;
  }
}

export const Kettles = (state = 5, action) => {
  switch (action.type) {
    case 'ADD_TO_CART3':
      return state - 1;
    default:
      return state;
  }
}

export const Kettles2cart = (state = 0, action) => {
  switch (action.type) {
    case 'ADD_TO_CART3':
      return state + 1;
    default:
      return state;
  }
}

export const jeans = (state = 20, action) => {
  switch (action.type) {
    case 'ADD_TO_CART5':
      return state - 1;
    default:
      return state;
  }
}

export const jeans2cart = (state = 0, action) => {
  switch (action.type) {
    case 'ADD_TO_CART5':
      return state + 1;
    default:
      return state;
  }
}
export const trousers = (state = 40, action) => {
  switch (action.type) {
    case 'ADD_TO_CART4':
      return state - 1;
    default:
      return state;
  }
}

export const trousers2cart = (state = 0, action) => {
  switch (action.type) {
    case 'ADD_TO_CART4':
      return state + 1;
    default:
      return state;
  }
}