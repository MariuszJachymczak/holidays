import React from 'react'
import './HolidayItem.css' 

function HolidayItem({holidayName, holidayStart, holidayEnd, type}) {
  return (
    <div className="holiday-item">
        <div className="holiday-item-top">
            <h5>
                {holidayStart}
            </h5>
            
            <h5>
                {holidayName}
            </h5>

            <h5>
                {holidayEnd}
            </h5>

        </div>

    </div>
  )
}

export default HolidayItem