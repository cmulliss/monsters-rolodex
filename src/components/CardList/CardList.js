import React from 'react'
import './CardList.css'
import Card from '../Card/Card'

export const CardList = (props) => (
  <div className='card-list'>
    {props.monsters.map((monster) => (
      <Card key={monster.id} monster={monster} />
    ))}
  </div>
)
// always have children on props object
// this component, not the App, is responsible for creating the list
// we are passing monster into the card component, and the card component gets it from the props and displays the name.
