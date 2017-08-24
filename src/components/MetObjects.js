import React from 'react';

const MetObjects = ({ metobjects }) => {
	const renderMetObjects = (metobject =>
		<p key={metobject.id}><img src ={metobject.image_url} alt="metobject url" /></p>
	)
	return (
		<div>
			{renderMetObjects}
		</div>
	)
	
}

export default MetObjects;