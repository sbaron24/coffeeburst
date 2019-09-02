import CoffeeTile from '../../../app/javascript/react/components/CoffeeTile.js'

describe('<CoffeeTile />', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<CoffeeTile
      id={1}
      name={'Delicious Roast'}
      roaster={'Baron Bros'}
      country={'United States'}
      roast={'light'}
    />)
  })

  describe('should display different main details of a coffee', () => {
      it('should display coffee name', () => {
        expect(wrapper.text().includes('Delicious Roast')).toBe(true)
      })

      it('should display coffee roaster', () => {
        expect(wrapper.text().includes('Baron Bros')).toBe(true)
      })

      it('should display coffee country', () => {
        expect(wrapper.text().includes('United States')).toBe(true)
      })

      it('should display coffee roast', () => {
        expect(wrapper.text().includes('light')).toBe(true)
      })
  })

  describe('should be a link to the coffee show page', () => {
    it('should use the id from props as href link', () => {
      expect(wrapper.find('a').props().href).toBe('coffees/1')
    })
  })
})
