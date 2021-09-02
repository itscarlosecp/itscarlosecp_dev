interface NavbarLinkProps {
	href: string
	text: string
}

const NavbarLink = (props: NavbarLinkProps) => (
	<a
		href={props.href}
		target="_blank"
		rel="noopener noreferrer"
		className="font-medium"
	>
		{props.text}
	</a>
)

const Navbar = () => (
	<div className="sticky top-0 z-20 w-full py-2 md:py-6 bg-white">
		<div className="container px-4 mx-auto lg:max-w-4xl sm:flex justify-between">
			<a href="/" className="font-medium uppercase tracking-wider">
				Carlos Castillo
			</a>
			<div className="space-x-4">
				<NavbarLink href="https://github.com/itscarlosecp" text="Github" />
				<NavbarLink href="https://twitter.com/itscarlosecp" text="Twitter" />
			</div>
		</div>
	</div>
)

export default Navbar
