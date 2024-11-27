import React from 'react'

function Menu() {
  return (
    <div>
      <Menu
                    onClick={onClick}
                    style={{
                        width: 256,
                    }}
                    defaultSelectedKeys={['1']}
                    mode="inline"
                    items={items}
                />
    </div>
  )
}

export default Menu
