import React from 'react';

// function shuffleArray(array){
// 	let i = array.length - 1;
// 	for (; i > 0; i--) {
// 		const j = Math.floor(math.random() * (i + 1));
// 		const temp = array[i];
// 		array[i] = array[j];
// 		array[j] = temp;
// 	}
// 	return array;
// }

// function MetObjects({ metobjects}) {
// 	const shuffledMetObjets = shuffleArray(metobjects);
// 	return (
// 		<ul>
// 			{shuffledMetObjets.map((object, idx) => {
// 				return (
// 					<li key = {idx}>
// 						<img src ={object.image_url} alt="metobject url" />
// 					</li>
// 				);
// 			})}
// 		</ul>
// 	)
// }

// MetObjects.propTypes = {
// 	metobjects: React.PropTypes.array,
// };

const MetObjects = ({ metobjects }) => {
	const renderMetObjects = metobjects.map(metobject =>
		<p key={metobject.id}><img src ={metobject.image_url} alt="metobject url" /></p>
	)
	return (
		<div>
			{renderMetObjects}
		</div>
	)
	
}

export default MetObjects;