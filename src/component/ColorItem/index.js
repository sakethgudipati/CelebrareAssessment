import {ColorOption} from './styledComponents'

const ColorItem = props => {
  const {colorInfo} = props
  const {color} = colorInfo

  return (
    <ColorOption value={color} colorCode={color}>
      {color}
    </ColorOption>
  )
}

export default ColorItem
