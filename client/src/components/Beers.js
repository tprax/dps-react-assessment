import React from 'react'
import { 
  Header,
  Segment,
  Divider,
} from 'semantic-ui-react'
import axios from 'axios'

class Beers extends React.Component {
  state = { beers: {} }

  componentDidMount = () => {
    axios.get(`http://www.brewerydb.com/api/all_beers`)
      .then(res => {
        const beers = res.data
        this.setState({beers})
      })
  }

  render(){
    const beers =this.state
    return(
      <Segment>
        <Header as='h1' textAlign='center'>Beers</Header>
        <Divider/>
        <ul>
          {this.state.beers.map( beer => 
            <li>{beer.name}</li>
          )}
        </ul>
        <Divider />
      </Segment>
    )
  }
}

 export default Beers