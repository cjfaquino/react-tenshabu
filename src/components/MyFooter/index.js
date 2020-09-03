import React from 'react';
import GMap from '../GMaps';

function MyFooter() {
  return (
    <footer className="container">
      <span className="anchor" id="hours"></span>
      <section className="info">
        <div className="hours">
          <h2>Hours</h2>
          <table>
            <tbody>
              <tr>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Mon</td>
                <td>12:30 pm - 10:00 pm</td>
              </tr>
              <tr>
                <td>Tue</td>
                <td>12:30 pm - 10:00 pm</td>
              </tr>
              <tr>
                <td>Wed</td>
                <td>12:30 pm - 10:00 pm</td>
              </tr>
              <tr>
                <td>Thu</td>
                <td>12:30 pm - 10:00 pm</td>
              </tr>
              <tr>
                <td>Fri</td>
                <td>12:30 pm - 10:30 pm</td>
              </tr>
              <tr>
                <td>Sat</td>
                <td>12:30 pm - 10:30 pm</td>
              </tr>
              <tr>
                <td>Sun</td>
                <td>12:30 pm - 9:00 pm</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="location">
          <h2>Find Us</h2>
          <a href="http://maps.google.com/?q=Ten%20Shabu,%201015%20South%20Glendora%20Avenue,%20West%20Covina,%20CA,%2091790">
            Hong Kong Plaza
            <br />
            1015 S Glendora Ave
            <br />
            West Covina, CA 91746
          </a>
          <a href="tel:6268143248">
            <i className="fas fa-phone-alt"></i> (626) 814-3248
          </a>
          <a href="https://www.yelp.com/biz/ten-shabu-west-covina-4?osq=tenshabu">
            <i className="fab fa-yelp"></i> Yelp
          </a>
        </div>
        <GMap />
      </section>
    </footer>
  );
}

export default MyFooter;
