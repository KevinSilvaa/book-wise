// Styling Imports
import { SearchBarContainer } from './styles'

// Strategic Imports

// Icons Imports
import { MagnifyingGlass } from 'phosphor-react'

export function SearchBar({ ...rest }) {
  return (
    <SearchBarContainer>
      <input type="text" {...rest}></input>

      <MagnifyingGlass size={20} />
    </SearchBarContainer>
  )
}
