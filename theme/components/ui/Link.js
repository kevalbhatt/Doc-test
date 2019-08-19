import * as React from 'react'
import { useMemo, SFC } from 'react'
import { useConfig, useDocs } from '../../../docz-lib/docz/dist'
import styled from 'styled-components'

import { get } from '../../utils/theme'

export const LinkStyled = styled.a`
  &,
  &:visited,
  &:active {
    text-decoration: none;
    color: ${get('colors.link')};
  }

  &:hover {
    color: ${get('colors.link')};
  }

  ${get('styles.link')};
`

const getSeparator = (separator, href) => {
  if (typeof window === 'undefined') return null
  return [
    location.pathname
      .split(separator)
      .slice(0, -1)
      .join(separator)
      .slice(1),
    (href || '').replace(/^(?:\.\/)+/gi, ''),
  ].join('/')
}

export const Link = ({ href, ...props }) => {
  const { separator, linkComponent: Link } = useConfig()
  const docs = useDocs()
  const toCheck = useMemo(() => getSeparator(separator, href), [
    separator,
    href,
  ])

  const matched = docs && docs.find(doc => doc.filepath === toCheck)
  const nHref = matched ? matched.route : href
  const isInternal = nHref && nHref.startsWith('/')

  return isInternal ? (
    <LinkStyled as={Link} {...props} to={nHref} />
  ) : (
    <LinkStyled {...props} href={nHref} />
  )
}
