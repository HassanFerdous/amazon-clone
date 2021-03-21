import React, { useEffect, useState } from 'react';

import './custom-select.scss';

const CustomSelect = ({ options, ...otherProps }) => {
	const [defaultOption] = options;
	const [showOptions, setShowOptions] = useState(false);
	const [selectOption, setSelectOption] = useState('');

	useEffect(() => {
		const hideOption = () => {
			setShowOptions(false);
		};
		if (showOptions) {
			document.addEventListener('click', hideOption);
		}

		return () => document.removeEventListener('click', hideOption);
	}, [showOptions]);

	return (
		<div className="customSelect" onClick={() => setShowOptions(prev => !prev)}>
			<span className="customSelect__default-text">{selectOption ? selectOption : defaultOption}</span>
			{showOptions ? (
				<ul className="customSelect__option-list">
					{options.map((option, idx) => (
						<li
							onClick={() => setSelectOption(option)}
							key={idx}
							className="customSelect__option-list__item">
							{option}
						</li>
					))}
				</ul>
			) : null}
		</div>
	);
};

export default CustomSelect;
