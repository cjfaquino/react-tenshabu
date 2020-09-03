import React from 'react';
import FadeIn from 'react-fade-in';

const Drinks = () => (
  <div>
    <h2>Drinks</h2>
    <div className="drinkItems">
      <FadeIn delay="150">
        <div className="drinkSplit">
          <table className="happyHr">
            <tbody>
              <tr>
                <th>Happy Hour</th>
                <td>3pm - 6pm</td>
              </tr>
              <tr>
                <td></td>
                <td>9pm - Close</td>
              </tr>
              <tr>
                <td>Beer, Wine</td>
                <td>$2 off</td>
              </tr>
              <tr>
                <td>Mixed Drinks</td>
              </tr>
            </tbody>
          </table>
          <table className="sakeSampler">
            <tbody>
              <tr>
                <th>Sake Sampler</th>
              </tr>
              <tr>
                <td>Tour of Japan Flight</td>
                <td>12</td>
                <td></td>
              </tr>
              <tr>
                <td className="subText">a shot of White Label, Demon Slayer, Drunken Whale, and Hakkaisan</td>
              </tr>
              <tr>
                <td>East Meets West Flight</td>
                <td>10</td>
                <td></td>
              </tr>
              <tr>
                <td className="subText">a shot of Crazy Milk Nigori, Perfect Snow, Premium Ginjo, and Kikusui</td>
              </tr>
            </tbody>
          </table>
          <table className="wine">
            <tbody>
              <tr>
                <th>Plum Wine</th>
              </tr>
              <tr>
                <td>Per Glass</td>
                <td>6</td>
              </tr>
              <tr>
                <td>Per Sml Btl</td>
                <td>15</td>
              </tr>
              <tr>
                <td>Per Lrg Btl</td>
                <td>25</td>
              </tr>
            </tbody>
          </table>
        </div>
        <table className="sake1">
          <tbody>
            <tr>
              <th>Sake</th>
              <td>Reg</td>
              <td>Lrg</td>
            </tr>
            <tr>
              <td>Hakkisan</td>
              <td>25</td>
              <td>48</td>
            </tr>
            <tr>
              <td>Drunken Whale</td>
              <td>18</td>
              <td>30</td>
            </tr>
            <tr>
              <td>Demon Slayer</td>
              <td>16</td>
              <td>30</td>
            </tr>
            <tr>
              <td>White Label</td>
              <td>16</td>
              <td>30</td>
            </tr>
            <tr>
              <td>Kikusui</td>
              <td>14</td>
              <td>28</td>
            </tr>
            <tr>
              <td>Crazy Milk Nigori</td>
              <td>9</td>
              <td></td>
            </tr>
            <tr>
              <td>Sierra Cold Sake</td>
              <td>9</td>
              <td></td>
            </tr>
            <tr>
              <td>Premium Ginjo</td>
              <td>12</td>
              <td></td>
            </tr>
            <tr>
              <td>Perfect Snow</td>
              <td>14</td>
              <td></td>
            </tr>
            <tr>
              <td>Sparkling Mio</td>
              <td>16</td>
              <td></td>
            </tr>
            <tr>
              <td>Kubota Senju</td>
              <td>21</td>
              <td></td>
            </tr>
            <tr>
              <td>Hot Sake</td>
              <td>6</td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <table className="beer">
          <tbody>
            <tr>
              <th>Beer</th>
              <td>Reg</td>
              <td>Lrg</td>
            </tr>
            <tr>
              <td>Asahi</td>
              <td>4</td>
              <td>6</td>
            </tr>
            <tr>
              <td>Kirin</td>
              <td>4</td>
              <td>6</td>
            </tr>
            <tr>
              <td>Sapporo</td>
              <td>4</td>
              <td>6</td>
            </tr>
            <tr>
              <td>Tsingtao</td>
              <td>4</td>
              <td>6</td>
            </tr>
            <tr>
              <td>Asahi Black</td>
              <td>4</td>
              <td></td>
            </tr>
            <tr>
              <td>Bud Light</td>
              <td>3</td>
              <td></td>
            </tr>
            <tr>
              <td>Corona</td>
              <td>4</td>
              <td></td>
            </tr>
            <tr>
              <td>Shock Top</td>
              <td>4</td>
              <td></td>
            </tr>
            <tr>
              <td>Grapefruit JPOP</td>
              <td>4</td>
              <td></td>
            </tr>
            <tr>
              <td>Peach JPOP</td>
              <td>4</td>
              <td></td>
            </tr>
            <tr>
              <td>MAKE IT A BOMB!</td>
              <td>1</td>
            </tr>
            <tr>
              <td>
                <span className="subText">add a shot of hot sake</span>
              </td>
            </tr>
          </tbody>
        </table>
        <table className="mixedDrink">
          <tbody>
            <tr>
              <th>Mixed Drinks</th>
            </tr>
            <tr>
              <td>Sangria (Red, White, Plum)</td>
              <td>13</td>
            </tr>
            <tr>
              <td>Saketinis (Apple, Lychee, Peach)</td>
              <td>5</td>
            </tr>
            <tr>
              <td>Peach Top</td>
              <td>6</td>
            </tr>
            <tr>
              <td>Plum Sunrise</td>
              <td>6</td>
            </tr>
            <tr>
              <td>Rising Sun</td>
              <td>6</td>
            </tr>
            <tr>
              <td>Yuzu Drop</td>
              <td>6</td>
            </tr>
          </tbody>
        </table>
      </FadeIn>
    </div>
  </div>
);

export default {
  routeProps: {
    path: '/drinks',
    component: Drinks,
  },
  name: 'Drinks',
};
