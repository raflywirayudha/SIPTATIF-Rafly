import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter className="px-4">
      <div className="ms-auto">
        <span className="ms-1">&copy; 2024 Muhammad Rafly Wirayudha</span>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
