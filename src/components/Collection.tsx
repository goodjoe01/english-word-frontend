import React from 'react'
import '../stylesheets/Collection.css'
import { ICollection } from '../types'
 
/* React.FC<ICollection> = ({id, name, description, createAt, updatedAt}) */

interface Props {
  collection: ICollection
}

export const Collection = ({collection}: Props): JSX.Element => {
  return (
    <div className='column is-3 pt-0'>
      <div className='collection card'>
        <div className="card-content p-3">
          <div className="content">
            <p className='is-size-7 mb-1 has-text-weight-medium'>{collection.name}</p>
            <p className='is-size-7'>{collection.description}</p>
          </div> 
        </div>
      </div>
    </div>
  )
}

export default Collection
