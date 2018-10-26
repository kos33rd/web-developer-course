import React from 'react';
import BubbleChart from "@weknow/react-bubble-chart-d3";
import {wordsDistribution} from '../data/selectors'
import {connect} from "react-redux"

class Chart extends React.Component {
  state = {
    width: 1000
  }

  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }

  componentDidMount() {
    this.setState({width: this.ref.current.offsetWidth});
  }

  render() {
    console.log(this.props.data)
    return (
      <div ref={this.ref}>
        <BubbleChart
          graph={{
            zoom: 1.1,
            offsetX: -0.05,
            offsetY: -0.01,
          }}
          width={this.state.width}
          height={800}
          showLegend={true} // optional value, pass false to disable the legend.
          legendPercentage={20} // number that represent the % of with that legend going to use.
          legendFont={{family: 'Arial', size: 12, color: '#000', weight: 'bold'}}
          valueFont={{family: 'Arial', size: 12, color: '#fff', weight: 'bold'}}
          labelFont={{family: 'Arial', size: 16, color: '#fff', weight: 'bold'}}
          data={this.props.data}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  data: wordsDistribution(state)
})

export default connect(mapStateToProps)(Chart);
