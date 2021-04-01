import PropTypes from 'prop-types';
import TimeSlotCardEnhanced from '../../TimeSlotCard';
import './index.scss';

const TimeSlotsWrapper = ({
    titleKey,
    timeSlotsByDay,
    onReservationClick,
    onCancelClick
}) => (
    <div className="time-slot-wrapper">
        <h6>{titleKey}</h6>
        {timeSlotsByDay[titleKey].map((timeSlotObj, idx) => (
            <TimeSlotCardEnhanced
                key={idx}
                timeSlotObj={timeSlotObj}
                onReservationClick={onReservationClick}
                onCancelClick={onCancelClick}
            />
        ))}
    </div>
);

TimeSlotsWrapper.propTypes = {
    titleKey: PropTypes.string.isRequired,
    timeSlotsByDay: PropTypes.object,
    onReservationClick: PropTypes.func.isRequired,
    onCancelClick: PropTypes.func.isRequired
};

export default TimeSlotsWrapper;