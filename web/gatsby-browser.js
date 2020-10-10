// // gatsby-browser

// import React, { useState, useEffect } from 'react'
// import Announcement from './src/components/Layout/Announcement'

// // ___________________________________________________________________

// const LoadAnimation = ({ children }) => {
//   const [loading, stillLoading] = useState(true)
//   useEffect(() => stillLoading(false))
//   return !loading && <div>{children}</div>
// }

// export const wrapRootElement = ({ element }) => (
//   <>
//     <Announcement to="/eon" />
//     {element}
//   </>
// )
