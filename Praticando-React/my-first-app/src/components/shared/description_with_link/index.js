import React, { Fragment } from 'react';


const DescriptionWithLink = (props) => {
  return (
    <Fragment>
      <p>{props.description}</p>
      <p><a href={props.link}>click aqui veja mais</a></p>

    </Fragment>
  )
}

export default DescriptionWithLink