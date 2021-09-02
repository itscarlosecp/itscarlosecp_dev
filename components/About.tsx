import Section from "@/components/Section"

const About = () => (
	<Section id="about">
		<div className="flex flex-col-reverse md:flex-row gap-8">
			<div>
				<h1 className="text-2xl sm:text-3xl lg:text-4xl">
					Hi there, I'm Carlos.
				</h1>
				<div className="mt-4 text-gray-800">
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing
						elit. Minima obcaecati eos atque ab officia voluptatem
						magni, consectetur laborum quos facere, consequuntur
						odio hic nostrum molestiae, facilis ut ex! Vel, earum.
						Unde ipsum nesciunt quibusdam sapiente dignissimos sunt,
						molestias, quidem facere doloremque. Doloremque
						perspiciatis omnis nostrum ex fugiat, neque similique
						porro libero. Sit.
					</p>
				</div>
			</div>
			<div className="my-auto">
				<div className="w-44 h-44 bg-blue-500 rounded-full"></div>
			</div>
		</div>
	</Section>
)

export default About
