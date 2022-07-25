export const BookingCard = ({ bookingId, status, productList, startDate, endDate, location }) => {
    console.log('bookingCard');
    return (
        <div className="BookingCard">
            <div className="BookingInfo">
                <div>
                    <p><b>Booking Id:</b> {bookingId}</p>
                    <p><b>Status:</b> {status}</p>
                </div>
                <div>
                    <p><b>Item List:</b></p>
                    {
                        productList.map(item => {
                            return (
                                <p>{item.name}</p>
                            )
                        })
                    }
                </div>
                <div>
                    <p><b>Start:</b> {startDate}</p>
                    <p><b>End:</b> {endDate}</p>
                </div>
                <p><b>Location:</b> {location}</p>
            </div>
        </div >
    )
}