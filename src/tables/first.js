import Locations from './locations';
import KillAmount from './killAmount';
import Use from './use';

const first = [
	{
		name: "Locations",
		table: Locations,
		phrase: 'You must start at ',
	},
	{
		name: "Kill",
		table: KillAmount,
		phrase: 'Kill at least ',
	},
	{
		name: "Use",
		table: Use,
		phrase: 'Only use ',
	},
];

export default first;