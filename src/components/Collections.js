import React from 'react';

const Collections = ({ collections }) => {
	const renderCollections = collections.map(collection =>
		<p key={collection.id}>{collection.title}</p>
	)

	return (
		<div>
			{renderCollections}
		</div>
	)
}

export default Collections;