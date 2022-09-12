import { Col, Row } from 'react-bootstrap'
import StoreItem from "../data/items.json"
import { StoreItems } from '../components/StoreItems'

export function Store() {
    return (
        <>
            <h1>Store</h1>
            <Row md={2} xs={1} lg={3} className="g-3">
                {StoreItem.map(item => (
                    <Col key={item.id}><StoreItems {...item} /></Col>
                ))}
                <Col></Col>
            </Row>
        </>
    )
}