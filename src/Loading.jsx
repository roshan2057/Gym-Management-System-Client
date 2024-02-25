import React from 'react'

const Loading = () => {
  return (
    <>
    
<div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-dark text-light p-3" style={{ zIndex: 1000, fontSize: '24px' }}>
<button class="btn btn-primary" type="button" disabled>
  <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
  Loading...
</button>
</div>
    </>
  )
}

export default Loading