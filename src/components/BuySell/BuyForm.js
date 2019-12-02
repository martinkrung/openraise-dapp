import React from 'react'
import styled from 'styled-components'
import Form from '../common/Form'

const BuyForm = ({count, setCount}) => {
  return (
    <Form buttontext="Buy DXD" infotext="Pay Amount" count={count} setCount={setCount} />
  )
}

export default BuyForm
