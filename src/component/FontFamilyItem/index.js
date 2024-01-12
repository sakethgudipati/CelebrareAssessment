import {OptionItem} from './styledComponents'

const FontFamilyItem = props => {
  const {fontInfo} = props
  const {name} = fontInfo

  return (
    <OptionItem value={name} fontFamily={name}>
      {name}
    </OptionItem>
  )
}

export default FontFamilyItem
