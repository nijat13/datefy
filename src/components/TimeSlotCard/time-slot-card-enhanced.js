import { useState } from 'react';
import PropTypes from 'prop-types';
import TimeSlotCardComponent from './time-slot-card';
import Swal from 'sweetalert2';

const TimeSlotCardEnhanced = ({
    timeSlotObj,
    isReserved,
    onReservationClick,
    onCancelClick
}) => {
    const [isActive, setIsActive] = useState(isReserved);

    const onReserveTrigger = () => {
        setIsActive(true);

        if (onReservationClick) {
            onReservationClick(timeSlotObj);
        }
    }

    const onCancelTrigger = () => {
        Swal.fire({
          title: 'Are you sure?',
          text: 'By confirming this action you will cancel the reservation!',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Yes, cancel it!',
          cancelButtonText: 'No, keep it'
        }).then((result) => {
            if (!result.value) return;

            setIsActive(false);

            if (onCancelClick) {
                onCancelClick(timeSlotObj.timeSlot);
            }
        })
    }

    return (
        <TimeSlotCardComponent
            timeSlot={timeSlotObj ? timeSlotObj.timeSlot : ''}
            isReserved={isActive}
            onReservationClick={onReserveTrigger}
            onCancelClick={onCancelTrigger}
        />
    )
}

TimeSlotCardEnhanced.propTypes = {
    timeSlotObj: PropTypes.object.isRequired,
    isReserved: PropTypes.bool,
    onReservationClick: PropTypes.func,
    onCancelClick: PropTypes.func
};

export default TimeSlotCardEnhanced;
