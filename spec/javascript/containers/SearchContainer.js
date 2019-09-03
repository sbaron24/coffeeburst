import SearchContainer from '../../../app/javascript/react/containers/SearchContainer.js'
import SearchBar from '../../../app/javascript/react/components/SearchBar.js'
import SearchResultsContainer from '../../../app/javascript/react/components/SearchResultsContainer.js'

describe('<SearchContainer />', () => {

  let wrapper
  
  beforeEach(() => {
    spyOn(SearchContainer.prototype, 'fetchResults').and.callThrough()
    wrapper = shallow(<SearchContainer />)
  })

  it('should initialize with an empty array of coffees', () => {
    expect(wrapper.state()).toEqual({ coffees: [] })
  })

  it('should render <SearchBar /> and <SearchResultsContainer />', () => {
    expect(wrapper.find(SearchBar)).toBePresent()
    expect(wrapper.find(SearchResultsContainer)).toBePresent()
  })

  it('should pass props to <SearchBar />', () => {
    expect(wrapper.find(SearchBar).props()).toEqual({
      handleFetch: jasmine.any(Function)
    })
  })

  it('should pass props to <SearchResultsContainer />', () => {
    let coffee = {
      id: 1,
      name: 'Delicious Roast',
      roaster: 'Baron Bros',
      country: 'United States',
      roast: 'light',
      image_url: 'https://www.awesomecoffee.com/awesomecoffee'
    }

    wrapper.setState({ coffees: [coffee] })
    expect(wrapper.find(SearchResultsContainer).props()).toEqual({
      coffees: [coffee]
    })
  })

  describe('fetchResults', () => {
    it('should be called when handleFetch is invoked', () => {
      wrapper.find(SearchBar).props().handleFetch()
      expect(SearchContainer.prototype.fetchResults).toHaveBeenCalled()
    })
  })
})
