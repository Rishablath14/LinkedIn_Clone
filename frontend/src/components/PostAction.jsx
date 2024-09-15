export default function PostAction({ icon, text, onClick }) {
	return (
		<button className='flex items-center' onClick={onClick}>
			<span className='mr-1'>{icon}</span>
			<span className='hidden md:inline'>{text}</span>
			<span className='inline md:hidden'>{text.substring(text.indexOf('('))}</span>
		</button>
	);
}
