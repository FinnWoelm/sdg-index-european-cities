import React, { Component } from 'react'
import { Link } from "react-router-dom";
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

import Divider from '../components/Divider'
import CurrentAssessmentSection from '../components/CurrentAssessmentSection'
import IndicatorPerformanceSection from '../components/IndicatorPerformanceSection'

class CityPage extends Component {
  render() {
    const citySlug = this.props.match.params.city
    const { focus, cities, setMapFocus, resetMapFocus } = this.props

    const city = cities.find(city => city.slug() === citySlug.toString())

    const { name, region } = city || {}

    return (
      <Paper style={{padding: 24, position: 'relative'}}>
        <Box marginBottom={2}>
          <Link to='/' style={{float: 'right'}}>
            <Typography variant='body2'>
              Back to cities list
            </Typography>
          </Link>
          <Typography variant="h3">
            {name}
          </Typography>
          <Typography variant="h5" gutterBottom style={{color: '#6c757d'}}>
            {region}
          </Typography>
        </Box>


        <Divider />

        <CurrentAssessmentSection
          {...{city, setMapFocus, resetMapFocus}}
          />

        <IndicatorPerformanceSection
          display={focus ? true : false}
          />

      </Paper>
    );
  }
}

export default CityPage