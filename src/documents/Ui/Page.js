import React from 'react'

import MyCoolHero from './MyCoolHero'

export const Page = ({ doc, children }) => (
    <div>
    {doc.hero && <MyCoolHero img={doc.hero} />}
    {children}
  </div>
)