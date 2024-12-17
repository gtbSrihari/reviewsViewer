// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewCarousel extends Component {
  state = {currentIndex: 0}

  moveLeft = () => {
    const {currentIndex} = this.state
    const newIndex = currentIndex === 0 ? 0 : currentIndex - 1
    this.setState({currentIndex: newIndex})
  }

  moveRight = () => {
    const {currentIndex} = this.state
    const {reviewsList} = this.props
    const newIndex =
      currentIndex < reviewsList.length - 1 ? currentIndex + 1 : currentIndex
    this.setState({currentIndex: newIndex})
    console.log(currentIndex)
  }

  render() {
    const {reviewsList} = this.props
    const {currentIndex} = this.state

    return (
      <div className="app-container">
        <h1 className="heading">Reviews</h1>
        <div className="main-container">
          <button type="button" data-testid="leftArrow" className="leftArrow" onClick={this.moveLeft}>
            <img
              className="arrow-img"
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          <div className="info-container">
            <img
              className="reviewerImg"
              src={reviewsList[currentIndex].imgUrl}
              alt={reviewsList[currentIndex].username}
            />
            <p className="reviewer-name">
              {reviewsList[currentIndex].username}
            </p>
            <p className="reviewer-company">
              {reviewsList[currentIndex].companyName}
            </p>
            <p className="review">{reviewsList[currentIndex].description}</p>
          </div>
          <button type="button" data-testid="rightArrow" className="rightArrow" onClick={this.moveRight}>
            <img
              className="arrow-img"
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewCarousel
