import { Flex, LocalizedLink } from '@vtex/store-ui'
import React from 'react'
import type { FC } from 'react'

const CustomMenu: FC<{ variant?: string }> = ({ variant }) => (
  <Flex as="nav" variant={variant}>
    <LocalizedLink to="/candy" activeClassName="active">
      Candy
    </LocalizedLink>
    <LocalizedLink to="/sunglasses" activeClassName="active">
      Sunglasses
    </LocalizedLink>
    <LocalizedLink to="/about" activeClassName="active">
      About
    </LocalizedLink>
  </Flex>
)

export default CustomMenu
