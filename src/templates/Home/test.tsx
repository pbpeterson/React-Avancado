import 'match-media-mock'

import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import BannersMock from 'components/BannerSlider/mock'
import GamesMock from 'components/GameCardSlider/mock'
import HighlightMock from 'components/Highlight/mock'

import Home from '.'

const props = {
  banners: BannersMock,
  newGames: [GamesMock[0]],
  mostPopularHighlight: HighlightMock,
  mostPopularGames: [GamesMock[0]],
  upcommingHighlight: HighlightMock,
  upcommingGames: [GamesMock[0]],
  upCommingMoreGames: [GamesMock[0]],
  freeGamesHighlight: HighlightMock,
  freeGames: [GamesMock[0]]
}

jest.mock('components/ShowCase', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Showcase"></div>
    }
  }
})

jest.mock('components/BannerSlider', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock BannerSlider"></div>
    }
  }
})

describe('<Home />', () => {
  it('should render menu and footer', () => {
    renderWithTheme(<Home {...props} />)

    expect(screen.getAllByTestId(/mock showcase/i)).toHaveLength(5)
    expect(screen.getByTestId(/mock bannerslider/i)).toBeInTheDocument()
  })
})
