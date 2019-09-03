import SearchResultsContainer from '../../../app/javascript/react/components/SearchResultsContainer.js'
import CoffeeTile from '../../../app/javascript/react/components/CoffeeTile.js'

describe('<SearchResultsContainer />', () => {

  let wrapper

  beforeEach(() => {
    let coffees = [
      {
        id: 1,
        name: 'Delicious Roast',
        roaster: 'Baron Bros',
        country: 'United States',
        roast: 'light',
        image_url: 'https://www.awesomecoffee.com/awesomecoffee'
      },
      {
        id: 2,
        name: 'Delicious Roast 2',
        roaster: 'Baron Bros',
        country: 'USA',
        roast: 'medium',
        image_url: 'https://www.superawesomecoffee.com/superawesomecoffee'
      }
    ]

    wrapper = shallow(<SearchResultsContainer coffees={coffees}/>)
  })

  it('should render 2 CoffeeTiles on the page', () => {
    expect((wrapper).find('CoffeeTile').length).toEqual(2);
  })

  it('should render CoffeeTiles with different names on page', () => {
    expect(wrapper.find('CoffeeTile').nodes[0].props.name).toEqual('Delicious Roast')
    expect(wrapper.find('CoffeeTile').nodes[1].props.name).toEqual('Delicious Roast 2')
  })
})
