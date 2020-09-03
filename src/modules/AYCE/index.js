import React from 'react';
import FadeIn from 'react-fade-in';

const AYCE = () => (
  <div>
    <h2>All You Can Eat</h2>
    <div className="ayceItems">
      <FadeIn delay="150">
        <div>
          <table className="aycePrice">
            <tbody>
              <tr>
                <td></td>
                <th>Regular</th>
                <th>Premium</th>
              </tr>
              <tr>
                <td>Weekday Lunch</td>
                <td>22</td>
                <td>28</td>
              </tr>
              <tr>
                <td>Dinner and Weekends</td>
                <td>28</td>
                <td>34</td>
              </tr>
            </tbody>
          </table>

          <table className="ayceLimits">
            <tbody>
              <tr>
                <td>Premium Only</td>
                <td>
                  <i className="fas fa-bahai"></i>
                </td>
              </tr>
              <tr>
                <td>Dinner Only</td>
                <td>
                  <i className="fas fa-utensils"></i>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <table className="ayceAppe">
          <tbody>
            <tr>
              <th>Appetizers</th>
            </tr>
            <tr>
              <td>Seaweed Salad</td>
            </tr>
            <tr>
              <td>Calamari Salad</td>
            </tr>
            <tr>
              <th className="ayceRice">Rice</th>
            </tr>
            <tr>
              <td>White / Brown</td>
            </tr>
            <tr>
              <th className="ayceNoods">Noodles</th>
            </tr>
            <tr>
              <td>Ramen</td>
            </tr>
            <tr>
              <td>Udon</td>
            </tr>
            <tr>
              <td>Vermicelli</td>
            </tr>
          </tbody>
        </table>

        <table className="ayceSoups">
          <tbody>
            <tr>
              <th>
                Broths <span className="subText">Choose one</span>
              </th>
            </tr>
            <tr>
              <td>Japanese Konbu</td>
            </tr>
            <tr>
              <td>Citrus Konbu</td>
            </tr>
            <tr>
              <td>Fish Broth</td>
            </tr>
            <tr>
              <td>Veggie</td>
            </tr>
            <tr>
              <td>Taiwanese Beef</td>
            </tr>
            <tr>
              <td>French Onion</td>
            </tr>
            <tr>
              <td>Sukiyaki</td>
            </tr>
            <tr>
              <td>Chicken</td>
            </tr>
            <tr>
              <td>Curry</td>
            </tr>
            <tr>
              <td>Spicy Tomato</td>
            </tr>
            <tr>
              <td>Pork Bone</td>
            </tr>
            <tr>
              <td>Tom Yum</td>
            </tr>
            <tr>
              <td>Kimchi</td>
            </tr>
            <tr>
              <td>Miso</td>
            </tr>
          </tbody>
        </table>

        <table className="ayceMeats">
          <tbody>
            <tr>
              <th>Meats</th>
            </tr>
            <tr>
              <td>Beef</td>
            </tr>
            <tr>
              <td>Lean Beef</td>
            </tr>
            <tr>
              <td>Chicken</td>
            </tr>
            <tr>
              <td>Pork</td>
            </tr>
            <tr>
              <td>
                Kurobuta Pork <i className="fas fa-bahai"></i>
              </td>
            </tr>
            <tr>
              <td>
                Premium Ribeye <i className="fas fa-bahai"></i>
              </td>
            </tr>
            <tr>
              <td>
                Wagyu <i className="fas fa-bahai"></i>
              </td>
            </tr>
            <tr>
              <td>
                Short Rib <i className="fas fa-bahai"></i>
              </td>
            </tr>
            <tr>
              <td>
                Lamb <i className="fas fa-bahai"></i>
              </td>
            </tr>
          </tbody>
        </table>

        <table className="ayceSea">
          <tbody>
            <tr>
              <th>Seafoods</th>
            </tr>
            <tr>
              <td>Basa Fish</td>
            </tr>
            <tr>
              <td>Calamari</td>
            </tr>
            <tr>
              <td>Chikuwa</td>
            </tr>
            <tr>
              <td>Clams</td>
            </tr>
            <tr>
              <td>Mussels</td>
            </tr>
            <tr>
              <td>
                Salmon <i className="fas fa-bahai"></i> <i className="fas fa-utensils"></i>
              </td>
            </tr>
            <tr>
              <td>
                Shrimp <i className="fas fa-bahai"></i> <i className="fas fa-utensils"></i>
              </td>
            </tr>
            <tr>
              <td>
                Tuna <i className="fas fa-bahai"></i> <i className="fas fa-utensils"></i>
              </td>
            </tr>
          </tbody>
        </table>

        <table className="ayceVeg">
          <tbody>
            <tr>
              <th>Vegetables</th>
            </tr>
            <tr>
              <td>Bamboo</td>
            </tr>
            <tr>
              <td>Bok Choy</td>
            </tr>
            <tr>
              <td>Broccoli</td>
            </tr>
            <tr>
              <td>Corn</td>
            </tr>
            <tr>
              <td>Enoki Mushroom</td>
            </tr>
            <tr>
              <td>Napa Cappage</td>
            </tr>
            <tr>
              <td>Shiitake Mushroom</td>
            </tr>
            <tr>
              <td>Spinach</td>
            </tr>
            <tr>
              <td>Taro</td>
            </tr>
            <tr>
              <td>Tong Ho</td>
            </tr>
            <tr>
              <td>Watercress</td>
            </tr>
          </tbody>
        </table>

        <table className="ayceSides">
          <tbody>
            <tr>
              <th>Sides</th>
            </tr>
            <tr>
              <td>
                Beefballs w/ Tendon <i className="fas fa-bahai"></i>
              </td>
            </tr>
            <tr>
              <td>Fish Balls</td>
            </tr>
            <tr>
              <td>Kamaboko</td>
            </tr>
            <tr>
              <td>Raw Egg</td>
            </tr>
            <tr>
              <td>Tofu</td>
            </tr>
            <tr>
              <td>
                Quail Eggs <i className="fas fa-bahai"></i>
              </td>
            </tr>
            <tr>
              <td>Handmade Meatballs</td>
            </tr>
            <tr>
              <td>
                <span className="subText">regular, spicy, atomic</span>
              </td>
            </tr>
          </tbody>
        </table>

        <table className="ayceSpecial">
          <tbody>
            <tr>
              <th>
                Special <span className="subText">Limit ONE per visit</span>
              </th>
            </tr>
            <tr>
              <td>
                Fish Balls w/ Roe <i className="fas fa-bahai"></i>
              </td>
            </tr>
            <tr>
              <td>
                Shrimp Balls <i className="fas fa-bahai"></i>
              </td>
            </tr>
            <tr>
              <td>
                Oysters <i className="fas fa-bahai"></i>
              </td>
            </tr>
          </tbody>
        </table>

        <table className="ayceDessert">
          <tbody>
            <tr>
              <th>Dessert</th>
            </tr>
            <tr>
              <td>Green Tea Ice Cream</td>
            </tr>
            <tr>
              <td>Ice Cream of the Week</td>
            </tr>
          </tbody>
        </table>
      </FadeIn>
    </div>
  </div>
);

export default {
  routeProps: {
    path: '/ayce',
    component: AYCE,
  },
  name: 'All You Can Eat Menu',
};
