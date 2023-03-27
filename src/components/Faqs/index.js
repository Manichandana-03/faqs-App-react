// Write your code here.

import './index.css'
import FaqItem from '../FaqItem'

const Faqs = props => {
  const {faqsList} = props

  return (
    <div className="app-container">
      <div className="faqs-container">
        <h1 className="heading">FAQs</h1>
        <ul className="faqs-list">
          {faqsList.map(each => (
            <FaqItem key={each.id} faqsDetails={each} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Faqs
