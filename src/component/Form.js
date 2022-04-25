import React from 'react'

function Form(props) {
  return (
    <form onSubmit={props.getWether}>
        <input type="text" name='city' placeholder='city' />
        <input type="text" name='country' placeholder='country' />
        <button>Get weather</button>
    </form>
  )
}

export default Form