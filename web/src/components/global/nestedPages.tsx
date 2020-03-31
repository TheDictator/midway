import React from "react"
import { PageLink } from 'src/components/link'

export interface NestedPagesProps {
  data: {
    page: Array<{
      _key: string
      description?: string
      title: string
      linkedPage: {
        content: {
          main: {
            slug: {
              current: string
            }
          }
        }
      }
    }>
  }
}

export const NestedPages = ({ data }: NestedPagesProps) => {
  const { page } = data
  return (
    <div className="container--xl outer mxa py2 p1 al p x">
      <div className='f fw jcb ais'>
        {page.map(({ title, _key, description, linkedPage }) => (
          <div key={_key} className='x col50 doc__block'>
            <PageLink to={linkedPage.content.main.slug.current}>
              <h3 className='m0 p0 cb no-underline'>{title} ➔ </h3>
              <p className='cb no-underline'>{description}</p>
            </PageLink>
          </div>
        ))}
      </div>
    </div>
  )
}