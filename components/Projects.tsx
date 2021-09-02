import Section from "@/components/Section"

interface ProjectCardProps {
	img?: string
	href: string
	title: string
	description: string
}

const ProjectCard = (props: ProjectCardProps) => (
	<div className="group">
		<a href={props.href} target="_blank" rel="noopener noreferrer">
			{/* img */}
			<div className="w-full h-56 rounded-lg bg-blue-500"></div>
			<h3 className="mt-3 text-lg transition-colors duration-200 group-hover:text-blue-400">
				{props.title}
			</h3>
			<p className="mt-2 text-gray-800">{props.description}</p>
		</a>
	</div>
)

const Projects = () => (
	<Section id="projects">
		<div>
			<h2 className="text-2xl md:text-3xl font-bold">Projects</h2>
			<p className="mt-4 text-gray-500">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
				quibusdam quam! Ut recusandae in rem minima. Aperiam quod,
				tenetur a sequi nihil cum repellat praesentium. Iure vel at
				repellendus aut.
			</p>
		</div>
		<div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-10">
			<ProjectCard
				href="https://github.com/itscarlosecp/itscarlosecp.nvim"
				title="Neovim Configuration Files"
				description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
				quibusdam quam! Ut recusandae in rem minima. Aperiam quod"
			/>
			<ProjectCard
				href="https://github.com/itscarlosecp/.dotfiles"
				title="Development Environment Dotfiles"
				description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
				quibusdam quam! Ut recusandae in rem minima. Aperiam quod"
			/>
		</div>
	</Section>
)

export default Projects
