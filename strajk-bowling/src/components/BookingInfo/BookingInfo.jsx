import './BookingInfo.scss';

import Input from '../Input/Input';

function BookingInfo({ updateBookingDetails }) {
  return (
    <section className='booking-info'>
      <header>
        <h2 className='booking-info__heading'>When, WHAT & Who</h2>
      </header>
      <form className='booking-info__details'>
        <section className='booking-info__when'>
          <Input
           data-testid="date"
            label='Date'
            type='date'
            customClass='booking-info__date'
            name='when'
            handleChange={updateBookingDetails}
          />
          <Input
           data-testid="time"
            label='Time'
            type='time'
            name='time'
            handleChange={updateBookingDetails}
          />
        </section>
        <Input
          data-testid="bowlers"
          label='Number of awesome bowlers'
          type='number'
          customClass='booking-info__who'
          name='people'
          handleChange={updateBookingDetails}
        />
        <Input
         data-testid="lanes"
          label='Number of lanes'
          type='number'
          customClass='booking-info__lanes'
          name='lanes'
          handleChange={updateBookingDetails}
        />
      </form>
    </section>
  );
}

export default BookingInfo;
