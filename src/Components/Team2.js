import React, { Component } from 'react';
import './Team2.css';
import Grade from '../Components/Grade';

class Team2 extends Component {
	// constructor(props){
	//     super(props);
	// }
	render() {
		return (
			<div>
				<div className="kraick">
					<img src="https://ffavi.s3.amazonaws.com/Screen+Shot+2019-09-01+at+10.43.40+PM+(1).png" />
				</div>
                <Grade />
				<table>
					<tr>
						<th>Round</th>
						<th>Player</th>
						<th>Score</th>
					</tr>
					<tr>
						<td>1</td>
						<td>Saquon Barkley</td>
						<td>A+</td>
					</tr>
                    <tr>
						<td>2</td>
						<td>Kerryon Johnson</td>
						<td>C+</td>
					</tr>
                    <tr>
						<td>3</td>
						<td>Adam Thielen</td>
						<td>C</td>
					</tr>
                    <tr>
						<td>4</td>
						<td>TY Hilton</td>
						<td>C-</td>
					</tr>
                    <tr>
						<td>5</td>
						<td>Deshaun Watson</td>
						<td>A</td>
					</tr>
                    <tr>
						<td>6</td>
						<td>D.J Moore</td>
						<td>D+</td>
					</tr>
                    <tr>
						<td>7</td>
						<td>Hunter Henry</td>
						<td>C-</td>
					</tr>
                    <tr>
						<td>8</td>
						<td>Will Fuller</td>
						<td>B-</td>
					</tr>
                    <tr>
						<td>9</td>
						<td>Marvin Jones</td>
						<td>D-</td>
					</tr>
                    <tr>
						<td>10</td>
						<td>Devin Singletary</td>
						<td>A</td>
					</tr>
                    <tr>
						<td>11</td>
						<td>Greg Zuerlein</td>
						<td>A</td>
					</tr>
                    <tr>
						<td>12</td>
						<td>Ronald Jones</td>
						<td>B-</td>
					</tr>
                    <tr>
						<td>13</td>
						<td>Chargers</td>
						<td>C-</td>
					</tr>
                    <tr>
						<td>14</td>
						<td>Miles Boykin</td>
						<td>B+</td>
					</tr>
				</table>
			</div>
		);
	}
}

export default Team2;
