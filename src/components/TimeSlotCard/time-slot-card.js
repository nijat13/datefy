import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import './index.scss';

const TimeSlotCardComponent = ({
    timeSlot,
    isReserved,
    onReservationClick,
    onCancelClick
}) => (
    <Card
        className={`slot-card ${isReserved ? 'reserved' : ''}`}
        onClick={() => !isReserved ? onReservationClick() : null}
    >
        <Card.Body>
            <Card.Text>
                {timeSlot}
                {isReserved && <FontAwesomeIcon
                    icon={faTrash}
                    onClick={onCancelClick}
                />}
            </Card.Text>
        </Card.Body>
    </Card>
);

TimeSlotCardComponent.propTypes = {
    timeSlot: PropTypes.string.isRequired,
    isReserved: PropTypes.bool,
    onReservationClick: PropTypes.func.isRequired,
    onCancelClick: PropTypes.func.isRequired
};

export default TimeSlotCardComponent;