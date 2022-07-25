import './css/Account.css';
import { AccountCard } from './components/Cards/AccountCard';
import { BookingCard } from './components/Cards/BookingCard';

function Account() {
  const productList = [
    { name: 'Swimming Trunks' },
    { name: 'Bikini' },
    { name: 'Snorkle' }
  ]
  const bookings = [
    {
      bookingId: 12345,
      status: 'Delivered',
      productList: productList,
      startDate: '01-02-2022',
      endDate: '21-02-2022',
      location: 'Al Bustan Hotel, Muscat, Oman'
    },
    {
      bookingId: 12345,
      status: 'Delivered',
      productList: productList,
      startDate: '01-02-2022',
      endDate: '21-02-2022',
      location: 'Al Bustan Hotel, Muscat, Oman'
    },
    {
      bookingId: 12345,
      status: 'Delivered',
      productList: productList,
      startDate: '01-02-2022',
      endDate: '21-02-2022',
      location: 'Al Bustan Hotel, Muscat, Oman'
    },
  ]

  return (
    <div className="App">
      <h1>Account</h1>
      <div className="AccountSideCard">
        <AccountCard></AccountCard>
        <div className="BookingList">
          {bookings.map(booking => (
            <BookingCard {...booking} />
          ))}
          <BookingCard {...bookings[0]} />
        </div>
      </div>
    </div>
  );
}

export default Account;
