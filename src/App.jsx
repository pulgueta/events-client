const App = () => {
	return (
		<main className='h-dvh flex items-center justify-center bg-stone-800 flex-col gap-8'>
			<h1 className='text-3xl font-bold text-white tracking-tight md:text-5xl'>
				Event Registration
			</h1>
			<section className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 lg:gap-16'>
				<div className='bg-primary rounded p-4 text-white shadow'>
					<p>{"<FormComponent />"}</p>
				</div>
				<div className='bg-primary rounded p-4 text-white shadow'>
					<p>{"<EventsComponent />"}</p>
				</div>
			</section>
		</main>
	);
};

export default App;
