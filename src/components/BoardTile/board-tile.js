import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import './index.scss';


const DescriptionInfo = ({ descriptionInfo }) => (
    <div className="description-box">
        <h5>{descriptionInfo.name}</h5>
        {!descriptionInfo.listByKey.length ? <p>Nothing booked yet.</p> : descriptionInfo.listByKey.map((listItem, index) => (
            <div key={index}>
                <h6>{listItem.key}</h6>
                <ul>
                    {listItem.list.map((item, idx) => (
                        <li key={idx}>{item}</li>
                    ))}
                </ul>
            </div>
        ))}
    </div>
)


const BoardTileComponent = ({
    title,
    descriptionInfo,
    children
}) => (
    <Card>
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            {descriptionInfo && <DescriptionInfo descriptionInfo={descriptionInfo} />}
            {children}
        </Card.Body>
    </Card>
);

BoardTileComponent.propTypes = {
    title: PropTypes.string.isRequired,
    descriptionInfo: PropTypes.exact({
        name: PropTypes.string,
        listByKey: PropTypes.arrayOf(
            PropTypes.exact({
                key: PropTypes.string,
                list: PropTypes.arrayOf(PropTypes.string)
            })
        )
    }),
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default BoardTileComponent;