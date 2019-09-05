import React, { Component } from 'react';
import './Team.css';
import Grade from '../Components/Grade';
import Avi from '../Components/Avi';
import Sound from 'react-sound';

class Team extends Component {
	// constructor(props){
	//     super(props);
	// }
	render() {
		return (
			<div className='tableContainer'>
				<div className="pic" id='ron'>
					<img id='mypic' src="https://ffavi.s3.amazonaws.com/IMG-4900.JPG"  alt='ron'/>
                    <score id='score'>
                        <grade>Overall:</grade>
					    <gradeint>98.5</gradeint>
						<p>"For the fxckin kids, man."</p>
                    </score>
				</div>
				<table>
					<tr>
						<th className="round">Round</th>
						<th>Player</th>
						<th>Score</th>
                        
					</tr>
					<tr>
						<td>1</td>
						<td>Davante Adams</td>
						<td>A</td>
					</tr>
                    <tr>
						<td>2</td>
						<td><a href='https://www.youtube.com/watch?v=DEkSznU4054' target='_blank'>Leonard Fournette</a></td>
						<td>A+</td>
					</tr>
                    <tr>
						<td>3</td>
						<td>David Montgomery</td>
						<td>A</td>
					</tr>
                    <tr>
						<td>4</td>
						<td>Chris Godwin</td>
						<td>A</td>
					</tr>
                    <tr>
						<td>5</td>
						<td>Derrick Henry</td>
						<td>A</td>
					</tr>
                    <tr>
						<td>6</td>
						<td>Josh Gordon</td>
						<td>A</td>
					</tr>
                    <tr>
						<td>7</td>
						<td>Baker Mayfield</td>
						<td>B+</td>
					</tr>
                    <tr>
						<td>8</td>
						<td>Marquez V-S</td>
						<td>A-</td>
					</tr>
                    <tr>
						<td>9</td>
						<td>Alexander Mattison</td>
						<td>A</td>
					</tr>
                    <tr>
						<td>10</td>
						<td>Lamar Jackson</td>
						<td>A+</td>
					</tr>
                    <tr>
						<td>11</td>
						<td>Kareem Hunt</td>
						<td>C</td>
					</tr>
                    <tr>
						<td>12</td>
						<td>Mark Andrews</td>
						<td>A-</td>
					</tr>
                    <tr>
						<td>13</td>
						<td>New Orleans Saints</td>
						<td>B</td>
					</tr>
                    <tr>
						<td>14</td>
						<td>Adam Vinateri</td>
						<td>B</td>
					</tr>
				</table>
				<div  id='kory'>
					<img id='pic' src="https://ffavi.s3.amazonaws.com/Screen+Shot+2019-09-01+at+10.42.59+PM.png" alt='kory' />
                    <score id='score'>
                        <grade>Overall:</grade>
					    <gradeint>93.5</gradeint>
                        <p>Tyreek Hill cooks people...and abuses them. James Cancer survived cancer, he will surely survive this season. Josh Jacobs is better than Le'Veon Bell and still kicks it with the homies. Calvin Ridley a great handcuff, Julio is always injured. Dante Pettis acts like a chawawa - all bark no bite.</p>
                    </score>
				</div>
                <table>
					<tr>
						<th className="round">Round</th>
						<th>Player</th>
						<th>Score</th>
					</tr>
					<tr>
						<td>1</td>
						<td>James Conner</td>
						<td>A</td>
					</tr>
                    <tr>
						<td>2</td>
						<td>Tyreek Hill</td>
						<td>A</td>
					</tr>
                    <tr>
						<td>3</td>
						<td><a href='https://www.youtube.com/watch?v=qIl8reFnYBU' target='_blank'>Josh Jacobs</a></td>
						<td>A</td>
					</tr>
                    <tr>
						<td>4</td>
						<td>Kenny Golladay</td>
						<td>B-</td>
					</tr>
                    <tr>
						<td>5</td>
						<td>Duke Johnson</td>
						<td>B</td>
					</tr>
                    <tr>
						<td>6</td>
						<td>Calvin Ridley</td>
						<td>B+</td>
					</tr>
                    <tr>
						<td>7</td>
						<td>Jared Cook</td>
						<td>C</td>
					</tr>
                    <tr>
						<td>8</td>
						<td>Russell Wilson</td>
						<td>B+</td>
					</tr>
                    <tr>
						<td>9</td>
						<td>Larry Fitzgerald</td>
						<td>C-</td>
					</tr>
                    <tr>
						<td>10</td>
						<td>Peyton Barber</td>
						<td>D</td>
					</tr>
                    <tr>
						<td>11</td>
						<td>Dante Pettis</td>
						<td>F</td>
					</tr>
                    <tr>
						<td>12</td>
						<td>Rams</td>
						<td>B</td>
					</tr>
                    <tr>
						<td>13</td>
						<td>Stephen Gostkowski</td>
						<td>A</td>
					</tr>
                    <tr>
						<td>14</td>
						<td>K'Neal Harry</td>
						<td>IR</td>
					</tr>
				</table>

                <div id='team5'>
					<img id='pic' src="https://ffavi.s3.amazonaws.com/Screen+Shot+2019-09-01+at+10.43.32+PM+(1).png" alt='team5' />
                    <score id='score'>
                        <grade>Overall:</grade>
					    <gradeint>90.0</gradeint>
                        <p>Good to see Jerry Jones and Zeke getting along. Absolute steal in the second round and you backed it up in the fifth which was not too early. Christian Kirk has never done anything meaningful. Aaron Jones needs to get the ball more.</p>
                    </score>
				</div>
                <table>
					<tr>
						<th className="round">Round</th>
						<th>Player</th>
						<th>Score</th>
					</tr>
					<tr>
						<td>1</td>
						<td><a href='https://www.youtube.com/watch?v=1eMHU634Y5Q' target='_blank'>Deandre Hopkins</a></td>
						<td>A</td>
					</tr>
                    <tr>
						<td>2</td>
						<td>Ezekial Elliot</td>
						<td>A+</td>
					</tr>
                    <tr>
						<td>3</td>
						<td>Aaron Jones</td>
						<td>A</td>
					</tr>
                    <tr>
						<td>4</td>
						<td>Robert Woods</td>
						<td>C+</td>
					</tr>
                    <tr>
						<td>5</td>
						<td>Tevin Coleman</td>
						<td>B</td>
					</tr>
                    <tr>
						<td>6</td>
						<td>Tony Pollard</td>
						<td>A</td>
					</tr>
                    <tr>
						<td>7</td>
						<td><a href='https://www.youtube.com/watch?v=M6djFYxsIDs' target='_blank'>AJ Green</a></td>
						<td>B</td>
					</tr>
                    <tr>
						<td>8</td>
						<td>Christian Kirk</td>
						<td>D</td>
					</tr>
                    <tr>
						<td>9</td>
						<td>Darrell Henderson</td>
						<td>B</td>
					</tr>
                    <tr>
						<td>10</td>
						<td>TJ Hockenson</td>
						<td>D</td>
					</tr>
                    <tr>
						<td>11</td>
						<td>Phillip Rivers</td>
						<td>B</td>
					</tr>
                    <tr>
						<td>12</td>
						<td>Justice Hill</td>
						<td>B+</td>
					</tr>
                    <tr>
						<td>13</td>
						<td>Browns</td>
						<td>C</td>
					</tr>
                    <tr>
						<td>14</td>
						<td>Robby Gould</td>
						<td>C</td>
					</tr>
				</table>
                <div id='melvin'>
					<img id='pic'src="https://ffavi.s3.amazonaws.com/Screen+Shot+2019-09-01+at+10.43.48+PM+(1).png" alt='mel' />
                    <score id='score'>
                        <grade>Overall:</grade>
					    <gradeint>88.5</gradeint>
                        <p>This roster will look completely different by the end of the season and your overall grade will probably end up being about the same.</p>
                    </score>
				</div>
                <table>
					<tr>
						<th className="round">Round</th>
						<th>Player</th>
						<th>Score</th>
					</tr>
					<tr>
						<td>1</td>
						<td>Alvin Kamara</td>
						<td>A</td>
					</tr>
                    <tr>
						<td>2</td>
						<td>Travis Kelce</td>
						<td>A+</td>
					</tr>
                    <tr>
						<td>3</td>
						<td>Devonta Freeman</td>
						<td>B+</td>
					</tr>
                    <tr>
						<td>4</td>
						<td>Cooper Kupp</td>
						<td>B+</td>
					</tr>
                    <tr>
						<td>5</td>
						<td>Latavius Murray</td>
						<td>B</td>
					</tr>
                    <tr>
						<td>6</td>
						<td>Rashad Penny</td>
						<td>C</td>
					</tr>
                    <tr>
						<td>7</td>
						<td>Darwin Thompson</td>
						<td>A</td>
					</tr>
                    <tr>
						<td>8</td>
						<td>Curtis Samuel</td>
						<td>C-</td>
					</tr>
                    <tr>
						<td>9</td>
						<td>Geronimo Allison</td>
						<td>B</td>
					</tr>
                    <tr>
						<td>10</td>
						<td>Cam Newton</td>
						<td>B+</td>
					</tr>
                    <tr>
						<td>11</td>
						<td>Michael Gallup</td>
						<td>A</td>
					</tr>
                    <tr>
						<td>12</td>
						<td>Anthony Miller</td>
						<td>C</td>
					</tr>
                    <tr>
						<td>13</td>
						<td>Harrison Butker</td>
						<td>B</td>
					</tr>
                    <tr>
						<td>14</td>
						<td>Buffalo Bills</td>
						<td>B</td>
					</tr>
				</table>
                <div  id='matt'>
					<img id="pic" src="https://ffavi.s3.amazonaws.com/Screen+Shot+2019-09-01+at+10.43.54+PM+(1).png" alt='matt' />
                    <score id='score'>
                        <grade>Overall:</grade>
					    <gradeint>82.5</gradeint>
                        <p>"Antonio is the best receiver in the game. He's the best I've played against, easily. His hands are strong. He's very smart, very crafty in the way he does things. His routes are crisp. He's just very good. He's a dog at the end of the day. He's the ultimate competitor- somebody who I love going against." -Jalen Ramsey
                        </p>
                    </score>
				</div>
                <table>
					<tr>
						<th className="round">Round</th>
						<th>Player</th>
						<th>Score</th>
					</tr>
					<tr>
						<td>1</td>
						<td>Julio Jones</td>
						<td>A-</td>
					</tr>
                    <tr>
						<td>2</td>
						<td>cantguardmike</td>
						<td>A</td>
					</tr>
                    <tr>
						<td>3</td>
						<td>Antonio Brown</td>
						<td>B</td>
					</tr>
                    <tr>
						<td>4</td>
						<td>Marlon Mack</td>
						<td>B+</td>
					</tr>
                    <tr>
						<td>5</td>
						<td>James White</td>
						<td>B+</td>
					</tr>
                    <tr>
						<td>6</td>
						<td>Kenyan Drake</td>
						<td>F</td>
					</tr>
                    <tr>
						<td>7</td>
						<td>Matt Breida</td>
						<td>C+</td>
					</tr>
                    <tr>
						<td>8</td>
						<td>Matt Ryan</td>
						<td>B+</td>
					</tr>
                    <tr>
						<td>9</td>
						<td>Kalen Ballage</td>
						<td>F</td>
					</tr>
                    <tr>
						<td>10</td>
						<td>Delanie Walker</td>
						<td>B+</td>
					</tr>
                    <tr>
						<td>11</td>
						<td>Desean jackson</td>
						<td>B-</td>
					</tr>
                    <tr>
						<td>12</td>
						<td>Tyrell Williams</td>
						<td>A-</td>
					</tr>
                    <tr>
						<td>13</td>
						<td>Jake Elliot</td>
						<td>C</td>
					</tr>
                    <tr>
						<td>14</td>
						<td>Eagles</td>
						<td>C</td>
					</tr>
				</table>

                <div  id='todd'>
					<img id='pic' src="https://ffavi.s3.amazonaws.com/Screen+Shot+2019-09-01+at+10.50.56+PM.png" alt='todd' />
                    <score id='score'>
                        <grade>Overall:</grade>
					    <gradeint>81.5</gradeint>
                        <p>Every single season, it is Corey Davis' goal to be the worst wide receiver in the league. Melvin Gordon isn't even passionate about football, he just wants a pay check.</p>
                    </score>
                </div>
                <table>
					<tr>
						<th className="round">Round</th>
						<th>Player</th>
						<th>Score</th>
					</tr>
					<tr>
						<td>1</td>
						<td>David Johnson</td>
						<td>B</td>
					</tr>
                    <tr>
						<td>2</td>
						<td>Juju Smith-Schuster</td>
						<td>B</td>
					</tr>
                    <tr>
						<td>3</td>
						<td>Patrick Mahomes</td>
						<td>A+</td>
					</tr>
                    <tr>
						<td>4</td>
						<td>Mark Ingram</td>
						<td>B+</td>
					</tr>
                    <tr>
						<td>5</td>
						<td>Melvin Gordon</td>
						<td>B+</td>
					</tr>
                    <tr>
						<td>6</td>
						<td>Evan Ingram</td>
						<td>C</td>
					</tr>
                    <tr>
						<td>7</td>
						<td>Alshon Jeffrey</td>
						<td>B-</td>
					</tr>
                    <tr>
						<td>8</td>
						<td>LeSean McCoy</td>
						<td>B</td>
					</tr>
                    <tr>
						<td>9</td>
						<td>Corey Davis</td>
						<td>F-</td>
					</tr>
                    <tr>
						<td>10</td>
						<td>Dion Lewis</td>
						<td>C</td>
					</tr>
                    <tr>
						<td>11</td>
						<td><a href='https://www.youtube.com/watch?v=zn_cHJQApjI' target='_blank'>Jacksonville Jaguars</a></td>
						<td>A+</td>
					</tr>
                    <tr>
						<td>12</td>
						<td>Justin Tucker</td>
						<td>A</td>
					</tr>
                    <tr>
						<td>13</td>
						<td>Marquise Brown</td>
						<td>C-</td>
					</tr>
                    <tr>
						<td>14</td>
						<td>CJ Anderson</td>
						<td>C-</td>
					</tr>
				</table>
                <div id='fitch'>
					<img id='pic' src="https://www.jennstrends.com/wp-content/uploads/2013/10/bad-profile-pic-2-768x768.jpeg" alt='fitch' />
                    <score id='score'>
                        <grade>Overall:</grade>
					    <gradeint>78.0</gradeint>
                        <p>David Njokewho? In the flex??? Derrius Guice needs to stop eating lollipops so he can win his job back.</p>
                    </score>
				</div>
                <table>
					<tr>
						<th className="round">Round</th>
						<th>Player</th>
						<th>Score</th>    
					</tr>
					<tr>
						<td>1</td>
						<td>Odell Beckham</td>
						<td>A</td>
					</tr>
                    <tr>
						<td>2</td>
						<td>Dalvin Cook</td>
						<td>D+</td>
					</tr>
                    <tr>
						<td>3</td>
						<td>George Kittle</td>
						<td>A</td>
					</tr>
                    <tr>
						<td>4</td>
						<td>Brandin Cooks</td>
						<td>C</td>
					</tr>
                    <tr>
						<td>5</td>
						<td>Derrius Guice</td>
						<td>B</td>
					</tr>
                    <tr>
						<td>6</td>
						<td>Aaron Rodgers</td>
						<td>A</td>
					</tr>
                    <tr>
						<td>7</td>
						<td>Sterling Shepard</td>
						<td>C</td>
					</tr>
                    <tr>
						<td>8</td>
						<td>David Njoku</td>
						<td>C</td>
					</tr>
                    <tr>
						<td>9</td>
						<td>Drew Brees</td>
						<td>B</td>
					</tr>
                    <tr>
						<td>10</td>
						<td>Jaylen Samuels</td>
						<td>A</td>
					</tr>
                    <tr>
						<td>11</td>
						<td>Vikings</td>
						<td>C+</td>
					</tr>
                    <tr>
						<td>12</td>
						<td>Malcolm Brown</td>
						<td>A</td>
					</tr>
                    <tr>
						<td>13</td>
						<td>Marquise Goodwin</td>
						<td>D</td>
					</tr>
                    <tr>
						<td>14</td>
						<td>Michael Badgley</td>
						<td>B</td>
					</tr>
				</table>
				<div  id='shook'>
					<img id='pic' src="https://ffavi.s3.amazonaws.com/Screen+Shot+2019-09-01+at+10.44.00+PM+(1).png" alt='shook' />
                    <score id='score'>
                        <grade>Overall:</grade>
					    <gradeint>76.5</gradeint>
                        <p>Tyler Lockett is a kick returner. He won't do anything this year. Kyler Murray is a rookie behind a terrible o-line. He will likely get injured. Keep scratching backs.</p>
                    </score>
				</div>
                <table>
					<tr>
						<th className="round">Round</th>
						<th>Player</th>
						<th>Score</th>
					</tr>
					<tr>
						<td>1</td>
						<td>Nick Chubb</td>
						<td>A</td>
					</tr>
                    <tr>
						<td>2</td>
						<td>Joe Mixon</td>
						<td>B+</td>
					</tr>
                    <tr>
						<td>3</td>
						<td>Amari Cooper</td>
						<td>F-</td>
					</tr>
                    <tr>
						<td>4</td>
						<td>Tyler Lockett</td>
						<td>D+</td>
					</tr>
                    <tr>
						<td>5</td>
						<td>Austin Ekeler</td>
						<td>B+</td>
					</tr>
                    <tr>
						<td>6</td>
						<td>Tyler Boyd</td>
						<td>B</td>
					</tr>
                    <tr>
						<td>7</td>
						<td>Vance McDonald</td>
						<td>B</td>
					</tr>
                    <tr>
						<td>8</td>
						<td>Chicago Bears</td>
						<td>B+</td>
					</tr>
                    <tr>
						<td>9</td>
						<td>Royce Freeman</td>
						<td>B</td>
					</tr>
                    <tr>
						<td>10</td>
						<td>Courtland Sutton</td>
						<td>C</td>
					</tr>
                    <tr>
						<td>11</td>
						<td>Kyler Murray</td>
						<td>C-</td>
					</tr>
                    <tr>
						<td>12</td>
						<td>Jamison Crowder</td>
						<td>D</td>
					</tr>
                    <tr>
						<td>13</td>
						<td>Will Lutz</td>
						<td>C</td>
					</tr>
                    <tr>
						<td>14</td>
						<td>Trey Burton</td>
						<td>D</td>
					</tr>
				</table>
                <div  id='hayden'>
					<img id ='pic' src="https://ffavi.s3.amazonaws.com/Screen+Shot+2019-09-01+at+10.46.40+PM.png" alt='hayden'/>
                    <score id='score'>
                        <grade>Overall:</grade>
					    <gradeint>75.0</gradeint>
                        <p>Le'Veon Bell wants 50 carries now? Where was this energy when he was on the steelers? Only about the money smh. Chris Godwin can actually catch the ball unlike mike evans.</p>
                    </score>
				</div>
                <table>
					<tr>
						<th className="round">Round</th>
						<th>Player</th>
						<th>Score</th>
					</tr>
					<tr>
						<td>1</td>
						<td>Le'Veon Bell</td>
						<td>A-</td>
					</tr>
                    <tr>
						<td>2</td>
						<td>Mike Evans</td>
						<td>B</td>
					</tr>
                    <tr>
						<td>3</td>
						<td>Sony Michel</td>
						<td>B+</td>
					</tr>
                    <tr>
						<td>4</td>
						<td>Zach Ertz</td>
						<td>B+</td>
					</tr>
                    <tr>
						<td>5</td>
						<td>Phillip Lindsay</td>
						<td>B+</td>
					</tr>
                    <tr>
						<td>6</td>
						<td>Mike Williams</td>
						<td>A-</td>
					</tr>
                    <tr>
						<td>7</td>
						<td>Allen Robinson</td>
						<td>D</td>
					</tr>
                    <tr>
						<td>8</td>
						<td>Carson Wentz</td>
						<td>C+</td>
					</tr>
                    <tr>
						<td>9</td>
						<td>Eric Ebron</td>
						<td>B-</td>
					</tr>
                    <tr>
						<td>10</td>
						<td>Ravens</td>
						<td>B</td>
					</tr>
                    <tr>
						<td>11</td>
						<td>James Washington</td>
						<td>A</td>
					</tr>
                    <tr>
						<td>12</td>
						<td>Justin Jackson</td>
						<td>A-</td>
					</tr>
                    <tr>
						<td>13</td>
						<td> Ka'imi Fairbairn</td>
						<td>C</td>
					</tr>
                    <tr>
						<td>14</td>
						<td>DK Metcalf</td>
						<td>B</td>
					</tr>
				</table>
				
                <div  id='dono'>
					<img id='pic'src="https://ffavi.s3.amazonaws.com/Screen+Shot+2019-09-01+at+10.49.21+PM.png" alt='dono' />
                    <score id='score'>
                        <grade>Overall:</grade>
					    <gradeint>73.0</gradeint>
                        <p>In the first round you gotta go with the guy that carries the team on his back. Chris Carson is not that guy. Edelman has never played for a team other than the patriots because if he did everyone would know that he was just a system player. Todd Gurley has that upside, smart to not let him fall.</p>
                    </score>
				</div>
                <table>
					<tr>
						<th className="round">Round</th>
						<th>Player</th>
						<th>Score</th>
					</tr>
					<tr>
						<td>1</td>
						<td>Chris Carson</td>
						<td>C+</td>
					</tr>
                    <tr>
						<td>2</td>
						<td>Todd Gurley</td>
						<td>A+</td>
					</tr>
                    <tr>
						<td>3</td>
						<td><a id='diggs' href='https://www.youtube.com/watch?v=5d-Smb2DfvM' target='_blank'>Stefon Diggs</a></td>
						<td>B+</td>
					</tr>
                    <tr>
						<td>4</td>
						<td>Julian Edelman</td>
						<td>B</td>
					</tr>
                    <tr>
						<td>5</td>
						<td>Tarik Cohen</td>
						<td>C-</td>
					</tr>
                    <tr>
						<td>6</td>
						<td>Dede Westbrook</td>
						<td>C</td>
					</tr>
                    <tr>
						<td>7</td>
						<td>Jordan Howard</td>
						<td>D+</td>
					</tr>
                    <tr>
						<td>8</td>
						<td>Emmanuel Sanders</td>
						<td>C+</td>
					</tr>
                    <tr>
						<td>9</td>
						<td>Austin Hooper</td>
						<td>C+</td>
					</tr>
                    <tr>
						<td>10</td>
						<td>Jared Goff</td>
						<td>A-</td>
					</tr>
                    <tr>
						<td>11</td>
						<td>Golden Tate</td>
						<td>B</td>
					</tr>
                    <tr>
						<td>12</td>
						<td>Malcolm Brown</td>
						<td>A</td>
					</tr>
                    <tr>
						<td>13</td>
						<td>Marquise Goodwin</td>
						<td>D</td>
					</tr>
                    <tr>
						<td>14</td>
						<td>Michael Badgley</td>
						<td>C</td>
					</tr>
				</table>

                <div id='kraick'>
					<img id='pic' src="https://ffavi.s3.amazonaws.com/Screen+Shot+2019-09-01+at+10.43.40+PM+(1).png" alt='kraick' />
                    <score id='score'>
                        <grade>Overall:</grade>
					    <gradeint>70.5</gradeint>
                        <p>DJ Moore sucks. Andrew Luck birthed TY Hilton. Without him he is nothing. Ronald Jones was described as "scared" by Tampa Bay's coaching staff. Deshaun Watson is a person of high moral character but his o-line sucks. What has Kerryon ever done or said? I hardly even know him. If Saquon gets hurt, your season is over.</p>
                    </score>
				</div>
                <table>
					<tr>
						<th className="round">Round</th>
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
						<td>B</td>
					</tr>
                    <tr>
						<td>4</td>
						<td>TY Hilton</td>
						<td>C-</td>
					</tr>
                    <tr>
						<td>5</td>
						<td><a href='https://www.youtube.com/watch?v=a7lQjHNRmZI' target='_blank'>Deshaun Watson</a></td>
						<td>A-</td>
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
						<td>B</td>
					</tr>
				</table>

                <div  id='troy'>
					<img id='pic' src="https://ffavi.s3.amazonaws.com/Screen+Shot+2019-09-01+at+10.48.10+PM.png" alt='troy'></img>
                    <score id='score'>
                        <grade>Overall:</grade>
					    <gradeint>49.0</gradeint>
                        <p>*Sigh* Christian McCaffrey....next pick: the third string rb for the miami dolphins a few seasons ago. Next pick: someone who is always injured. Next pic- nvmd.
                        </p>
                    </score>
				</div>
                <table>
					<tr>
						<th className="round">Round</th>
						<th>Player</th>
						<th>Score</th>
					</tr>
					<tr>
						<td>1</td>
						<td>Christian McCaffrey</td>
						<td>F</td>
					</tr>
                    <tr>
						<td>2</td>
						<td>Damien Williams</td>
						<td>F</td>
					</tr>
                    <tr>
						<td>3</td>
						<td>Keenan Allen</td>
						<td>B</td>
					</tr>
                    <tr>
						<td>4</td>
						<td>OJ Howard</td>
						<td>D+</td>
					</tr>
                    <tr>
						<td>5</td>
						<td>Miles Sanders</td>
						<td>B</td>
					</tr>
                    <tr>
						<td>6</td>
						<td>Jarvis Landry</td>
						<td>B-</td>
					</tr>
                    <tr>
						<td>7</td>
						<td>Robby Anderson</td>
						<td>C-</td>
					</tr>
                    <tr>
						<td>8</td>
						<td>Sammy Watkins</td>
						<td>C</td>
					</tr>
                    <tr>
						<td>9</td>
						<td>Donte Moncrief</td>
						<td>C-</td>
					</tr>
                    <tr>
						<td>10</td>
						<td>Jameis Winston</td>
						<td>A-</td>
					</tr>
                    <tr>
						<td>11</td>
						<td>Adrian Peterson</td>
						<td>C</td>
					</tr>
                    <tr>
						<td>12</td>
						<td>Giovani Bernard</td>
						<td>D</td>
					</tr>
                    <tr>
						<td>13</td>
						<td>Dallas Cowboys</td>
						<td>B+</td>
					</tr>
                    <tr>
						<td>14</td>
						<td>Jamaal Williams</td>
						<td>C</td>
					</tr>
				</table>
                


 
                
				{/* <table>
					<tr>
						<td className="descriptionText">dlfjsfsfkdsjflsjf difjslf fjdskf dkjdfkd d djdklf jalf</td>
					</tr>
				</table> */}
			</div>
		);
	}
}

export default Team;
