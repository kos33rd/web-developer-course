import React from "react"
import HeatMap from "react-heatmap-grid";
import {connect} from "react-redux";

import {hoursDistribution} from '../data/selectors'

const xLabels = new Array(24).fill(0).map((_, i) => `${i}`);
const yLabels = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];


const Calendar = ({hoursDistribution}) => {
    return (
        <HeatMap
            xLabels={xLabels}
            yLabels={yLabels}
            data={hoursDistribution}
        />
    );
};

const mapStateToProps = (state) => ({
    hoursDistribution: hoursDistribution(state)
});

export default connect(mapStateToProps)(Calendar);
