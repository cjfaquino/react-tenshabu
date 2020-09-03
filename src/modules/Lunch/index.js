import React from 'react';
import FadeIn from 'react-fade-in';

const Lunch = () => (
  <div>
    <h2>Lunch</h2>
    <p>Every entree includes white or brown rice, vegetables, noodles, and three sauces</p>
    <FadeIn transitionDuration="800">
      <div className="menuSplit">
        <div>
          <div className="regSoup">
            <h4>
              Broths <span className="subText">reg, mild, spicy, atomic</span>
            </h4>
            <div>
              <table>
                <tbody>
                  <tr>
                    <th>Standard</th>
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
                </tbody>
              </table>
              <table>
                <tbody>
                  <tr>
                    <th>Special +$1</th>
                  </tr>
                  <tr>
                    <td>Taiwanese Beef</td>
                  </tr>
                  <tr>
                    <td>French Onion</td>
                  </tr>
                  <tr>
                    <td>
                      Sukiyaki <i className="fas fa-heart"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>Chicken</td>
                  </tr>
                  <tr>
                    <td>Curry</td>
                  </tr>
                </tbody>
              </table>
              <table>
                <tbody>
                  <tr>
                    <th>Premium +$2</th>
                  </tr>
                  <tr>
                    <td>
                      Spicy Tomato <i className="fas fa-pepper-hot"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Pork Bone <i className="fas fa-heart"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Tom Yum <i className="fas fa-heart"></i> <i className="fas fa-pepper-hot"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Kimchi <i className="fas fa-pepper-hot"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>Miso</td>
                  </tr>
                </tbody>
              </table>
              <table className="split-pot">
                <tbody>
                  <tr>
                    <th>Split Pot +$3</th>
                  </tr>
                  <tr>
                    <td>
                      Any <strong>two broths side-by-side</strong> in our custom split pots
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="underSoup">
            <h4>Combos</h4>
            <table>
              <tbody>
                <tr>
                  <th>Choose 2</th>
                  <th>R</th>
                  <th>L</th>
                </tr>
                <tr>
                  <td>Any two different entrees</td>
                  <td>21</td>
                  <td>27</td>
                </tr>
                <tr>
                  <th>Choose 3</th>
                  <th>L</th>
                  <th>XL</th>
                </tr>
                <tr>
                  <td>Any three different entrees</td>
                  <td>26</td>
                  <td>31</td>
                </tr>
                <tr>
                  <th>
                    Seafood Combo <i className="fas fa-heart"></i>
                  </th>
                </tr>
                <tr>
                  <td>Basa, shrimp, mussels, scallops and other seafood</td>
                  <td></td>
                  <td>21</td>
                </tr>
                <tr>
                  <th>Premium Seafood Combo</th>
                </tr>
                <tr>
                  <td>Seafood combo w/ salmon</td>
                  <td></td>
                  <td>27</td>
                </tr>
                <tr>
                  <th>
                    Lunch For 2 <i className="fas fa-heart"></i>
                  </th>
                </tr>
                <tr>
                  <td>Our legendary feast for two! Over two beastly pounds of food!</td>
                </tr>
                <tr>
                  <td>Any two soups and any two entrees</td>
                  <td></td>
                  <td>52</td>
                </tr>
                <tr>
                  <td className="combo subText">**4 extra charge for scallops</td>
                </tr>
                <tr className="share">
                  <th>Share An Entree</th>
                </tr>
                <tr>
                  <td>Includes extra broth, rice, sauces, vegetables and noodles</td>
                </tr>
                <tr>
                  <td className="combo subText">**Sharing charge is mandatory when sharing an entree</td>
                  <td></td>
                  <td>9</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="regDinner">
          <h4>Entrees</h4>
          <div>
            <table>
              <tbody>
                <tr>
                  <th>Meat</th>
                  <th>R</th>
                  <th>L</th>
                  <th>XL</th>
                  <th>S</th>
                </tr>
                <tr>
                  <td>
                    Premium Angus Beef <i className="fas fa-heart"></i>
                  </td>
                  <td>17</td>
                  <td>22</td>
                  <td>27</td>
                  <td>15</td>
                </tr>
                <tr>
                  <td>Lean Angus Beef</td>
                  <td>15</td>
                  <td>20</td>
                  <td>24</td>
                  <td>13</td>
                </tr>
                <tr>
                  <td>Short Rib</td>
                  <td>17</td>
                  <td>22</td>
                  <td>27</td>
                  <td>15</td>
                </tr>
                <tr>
                  <td>
                    American Wagyu <i className="fas fa-heart"></i>
                  </td>
                  <td>17</td>
                  <td>22</td>
                  <td>27</td>
                  <td>15</td>
                </tr>
                <tr>
                  <td>Kurobuta Pork</td>
                  <td>16</td>
                  <td>21</td>
                  <td>26</td>
                  <td>14</td>
                </tr>
                <tr>
                  <td>Pork</td>
                  <td>14</td>
                  <td>18</td>
                  <td>22</td>
                  <td>12</td>
                </tr>
                <tr>
                  <td>
                    Chicken <i className="fas fa-heart"></i>
                  </td>
                  <td>14</td>
                  <td>18</td>
                  <td>22</td>
                  <td>12</td>
                </tr>
                <tr>
                  <td>Lamb</td>
                  <td>16</td>
                  <td>21</td>
                  <td>26</td>
                  <td>14</td>
                </tr>

                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>

                <tr>
                  <th>Seafood</th>
                  <th>R</th>
                  <th>L</th>
                  <th>XL</th>
                  <th>S</th>
                </tr>
                <tr>
                  <td>Salmon</td>
                  <td>18</td>
                  <td>23</td>
                  <td>28</td>
                  <td>16</td>
                </tr>
                {/* <tr>
                  <td>Tuna</td>
                  <td>18</td>
                  <td>23</td>
                  <td>28</td>
                  <td>16</td>
                </tr> */}
                <tr>
                  <td>
                    Fish Basa <i className="fas fa-heart"></i>
                  </td>
                  <td>14</td>
                  <td>18</td>
                  <td>22</td>
                  <td>12</td>
                </tr>
                <tr>
                  <td>Shrimp</td>
                  <td>16</td>
                  <td>21</td>
                  <td>26</td>
                  <td>14</td>
                </tr>
                <tr>
                  <td>Scallop</td>
                  <td>20</td>
                  <td>25</td>
                  <td>31</td>
                  <td>18</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>

                <tr>
                  <th>Vegetarian</th>
                  <th>R</th>
                  <th></th>
                  <th></th>
                  <th></th>
                </tr>

                <tr>
                  <td>Vegetarian Delight</td>
                  <td>14</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="regSides">
          <h4>Sides</h4>
          <div>
            <table className="extraSides">
              <tbody>
                <tr>
                  <th>Extra Servings</th>
                </tr>
                <tr>
                  <td>Premium</td>
                  <td>12</td>
                </tr>
                <tr>
                  <td>Lean</td>
                  <td>9</td>
                </tr>
                <tr>
                  <td>Short RIb</td>
                  <td>11</td>
                </tr>
                <tr>
                  <td>Wagyu</td>
                  <td>11</td>
                </tr>
                <tr>
                  <td>Kurobuta Pork</td>
                  <td>9</td>
                </tr>
                <tr>
                  <td>Pork</td>
                  <td>8</td>
                </tr>
                <tr>
                  <td>Chicken</td>
                  <td>8</td>
                </tr>
                <tr>
                  <td>Lamb</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>Basa Fish</td>
                  <td>8</td>
                </tr>
                <tr>
                  <td>Shrimp</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>Salmon</td>
                  <td>12</td>
                </tr>
                <tr>
                  <td>Scallops</td>
                  <td>14</td>
                </tr>
              </tbody>
            </table>
            <table className="regVeggies">
              <tbody>
                <tr>
                  <th>Veggies</th>
                </tr>
                <tr>
                  <td>Bok Choy</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>Broccoli</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>Corn</td>
                  <td>3</td>
                </tr>
                <tr>
                  <td>
                    Enoki Mushrooms <i className="fas fa-heart"></i>
                  </td>
                  <td>3</td>
                </tr>
                <tr>
                  <td>Kimchi</td>
                  <td>4</td>
                </tr>
                <tr>
                  <td>Napa Cabbage</td>
                  <td>3</td>
                </tr>
                <tr>
                  <td>Shiitake Mushrooms</td>
                  <td>4</td>
                </tr>
                <tr>
                  <td>Spinach</td>
                  <td>3</td>
                </tr>
                <tr>
                  <td>Taro</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>Tong Ho</td>
                  <td>3</td>
                </tr>
                <tr>
                  <td>Watercress</td>
                  <td>3</td>
                </tr>
                <tr>
                  <td>Extra Veggie Bowl</td>
                  <td>7</td>
                </tr>
              </tbody>
            </table>

            <table className="regSeafood">
              <tbody>
                <tr>
                  <th>Seafood</th>
                </tr>
                <tr>
                  <td>Calamari</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>Clam</td>
                  <td>3</td>
                </tr>
                <tr>
                  <td>Imitation Crab</td>
                  <td>4</td>
                </tr>
                <tr>
                  <td>Kamaboko</td>
                  <td>4</td>
                </tr>
                <tr>
                  <td>Mussels</td>
                  <td>4</td>
                </tr>
                <tr>
                  <td>Oysters</td>
                  <td>6</td>
                </tr>
                <tr>
                  <td>
                    Mixed Seafood Side <i className="fas fa-heart"></i>
                  </td>
                  <td>6</td>
                </tr>
                <tr>
                  <td>
                    <span className="subText">shrimp, mussels and basa fish</span>
                  </td>
                </tr>
              </tbody>
            </table>

            <table className="regBalls">
              <tbody>
                <tr>
                  <th>Meat/Fish balls</th>
                </tr>
                <tr>
                  <td>Beefballs w/ Tendon</td>
                  <td>3</td>
                </tr>
                <tr>
                  <td>Fish Balls</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>
                    Fish Balls w/ Roe <i className="fas fa-heart"></i>
                  </td>
                  <td>4</td>
                </tr>
                <tr>
                  <td>Fish Balls w/ Shrimp</td>
                  <td>4</td>
                </tr>
                <tr>
                  <td>Fried Fish Balls w/ Roe</td>
                  <td>4</td>
                </tr>
                <tr>
                  <td>Shrimp Balls</td>
                  <td>4</td>
                </tr>
                <tr>
                  <td>Fish Ball Assortment</td>
                  <td>8</td>
                </tr>
                <tr>
                  <td>
                    Handmade Meatballs <i className="fas fa-heart"></i>
                  </td>
                  <td>3</td>
                </tr>
                <tr>
                  <td>
                    <span className="subText">regular, spicy, atomic</span>
                  </td>
                </tr>
              </tbody>
            </table>

            <table className="regOthers">
              <tbody>
                <tr>
                  <th>Misc.</th>
                </tr>
                <tr>
                  <td>
                    Beef Tripe <i className="fas fa-heart"></i>
                  </td>
                  <td>3</td>
                </tr>
                <tr>
                  <td>
                    Quail Eggs <i className="fas fa-heart"></i>
                  </td>
                  <td>3</td>
                </tr>
                <tr>
                  <td>Tofu</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>Ramen Noodles</td>
                  <td>3</td>
                </tr>
                <tr>
                  <td>Udon Noodles</td>
                  <td>3</td>
                </tr>
                <tr>
                  <td>Vermicelli Noodles</td>
                  <td>3</td>
                </tr>
                <tr>
                  <td>Brown Rice</td>
                  <td>1</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </FadeIn>
  </div>
);

export default {
  routeProps: {
    path: '/lunch',
    component: Lunch,
  },
  name: 'Lunch Menu',
};
