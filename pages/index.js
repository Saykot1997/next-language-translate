import { useRouter } from 'next/router'
import Link from 'next/link'

const Home = () => {
	const { locale, locales, push } = useRouter()
	console.log(locale)

	const handleClick = l => () => {
		push(`/`, undefined, { locale: l })

		/* push('/about', undefined, { locale: l }) */

		/* Not recommeneded */
		/* push(`/${l}/about`) */

		/* Not recommeneded */
		/* push(`/${l}`) */
		/* push(`/${l}/about`) */
	}

	return (
		<div className=' bg-gray-100 h-screen w-full'>
			<h1 className=' text-center text-xl '>Curent Local: <span className='font-semibold '>{locale}</span> </h1>

			<div className=' text-center'>
				<h3 className=' mt-3 text-lg font-semibold '>With useRouter</h3>
				<div className=' mt-5'>
					<label className=' mr-3 font-semibold'>Choose your locale: </label>
					{locales.map(l => (
						<button className=' bg-white rounded shadow py-1 px-2 mr-2' key={l} onClick={handleClick(l)}>
							{l}
						</button>
					))}
				</div>
			</div>
			<div className=' text-center mt-5'>
				<h3 className=' mt-3 text-lg font-semibold '>With Link</h3>
				<div className=' mt-5'>
					<label className=' mr-3 font-semibold'>Choose your locale: </label>
					{locales.map(l => (
						<Link href={`/`} locale={l}>
							<button className=' bg-white rounded shadow py-1 px-2 mr-2' key={l} onClick={handleClick(l)}>
								{l}
							</button>
						</Link>
					))}
				</div>
			</div>
			<div className=' text-center mt-5'>
				<h3 className=' mt-3 text-lg font-semibold '>Go to about page</h3>
				<div className=' mt-5'>
					<label className=' mr-3 font-semibold'>Choose your locale: </label>
					{locales.map(l => (
						<Link href={`/about`} locale={l} className='bg-white rounded shadow py-1 px-2 mr-2'>
							{l}
						</Link>
					))}
				</div>
			</div>

		</div>
	)
}

export default Home
