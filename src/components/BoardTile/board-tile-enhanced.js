import { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import BoardTileComponent from './board-tile';
import TimeSlotsWrapper from './TimeSlotsWrapper';
import { filter, groupBy, property, sortBy } from 'lodash-es';
import { convertISOToFields, generateTimeSlotFromFields } from '../../common/utils';

const BoardTileEnhanced = ({ company }) => {
    const [selectedTimeSlots, setSelectedTimeSlots] = useState([]);
    const [timeSlotsByDay, setTimeSlotsByDay] = useState([]);

    
    useMemo(() => {
        const timeSlots = company.time_slots.map(timeSlot => {
            const startTime = convertISOToFields(timeSlot.start_time);
            const endTime = convertISOToFields(timeSlot.end_time);
            return {
                startTime: {
                    ...startTime,
                    _origin: timeSlot.start_time
                },
                endTime: {
                    ...endTime,
                    _origin: timeSlot.end_time
                },
                timeSlot: generateTimeSlotFromFields(startTime.timeSlot, endTime.timeSlot)
            }
        });

        const getTimeSlotsGrouopedByDay = groupBy(timeSlots, property('startTime.day'));
        setTimeSlotsByDay(getTimeSlotsGrouopedByDay);
    }, [company.time_slots]);


    const onReservationSuccess = (timeSlotObj) => {
        let savedSelectedTimeSlots = [...selectedTimeSlots, timeSlotObj];
        savedSelectedTimeSlots = sortBy(savedSelectedTimeSlots, ['timeSlot']);
        setSelectedTimeSlots(savedSelectedTimeSlots);
    }

    const onReservationCancel = (timeSlot) => {
        const filteredSelectedTimeSlots = filter(selectedTimeSlots, t => t.timeSlot !== timeSlot);
        setSelectedTimeSlots(filteredSelectedTimeSlots);
    }

    const timeSlotsDay = Object.keys(timeSlotsByDay);
    const groupedTimeSlots = groupBy(selectedTimeSlots, property('startTime.day'));
    const selectedTimeSlotsDay = Object.keys(groupedTimeSlots);
    const descriptionInfo = {
        name: 'Booked time slots: ',
        listByKey: selectedTimeSlotsDay.map(selectedTimeSlotKey => ({
            key: selectedTimeSlotKey,
            list: groupedTimeSlots[selectedTimeSlotKey].map(l => l.timeSlot)
        }))
    };

    return (
        <BoardTileComponent
            title={company.name}
            descriptionInfo={descriptionInfo}
        >
            {timeSlotsDay.map((timeSlotDay, i) => (
                <TimeSlotsWrapper
                    key={i}
                    titleKey={timeSlotDay}
                    timeSlotsByDay={timeSlotsByDay}
                    onReservationClick={onReservationSuccess}
                    onCancelClick={onReservationCancel}
                />
            ))}
        </BoardTileComponent>
    )
};

BoardTileEnhanced.propTypes = {
    company: PropTypes.object.isRequired
};

export default BoardTileEnhanced;