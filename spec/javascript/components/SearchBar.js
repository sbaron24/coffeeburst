import SearchBar from '../../../app/javascript/react/components/SearchBar.js'

describe('<SearchBar />', () => {
  let wrapper, onChangeSpy

  beforeEach(() => {
    onChangeSpy = jasmine.createSpy('onChange spy')
    wrapper = shallow(<SearchBar handleFetch={onChangeSpy} />)
  })

  it('should initialize with an empty searchString', () => {
    wrapper = shallow(<SearchBar />)
    expect(wrapper).toHaveState('searchString', '')
  })

  describe('Typing into search bar input field', () => {
    beforeEach(() => {
      const event = {target: {name: "searchString", value: "light"}};
      wrapper.find('input').simulate('change', event)
    })

    it('should change searchString in state', () => {
      expect(wrapper).toHaveState('searchString', 'light')
    })

    it('should fire handleSubmit after delay', (done) => {
      setTimeout(() => {
        expect(onChangeSpy).toHaveBeenCalled()
        done()
      }, 250)
    })
  })
})
