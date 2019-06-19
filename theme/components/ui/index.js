import { Blockquote } from './Blockquote'
import { InlineCode } from './InlineCode'
import { Link } from './Link'
import { Loading } from './Loading'
import { NotFound } from './NotFound'
import { OrderedList } from './OrderedList'
import { Page } from './Page'
import { Paragraph } from './Paragraph'
import { Pre } from './Pre'
import { Props } from './Props'
import { Table } from './Table'
import { UnorderedList } from './UnorderedList'

export const components = {
  a: Link,
  blockquote: Blockquote,
  inlineCode: InlineCode,
  loading: Loading,
  notFound: NotFound,
  ol: OrderedList,
  p: Paragraph,
  page: Page,
  pre: Pre,
  props: Props,
  table: Table,
  ul: UnorderedList,
}
