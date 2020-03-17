import React from 'react'
import ItemOptions from './ItemOptions'

import slugify from 'slugify'

function FeatureItem({
	feature,
	onUpdateFeature,
	options,
	selected
}) {
	const optionItems = options.map(item => {
		const itemHash = slugify(JSON.stringify(item))
		const checked = item.name === selected[feature].name

		return (
			<ItemOptions
				key={itemHash}
				itemHash={itemHash}
				item={item}
				feature={feature}
				checked={checked}
				onUpdateFeature={onUpdateFeature}
			/>
		)
	})

	return (
		<fieldset className="feature">
			<legend className="feature__name">
				<h3>{feature}</h3>
			</legend>
			{optionItems}
		</fieldset>
	)
}

FeatureItem.defaultProps = {
	feature: '',
	featureHash: '',
	options: [],
	selected: {}
}

export default FeatureItem;