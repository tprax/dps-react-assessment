import React from 'react'
import { 
  Header,
  Segment,
  Divider,
} from 'semantic-ui-react'
import axios from 'axios'

class Breweries extends React.Component {
  state = { breweries: [] }

  componentDidMount = () => {
    axios.get(`http://www.brewerydb.com/api/all_breweries`)
      .then(res => {
        const breweries = res.data
        this.setState({breweries})
      })
  }

  render(){
    return(
      <Segment>
        <Header as='h1' textAlign='center'>Breweries</Header>
        <Divider/>
        <ul>
          {this.state.breweries.map( brewery => 
            <li>{brewery.name}</li>
          )}
        </ul>
        <Divider />
      </Segment>
    )
  }
}

 export default Breweries