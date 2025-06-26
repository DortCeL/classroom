function App() {
	return (
		<div>
			{/* SECTION : TOP BAR */}
			<header className='fixed top-0 left-0 w-full h-16 bg-slate-300 flex items-center justify-between px-20 z-10'>
				<div id='logo' className='font-extrabold text-fontcolor text-3xl'>
					ClassRoom
				</div>
				<div className='w-1/2'>
					<input
						type='text'
						name='search'
						id='search'
						className='bg-white text-fontcolor shadow-sm px-7 py-2 rounded-full w-full'
						placeholder='Search for course or teacher'
					/>
				</div>
				<div>Logout</div>
			</header>

			{/* SECTION : SIDE BAR */}
			<aside className='fixed top-16 left-0 h-[calc(100vh-64px)] w-64 bg-red-300 shadow-lg'>
				<div className='p-5 text-white'>Sidebar</div>
			</aside>

			{/* MAIN CONTENT */}
			<main className='ml-64 mt-16 p-10'>
				<div>Main content goes here</div>
			</main>
		</div>
	);
}

export default App;
