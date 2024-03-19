import './index.css'

const EachThumbnail = props => {
  const {each, onClickThumbnail} = props
  const {id, imageUrl, thumbnailUrl, category} = each

  const clickOnThumbnail = () => {
    onClickThumbnail(id)
  }

  return (
    <li className="eachThumbnailListItem">
      <button
        type="button"
        className="thumbnailButton"
        onClick={clickOnThumbnail}
      >
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnailImage" />
      </button>
    </li>
  )
}

export default EachThumbnail
